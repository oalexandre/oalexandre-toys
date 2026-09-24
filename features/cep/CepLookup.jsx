import SearchIcon from "@mui/icons-material/SearchRounded";
import {
  Alert,
  Box,
  Button,
  Divider,
  Grid,
  MenuItem,
  Skeleton,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import CopyButton from "../../components/common/CopyButton";
import ResultBox from "../../components/tool/ResultBox";
import ToolPanel from "../../components/tool/ToolPanel";
import {
  buildAddressUrl,
  buildCepUrl,
  cepDigits,
  formatAddressLine,
  maskCep,
  MIN_ADDRESS_LENGTH,
  parseAddressResponse,
  parseCepResponse,
} from "../../lib/cep";
import { states } from "../../lib/ddd";
import { colors, monoFontFamily } from "../../theme";

const sortedStates = [...states].sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

const fetchJson = async (url, signal) => {
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
};

const isAbort = error => error?.name === "AbortError";

const ErrorAlert = ({ onRetry }) => (
  <Alert
    severity="error"
    action={
      <Button color="inherit" size="small" onClick={onRetry}>
        Tentar de novo
      </Button>
    }
  >
    Não foi possível consultar o ViaCEP agora. Verifique a conexão; um bloqueador de anúncios também
    pode estar barrando a consulta.
  </Alert>
);

/** Linha rótulo + valor do endereço encontrado. */
const AddressRow = ({ label, value }) => (
  <Box sx={{ display: "flex", flexWrap: "wrap", columnGap: 1.5, rowGap: 0.25, py: 0.5 }}>
    <Typography variant="body2" color="text.secondary" sx={{ minWidth: 88 }}>
      {label}
    </Typography>
    <Typography sx={{ fontWeight: 600, minWidth: 0, overflowWrap: "anywhere" }}>{value}</Typography>
  </Box>
);

/* ---------------------------------------------------------------------- */
/* Aba 1: buscar pelo CEP                                                  */
/* ---------------------------------------------------------------------- */

const ByCep = () => {
  const [value, setValue] = useState("");
  const [state, setState] = useState({ status: "idle", address: null });
  const [attempt, setAttempt] = useState(0);
  const [copies, setCopies] = useState(0);
  const digits = cepDigits(value);

  useEffect(() => {
    const url = buildCepUrl(digits);
    if (!url) {
      setState({ status: "idle", address: null });
      return undefined;
    }
    // Cancela a consulta anterior se o CEP mudar antes da resposta.
    const controller = new AbortController();
    setState({ status: "loading", address: null });
    fetchJson(url, controller.signal)
      .then(data => {
        const address = parseCepResponse(data);
        setState(address ? { status: "ready", address } : { status: "notfound", address: null });
      })
      .catch(error => {
        if (!isAbort(error)) setState({ status: "error", address: null });
      });
    return () => controller.abort();
  }, [digits, attempt]);

  const { status, address } = state;
  const line = formatAddressLine(address);

  return (
    <>
      <TextField
        fullWidth
        label="CEP"
        placeholder="00000-000"
        value={value}
        inputProps={{ inputMode: "numeric", maxLength: 9 }}
        autoComplete="postal-code"
        onChange={event => setValue(maskCep(event.target.value))}
        helperText={
          digits.length > 0 && digits.length < 8
            ? `Faltam ${8 - digits.length} dígito${8 - digits.length > 1 ? "s" : ""}.`
            : "A busca começa sozinha ao completar os 8 dígitos."
        }
        sx={{ mb: 2 }}
      />

      <Box aria-live="polite">
        {status === "error" && <ErrorAlert onRetry={() => setAttempt(n => n + 1)} />}

        {status === "notfound" && (
          <Alert severity="warning">
            CEP não encontrado. Confira os números; CEPs criados há pouco tempo podem ainda não
            estar na base.
          </Alert>
        )}

        {(status === "idle" || status === "loading" || status === "ready") && (
          <ResultBox
            label="Endereço"
            flashKey={copies}
            actions={
              status === "ready" ? (
                <CopyButton
                  value={line}
                  label="Copiar endereço"
                  size="large"
                  onCopied={() => setCopies(c => c + 1)}
                />
              ) : null
            }
          >
            {status === "idle" && (
              <Typography color="text.secondary">Digite um CEP para ver o endereço.</Typography>
            )}
            {status === "loading" && (
              <Box aria-label="Consultando">
                <Skeleton variant="text" width="80%" height={32} />
                <Skeleton variant="text" width="55%" height={32} />
                <Skeleton variant="text" width="65%" height={32} />
              </Box>
            )}
            {status === "ready" && (
              <>
                {address.street && (
                  <AddressRow
                    label="Logradouro"
                    value={[address.street, address.complement].filter(Boolean).join(", ")}
                  />
                )}
                {address.district && <AddressRow label="Bairro" value={address.district} />}
                <AddressRow label="Cidade/UF" value={`${address.city} - ${address.uf}`} />
                <AddressRow label="CEP" value={address.cep} />
                {address.isGeneral && (
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Este é o CEP geral de {address.city}: a cidade usa um único CEP para todos os
                    endereços, por isso não há rua nem bairro. Use-o com o seu endereço completo.
                  </Typography>
                )}
              </>
            )}
          </ResultBox>
        )}

        {status === "ready" && (address.ddd || address.ibge) && (
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 0.5, sm: 3 }}
            sx={{ mt: 1.5 }}
          >
            {address.ddd && (
              <Typography variant="body2" color="text.secondary">
                DDD {address.ddd} ·{" "}
                <Link
                  href={`/ddd/${address.uf.toLowerCase()}`}
                  style={{ color: colors.accent, fontWeight: 600 }}
                >
                  ver cidades do DDD
                </Link>
              </Typography>
            )}
            {address.ibge && (
              <Typography variant="body2" color="text.secondary">
                Código IBGE do município: {address.ibge}
              </Typography>
            )}
          </Stack>
        )}
      </Box>
    </>
  );
};

