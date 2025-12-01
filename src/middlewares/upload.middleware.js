import multer from 'multer';
import path from 'path';
// cb es callback
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/blogs/');
    },
    filename: (req, file, cb) => {
        // Cambiar el nombre al archivo para seguridad y que no
        const ex = path.extname(file.originalname);
        const uniqueName = Date.now() + '-' + Math.round(Math.round() * 1E9) + ext;
        cb(null, uniqueName);
    }
});


const fileFilter =(req, file, cb) =>{
    const allowedTypes = /jpeg|jpg|png/;
    const mime = allowedTypes.test(file.mimetypes);
    const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());

    if(mime && ext){
        return cb(null, true);

    }
    
    cb(new Error('Solo se permiten imágenes (jpeg, jpg, png)'));

}


export const upload = multer({storage,fileFilter});