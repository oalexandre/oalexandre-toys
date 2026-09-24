import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";

import ToolPanel from "../../components/tool/ToolPanel";

import NamePicker from "./NamePicker";
import NumberPicker from "./NumberPicker";

const MODES = { numeros: "Números", nomes: "Nomes" };

/**
 * Sorteador com dois modos. O modo acompanha o hash da URL (#nomes, #numeros)
 * para que um link já abra no sorteio de nomes.
 */
const RandomPicker = () => {
  const [mode, setMode] = useState("numeros");

  useEffect(() => {
    const fromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (MODES[hash]) setMode(hash);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const change = (_, next) => {
    if (!next) return;
    setMode(next);
    window.history.replaceState(null, "", `#${next}`);
  };

  return (
    <ToolPanel>
      <ToggleButtonGroup
        exclusive
        size="small"
        value={mode}
        onChange={change}
        aria-label="O que sortear"
        sx={{
          mb: 2.5,
          width: { xs: "100%", sm: "auto" },
          "& > *": { flex: { xs: 1, sm: "none" } },
        }}
      >
        {Object.entries(MODES).map(([value, label]) => (
          <ToggleButton key={value} value={value} sx={{ px: 3 }}>
            {label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      {mode === "nomes" ? <NamePicker /> : <NumberPicker />}
    </ToolPanel>
  );
};

export default RandomPicker;
