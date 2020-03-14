/* 
 该项目是腾讯课堂上米修在线的Node+Ts实战后端课程 
 */
import express from "express";
// 引入 RequestHandler
import { apiGetPosts, apiGetPostsDetail } from "./api/posts/apiGetPosts";

const app = express();


// routes
app.get("/posts", apiGetPosts);

app.get("/posts/:id", apiGetPostsDetail)

app.listen(process.env.PORT || 8088, () => {
	console.log("正在监听 8088端口");
})