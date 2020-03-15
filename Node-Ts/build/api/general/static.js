"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
/* 使用 uuid 插件来自动生成 文件名 */
const uuid_1 = require("uuid");
function getFileUploader(env) {
    switch (env) {
        case 'development':
            const fileID = uuid_1.v4();
            const multerStorage = multer_1.default.diskStorage({
                destination: function (req, file, cb) {
                    cb(null, path_1.default.resolve('./', 'pubilc', 'img'));
                },
                filename: function (req, file, cb) {
                    cb(null, fileID + path_1.default.extname(file.filename));
                }
            });
            return multer_1.default({ storage: multerStorage }).single("file");
        case 'production':
            return (req, res, next) => next();
        default:
            return (req, res, next) => next();
    }
}
exports.getFileUploader = getFileUploader;
