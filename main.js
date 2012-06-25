enchant();
var game;

/*//Labelクラスの定義
Label1 = Class.create(Label,{ //Labelクラスを継承する
	initialize:function(x,y){
		enchant.Label.call(this,"PadX:0"); //Labelクラスのコンストラクタ呼び出し
		this.x=x;
		this.y=y;
		this.score = 0;
		this.color="#ffffff";	
	},
	add:function(pts){ //X加算
		this.score+=pts;
		this.text="PadX:"+this.score; //表示を修正
	}
});

Label2= Class.create(Label,{ //Labelクラスを継承する
	initialize:function(x,y){
		enchant.Label.call(this,"PadY:0"); //Labelクラスのコンストラクタ呼び出し
		this.x=x;
		this.y=y;
		this.score = 0;
		this.color="#ffffff";	
	},
	add:function(pts){ //Y加算
		this.score+=pts;
		this.text="PadY:"+this.score; //表示を修正
	}
});

Label3= Class.create(Label,{ //Labelクラスを継承する
	initialize:function(x,y){
		enchant.Label.call(this,"cameraX:0"); //Labelクラスのコンストラクタ呼び出し
		this.x=x;
		this.y=y;
		this.score = 0;
		this.color="#ffffff";	
	},
	add:function(pts){ //X加算
		this.score+=pts;
		this.text="cameraX:"+this.score; //表示を修正
	}
});

Label4= Class.create(Label,{ //Labelクラスを継承する
	initialize:function(x,y){
		enchant.Label.call(this,"cameraY:0"); //Labelクラスのコンストラクタ呼び出し
		this.x=x;
		this.y=y;
		this.score = 0;
		this.color="#ffffff";	
	},
	add:function(pts){ //Y加算
		this.score+=pts;
		this.text="cameraY:"+this.score; //表示を修正
	}
});

Label5= Class.create(Label,{ //Labelクラスを継承する
	initialize:function(x,y){
		enchant.Label.call(this,"cameraZ:0"); //Labelクラスのコンストラクタ呼び出し
		this.x=x;
		this.y=y;
		this.score = 0;
		this.color="#ffffff";	
	},
	add:function(pts){ //Z加算
		this.score+=pts;
		this.text="cameraZ:"+this.score; //表示を修正
	}
});

Label6= Class.create(Label,{ //Labelクラスを継承する
	initialize:function(x,y){
		enchant.Label.call(this,"Speed:0"); //Labelクラスのコンストラクタ呼び出し
		this.x=x;
		this.y=y;
		this.score = 0;
		this.color="#ffffff";	
	},
	add:function(pts){ //Z加算
		this.score+=pts;
		this.text="Speed:"+this.score; //表示を修正
	}
});

Label7= Class.create(Label,{ //Labelクラスを継承する
	initialize:function(x,y){
		enchant.Label.call(this,"cameraupVectorX:0"); //Labelクラスのコンストラクタ呼び出し
		this.x=x;
		this.y=y;
		this.score = 0;
		this.color="#ffffff";	
	},
	add:function(pts){ //Y加算
		this.score+=pts;
		this.text="cameraupVectorX:"+this.score; //表示を修正
	}
});

Label8= Class.create(Label,{ //Labelクラスを継承する
	initialize:function(x,y){
		enchant.Label.call(this,"cameraupVectorY:0"); //Labelクラスのコンストラクタ呼び出し
		this.x=x;
		this.y=y;
		this.score = 0;
		this.color="#ffffff";	
	},
	add:function(pts){ //Z加算
		this.score+=pts;
		this.text="cameraupVectorY:"+this.score; //表示を修正
	}
});

Label9= Class.create(Label,{ //Labelクラスを継承する
	initialize:function(x,y){
		enchant.Label.call(this,"cameraupVectorZ:0"); //Labelクラスのコンストラクタ呼び出し
		this.x=x;
		this.y=y;
		this.score = 0;
		this.color="#ffffff";	
	},
	add:function(pts){ //Z加算
		this.score+=pts;
		this.text="cameraupVectorZ:"+this.score; //表示を修正
	}
});*/

Label10= Class.create(Label,{ //Labelクラスを継承する
	initialize:function(x,y){
		enchant.Label.call(this,"Ver0.16"); //Labelクラスのコンストラクタ呼び出し
		this.x=x;
		this.y=y;
		this.score = 0;
		this.color="#ffffff";	
	}
});       

/*
Label11= Class.create(Label,{ //Labelクラスを継承する
	initialize:function(x,y){
		enchant.Label.call(this,""); //Labelクラスのコンストラクタ呼び出し
		this.x=x;
		this.y=y;
		this.score = 0;
		this.color="#ffffff";	
	},
	add:function(pts){ //Z加算
		this.score+=pts;
		this.text="[" + this.score +  "]"; //表示を修正
	}
});
*/

