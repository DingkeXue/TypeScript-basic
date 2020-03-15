/* 
 该项目是腾讯课堂上米修在线的Node+Ts实战后端课程 
 */
import express from "express";
import bodyParser from "body-parser"
import path from "path"
import multer from "multer"
// 引入 RequestHandler
import { apiGetPosts } from "./api/posts/apiGetPosts";
import { apiGetPostsDetail } from "./api/posts/apiGetPostsDetail"
import { apiCreatePost } from "./api/posts/apiCreatePost"
import { apiDeletePost } from "./api/posts/apiDeletePost"
import { apiPutPost } from "./api/posts/apiPutPost"
import { apiUploadeImg } from "./api/posts/apiUploadeImg"
const app = express();

// 使用中间件
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// 配置静态文件指向的路径
app.use("/static", express.static(path.resolve("./", "public", "img")))


// routes
app.get("/posts", apiGetPosts);

app.get("/posts/:id", apiGetPostsDetail)

app.post("/posts", apiCreatePost)
// 上传图片
app.post("/posts/:id/img", apiUploadeImg)


app.delete("/posts/:id", apiDeletePost)

app.put("/posts/:id", apiPutPost)


app.listen(process.env.PORT || 8088, () => {
	console.log("正在监听 8088端口");
})