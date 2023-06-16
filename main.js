const TAU = Zdog.TAU

let illustration = new Zdog.Illustration({
    element: '.zdog-canvas',
    dragRotate: true
})

let greenHouse = new Zdog.Anchor({
    addTo: illustration
})

let redHouse = new Zdog.Anchor({
    addTo: illustration,
    rotate: {y: -TAU/4},
    translate: {x: -200}
})

let orangeHouse = new Zdog.Anchor({
    addTo: illustration,
    rotate: {y: -TAU/8},
    translate: {x: 200}
})

let greenHouseColors = {
    lightColor: '#8FD4B1',
    darkColor: '#41918F',
    roofColor: '#341F32'
}

let orangeHouseColors = {
    lightColor: '#F88B33',
    darkColor: '#C4521B',
    roofColor: '#351F31'
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

function makeTree(parent, color) {
    let tree = new Zdog.Anchor({
        addTo: parent,
        translate: {y: 0, z: 100},
        rotate: {x: TAU/4}
    })

    new Zdog.Cone({
        addTo: tree,
        diameter: 50,
        length: 90,
        color,
    })
}

makeHouse(
    greenHouse, 
    greenHouseColors.lightColor, 
    greenHouseColors.darkColor,
    greenHouseColors.roofColor
)

makeHouse(
    redHouse,
    '#F67F8C',
    '#C33A5A',
    '#341F32'
)

makeHouse(
    orangeHouse,
    orangeHouseColors.lightColor,
    orangeHouseColors.darkColor,
    orangeHouseColors.roofColor
)

makeTree(illustration, '#B69C7A')

function animate() {
    illustration.updateRenderGraph()
    requestAnimationFrame(animate)
}

animate()