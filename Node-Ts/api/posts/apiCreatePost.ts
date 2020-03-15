import { DataStore } from "../../data/data"
import { RequestHandler } from "express"
import { NewPost } from "../../interface/createPost"
/* 使用 uuid 插件来自动生成 id */
import { v4 as uuidv4 } from 'uuid'

export const apiCreatePost:RequestHandler = (req, res) => {
	const newPost:NewPost = {
		id: uuidv4(),
		name: req.body.name,
		gender: req.body.gender,
		age: req.body.age
	};
	DataStore.posts.push(newPost);
	res.send("ok");
}