/* 
  根据传入的ID值更新数据 
 */
import { RequestHandler } from "express"
import { DataStore } from "../../data/data"
import { NewPost } from "../../interface/createPost"

export const apiPutPost:RequestHandler = (req, res) => {
	const postIndex = DataStore.posts.findIndex((item:any) => item.id == req.params.id);
	if(postIndex > -1) {
		const oldData = DataStore.posts[postIndex];
		const body = req.body;
		const updatePost:NewPost = {
			id: req.params.id || oldData.id,
			name: body.name || oldData.name,
			gender: body.gender || oldData.gender,
			age: body.age ||oldData.age,
			img: oldData.img
		};
		DataStore.posts[postIndex] = updatePost;
		res.status(200).json({status: "success", message: "update success"});
	} else {
		res.status(404).json({status: "failed", message: "connot find user"});
	}
}