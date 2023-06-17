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

// green house
House(
    illustration, 
    '#8FD4B1', 
    '#41918F',
    0,
    0,
    0
)

// red house
House(
    illustration,
    '#F67F8C',
    '#C33A5A',
    -TAU/4,
    -200,
    0
)

// orange house
House(
    illustration,
    '#F88B33',
    '#C4521B',
    -TAU/8,
    200,
    0
)

let treesData = [
    {color: 'red', x: 0, y: 0, z: 100},
    {color: 'pink', x: -100, y: 0, z: 150},
    {color: 'pink', x: -100, y: 0, z: -200},
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
    {color: 'red', x: 220, y: 0, z: 120},
    {color: 'pink', x: 10, y: 0, z: -100},
    {color: 'red', x: -30, y: 0, z: 150},
    {color: 'pink', x: 50, y: 0, z: -320},
    {color: 'red', x: 10, y: 0, z: -570},
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