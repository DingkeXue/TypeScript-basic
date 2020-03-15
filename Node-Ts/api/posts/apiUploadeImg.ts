/* 
  根据传入的ID值上传图片
 */
import { RequestHandler } from "express"
import { DataStore } from "../../data/data"
import { NewPost } from "../../interface/createPost"
import { getFileUploader } from "../../api/general/static"


export const apiUploadeImg:RequestHandler = (req, res) => {
	const postIndex = DataStore.posts.findIndex((item:any) => item.id == req.params.id);
	if(postIndex > -1) {
		// 如果该用户存在，则上传对应图片
		const upload = getFileUploader(req.app.get('env'));
		upload(req, res, err => {
			if(err) {
				console.log(err);
				res.status(500).json({status: 'error', message: 'upload file failed'});
			} else {
				// 上传成功则更新数据
				//console.log(req.file.filename);
				DataStore.posts[postIndex].img.push(req.file.filename);
				res.status(200).json({status: "success", message: "update success"});
			}
		})
	} else {
		res.status(404).json({status: "failed", message: "connot find user"});
	}
}