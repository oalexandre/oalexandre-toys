/**
 * Gera uma SECRET_KEY para Django seguindo o padrão oficial.
 * Usa crypto.getRandomValues() para geração criptograficamente segura.
 *
 * Caracteres: abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)
 * Tamanho padrão: 50 caracteres (conforme Django)
 */

const DJANGO_CHARS = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)";
const DEFAULT_LENGTH = 50;

/**
 * Gera um número inteiro aleatório seguro entre 0 e max-1
 */
const getSecureRandomInt = (max) => {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return array[0] % max;
};

/**
 * Gera uma SECRET_KEY para Django
 * @param {number} length - Tamanho da chave (padrão: 50)
 * @returns {string} - SECRET_KEY gerada
 */
export const generateDjangoSecret = (length = DEFAULT_LENGTH) => {
  let secret = "";
  for (let i = 0; i < length; i++) {
    secret += DJANGO_CHARS[getSecureRandomInt(DJANGO_CHARS.length)];
  }
  return secret;
};

export default generateDjangoSecret;
