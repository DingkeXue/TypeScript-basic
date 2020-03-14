/* 
 该文件主要目的是将 server 文件的回调函数提出来处理 
 */

import { DataStore } from "../../data/data";
import { RequestHandler } from "express";

export const apiGetPosts:RequestHandler = (req, res) =>{
	res.json(DataStore.posts);
};

export const apiGetPostsDetail:RequestHandler = (req, res) => {
	let id = req.params.id;
	DataStore.posts.forEach((item:any) => {
		if(item.id == id) {
			res.json(item);
		}
	})
}