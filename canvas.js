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

Tree(
    illustration,
    'red',
    0,
    0,
    100
)

Tree(
    illustration,
    'pink',
    -100,
    0,
    150
)

Tree(
    illustration,
    'pink',
    -100,
    0,
    -200
)

Tree(
    illustration,
    'yellow',
    -300,
    0,
    -200
)

function animate() {
    if (isSpinning) {
        illustration.rotate.y += 0.01
    }

    illustration.updateRenderGraph()
    requestAnimationFrame(animate)
}

animate()