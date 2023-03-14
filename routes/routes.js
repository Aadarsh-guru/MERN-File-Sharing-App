import express from "express";
import { downloadImage, uploadImage } from "../controller/controller.js";
import upload from "../utils/upload.js";
const route = express.Router()

route.post('/upload', upload.single('file'), uploadImage);
route.get('/file/:fileId', downloadImage)

export default route