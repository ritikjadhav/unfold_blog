import { z } from 'zod'

export const SignupInput = z.object({
    email: z.string({ required_error: 'Email is a must!' }).email({ message: 'That email looks funky!' }),
    name: z.string().optional(),
    password: z.string({ required_error: 'Password, please!' }).min(5, { message: "Password must be 5 or more characters long" }),
})

export const SigninInput = z.object({
    email: z.string({ required_error: 'Email is a must!' }).email({ message: 'That email looks funky!' }),
    password: z.string({ required_error: 'Password, please!' }).min(5, { message: "Password must be 5 or more characters long" }),
})

export const CreatePostInput = z.object({
    title: z.string({ required_error: 'Title it!' }),
    content: z.string({ required_error: 'Content needed!' }),
    published: z.boolean({
        required_error: 'Publish status needed!',
        invalid_type_error: 'True or false only!'
    }),
})

export const UpdatePostInput = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    published: z.boolean({ invalid_type_error: 'True or false only!' }).optional(),
})

export type SignupType = z.infer<typeof SignupInput>
export type SigninType = z.infer<typeof SigninInput>
export type CreatePostType = z.infer<typeof CreatePostInput>
export type UpdatePostType = z.infer<typeof UpdatePostInput>
