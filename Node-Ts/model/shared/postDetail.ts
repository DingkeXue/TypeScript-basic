import { PostsSummary } from "./postsSummary"
import { TodoSummary } from "./todoSummary"

export class PostDetail extends PostsSummary {
	age: number;
	gender: string;
	todos: TodoSummary;
	img: string[];
	constructor(postData:any, todoData:any, postImage:string[]) {
		super(postData);
		this.age = postData.age;
		this.gender = postData.gender;
		this.todos = todoData.map((item:any) => new TodoSummary(item));
		this.img = postImage;
	}
}