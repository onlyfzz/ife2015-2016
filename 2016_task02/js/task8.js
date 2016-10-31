var text=document.getElementById("textarea"),
 	input=document.getElementById("input"),
	bt1=document.getElementById("bt1"),
	bt2=document.getElementById("bt2"),
	bt3=document.getElementById("bt3"),
	bt4=document.getElementById("bt4"),
	bt5=document.getElementById("bt5"),
	bt6=document.getElementById("bt6"),
	bt7=document.getElementById("bt7"),
	container=document.getElementById("container"),
	//数组用来存储输入的数据
	arr=[];
//适用于确认按钮，使用DOM创建子节点
function change() {
	var str=text.value.split(/[,\s+、，\r]/);
	for(var i=0;i<str.length;i++){
		arr.push(str[i]);
	}
	for(var j=0;j<arr.length;j++){
		var div=document.createElement("div");
		div.innerHTML=arr[j];
		container.appendChild(div);
	}	
}
//适用于bt4,bt5,bt6,bt7 4个按钮,使用innerHTML来渲染内容
function arrChange(){
	var str=arr.toString().split(/[,\s+、，\r]/);
	arr=[];
	for(var i=0;i<str.length;i++){
		arr.push(str[i]);
	}
	var strr="";
	for(var j=0;j<arr.length;j++){
			strr+='<div class="bottomDiv">'+arr[j]+'</div>';
		}
	container.innerHTML=strr;
	strr="";
}
//遍历divs里的内容，使用search()来查询是否符合input的条件
function search(){
	var inp=input.value;
	var divs=container.getElementsByTagName("div");
	for(var i=0;i<divs.length;i++){
			var d=divs[i].innerHTML.replace(new RegExp(inp,"g"),"<span>"+inp+"</span>");
			divs[i].innerHTML=d;
	}	
}
//为每个按钮添加事件监听
function event(){
	bt1.addEventListener('click',function(){
		change();
	},false);
	bt2.addEventListener('click',function(){
		search();
	},false);
	bt3.addEventListener('click',function(){
		clear();
	},false);
	bt4.addEventListener('click',function(){
		arr.unshift(text.value);
		arrChange();
	},false);
	bt5.addEventListener('click',function(){
		arr.push(text.value);
		arrChange();
	},false);
	bt6.addEventListener('click',function(){
		arr.shift(text.value);
		arrChange();
	},false);
	bt7.addEventListener('click',function(){
		arr.pop(text.value);
		arrChange();
	},false);
}
//清除container内的内容
function clear(){
	arr=[];
	container.innerHTML="";
}
event();