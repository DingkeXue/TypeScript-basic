import { RequestHandler } from "express"
import { DataStore } from "../../data/data"

export const apiDeletePost:RequestHandler = (req, res) => {
	// 根据传入的 ID 值进行查找数据，如果找到则删除，没找到返回删除失败
	const postIndex = DataStore.posts.findIndex((item:any) => item.id == req.params.id);
	if(postIndex > -1) {
		DataStore.posts.splice(postIndex, 1);
		res.status(200).json({status: "success", message: "delete success"});
	} else {
		res.status(404).json({status: "failed", message: "connot find user"});
	}
}