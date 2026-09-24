import { keyframes } from "@emotion/react";
import { Box, Stack } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { useEffect, useRef, useState } from "react";

import { colors } from "../../theme";

// Tempo até o primeiro resultado travar e intervalo entre os seguintes.
const FIRST_LOCK_MS = 1400;
const MAX_STAGGER_MS = 550;
const TOTAL_STAGGER_MS = 2200;
// A troca de itens começa rápida e desacelera, como uma roleta parando.
const FIRST_TICK_MS = 45;
const MAX_TICK_MS = 190;
const TICK_GROWTH = 1.09;

const pop = keyframes`
  0% { transform: scale(0.92); }
  55% { transform: scale(1.06); }
  100% { transform: scale(1); }
`;

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Revelação animada de um sorteio. Cada posição mostra itens aleatórios em
 * sequência cada vez mais lenta e trava no resultado, uma depois da outra.
 *
 * - `results`: resultado final, já sorteado (strings).
 * - `randomItem`: função que devolve um item qualquer para a animação.
 * - `runId`: muda a cada sorteio para reiniciar a animação.
 * - `animate`: false mostra o resultado direto (listas grandes).
 * - `variant`: "list" (nomes com posição) ou "chips" (números).
 * - `onDone`: chamado quando tudo está revelado.
 *
 * Com "reduzir movimento" ativo no sistema, o resultado aparece sem animação.
 * Leitores de tela recebem só o resultado final, por uma região aria-live.
 */
const DrawReveal = ({ results, randomItem, runId, animate = true, variant = "list", onDone }) => {
  const [slots, setSlots] = useState([]);
  const [finished, setFinished] = useState(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    if (!results.length) {
      setSlots([]);
      setFinished(false);
      return undefined;
    }

    const finish = () => {
      setSlots(results.map(text => ({ text, done: true })));
      setFinished(true);
      onDoneRef.current?.();
    };

    if (!animate || prefersReducedMotion()) {
      finish();
      return undefined;
    }

    setFinished(false);
    const stagger = Math.min(MAX_STAGGER_MS, TOTAL_STAGGER_MS / results.length);
    const lockAt = results.map((_, index) => FIRST_LOCK_MS + index * stagger);
    const start = performance.now();
    let delay = FIRST_TICK_MS;
    let timer;

    const tick = () => {
      const elapsed = performance.now() - start;
      if (elapsed >= lockAt[lockAt.length - 1]) {
        finish();
        return;
      }
      setSlots(
        results.map((text, index) =>
          elapsed >= lockAt[index] ? { text, done: true } : { text: randomItem(), done: false }
        )
      );
      delay = Math.min(delay * TICK_GROWTH, MAX_TICK_MS);
      timer = setTimeout(tick, delay);
    };

    tick();
    return () => clearTimeout(timer);
    // runId reinicia a animação; results e randomItem mudam junto com ele.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runId]);

  const summary =
    variant === "list"
      ? results.map((text, index) => `${index + 1}º: ${text}`).join("; ")
      : results.join(", ");

  return (
    <>
      <Box sx={visuallyHidden} aria-live="polite">
        {finished ? `Resultado do sorteio: ${summary}.` : ""}
      </Box>
      <Box aria-hidden="true">
        {variant === "list" ? (
          <Stack spacing={1}>
            {slots.map((slot, index) => (
              <Box
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  minHeight: 56,
                  px: 2,
                  py: 1,
                  borderRadius: "12px",
                  border: 1,
                  borderColor: slot.done ? colors.accentTintStrong : "transparent",
                  bgcolor: slot.done ? "background.paper" : "rgba(255,255,255,0.55)",
                  animation: slot.done ? `${pop} 320ms cubic-bezier(0.16, 1, 0.3, 1)` : "none",
                  transition: "background-color 200ms, border-color 200ms",
                }}
              >
                {slots.length > 1 && (
                  <Box
                    component="span"
                    sx={{
                      flexShrink: 0,
                      minWidth: 32,
                      fontSize: "0.9375rem",
                      fontWeight: 700,
                      color: slot.done ? "primary.main" : "text.disabled",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {index + 1}º
                  </Box>
                )}
                <Box
                  component="span"
                  sx={{
                    minWidth: 0,
                    fontSize: { xs: "1.25rem", sm: "1.5rem" },
                    fontWeight: 700,
                    lineHeight: 1.3,
                    overflowWrap: "anywhere",
                    color: slot.done ? "text.primary" : "text.secondary",
                    opacity: slot.done ? 1 : 0.75,
                  }}
                >
                  {slot.text}
                </Box>
              </Box>
            ))}
          </Stack>
        ) : (
          <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1}>
            {slots.map((slot, index) => (
              <Box
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 56,
                  height: 44,
                  px: 1.5,
                  borderRadius: 2,
                  border: 1,
                  borderColor: slot.done ? colors.accentTintStrong : "transparent",
                  bgcolor: slot.done ? "background.paper" : "rgba(255,255,255,0.55)",
                  color: slot.done ? "primary.main" : "text.secondary",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  fontVariantNumeric: "tabular-nums",
                  animation: slot.done ? `${pop} 320ms cubic-bezier(0.16, 1, 0.3, 1)` : "none",
                }}
              >
                {slot.text}
              </Box>
            ))}
          </Stack>
        )}
      </Box>
    </>
  );
};

export default DrawReveal;
