import multer from "multer";
import { UPLOADS_PATH } from "../config/app.config";

const storage = multer.diskStorage({
     destination: (req, file, callBack) => {
          callBack(null, UPLOADS_PATH);
     },
     filename: (req, file, callBack) => {
          const fileName = decodeURIComponent(escape(file.originalname));
          callBack(null, file.fieldname + "-" + Date.now() + "-" + fileName);
     },
});

const upload = multer({
     storage: storage,
});

export default upload;
