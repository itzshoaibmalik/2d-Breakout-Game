const tile = {
    w: 64, 
    h: 32,
    margin: 10,
    c: undefined,
    r: undefined,
    arr:[],
    brick:[],
};


const paddle = {
    color: "lightskyblue",
    speed:0,
    mass: 15,
    init() {
        this.w = W/3;
        this.h = 10;
        this.x = W/2 - this.w/2;
        this.y = H - this.h - 10;
    },
    update() {
        if(ball.toRectCollision(this.x, this.y, this.w, this.h)) {
            ball.y = this.y - ball.r - 1;
            ball.vel.y *= -1; 
        };
        if(this.x < 0) this.x = 0;
        else if(this.x + this.w >= W) this.x = W - this.w;
        this.x += this.speed;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
};


const ball = {
    color: "red",
    speed: 5,
    initialMove: 0,
    mouseCtrlInit: false,
    init() {
        this.r = 10;
        this.x = paddle.x + paddle.w/2;
        this.y = paddle.y - this.r;
        this.vel = {x:0, y:0};
    },
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    },
    /** circle to rectangle collision detection
     *  Adapted from the book: HTML5 Canvas Note for professional
     *  A book containing most important info about canvas on SO
     */
    toRectCollision(x, y, w, h) {
        let dx = Math.abs(this.x - (x + w/2));
        let dy = Math.abs(this.y - (y + h/2));
        if(dx > this.r + w/2) return false;
        if(dy > this.r + h/2) return false;
        if(dx <= w) return true;
        if(dy <= h) return true;
        dx = dx - w;
        dy = dy - h;
        return dx * dx + dy * dy <= this.r * this.r;
    },
    update() {
        if(this.x - this.r < 0) {
            this.x = this.r;
            this.vel.x *= -1;
        } else if(this.x > W - this.r) {
            this.x = W - this.r;
            this.vel.x *= -1;
        }
        if(this.y - this.r < 0) {
            this.y = this.r;
            this.vel.y *= -1;
        } else if(this.y + this.r > paddle.y) {
            game.state = "over";
            game.started = false;
            game.end();
        }
        this.x += this.vel.x;
        this.y += this.vel.y;
        this.draw();
    }
}
;
var canvas, ctx, W, H;


// Adapted from: https://code.sololearn.com/WoF8B2e56Pd3/#
const ElasticCollision = (() => {
    let collision = {};

    const rotate = (velocity, angle) => ({
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
    });

    collision.resolve = (particleA, particleB, vel={}) => {
        if(!particleB.vel)
            particleB.vel = vel;
        let velXdiff = particleA.vel.x - particleB.vel.x;
        let velYdiff = particleA.vel.y - particleB.vel.y;

        let diffX = particleB.x - particleA.x;
        let diffY = particleB.y - particleA.y;
        // make sure particles are not overlapping
        if(diffX * velXdiff + diffY * velYdiff >= 0) {
            let angle = -Math.atan2(diffY, diffX);

            const m1 = particleA.mass || 5;
            const m2 = particleB.mass || 15;

            // get the inital velocity        
            const u1 = rotate(particleA.vel, angle);
            const u2 = rotate((particleB.vel || 0), angle);

            // use newtonian equation to determine it's final velocity
            const v1 = { x:(((m1 - m2) * u1.x) / (m1 + m2)) + ((2 * m2) * u2.x) / (m1 + m2),
                y: u1.y};
            const v2 = {x:(((2 * m1)*u1.x) / (m1 + m2)) + (((m2 - m1) * u2.x) / (m1 + m2)), 
                y: u2.y};

            // get it's final velocity
            const finalV1 = rotate(v1, -angle);
            
            if(finalV1.x < 0) {
                particleA.vel.x = Math.max(finalV1.x, -ball.speed);
            } else if(finalV1.x > 0) {
                particleA.vel.x = Math.max(finalV1.x, ball.speed);
            };
            if(finalV1.y < 0) {
                particleA.vel.y = Math.max(finalV1.y, -ball.speed);
            } else if(finalV1.y > 0) {
                particleA.vel.y = Math.max(finalV1.y, ball.speed);
            };

            // particleB.velocity.x = finalV2.x;
            // particleB.velocity.y = finalV2.y;
        }
    }
    return collision;
})();




