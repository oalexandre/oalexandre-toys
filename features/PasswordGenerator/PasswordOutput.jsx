import { useGlobalState } from "../../hooks/useContext";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard";

import { FormGroup, IconButton, InputAdornment, TextField } from "@mui/material";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Password, PasswordSharp } from "@mui/icons-material";

const PasswordOutput = ({ password, showPassword, handleShowPassword }) => {
  const { addToast } = useGlobalState();
  const [copy] = useCopyToClipboard();

  const handleCopy = async () => {
    const copySuccess = await copy(password);

    if (copySuccess) {
      addToast("Copiado para a área de trabalho!");
    }
  };

  return (
    <FormGroup>
      <TextField
        focused
        variant="outlined"
        label="Password"
        // type={showPassword ? 'text' : 'password'}
        value={password}
        autoComplete="none"
        sx={{
          maxWidth: "100%",
          width: 500,
          marginBottom: 5,
          "& input": {
            fontFamily: '"Roboto Mono", monospace',
            letterSpacing: {
              xs: 2,
              sm: 3,
            },
            fontSize: 18,
          },
        }}
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="copiar valor para a área de transferência"
                onClick={handleCopy}
                edge="end"
              >
                <ContentCopyIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </FormGroup>
  );
};

export default PasswordOutput;
