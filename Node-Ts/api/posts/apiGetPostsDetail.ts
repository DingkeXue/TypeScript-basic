/* 
 该文件主要目的是将 server 文件的回调函数提出来处理 
 */
import { DataStore } from "../../data/data";
import { RequestHandler } from "express";
import { PostDetail } from "../../model/shared/postDetail"


export const apiGetPostsDetail:RequestHandler = (req, res) => {
	let id = req.params.id;
	let selectedPost = DataStore.posts.find((item:any) => item.id == id);
	let selectedTodos = DataStore.todo.filter((item:any) => item.id != id);
	if(selectedPost) {
		let imgURLs:string[] = selectedPost.img.map((item:string) => {
			// 通过 req.app.get('env') 获取 当前运行环境
			if(req.app.get('env') == 'development') { // 开发环境
				return "http://localhost:8088/static/" + item;
			} else { // 生产环境
				return "http://cdn.cn/static/" + item;
			}
		});
		res.json(new PostDetail(selectedPost, selectedTodos, imgURLs));
	} else {
		res.status(404).json({status: "failed", message: "not found post"});
	}
}