import express from "express";

const app = express();

// routes
app.get("/", (req, res, next) => {
	res.send("node is working...");
})

app.listen(process.env.PORT || 8088, () => {
	console.log("正在监听 8088端口");
})