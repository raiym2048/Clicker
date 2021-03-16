const app = new PIXI.Application({
    backgroundColor: 0xffffff,
    resolution: window.devicePixelRatio || 1,
});
var counter = 0;

document.body.appendChild(app.view);

const cookie = PIXI.Sprite.from("assets/cookie.png");

const scoreText = new PIXI.Text("0 POINTS");

scoreText.anchor.set(0.5);

scoreText.y = 30;
scoreText.x = app.screen.width / 2;

cookie.anchor.set(0.5);

cookie.x = app.screen.width / 2;
cookie.y = app.screen.height / 2;

cookie.interactive = true;
cookie.on("mousedown", onClick);
cookie.on("mouseup", function () {
    cookie.scale.x *= 1.05;
    cookie.scale.y *= 1.05;
});


app.stage.addChild(cookie);
app.stage.addChild(scoreText);

function onClick() {
    counter++;
    cookie.scale.x /= 1.05;
    cookie.scale.y /= 1.05;
    scoreText.text = counter + " POINTS";
}