/* ---------------------------------------------------------------------- */
/* Aba 2: descobrir o CEP pelo endereço                                    */
/* ---------------------------------------------------------------------- */

const ByAddress = () => {
  const [form, setForm] = useState({ uf: "", city: "", street: "" });
  const [touched, setTouched] = useState(false);
  const [state, setState] = useState({ status: "idle", results: [] });
  const controllerRef = useRef(null);

  // Cancela a consulta em andamento ao sair da aba.
  useEffect(() => () => controllerRef.current?.abort(), []);

  const url = buildAddressUrl(form);
  const cityShort = form.city.trim().length < MIN_ADDRESS_LENGTH;
  const streetShort = form.street.trim().length < MIN_ADDRESS_LENGTH;

  const setField = name => event => {
    setForm(prev => ({ ...prev, [name]: event.target.value }));
    // Dados mudaram: a resposta que estava a caminho já não vale.
    if (controllerRef.current) {
      controllerRef.current.abort();
      controllerRef.current = null;
      setState(prev => (prev.status === "loading" ? { status: "idle", results: [] } : prev));
    }
  };

  const search = async () => {
    setTouched(true);
    if (!url) return;
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;
    setState({ status: "loading", results: [] });
    try {
      const results = parseAddressResponse(await fetchJson(url, controller.signal));
      setState({ status: results.length ? "ready" : "empty", results });
    } catch (error) {
      if (!isAbort(error)) setState({ status: "error", results: [] });
    } finally {
      if (controllerRef.current === controller) controllerRef.current = null;
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    search();
  };

  const { status, results } = state;

  return (
    <>
      <Box component="form" onSubmit={onSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              select
              fullWidth
              label="Estado (UF)"
              value={form.uf}
              onChange={setField("uf")}
              error={touched && !form.uf}
              helperText={touched && !form.uf ? "Escolha o estado" : " "}
            >
              {sortedStates.map(item => (
                <MenuItem key={item.uf} value={item.uf}>
                  {item.uf} · {item.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              label="Cidade"
              placeholder="São Paulo"
              value={form.city}
              onChange={setField("city")}
              autoComplete="address-level2"
              error={touched && cityShort}
              helperText={touched && cityShort ? "Digite ao menos 3 letras" : " "}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Rua, avenida ou praça"
              placeholder="Paulista"
              value={form.street}
              onChange={setField("street")}
              autoComplete="off"
              error={touched && streetShort}
              helperText={
                touched && streetShort
                  ? "Digite ao menos 3 letras do nome"
                  : "Parte do nome já basta. Não precisa escrever Rua ou Avenida."
              }
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          variant="contained"
          size="large"
          startIcon={<SearchIcon />}
          disabled={status === "loading"}
          sx={{ mt: 2, mb: 3, width: { xs: "100%", sm: "auto" } }}
        >
          Buscar CEP
        </Button>
      </Box>

      <Box aria-live="polite">
        {status === "error" && <ErrorAlert onRetry={search} />}

        {status === "empty" && (
          <Alert severity="warning">
            Nenhum endereço encontrado. Tente só parte do nome da rua, sem Rua ou Avenida, e confira
            o nome da cidade.
          </Alert>
        )}

        {status === "loading" && (
          <Stack spacing={1}>
            {[0, 1, 2].map(key => (
              <Skeleton key={key} variant="rounded" height={64} />
            ))}
          </Stack>
        )}

        {status === "ready" && (
          <>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {results.length === 1
                ? "1 endereço encontrado."
                : `${results.length} endereços encontrados.`}
              {results.length >= 50 &&
                " O ViaCEP mostra no máximo 50; digite mais do nome para refinar."}
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyle: "none",
                m: 0,
                p: 0,
                border: 1,
                borderColor: colors.line,
                borderRadius: "14px",
                overflow: "hidden",
              }}
            >
              {results.map((item, index) => (
                <Box component="li" key={`${item.cep}-${index}`}>
                  {index > 0 && <Divider component="div" />}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1,
                      px: { xs: 1.5, sm: 2 },
                      py: 1.25,
                    }}
                  >
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        sx={{
                          fontFamily: monoFontFamily,
                          fontWeight: 600,
                          color: "primary.main",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {item.cep}
                      </Typography>
                      <Typography sx={{ fontWeight: 500, overflowWrap: "anywhere" }}>
                        {item.street || "Sem logradouro"}
                        {item.complement && (
                          <Box component="span" sx={{ color: "text.secondary", fontWeight: 400 }}>
                            {" "}
                            · {item.complement}
                          </Box>
                        )}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ overflowWrap: "anywhere" }}
                      >
                        {[item.unit, item.district, `${item.city} - ${item.uf}`]
                          .filter(Boolean)
                          .join(" · ")}
                      </Typography>
                    </Box>
                    <CopyButton value={item.cep} label={`Copiar CEP ${item.cep}`} iconOnly />
                  </Box>
                </Box>
              ))}
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

/* ---------------------------------------------------------------------- */

const CepLookup = () => {
  const [mode, setMode] = useState("cep");

  return (
    <ToolPanel>
      <ToggleButtonGroup
        exclusive
        size="small"
        value={mode}
        onChange={(_, next) => next && setMode(next)}
        aria-label="Tipo de busca"
        sx={{
          mb: 2.5,
          width: { xs: "100%", sm: "auto" },
          "& > *": { flex: { xs: 1, sm: "none" } },
        }}
      >
        <ToggleButton value="cep">
          <Box component="span" sx={{ display: { xs: "inline", sm: "none" } }}>
            Pelo CEP
          </Box>
          <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
            Buscar pelo CEP
          </Box>
        </ToggleButton>
        <ToggleButton value="endereco">
          <Box component="span" sx={{ display: { xs: "inline", sm: "none" } }}>
            Pelo endereço
          </Box>
          <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
            Descobrir o CEP pelo endereço
          </Box>
        </ToggleButton>
      </ToggleButtonGroup>

      {mode === "cep" ? <ByCep /> : <ByAddress />}

      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        O CEP ou endereço digitado é enviado ao ViaCEP para a consulta. Nada fica guardado aqui.
      </Typography>
    </ToolPanel>
  );
};

export default CepLookup;
