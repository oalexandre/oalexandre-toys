import { secureRandomInt } from "./random";

/** Mesmo alfabeto de django.core.management.utils.get_random_secret_key. */
export const DJANGO_CHARS = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)";
export const DJANGO_LENGTH = 50;

export const generateDjangoSecret = (length = DJANGO_LENGTH) =>
  Array.from({ length }, () => DJANGO_CHARS[secureRandomInt(DJANGO_CHARS.length)]).join("");
