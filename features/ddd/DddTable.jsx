import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Link from "next/link";

import { states } from "../../lib/ddd";

/** Tabela completa de DDD por estado, ordenada por nome. */
const DddTable = () => (
  <TableContainer
    component={Box}
    sx={{ border: 1, borderColor: "divider", borderRadius: 2, bgcolor: "background.paper", mb: 2 }}
  >
    <Table size="small" aria-label="DDDs por estado">
      <TableHead>
        <TableRow>
          <TableCell sx={{ fontWeight: 700 }}>Estado</TableCell>
          <TableCell sx={{ fontWeight: 700 }}>Região</TableCell>
          <TableCell sx={{ fontWeight: 700 }}>DDDs</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {[...states]
          .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"))
          .map(state => (
            <TableRow key={state.uf}>
              <TableCell>
                <Box
                  component={Link}
                  href={`/ddd/${state.uf.toLowerCase()}`}
                  sx={{
                    color: "primary.main",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {state.name} ({state.uf})
                </Box>
              </TableCell>
              <TableCell>{state.region}</TableCell>
              <TableCell>{state.ddds.join(", ")}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default DddTable;
