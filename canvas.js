import { TAU, House, Tree } from "./components.js";

let isSpinning = true
let illustration = new Zdog.Illustration({
    element: '.zdog-canvas',
    dragRotate: true,
    rotate: {x: -TAU/10, y: TAU/3},
    onDragStart: function() {
        isSpinning = false;
    },
    resize: 'fullscreen'
})

let housesData = [
    {color: 'turquoise', angle: 0, x: 0, y: 0, z: 0},
    {color: 'red', angle: -TAU/4, x: -200, y: 0, z: 0},
    {color: 'orange', angle: -TAU/8, x: 200, y: 0, z: 0},
    {color: 'red', angle: -TAU/4, x: 300, y: 0, z: -300},
    {color: 'red', angle: -TAU/4, x: 300, y: 0, z: -400},
    {color: 'turquoise', angle: -TAU/15, x: 300, y: 0, z: 250},
    {color: 'orange', angle: 0, x: -50, y: 0, z: -400},
]

for (const house of housesData) {
    House(
        illustration, 
        house.color,
        house.angle,
        house.x,
        house.y,
        house.z
    )
}

let treesData = [
    {color: 'yellow', x: 0, y: 0, z: 100},
    {color: 'yellow', x: -100, y: 0, z: 150},
    {color: 'yellow', x: -100, y: 0, z: -200},
    {color: 'yellow', x: -300, y: 0, z: -200},
    {color: 'yellow', x: -300, y: 0, z: -200},
    {color: 'yellow', x: -230, y: 0, z: -350},
    {color: 'yellow', x: -150, y: 0, z: -320},
    {color: 'yellow', x: 300, y: 0, z: -200},
    {color: 'yellow', x: 350, y: 0, z: 150},
    {color: 'yellow', x: -150, y: 0, z: -320},
    {color: 'yellow', x: 80, y: 0, z: -200},
    {color: 'yellow', x: -230, y: 0, z: -100},
    {color: 'yellow', x: -50, y: 0, z: -320},
    {color: 'yellow', x: 300, y: 0, z: -130},
    {color: 'yellow', x: 220, y: 0, z: 120},
    {color: 'yellow', x: -30, y: 0, z: 150},
    {color: 'yellow', x: 10, y: 0, z: -570},
    {color: 'yellow', x: 30, y: 0, z: -500},
    {color: 'yellow', x: 100, y: 0, z: 100},
    {color: 'yellow', x: 150, y: 0, z: 150},
    {color: 'yellow', x: 300, y: 0, z: -130},
]

for (const tree of treesData) {
    Tree(
        illustration,
        tree.color,
        tree.x,
        tree.y,
        tree.z
    )
}

function animate() {
    if (isSpinning) {
        illustration.rotate.y += 0.01
    }

    illustration.updateRenderGraph()
    requestAnimationFrame(animate)
}

animate()