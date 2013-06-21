enchant();
var game;

window.onload = function () {
    game = new Game(320, 320);
    game.fps = 60;

    game.onload = function () {


        //Labelクラスの定義
        Label1 = Class.create(Label, { //Labelクラスを継承する
            initialize: function (x, y) {
                enchant.Label.call(this, "PadX:0"); //Labelクラスのコンストラクタ呼び出し
                this.x = x;
                this.y = y;
                this.score = 0;
                this.color = "#ffffff";
            },
            add: function (pts) { //X加算
                this.score += pts;
                this.text = "PadX:" + this.score; //表示を修正
            }
        });

        Label2 = Class.create(Label, { //Labelクラスを継承する
            initialize: function (x, y) {
                enchant.Label.call(this, "PadY:0"); //Labelクラスのコンストラクタ呼び出し
                this.x = x;
                this.y = y;
                this.score = 0;
                this.color = "#ffffff";
            },
            add: function (pts) { //Y加算
                this.score += pts;
                this.text = "PadY:" + this.score; //表示を修正
            }
        });

        Label3 = Class.create(Label, { //Labelクラスを継承する
            initialize: function (x, y) {
                enchant.Label.call(this, "cameraX:0"); //Labelクラスのコンストラクタ呼び出し
                this.x = x;
                this.y = y;
                this.score = 0;
                this.color = "#ffffff";
            },
            add: function (pts) { //X加算
                this.score += pts;
                this.text = "cameraX:" + this.score; //表示を修正
            }
        });

        Label4 = Class.create(Label, { //Labelクラスを継承する
            initialize: function (x, y) {
                enchant.Label.call(this, "cameraY:0"); //Labelクラスのコンストラクタ呼び出し
                this.x = x;
                this.y = y;
                this.score = 0;
                this.color = "#ffffff";
            },
            add: function (pts) { //Y加算
                this.score += pts;
                this.text = "cameraY:" + this.score; //表示を修正
            }
        });

        Label5 = Class.create(Label, { //Labelクラスを継承する
            initialize: function (x, y) {
                enchant.Label.call(this, "cameraZ:0"); //Labelクラスのコンストラクタ呼び出し
                this.x = x;
                this.y = y;
                this.score = 0;
                this.color = "#ffffff";
            },
            add: function (pts) { //Z加算
                this.score += pts;
                this.text = "cameraZ:" + this.score; //表示を修正
            }
        });

        Label6 = Class.create(Label, { //Labelクラスを継承する
            initialize: function (x, y) {
                enchant.Label.call(this, "Speed:0"); //Labelクラスのコンストラクタ呼び出し
                this.x = x;
                this.y = y;
                this.score = 0;
                this.color = "#ffffff";
            },
            add: function (pts) { //Z加算
                this.score += pts;
                this.text = "Speed:" + this.score; //表示を修正
            }
        });

        Label7 = Class.create(Label, { //Labelクラスを継承する
            initialize: function (x, y) {
                enchant.Label.call(this, "cameraupVectorX:0"); //Labelクラスのコンストラクタ呼び出し
                this.x = x;
                this.y = y;
                this.score = 0;
                this.color = "#ffffff";
            },
            add: function (pts) { //Y加算
                this.score += pts;
                this.text = "cameraupVectorX:" + this.score; //表示を修正
            }
        });

        Label8 = Class.create(Label, { //Labelクラスを継承する
            initialize: function (x, y) {
                enchant.Label.call(this, "cameraupVectorY:0"); //Labelクラスのコンストラクタ呼び出し
                this.x = x;
                this.y = y;
                this.score = 0;
                this.color = "#ffffff";
            },
            add: function (pts) { //Z加算
                this.score += pts;
                this.text = "cameraupVectorY:" + this.score; //表示を修正
            }
        });

        Label9 = Class.create(Label, { //Labelクラスを継承する
            initialize: function (x, y) {
                enchant.Label.call(this, "cameraupVectorZ:0"); //Labelクラスのコンストラクタ呼び出し
                this.x = x;
                this.y = y;
                this.score = 0;
                this.color = "#ffffff";
            },
            add: function (pts) { //Z加算
                this.score += pts;
                this.text = "cameraupVectorZ:" + this.score; //表示を修正
            }
        });
        Label10 = Class.create(Label, { //Labelクラスを継承する
            initialize: function (x, y) {
                enchant.Label.call(this, "Ver0.24"); //Labelクラスのコンストラクタ呼び出し
                this.x = x;
                this.y = y;
                this.score = 0;
                this.color = "#ffffff";
            }
        });


        Label11 = Class.create(Label, { //Labelクラスを継承する
            initialize: function (x, y) {
                enchant.Label.call(this, ""); //Labelクラスのコンストラクタ呼び出し
                this.x = x;
                this.y = y;
                this.score = 0;
                this.color = "#ffffff";
            },
            add: function (pts) { //Z加算
                this.score += pts;
                this.text = "[" + this.score + "]"; //表示を修正
            }
        });


        Label12 = Class.create(Label, { //Labelクラスを継承する
            initialize: function (x, y) {
                enchant.Label.call(this, ""); //Labelクラスのコンストラクタ呼び出し
                this.x = x;
                this.y = y;
                this.score = 0;
                this.color = "#ffffff";
            },
            add: function (pts) { //Z加算
                this.score += pts;
                this.text = "[" + this.score + "]"; //表示を修正
            }
        });


        Surface.prototype.drawRect = function (x, y, w, h) {
            this.context.beginPath();
            this.context.rect(x, y, w, h);
            this.context.fill();
        }

        game.addSurface = function (type, color, x, y) {
            surface = new Surface(50, 50);
            surface.setColor(color);
            surface.drowRect(0, 0, 50, 50);
        }






        //ラベル表示
        Label1 = new Label1(5, 20);
        game.rootScene.addChild(Label1);

        Label2 = new Label2(5, 35);
        game.rootScene.addChild(Label2);

        Label6 = new Label6(5, 50);
        game.rootScene.addChild(Label6);

        Label3 = new Label3(5, 65);
        game.rootScene.addChild(Label3);


        Label4 = new Label4(5, 80);
        game.rootScene.addChild(Label4);

        Label5 = new Label5(5, 95);
        game.rootScene.addChild(Label5);




        Label7 = new Label7(5, 110);
        game.rootScene.addChild(Label7);

        Label8 = new Label8(5, 125);
        game.rootScene.addChild(Label8);

        Label9 = new Label9(5, 140);
        game.rootScene.addChild(Label9);

        Label10 = new Label10(5, 5);
        game.rootScene.addChild(Label10);

        //	Label11 = new Label11(320 /2 , 300);
        //	game.rootScene.addChild(Label11);





        ax = 0;
        rx = 0;
        ry = 0;
        rvx = 0;
        trmy = 0;
        dx = 0;
        dy = 0;
        dz = 0;
        sx = 250;
        sy = 0;
        sz = -1000;
        scx = 0;
        scy = 0;
        scz = 0;
        flagx = false;
        flagy = false;
        tx = 0;
        ty = 0;
        swithy = 0;
        swithx = 0;
        spds = 0;


        var scene = new Scene3D();

        scene.setDirectionalLight(light = new DirectionalLight());
        light.directionZ = -1;

        var camera = new Camera3D();
        camera.x = sx;
        camera.y = sy;
        camera.z = sz;
        camera.centerX = scx;
        camera.centerY = scy;
        camera.centerZ = scz;


        scene.setCamera(camera);

        game.rootScene.addEventListener('touchstart', function () {
            tx = pad.vx; //Math.cos(e.rad)* e.dist;
            ty = pad.vy; //Math.sin(e.rad)* e.dist;
            flagx = true;
            flagy = true;
            swithx = pad.vx;
            swithy = pad.vy;

        });

        mymacin = function (x, y, spd) {

            //camera.upVectorX = 0;
            //camera.upVectorY = 0;
            camera.upVectorZ = 0;

            if (y != 0) {
                trmy += y;
            }

            var rader = 0.5;

            //camera.z += ((spd * 0.01));
            //camera.centerZ += (ax - Math.cos(camera.centerY) * 0.0001);
            //移動操作
            if (camera.centerX < -1.5 || camera.centerX > 1.5) {//Math.sin(45 * Math.PI / 180) >= Math.sin(90 * Math.PI / 180) || Math.sin(Math.PI / 180) >= Math.PI) {
                camera.x += Math.sin((camera.centerX * spd) * Math.PI / 180) * spd;
                camera.centerX += (ax * rader);
                //camera.centerX -= (ax - Math.cos(camera.centerY) * 0.0001);

            } if (camera.centerY < -1.5 || camera.centerY > 1.5) {//Math.sin(45 * Math.PI / 180) >= Math.sin(90 * Math.PI / 180) || Math.sin(Math.PI / 180) >= Math.PI) {
                camera.y += Math.sin((camera.centerY * spd) * Math.PI / 180) * spd;
                camera.centerX += (ax * rader);
                //camera.centerY -= (ax - Math.cos(camera.centerY) * 0.0001);
            } if (camera.centerZ < -1.5 || camera.centerZ > 1.5) {//Math.sin(45 * Math.PI / 180) >= Math.sin(90 * Math.PI / 180) || Math.sin(Math.PI / 180) >= Math.PI) {
                camera.z += Math.sin((camera.centerZ * spd) * Math.PI / 180) * spd;
                camera.centerX += (ax * rader);
            } else if (camera.centerZ > -1.5 || camera.centerZ < 1.5) {
                camera.z += Math.sin(45 * Math.PI / 180) * spd;
                camera.centerX += (ax * rader);
            };



            //座標補正
            if (ax < 0) {
                if (ax > 0) {
                    ax = 0;
                    clearTimeout(); //タイマー停止
                    return;
                }
                setTimeout((ax += 1), 10);
                setTimeout((camera.centerX += 1), 10);
            } else
                if (ax > 0) {
                    if (ax < 0) {
                        ax = 0;
                        clearTimeout(); //タイマー停止
                        return;
                    }
                    setTimeout((ax -= 1), 10);
                    setTimeout((camera.centerX -= 1), 10);
                }

            if (trmy < 0) {
                if (trmy > 0) {
                    trmy = 0;
                    clearTimeout(); //タイマー停止
                    return;
                }
                setTimeout((trmy += 0.1), 10);
            } else
                if (trmy > 0) {
                    if (trmy < 0) {
                        trmy = 0;
                        clearTimeout(); //タイマー停止
                        return;
                    }
                    setTimeout((trmy -= 0.1), 10);
                }

            /*  if (camera.centerZ < 0) {
            if (camera.centerZ > 0) {
            camera.centerZ = 0;
            clearTimeout(); //タイマー停止
            return;
            }
            setTimeout((camera.centerZ += 0.1), 10);
            } else
            if (camera.centerZ > 0) {
            if (camera.centerZ < 0) {
            camera.centerZ = 0;
            clearTimeout(); //タイマー停止
            return;
            }
            setTimeout((camera.centerZ -= 1), 10);
            }*/

            /* if (camera.centerX < 0) {
            if (camera.centerX > 0) {
            camera.centerX = 0;
            clearTimeout(); //タイマー停止
            return;
            }
            setTimeout((camera.centerX += 0.1), 10);
            } else
            if (camera.centerX > 0) {
            if (camera.centerX < 0) {
            camera.centerX = 0;
            clearTimeout(); //タイマー停止
            return;
            }
            setTimeout((camera.centerX -= 1), 10);
            }*/

            /* if (camera.centerY < 0) {
            if (camera.centerY > 0) {
            camera.centerY = 0;
            clearTimeout(); //タイマー停止
            return;
            }
            setTimeout((camera.centerY += 0.1), 10);
            } else
            if (camera.centerY > 0) {
            if (camera.centerY < 0) {
            camera.centerY = 0;
            clearTimeout(); //タイマー停止
            return;
            }
            setTimeout((camera.centerY -= 1), 10);
            }*/

            /*if (spd < 0) {
            if (spd > 0) {
            spd = 0;
            clearTimeout(); //タイマー停止
            return;
            }
            setTimeout((spd -= 0.1), 10);
            } else
            if (spd > 0) {
            if (spd < 0) {
            spd = 0;
            clearTimeout(); //タイマー停止
            return;
            }
            setTimeout((spd += 1), 10);
            }*/

            if (flagx == true) {
                //左右方向舵
                dx = (pad.vx - tx) * 0.05;

                camera.rotateRoll(-dx);


                if (dx == swithx) {
                    flagx = false;

                }
            }
            if (flagy == true) {
                //上下方向舵
                dy = -(pad.vy - ty) * 0.05;

                if (camera.centerX > -1.5 || camera.centerX < 1.5) {
                    camera.centerY = trmy * 20;
                } else if (camera.centerX < -0.5 || camera.centerX > 0.5) {
                    //camera.centerY = 0;
                } else if (camera.centerY > -0.5 || camera.centerY < 0.5) {
                    camera.centerX = trmy * 20;
                } else if (camera.centerY < -0.5 || camera.centerY > 0.5) {
                    // camera.centerX = 0;
                } else if (camera.centerZ > -0.5 || camera.centerZ < 0.5) {
                    camera.centerZ = trmy * 20;
                } else if (camera.centerZ < -0.5 || camera.centerZ > 0.5) {
                    //camera.centerZ = 0;
                }


                if (dy == swithx) {
                    flagy = false;
                }
            }


            //console.log(fx);

            Label3.text = (camera.x);
            Label4.text = (camera.y);
            Label5.text = (camera.z);
            Label6.text = (spd);
            Label7.text = (camera.centerX);
            Label8.text = (camera.centerY);
            Label9.text = (camera.centerZ);
            Label12.text = (spd);

        }


        //計器パネル  	
        Surface.prototype.setColor = function (color) {
            this.context.strokeStyle = color;
            this.context.fillstyle = color;
        }

        var surface = new Surface(320, 320 / 2);
        surface.setColor("#ffffff");
        surface.drawRect(0, 0, 320, 320 / 2);

        var sprite = new Sprite(320, 320 / 2);
        sprite.image = surface;
        sprite.x = 0;
        sprite.y = 320 / 4 + 320 / 3;
        game.rootScene.addChild(sprite);

        //計器
        Label12 = new Label12(320 / 2, 320 / 4 + 320 / 2);
        game.rootScene.addChild(Label12);


        var pad = new APad();
        pad.x = 0;
        pad.y = 220;
        game.rootScene.addChild(pad);


        var pad2 = new Pad();
        pad2.x = 220;
        pad2.y = 220;
        game.rootScene.addChild(pad2);





        game.rootScene.addEventListener('enterframe', function (e) {

            if (game.input.left) {
                if (ax < 14) {
                    ax -= 2;
                }
            };
            if (game.input.right) {
                if (ax > -14) {
                    ax += 2;
                }
            };
            if (game.input.up) {
                if (spds < 20) {
                    spds += 0.1;
                };
            };
            if (game.input.down) {
                if (spds > -14) {
                    spds -= 0.07;
                };
            };


            mymacin(pad.vx, pad.vy, spds);






            //カメラ及びパッド数値表示
            Label1.text = (pad.vx);
            Label2.text = (pad.vy);


            var ewx = ax;


            Label12.text = ewx;
        });



        var field = 1000;
        var setobj = 6;
        var setx = 225;
        var sety = -150;
        var setz = -990;
        var size = 0.4;
        var setspace = 50;
        /*
        for (i = 0; i < setobj; i++) {
            for (i2 = 0; i2 < setobj; i2++) {
                for (i1 = 0; i1 < setobj; i1++) {
                    setx += setspace;
                    var ball = new Cube(size, size);
                    ball.x = camera.x + setx; //Math.floor(Math.random() * field + 0);
                    ball.y = camera.y + sety; //Math.floor(Math.random() * field + 0);
                    ball.z = camera.z + setz; //Math.floor(Math.random() * field + 0);
                    ball.rotX = 0;
                    scene.addChild(ball);

                    setx -= 30;
                    sety += setspace;
                }
                setz += setspace;
            }

            ball.addEventListener('enterframe', function (e) {
                           
            });
        }
        */
        

        var setobj2 = 500;
        for (i = 0; i < setobj2; i++) {
            var debl = Math.random() * 2.0;
            var ball3 = new /*Sphere*/Cube(debl, 20);
            ball3.x = Math.floor(Math.random() * field + 0);
            ball3.y = Math.floor(Math.random() * field + 0);
            ball3.z = -Math.floor(Math.random() * field + 0);
            ball3.rotX = 0;
            ball3.addEventListener('enterframe', function (e) {

            });

            scene.addChild(ball3);

        }
        field = 0;

        /*for (i = 0; i < 4; i++) {

            var port = new Cube(1, 1);
            var sets = Math.floor(Math.random() * field + 0);
            for (i1 = 0; i1 < 10; i1++) {
                port.x = sets;
                port.y = sets;
                port.z = -950 + sets;
                scene.addChild(port);
                if (3 > i1) {
                    port.x = sets;
                    port.y = sets;
                    port.z = -950 + sets;
                }
                scene.addChild(port);
            }


 
        }
       
*/
        var groove = new Sphere(100, 100);
        groove.x = 250;
        groove.y = 0;
        groove.z = -790;
        groove.rotX = 0;
        groove.addChild(groove);

        groove.addEventListener('enterframe', function (e) {


        });
    };
    game.start();
};

