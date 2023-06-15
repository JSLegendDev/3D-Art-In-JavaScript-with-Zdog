const TAU = Zdog.TAU

let illustration = new Zdog.Illustration({
    element: '.zdog-canvas',
    dragRotate: true
})

let house = new Zdog.Anchor({
    addTo: illustration
})

new Zdog.Box({
    addTo: house,
    width: 120,
    height: 100,
    depth: 80,
    color: '#45A771',
    rearFace: '#164541',
    leftFace: '#164541'
})

new Zdog.Polygon({
    addTo: house,
    sides: 3,
    fill: true,
    color: '#164541',
    radius: 46,
    translate: {y: -68, x: -60, z: 0},
    rotate: {y: TAU/4}
})

new Zdog.Polygon({
    addTo: house,
    sides: 3,
    fill: true,
    color: '#45a771',
    radius: 46,
    translate: {y: -68, x: 60, z: 0},
    rotate: {y: TAU/4}
})

new Zdog.Rect({
    addTo: house,
    width: 120,
    height: 72,
    stroke: 4,
    fill: true,
    color: '#0A0408',
    translate: {y: -81, z: 20},
    rotate: {x: TAU/12}
})

new Zdog.Rect({
    addTo: house,
    width: 120,
    height: 72,
    stroke: 4,
    fill: true,
    color: '#0A0408',
    translate: {y: -81, z: -20},
    rotate: {x: -TAU/12}
})

new Zdog.Rect({
    addTo: house,
    width: 20,
    height: 20,
    fill: true,
    color: '#45a771',
    translate: {y: -3, z: -42}
})

new Zdog.Rect({
    addTo: house,
    width: 20,
    height: 20,
    fill: true,
    color: '#164541',
    rotate: {y: TAU/4},
    translate: {y: -3, z: 0, x: 62}
})

function animate() {
    illustration.updateRenderGraph()
    requestAnimationFrame(animate)
}

animate()