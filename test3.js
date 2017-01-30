var obj = {
	name : "",
	height : 0,
	getHeight : function(){
		console.log(this.height);
		return this.height;
	}
};

var sample_obj = Object.create(obj);
sample_obj.name = "zino";
sample_obj.height = 190;
sample_obj.getHeight();