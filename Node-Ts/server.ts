/* 
 该项目是腾讯课堂上米修在线的Node+Ts实战后端课程 
 */
import express from "express";
import bodyParser from "body-parser"
// 引入 RequestHandler
import { apiGetPosts } from "./api/posts/apiGetPosts";
import { apiGetPostsDetail } from "./api/posts/apiGetPostsDetail"
import { apiCreatePost } from "./api/posts/apiCreatePost"
import { apiDeletePost } from "./api/posts/apiDeletePost"
import { apiPutPost } from "./api/posts/apiPutPost"
const app = express();

// 使用中间件
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// routes
app.get("/posts", apiGetPosts);

app.get("/posts/:id", apiGetPostsDetail)

app.post("/posts", apiCreatePost)

app.delete("/posts/:id", apiDeletePost)

app.put("/posts/:id", apiPutPost)

app.listen(process.env.PORT || 8088, () => {
	console.log("正在监听 8088端口");
})