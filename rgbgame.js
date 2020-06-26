var grid=3;
var colors;
var list=document.querySelectorAll(".square");
var selector=document.querySelector("div");
var head=document.querySelector("h1");
var opt=document.querySelector("button");
var feed=document.querySelector("#comment");
var lvl=document.querySelectorAll(".level");
// var medium=document.querySelector("#medium");
// var easy=document.querySelector("#easy");
// var hard=document.querySelector("#hard");
lvl[0].classList.add("selected");
reset();
for(var i=0;i<lvl.length;i++){
lvl[i].addEventListener("click",function(){
	lvl[0].classList.remove("selected");
	lvl[1].classList.remove("selected");
	lvl[2].classList.remove("selected");
	this.classList.add("selected");
	if(this.textContent=="EASY")grid=3;
	else if(this.textContent=="MEDIUM")grid=6;
	else grid=9;
	reset();
});
}
function reset(){
colors=[];
preset(grid);
selector.textContent=randomcolor();
main();
}
// easy.addEventListener("click",function(){
// 	colors=[]; grid=3;
//     easy.classList.add("selected");
//     medium.classList.remove("selected");
//     hard.classList.remove("selected");
// 	preset(grid);
//     selector.textContent=randomcolor();
//     main();
// });
// hard.addEventListener("click",function(){
// 	colors=[]; grid=9;
//     hard.classList.add("selected");
//     medium.classList.remove("selected");
//     easy.classList.remove("selected");
// 	preset(grid);
//     selector.textContent=randomcolor();
//     main();
// });
// medium.addEventListener("click",function(){
// 	colors=[]; grid=6;
//     medium.classList.add("selected");
//     easy.classList.remove("selected");
//     hard.classList.remove("selected");
// 	preset(grid);
//     selector.textContent=randomcolor();
//     main();
// });
opt.addEventListener("click",function(){
    opt.textContent="Reset Colors";
    head.style.background="steelblue";
    feed.textContent=" ";
    reset();
});
function main(){
for(var i=0;i<list.length;i++){
    list[i].style.display="block";
	 if(colors[i])
	 	list[i].style.background=colors[i];
    else
    	list[i].style.display="none";
	list[i].addEventListener("click",function(){
    if(this.style.background!=selector.textContent){
    	this.style.background= "rgb(0, 0, 0)";
        feed.textContent="TRY AGAIN!";
    }
    else{
    	// alert("Color combination matched!");
    	postset();
    	head.style.background=selector.textContent;
        opt.textContent="Play Again?";
        feed.textContent="CORRECT!";
    }
	});

}}
function postset(){
	for(var i=0;i<list.length;i++){
		list[i].style.background=selector.textContent;
	}
}
function preset(grid){
	for(var i=0;i<grid;i++){
		var red=Math.floor(Math.random()*255);
		var green=Math.floor(Math.random()*255);
		var blue=Math.floor(Math.random()*255);
		colors.push("rgb("+red+", "+green+", "+blue+")");
	}
}
function randomcolor(){
var random=Math.floor(Math.random()*colors.length);    //Generates a random no(positive int) b/w 0-5
return colors[random];  
}