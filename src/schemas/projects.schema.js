import {z} from 'zod';

export const createProjectSchema = z.object({
    name: z.string().min(3, {message: 'El nombre debe tener al menos 3 caracteres'}),
    description: z.string().min(10, {message: 'La descripcion debe tener al menos 10 caracteres'}),
    start_date: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: 'La fecha de inicio debe ser una fecha valida'
    }),
    end_date: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: 'La fecha de fin debe ser una fecha valida'
    }),

});