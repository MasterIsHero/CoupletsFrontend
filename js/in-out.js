var vm=new Vue({
	el:"#app",
	data:{
		search:"123",
		list:[
			{first_line:"酒热不须汤盏汤",last_line:"厅凉无用扇车扇"},
			{first_line:"朝官多戴朝冠",last_line:"宫婢常持宫被"},
		]
	},
	methods:{
		
	}
});
var vm01=new Vue({
	el:"#app01",
	data:{},
	methods:{
		postInfo:function(){
			console.log("访问");
			//发送 post 请求
		    this.$http.post('http://127.0.0.1:5000/couplet',JSON.stringify({key:vm.search}),{emulateJSON:true}).then(function(res){
				//成功
				var result=JSON.parse(res.body);
				if(result.status===0){
					if(typeof(result.res)=="object"){
						vm.list=result.res;
					}else{
						vm.list=[{first_line:"查询",last_line:"无果"}];
					}
						
				}
				console.log(result.res);
	
		    });
		}
	}
})
var vm1=new Vue({
	el:".app1",
	data:{
		search:vm.$data.search,
		list:vm.$data.list
	},
	methods:{
		
	}
});