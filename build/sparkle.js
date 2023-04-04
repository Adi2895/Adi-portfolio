const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;
let spots = [];
let hue = 0;

const mouse = {
    x: undefined,
    y:undefined
}

canvas.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i = 0; i < 2; i++) {
        spots.push(new particle());
    }
});

class particle{
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 2 + 0.2;
        this.speedX = Math.random() * 3 - 1;
        this.speedY = Math.random() * 3 - 1;
        this.color = 'hsl(' + hue + ', 100%, 50%)';

    }

    update(){
        this.x += this.speedX;
        this.x += this.speedY;
        if(this.size > 0.2) this.size -= 0.03;
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x , this.y, this.size , 0, Math.PI * 2);
        ctx.fill();

    }
}


function handleParticle(){
    for(let i = 0; i < spots.length; i++){
        spots[i].update();
        spots[i].draw();
        for(let j = 0; j < spots.length; j++) {
            const dx = spots[i].x - spots[j].x;
            const dy = spots[i].y + spots[j].y;
            const distance = Math.sqrt(dx * dx + dy);
            if(distance< 90) {
                ctx.beginPath();
                ctx.strokeStyle = spots[i].color;
                ctx.lineWidth = spots[i].size / 10;
                ctx.moveTo(spots[i].x, spots[i].y);
                ctx.lineTo(spots[j].x, spots[j].y);
                ctx.stroke();
            }

        }
        
        if(spots[i].size <=0.3){
            spots.splice(i, 1); i--;
        }
    }
}


function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    handleParticle();
    hue++;
    requestAnimationFrame(animate);
}


window.addEventListener('resize', function(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    // this.innerWidth(); 
})

window.addEventListener('mouseout', function(){
    mouse.x = undefined;
    mouse.y = undefined;
})

animate();