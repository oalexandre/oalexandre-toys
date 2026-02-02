import { useState, useCallback, useEffect } from "react";
import { generateDjangoSecret } from "./generateDjangoSecret";

/**
 * Custom hook para gerenciar a geração de Django SECRET_KEY
 */
export const useDjangoSecretKey = () => {
  const [secretKey, setSecretKey] = useState("");
  const [copied, setCopied] = useState(false);

  // Gera uma nova chave
  const generateNewKey = useCallback(() => {
    setSecretKey(generateDjangoSecret());
    setCopied(false);
  }, []);

  // Copia a chave para o clipboard
  const copyToClipboard = useCallback(async () => {
    if (secretKey) {
      try {
        await navigator.clipboard.writeText(secretKey);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Erro ao copiar:", err);
      }
    }
  }, [secretKey]);

  // Gera uma chave inicial ao montar o componente
  useEffect(() => {
    generateNewKey();
  }, [generateNewKey]);

  return {
    secretKey,
    copied,
    generateNewKey,
    copyToClipboard,
  };
};

export default useDjangoSecretKey;
