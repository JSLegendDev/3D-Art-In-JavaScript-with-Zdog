import { TAU, makeHouse, makeTree } from "./components.js";

let isSpinning = true
let illustration = new Zdog.Illustration({
    element: '.zdog-canvas',
    dragRotate: true,
    rotate: {x: -TAU/10, y: TAU/3},
    onDragStart: function() {
        isSpinning = false;
    }
})

// green house
makeHouse(
    illustration, 
    '#8FD4B1', 
    '#41918F',
    0,
    0,
    0
)

// red house
makeHouse(
    illustration,
    '#F67F8C',
    '#C33A5A',
    -TAU/4,
    -200,
    0
)

// orange house
makeHouse(
    illustration,
    '#F88B33',
    '#C4521B',
    -TAU/8,
    200,
    0
)

makeTree(
    illustration,
    '#900C3F', 
    '#9e5132',
    0,
    0,
    100
)

makeTree(
    illustration,
    '#c05770',
    '#9e5132',
    -100,
    0,
    150
)

makeTree(
    illustration,
    '#c05770',
    '#9e5132',
    -100,
    0,
    -200
)

makeTree(
    illustration,
    '#fdc748',
    '#9e5132',
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