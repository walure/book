class a{
	static action(){
		
	}
 constructor(x, y) {
    this.x = x;
    this.y = y;
	a.action();
	this.cc();
  }
  set(type){
	  let promise=new Promise((resolve,reject)=>{
		  if(!type){
			resolve();
		  }else{
			  reject()
		  }
		  
	  });
	  return promise;
	  
  }
  async cc(){
	  
	  await console.log(11)
  }
	
	
}
class b{
 constructor(x, y) {
    this.x = x;
    this.y = y;
  }
	
	
}
 export { a,b};
