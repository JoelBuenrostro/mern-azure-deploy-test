import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "Usuario es requerido",
  }),
  email: z
    .string({
      required_error: "Correo es requerido",
    })
    .email({
      message: "Coreo invalido",
    }),
  password: z
    .string({
      required_error: "Contraseña es requerida",
    })
    .min(8, {
      message: "Contraseña debe tener al menos 8 caracteres",
    }),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
