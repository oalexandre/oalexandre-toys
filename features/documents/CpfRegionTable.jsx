import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { CPF_REGIONS } from "../../lib/documents";

/** Tabela do nono dígito do CPF por região fiscal. */
const CpfRegionTable = () => (
  <TableContainer
    component={Box}
    sx={{ border: 1, borderColor: "divider", borderRadius: 2, bgcolor: "background.paper", mb: 2 }}
  >
    <Table size="small" aria-label="Nono dígito do CPF por região fiscal">
      <TableHead>
        <TableRow>
          <TableCell sx={{ fontWeight: 700 }}>Nono dígito</TableCell>
          <TableCell sx={{ fontWeight: 700 }}>Estados</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {CPF_REGIONS.map(region => (
          <TableRow key={region.digit}>
            <TableCell>{region.digit}</TableCell>
            <TableCell>{region.ufs.join(", ")}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default CpfRegionTable;
