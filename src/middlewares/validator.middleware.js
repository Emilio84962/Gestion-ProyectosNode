import {z} from 'zod';
// Next es para darle paso a una siguiente funcion middleware o ruta
// SCHEMA es la estructura que vamos a validar
export const validateSchema = (schema) => async (req, res, next) =>{
    try {
        // Proceso de validacion
        if(!req.body) return res.status(400).json({
            message: "No se proporcionaron datos para validar",
            error: []
        });

        const result = await schema.parseAsync(req.body);
        
        req.body = result;

        next();


    } catch (error) {
        if(error instanceof z.ZodError){
            error.issues;
            return res.status(400).json({
                message: "Verifique los errores de validacion",
                error: error.issues
            });
        } 
        return res.status(500).json({
            message: "Ocurrio un error, intente nuevamente mas tarde",
            error: error.message
        });
    }
}