const app = new PIXI.Application({width: innerWidth, height: innerHeight});

document.body.appendChild(app.view);

const grp = new PIXI.Graphics();

let i;

for(i=0; i<10; i++){
    grp.beginFill(randomColor());
    grp.drawRect(i * 20,i * 20,40,40);
}

for(i = 0; i<10; i++){
    grp.beginFill(randomColor());
    grp.drawRect(app.view.width - 100,i * (40 + 10),40,40);
}

for(i = 0; i<40; i++){
    grp.beginFill(randomColor());
    grp.drawCircle(i * (10 + 50),app.view.height - 50,10,10);
}

grp.beginFill(randomColor())
  .drawPolygon([
    app.view.width / 2,100,
    (app.view.width / 2) + 200,200,
    (app.view.width / 2) + 200,300,
    (app.view.width / 2) - 300,300
  ])
  .endFill();

  grp.beginFill(randomColor())
  .drawPolygon([
    app.view.width - 250,200,
    app.view.width - 350,300,
    app.view.width - 150,300,
    app.view.width - 250,200,
  ])
  .endFill();

  grp.beginFill(randomColor());
  grp.drawCircle(app.view.width / 2,(app.view.height / 2) + 100,50,50);


app.stage.addChild(grp);

function randomColor(){
    const colors = [0x00ffff,0xffff00,0xff00ff,0x0000ff,0xff0000];
    return colors[Math.floor(Math.random() * colors.length)];
}