/* 
 该文件主要目的是将 server 文件的回调函数提出来处理 
 */

import { DataStore } from "../../data/data";
import { RequestHandler } from "express";
import { PostsSummary } from "../../model/shared/postsSummary"

export const apiGetPosts:RequestHandler = (req, res) =>{
	// 使用 PostsSummary 类确保输出的数据是符合要求的
	res.json(DataStore.posts.map((item:any) => new PostsSummary(item)));
};