const TAU = Zdog.TAU

let illustration = new Zdog.Illustration({
    element: '.zdog-canvas',
    dragRotate: true
})

let house = new Zdog.Anchor({
    addTo: illustration
})

let redHouse = new Zdog.Anchor({
    addTo: illustration,
    rotate: {y: -TAU/4},
    translate: {x: -110}
})

let greenHouse = {
    lightColor: '#45a771',
    darkColor: '#164541',
    roofColor: '#0A0408'
}

function makeHouse(
    parent, 
    lightColor, 
    darkColor, 
    roofColor
) {
    new Zdog.Box({
        addTo: parent,
        width: 120,
        height: 100,
        depth: 80,
        color: lightColor,
        rearFace: darkColor,
        leftFace: darkColor
    })
    
    new Zdog.Polygon({
        addTo: parent,
        sides: 3,
        fill: true,
        color: darkColor,
        radius: 46,
        translate: {y: -68, x: -60, z: 0},
        rotate: {y: TAU/4}
    })
    
    new Zdog.Polygon({
        addTo: parent,
        sides: 3,
        fill: true,
        color: lightColor,
        radius: 46,
        translate: {y: -68, x: 60, z: 0},
        rotate: {y: TAU/4}
    })
    
    new Zdog.Rect({
        addTo: parent,
        width: 120,
        height: 72,
        stroke: 4,
        fill: true,
        color: roofColor,
        translate: {y: -81, z: 20},
        rotate: {x: TAU/12}
    })
    
    new Zdog.Rect({
        addTo: parent,
        width: 120,
        height: 72,
        stroke: 4,
        fill: true,
        color: roofColor,
        translate: {y: -81, z: -20},
        rotate: {x: -TAU/12}
    })
    
    new Zdog.Rect({
        addTo: parent,
        width: 20,
        height: 20,
        fill: true,
        color: roofColor,
        translate: {y: -3, z: -42}
    })
    
    new Zdog.Rect({
        addTo: parent,
        width: 20,
        height: 20,
        fill: true,
        color: darkColor,
        rotate: {y: TAU/4},
        translate: {y: -3, z: 0, x: 62}
    })
}

makeHouse(
    house, 
    greenHouse.lightColor, 
    greenHouse.darkColor,
    greenHouse.roofColor
)

makeHouse(
    redHouse,
    '#E73934',
    '#8C110C',
    '#0A0408'
)

function animate() {
    illustration.updateRenderGraph()
    requestAnimationFrame(animate)
}

animate()