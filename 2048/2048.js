var game={
	data:null,//保存2048游戏数据的二维数组
	RN:4, CN:4,//总行数和总列数
	//强调：1.对象自己的方法要使用对象自己的属性加this.
		//	2.对象每个成员之间必须用逗号分隔
	score:0,
	status:1,//游戏状态
	GAMEOVER:0,
	RUNNING:1,
	start(){//启动游戏
		//生成RN行*RN列的二维数组
		this.status=this.RUNNING;
		this.score=0;
		this.data=[];//先创建空数组
		for(var r=0;r<this.RN;r++){//外层循环遍历行
			this.data[r]=[];//每遍历一行就创建空数组
			for(var c=0;c<this.CN;c++){//内层循环遍历行中的格1
				this.data[r][c]=0;//每遍历一格，加元素0
			}
		}
		this.randomNum();this.randomNum();
		this.updateView();
		//事件
		document.onkeydown=function(e){
			switch(e.keyCode){
				case 37: this.moveLeft(); break;
				case 38: this.moveUp(); break;
				case 39: this.moveRight(); break;
				case 40: this.moveDown(); break;
			};
		}.bind(this);
	},
	randomNum(){//在随机的一个空位置生成2或4
		while(true){
			//在0~RN-1随机生成行号r
			var r=Math.floor(Math.random()*this.RN);
			//在0~CN-1随机生成列号c
			var c=Math.floor(Math.random()*this.CN);
			//如果data中r行c列为0
			if(this.data[r][c]==0){
				//在data中r行c列的位置保存一个2或4
				this.data[r][c]=Math.random()<0.5?2:4;
				break;//退出循环
			}
		}
	},
	updateView(){//将data中数据更新到页面的对应div中
		for(var r=0;r<this.RN;r++){//遍历data
			for(var c=0;c<this.CN;c++){
				//查找id为"c"+r+c的div
				var div=document.getElementById("c"+r+c);
				//如果当前元素不是0
				if(this.data[r][c]!=0){
					//设置div的内容为data中r行c列的值
					div.innerHTML=this.data[r][c];
					//修改div的class属性为cell n+当前值
					div.className="cell n"+this.data[r][c];
				}else{//否则
					div.innerHTML="";//清空div内容
					div.className="cell";//重置div样式为cell
				}
			}
		}
		document.getElementById("score")
				.innerHTML=this.score;
		var div=document.getElementById("gameover");
		if(this.status==this.GAMEOVER){
			document.getElementById("final")
					.innerHTML=this.score;
			div.style.display="block";
		}else{
			div.style.display="none";
		}
	},
	isGameOver(){
		for(var r=0;r<this.RN;r++){
			for(var c=0;c<this.CN;c++){
				if(this.data[r][c]==0)
					return false;
				if(c<this.CN-1
					&&this.data[r][c]==this.data[r][c+1])
					return false;
				if(r<this.RN-1
					&&this.data[r][c]==this.data[r+1][c])
					return false;
			}
		}	
		return true;
	},
	//左移
	moveLeft(){//左移所有行
		var before=String(this.data);//左移动前为数组拍照
		for(var r=0;r<this.RN;r++){
			this.moveLeftInRow(r);
		}
		var after=String(this.data);//左移动后为数组拍照
		if(before!=after){
			this.randomNum();
			if(this.isGameOver())
				this.status=this.GAMEOVER;
			this.updateView();
		}
	},
	moveLeftInRow(r){//仅左移第r行
		//c从0开始，到<CN-1结束，遍历r行每个格
		for(var c=0;c<this.CN-1;c++){
			//查找r行c位置后下一个不为0的位置nextc
			var nextc=this.getNextInRow(r,c);
			if(nextc!=-1){//如果找到
				if(this.data[r][c]==0){//如果c位置为0
					this.data[r][c]=this.data[r][nextc];//nextc与c替换
					this.data[r][nextc]=0;
					c--;//c留在原地
				}else if(this.data[r][c]==this.data[r][nextc]){
					this.data[r][c]*=2;
					this.score+=this.data[r][c];
					this.data[r][nextc]=0;
				}
			}else break;//没找到的话，就退出循环
		}
	},
	getNextInRow(r,c){//查找r行c左侧下一个不为0
		//i从c+1开始，到<CN结束
		for(var i=c+1;i<this.CN;i++){
			//如若r行i列的值不是0，就返回i
			if(this.data[r][i]!=0) return i;
		}//（遍历结束）就返回-1
		return -1;
	},
	//右移动
	moveRight(){
		var before=String(this.data);
		for(var r=0;r<this.RN;r++){
			this.moveRightInRow(r);
		}
		var after=String(this.data);
		if(before!=after){
			this.randomNum();
			this.updateView();
		}
	},
	moveRightInRow(r){
		for(var c=this.CN-1;c>0;c--){
			var prevc=this.getPrevInRow(r,c);
			if(prevc!=-1){
				if(this.data[r][c]==0){
					this.data[r][c]=this.data[r][prevc];
					this.data[r][prevc]=0;
					c++;
				}else if(this.data[r][c]==this.data[r][prevc]){
					this.data[r][c]*=2;
					this.score+=this.data[r][c];
					this.data[r][prevc]=0;
				}
			}else break;
		}
	},
	getPrevInRow(r,c){
		for(var i=c-1;i>=0;i--){
			if(this.data[r][i]!=0) return i;
		}
		return -1;
	},
	//上移动
	moveUp(){
		var before=String(this.data);
		for(var c=0;c<this.CN;c++){
			this.moveUpInCol(c);
		}
		var after=String(this.data);
		if(before!=after){
			this.randomNum();
			this.updateView();
		}
	},
	moveUpInCol(c){
		for(var r=0;r<=this.RN-1;r++){
			var nextr=this.getNextInCol(r,c);
			if(nextr!=-1){
				if(this.data[r][c]==0){
					this.data[r][c]=this.data[nextr][c];
					this.data[nextr][c]=0;
					r--;
				}else if(this.data[r][c]==this.data[nextr][c]){
					this.data[r][c]*=2;
					this.score+=this.data[r][c];
					this.data[nextr][c]=0;
				}
			}else break;
		}
	},
	getNextInCol(r,c){
		for(var i=r+1;i<this.RN;i++){
			if(this.data[i][c]!=0) return i;
		}return -1;
	},
	//下移动
	moveDown(){
		var before=String(this.data);
		for(var c=0;c<this.CN;c++){
			this.moveDownInCol(c);
		}
		var after=String(this.data);
		if(before!=after){
			this.randomNum();
			this.updateView();
		}
	},
	moveDownInCol(c){
		for(var r=this.RN-1;r>0;r--){
			var prevr=this.getPrevInCol(r,c);
			if(prevr!=-1){
				if(this.data[r][c]==0){
					this.data[r][c]=this.data[prevr][c];
					this.data[prevr][c]=0;
					r++;
				}else if(this.data[r][c]==this.data[prevr][c]){
					this.data[r][c]*=2;
					this.score+=this.data[r][c];
					this.data[prevr][c]=0;
				}
			}else break;
		}
	},
	getPrevInCol(r,c){
		for(var i=r-1;i>=0;i--){
			if(this.data[i][c]!=0) return i;
		}
		return -1;
	},
}
game.start();//启动游戏