/**Set the canvas dimension
 * set the total number of rows and col in tiles
 */
 const setWidth = () => {
    W = Math.min(~~innerWidth, 320);
    H = Math.min(~~innerHeight, 480);
    tile.c = ~~(W / (tile.w+tile.margin));
    let tmp = tile.c * (tile.w + tile.margin/2)
;
    W = tmp;
    tile.r = ~~(H/2 / (tile.h+10));
};


const createBricks = () => {
    for(let r=0; r < tile.r; r++) {
        tile.arr.push([]);
        for(let c=0; c < tile.c; c++) {
            let pos = {
                x: c * tile.w + tile.margin, 
                y: r * tile.h + tile.margin
            };
            let brick = {
                x: pos.x,
                y: pos.y, 
                w: tile.w - tile.margin,
                h: tile.h - tile.margin
            };
            tile.arr[r].push(pos);
            tile.brick.push(brick);
        }
    }
};


const update = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "lightskyblue";
    tile.brick.forEach((b, i) => {
        if(ball.toRectCollision(b.x, b.y, b.w, b.h)) {
            ElasticCollision.resolve(ball, b, {x:0, y:0});
            tile.brick.splice(i, 1);
        }
        ctx.fillRect(b.x, b.y, b.w, b.h);
    });

    paddle.update();
    ball.update();

    if(!tile.brick.length) {
        game.state = "win";
        game.started = false;
        ball.vel = {x:0, y:0};
        game.end();
    }

    requestAnimationFrame(update);
};


const game = {
    state: "new", //[new, over, win]
    started: false,
    end() {
        ctx.fillStyle = "#333";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle"; 
        ctx.strokeStyle = "lightgray";
        ctx.save();
        ctx.shadowColor = "lightgray";
        ctx.shadowOffsetX = 4;
        ctx.shadowOffestY = 4;
        ctx.font = `bold ${canvas.width/8}px Verdana`;
        ctx.fillStyle = "yellow";
        ctx.fillText(this.state === "new" ? "2D Breakout" : 
            this.state === "over" ? "Game Over" : "You Win", 
            canvas.width/2, canvas.height/2);
        ctx.restore();
        ctx.fillStyle = "red";
        ctx.font = `bold 15px Verdana`;
        ctx.fillText("Tap the screen to Play", canvas.width/2, 
            canvas.height/2 + canvas.width/5);

    }
};


const swipe = {
    x1: null,
    y1: null,
};



onload = () => {
    setWidth();
    canvas = document.getElementById("canvas");
    canvas.width = W;
    canvas.height = H;
    canvas.style.border = "1px solid #333";
    canvas.style.position = "absolute";
    canvas.style.left = `calc(100vw/2 - ${W/2}px)`;
    canvas.style.top = `calc(100vh/2 - ${H/2}px)`;
    ctx = canvas.getContext("2d");
    game.end();

    canvas.onclick = e => {
        if(!game.started) {
            game.started = true;
            ball.initialMove = 0;
            ball.mouseCtrlInit = false;
            createBricks();
            paddle.init();
            ball.init();
            if(game.state === "new")
                requestAnimationFrame(update);
        };
        if(game.started && ball.initialMove != 2) {
            ball.initialMove++;
        };
        if(!ball.mouseCtrlInit) {
            if(ball.initialMove === 2) {
                let diffX = e.clientX - ball.x;
                let diffY = e.clientY - ball.y;
                let angle = Math.atan2(diffY, diffX);
                if(angle > -15*Math.PI/180) {
                    angle = -45 * Math.PI / 180;
                }
                if(angle < -(180-15)*Math.PI/180) {
                    angle = -(180-45)*Math.PI/180;
                }
                ball.vel.x = Math.cos(angle) * ball.speed;
                ball.vel.y = Math.sin(angle) * ball.speed;
                ball.mouseCtrlInit = true;
            }
        }
    };

    window.onkeydown = e => {
        if(game.started) {
            if(e.keyCode === 37) 
                paddle.speed = -5;
            else if(e.keyCode === 39)
                paddle.speed = 5;
        }
    };
    window.onkeyup = () => {
        paddle.speed = 0;
    };
    
    window.ontouchstart = e => {
        if(game.started && !ball.mouseCtrlInit) {
            //swipe.x1 = e.touches[0].pageX;
        }
    }
    
    window.ontouchmove = e => {
        if(game.started) {
            //swipe.x1 = e.touches[0].pageX;
            paddle.x = e.touches[0].pageX - (paddle.w/2);
        }
    };
    
    window.ontouchend = () => {
        paddle.speed = 0;
        swipe.x1 = 0;
    }
};

alert("Swipe to control paddle");
