var game={
	PSIZE:300,
	OFFSET:56,
	MAXTOP:0,
	MAXLEFT:0,
	pop:null,
	init:function(){
		this.MAXTOP=screen.availHeight-this.PSIZE-this.OFFSET;
		this.MAXLEFT=screen.availWidth-this.PSIZE;
		var rTop=Math.floor(Math.random()*(this.MAXTOP+1));
		var rLeft=Math.floor(Math.random()*(this.MAXLEFT+1));
		var config="top="+rTop+",left="+rLeft+",width="+this.PSIZE+",height="+this.PSIZE;
		this.pop=open("about:blank","_blank",config);
		var img=new Image();
		img.src="https://mx-steve.github.io/game/xiaoxin.jpg";
		img.style.width=this.PSIZE-20+"px";
		img.onclick=function(){alert("约吗？")}
		this.pop.document.body.appendChild(img);
		this.pop.onmouseover=function(e){
			while(true){
				var rTop=Math.floor(Math.random()*(this.MAXTOP+1));
				var rLeft=Math.floor(Math.random()*(this.MAXLEFT+1));
				var x=e.screenX;
				var y=e.screenY;
				if(!(x>=rLeft&&x<=rLeft+this.PSIZE
					&&y>=rTop&&y<=rTop+this.OFFSET+this.PSIZE)){
				this.pop.moveTo(rLeft,rTop);
				break;
				}
			}
		}.bind(this);
	}
}
game.init();