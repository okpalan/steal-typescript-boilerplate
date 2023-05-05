import { Spring } from "./classes/spring";
import { TextEffect } from "./utils/index";
const canvas = document.getElementById('softtext') as HTMLCanvasElement
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D // Draw the particles and springs on the canvas

const textEffect = new TextEffect("Hello World!", canvas.width ,canvas.height);
const { draw, particles } = textEffect.generateParticles(canvas, 100,.8,.1,100)

// Create springs between adjacent particles
const springs = [];
for (let i = 0; i < particles.length - 1; i++) {
    const particleA = particles[i];
    const particleB = particles[i + 1];
    const spring = new Spring([particleA, particleB], { restLength: 50 });
    springs.push(spring);
}

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

for (const particle of particles) {
    ctx.beginPath();
    ctx.arc(particle.position.x, particle.position.y, 2, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
}

for (const spring of springs) {
    ctx.beginPath();
    ctx.moveTo(spring.nodes[0].position.x, spring.nodes[0].position.y);
    ctx.lineTo(spring.nodes[1].position.x, spring.nodes[1].position.y);
    ctx.strokeStyle = 'white';
    ctx.stroke();
}
console.log(ctx)
draw(ctx)

