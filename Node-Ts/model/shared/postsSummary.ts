/**
 *  改文件用于规定 posts 数据的输出类型
  * 
  * */
  export class PostsSummary {
	  name:string;
	  id:number;
	  
	  constructor(data:any) {
		  this.name = data.name;
		  this.id = data.id;
	  }
  }