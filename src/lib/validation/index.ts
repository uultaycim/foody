import { z } from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, {message: 'short name'}),
    username: z.string().min(2, {message: 'short username'}),
    email: z.string().email(),
    password: z.string().min(8, {message: 'password must contain at least 8 symbols'}),

  })

  export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, {message: 'password must contain at least 8 symbols'}),

  })
  export const PostValidation = z.object({
    caption: z.string().min(5).max(2200),
    file: z.custom<File[]>(),
    location: z.string().min(2).max(100),
    tags:z.string()
  })

