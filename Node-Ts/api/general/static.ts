/* 
 改文件用来上传图片 
 */
import { RequestHandler } from "express"
import multer from "multer"
import path from "path"
/* 使用 uuid 插件来自动生成 文件名 */
import { v4 as uuidv4 } from 'uuid'

export function getFileUploader(env: string):RequestHandler {
	switch(env) {
		case 'development':
			const fileID = uuidv4();
			const multerStorage = multer.diskStorage({
				  destination: function (req, file, cb) {
					cb(null, path.resolve('./', 'pubilc', 'img'))
				  },
				  filename: function (req, file, cb) {
					cb(null, fileID + path.extname(file.filename));
				  }
				});
		
			return multer({storage: multerStorage}).single("file");
		case 'production':
			return (req, res, next) => next();
		default:
			return (req, res, next) => next();
	}
}