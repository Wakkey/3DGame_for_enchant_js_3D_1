enchant();
var game;

/*//Label�N���X�̒�`
Label1 = Class.create(Label,{ //Label�N���X���p������
	initialize:function(x,y){
		enchant.Label.call(this,"PadX:0"); //Label�N���X�̃R���X�g���N�^�Ăяo��
		this.x=x;
		this.y=y;
		this.score = 0;
		this.color="#ffffff";	
	},
	add:function(pts){ //X���Z
		this.score+=pts;
		this.text="PadX:"+this.score; //�\�����C��
	}
});

Label2= Class.create(Label,{ //Label�N���X���p������
	initialize:function(x,y){
		enchant.Label.call(this,"PadY:0"); //Label�N���X�̃R���X�g���N�^�Ăяo��
		this.x=x;
		this.y=y;
		this.score = 0;
		this.color="#ffffff";	
	},
	add:function(pts){ //Y���Z
		this.score+=pts;
		this.text="PadY:"+this.score; //�\�����C��
	}
});

Label3= Class.create(Label,{ //Label�N���X���p������
	initialize:function(x,y){
		enchant.Label.call(this,"cameraX:0"); //Label�N���X�̃R���X�g���N�^�Ăяo��
		this.x=x;
		this.y=y;
		this.score = 0;
		this.color="#ffffff";	
	},
	add:function(pts){ //X���Z
		this.score+=pts;
		this.text="cameraX:"+this.score; //�\�����C��
	}
});

Label4= Class.create(Label,{ //Label�N���X���p������
	initialize:function(x,y){
		enchant.Label.call(this,"cameraY:0"); //Label�N���X�̃R���X�g���N�^�Ăяo��
		this.x=x;
		this.y=y;
		this.score = 0;
		this.color="#ffffff";	
	},
	add:function(pts){ //Y���Z
		this.score+=pts;
		this.text="cameraY:"+this.score; //�\�����C��
	}
});

Label5= Class.create(Label,{ //Label�N���X���p������
	initialize:function(x,y){
		enchant.Label.call(this,"cameraZ:0"); //Label�N���X�̃R���X�g���N�^�Ăяo��
		this.x=x;
		this.y=y;
		this.score = 0;
		this.color="#ffffff";	
	},
	add:function(pts){ //Z���Z
		this.score+=pts;
		this.text="cameraZ:"+this.score; //�\�����C��
	}
});

Label6= Class.create(Label,{ //Label�N���X���p������
	initialize:function(x,y){
		enchant.Label.call(this,"Speed:0"); //Label�N���X�̃R���X�g���N�^�Ăяo��
		this.x=x;
		this.y=y;
		this.score = 0;
		this.color="#ffffff";	
	},
	add:function(pts){ //Z���Z
		this.score+=pts;
		this.text="Speed:"+this.score; //�\�����C��
	}
});

Label7= Class.create(Label,{ //Label�N���X���p������
	initialize:function(x,y){
		enchant.Label.call(this,"cameraupVectorX:0"); //Label�N���X�̃R���X�g���N�^�Ăяo��
		this.x=x;
		this.y=y;
		this.score = 0;
		this.color="#ffffff";	
	},
	add:function(pts){ //Y���Z
		this.score+=pts;
		this.text="cameraupVectorX:"+this.score; //�\�����C��
	}
});

Label8= Class.create(Label,{ //Label�N���X���p������
	initialize:function(x,y){
		enchant.Label.call(this,"cameraupVectorY:0"); //Label�N���X�̃R���X�g���N�^�Ăяo��
		this.x=x;
		this.y=y;
		this.score = 0;
		this.color="#ffffff";	
	},
	add:function(pts){ //Z���Z
		this.score+=pts;
		this.text="cameraupVectorY:"+this.score; //�\�����C��
	}
});

Label9= Class.create(Label,{ //Label�N���X���p������
	initialize:function(x,y){
		enchant.Label.call(this,"cameraupVectorZ:0"); //Label�N���X�̃R���X�g���N�^�Ăяo��
		this.x=x;
		this.y=y;
		this.score = 0;
		this.color="#ffffff";	
	},
	add:function(pts){ //Z���Z
		this.score+=pts;
		this.text="cameraupVectorZ:"+this.score; //�\�����C��
	}
});*/

Label10= Class.create(Label,{ //Label�N���X���p������
	initialize:function(x,y){
		enchant.Label.call(this,"Ver0.16"); //Label�N���X�̃R���X�g���N�^�Ăяo��
		this.x=x;
		this.y=y;
		this.score = 0;
		this.color="#ffffff";	
	}
});       

/*
Label11= Class.create(Label,{ //Label�N���X���p������
	initialize:function(x,y){
		enchant.Label.call(this,""); //Label�N���X�̃R���X�g���N�^�Ăяo��
		this.x=x;
		this.y=y;
		this.score = 0;
		this.color="#ffffff";	
	},
	add:function(pts){ //Z���Z
		this.score+=pts;
		this.text="[" + this.score +  "]"; //�\�����C��
	}
});
*/

window.onload = function(){
    game = new Game(320, 320);
    game.fps = 60;
    game.preload('space1.gif','font2.png');
    game.onload = function(){
   
    
  /*  //���x���\��
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
            //���E������
			var dx = (pad.vx - this.tx)*0.05;
            //�㉺�����ǁ@
    		var dy = -(pad.vy - this.ty)*0.05;
			//���x�Œ�
			//speed += 0.001;
			//���E�Ǐ���`�B
			camera.theta += dx;
			//�㉺�Ǐ���`�B
			camera.upVectorZ += dy;			

		});
		game.rootScene.addEventListener('enterframe',function(e){
		
			var fx =-Math.sin(camera.theta);
			var fz = Math.cos(camera.theta);
			
			//�g�����ǉ�
			var fy =-Math.sin(camera.upVectorZ);
			
			camera.x += fx*speed;
			camera.z += fz*speed;
			camera.centerX = camera.x+fx;
			camera.centerZ = camera.z+fz;
			
			//�g��������ǉ�
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
		    	
	/*		//�J�����y�уp�b�h���l�\��
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