window.onload = function(){
    game = new Game(320, 320);
    game.fps = 60;
    game.preload('space1.gif','font2.png');
    game.onload = function(){
   
    
  /*  //ラベル表示
		Label1 = new Label1(5,20);
		game.rootScene.addChild(Label1);
		
		Label2 = new Label2(5,35);
		game.rootScene.addChild(Label2);
        
        Label6 = new Label6(5,50);
		game.rootScene.addChild(Label6);
		
        Label3 = new Label3(5,65);
		game.rootScene.addChild(Label3);
		
		
		Label4 = new Label4(5,80);
		game.rootScene.addChild(Label4);
		
		Label5 = new Label5(5,95);
		game.rootScene.addChild(Label5);
		
		
		
		
		Label7 = new Label7(5,110);
		game.rootScene.addChild(Label7);
		
		Label8 = new Label8(5,125);
		game.rootScene.addChild(Label8);
		
		Label9 = new Label9(5,140);
		game.rootScene.addChild(Label9);
		*/
		Label10 = new Label10(5,5);
		game.rootScene.addChild(Label10);
	/*	
		Label11 = new Label11(320 /2 , 300);
		game.rootScene.addChild(Label11);
	*/	
	    var scene = new Scene3D();
        scene.setDirectionalLight(light = new DirectionalLight());
		light.directionZ=-1;
        var camera = new Camera3D();
		camera.x = 1000;
		camera.y =1000;
        camera.z = -2300;
		camera.centerX = 0;
		camera.centerY = 0;
		camera.centerZ = 0;
        scene.setCamera(camera);

		camera.theta=0;
		speed=0;
		
		var pad = new APad();
        pad.x = 0; 
        pad.y = 220;
        game.rootScene.addChild(pad);
		
		
		var pad2 = new Pad();
        pad2.x = 220; 
        pad2.y = 220;
        game.rootScene.addChild(pad2);

		game.rootScene.addEventListener('touchstart',function(){
			this.tx = pad.vx;
			this.ty = pad.vy;
		});
		
	   
		game.rootScene.addEventListener('touchmove',function(){
            //左右方向舵
			var dx = (pad.vx - this.tx)*0.05;
            //上下方向舵　
    		var dy = -(pad.vy - this.ty)*0.05;
			//速度固定
			//speed += 0.001;
			//左右舵情報を伝達
			camera.theta += dx;
			//上下舵情報を伝達
			camera.upVectorZ += dy;			

		});
		game.rootScene.addEventListener('enterframe',function(e){
		
			var fx =-Math.sin(camera.theta);
			var fz = Math.cos(camera.theta);
			
			//トリム追加
			var fy =-Math.sin(camera.upVectorZ);
			
			camera.x += fx*speed;
			camera.z += fz*speed;
			camera.centerX = camera.x+fx;
			camera.centerZ = camera.z+fz;
			
			//トリム操作追加
			camera.y += fy * speed;
			camera.centerY = camera.y+fy;
		    
		  
		
		
		    if (game.input.left)
		    {
		      
		    }
		    if (game.input.right)
		    {
		      
		    }
		    if (game.input.up)
		    {
		      speed += 0.1;
		    }
		    if (game.input.down)
		    {
		      speed -= 0.05;
		    };
		    	
	/*		//カメラ及びパッド数値表示
			Label1.add( camera.theta );
            Label2.add( camera.upVectorZ );
			Label3.add( camera.x);
            Label4.add( camera.y);
            Label5.add( camera.z);
            Label6.add( speed);
            Label7.add( camera.upVectorX);
            Label8.add( camera.upVectorY);
            Label9.add( camera.upVectorZ);
           
            
            var ewx = pad.vx ;
            if ( ewx > 36 )
            {
              ewx = 0;
            }
            Label11.add(  );*/
		});


		var field = 2000;
		var setobj = 400;
		var size = 0.4;
		for(i=0;i<setobj;i++){
		    var ball = new Cube(size,size);
		    ball.x = Math.floor(Math.random() * field + 0); 
		    ball.y = Math.floor(Math.random() * field + 0);
		    ball.z = Math.floor(Math.random() * field + 0);
		    ball.rotX = 0;
		    ball.addEventListener('enterframe', function(e){
		        
		    });
		    
		    scene.addChild(ball);		  
         
		    }
		    
		    for(i=0;i<setobj;i++){
		    var ball2 = new Cube(size,size);
		    ball2.x = Math.floor(Math.random() * field + 0); 
		    ball2.y = Math.floor(Math.random() * field + 0);
		    ball2.z = -Math.floor(Math.random() * field + 0);
		    ball2.rotX = 0;
		    ball2.addEventListener('enterframe', function(e){
		        
		    });
		    
		    scene.addChild(ball2);    
 
		   
	        }
	    
	        var setobj2 = 100;
		    for(i=0;i<setobj2;i++){
		    var ball3 = new Sphere(20,20);
		    ball3.x = Math.floor(Math.random() * field + 0); 
		    ball3.y = Math.floor(Math.random() * field + 0);
		    ball3.z = -Math.floor(Math.random() * field + 0);
		    ball3.rotX = 0;
		    ball3.addEventListener('enterframe', function(e){
		        
		    });
		    
		    scene.addChild(ball3);
	    
            }

      
		
    };
    game.start();
};

