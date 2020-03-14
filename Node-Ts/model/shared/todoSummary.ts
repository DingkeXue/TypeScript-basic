/**
 *  改文件用于规定 posts 数据的输出类型
  * 
  * */
  export class TodoSummary {
	  todo:string;
	  id:number;
	  constructor(todos:any) {
		  this.todo = todos.todo;
		  this.id = todos.id;
	  }
  }