import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Ingresa un correo válido",
  }),
  password: z.string().min(8, {
    message: "Contraseña debe tener al menos 8 caracteres",
  }),
});

export const registerSchema = z
  .object({
    username: z
      .string({
        required_error: "Usuario es requerido",
      })
      .min(3, {
        message: "Usuario debe tener al menos 3 caracteres",
      }),
    email: z.string().email({
      message: "Ingresa un correo válido",
    }),
    password: z.string().min(8, {
      message: "Contraseña debe tener al menos 8 caracteres",
    }),
    confirmPassword: z.string().min(6, {
      message: "Contraseña debe tener al menos 8 caracteres",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
