export const TAU = Zdog.TAU

export function House(
    parent, 
    lightColor, 
    darkColor, 
    angle,
    x,
    y,
    z
) {
    let house = new Zdog.Anchor({
        addTo: parent,
        rotate: {y: angle},
        translate: {x, y, z}
    })

    new Zdog.Box({
        addTo: house,
        width: 120,
        height: 100,
        depth: 80,
        color: lightColor,
        rearFace: darkColor,
        frontFace: darkColor
    })
    
    new Zdog.Polygon({
        addTo: house,
        sides: 3,
        fill: true,
        color: lightColor,
        radius: 46,
        translate: {y: -68, x: -60, z: 0},
        rotate: {y: TAU/4}
    })
    
    new Zdog.Polygon({
        addTo: house,
        sides: 3,
        fill: true,
        color: lightColor,
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
        color: '#341F32',
        translate: {y: -81, z: 20},
        rotate: {x: TAU/12}
    })
    
    new Zdog.Rect({
        addTo: house,
        width: 120,
        height: 72,
        stroke: 4,
        fill: true,
        color: '#341F32',
        translate: {y: -81, z: -20},
        rotate: {x: -TAU/12}
    })
    
    new Zdog.Rect({
        addTo: house,
        width: 20,
        height: 20,
        fill: true,
        color: '#341F32',
        translate: {y: -3, z: -42}
    })
    
    new Zdog.Rect({
        addTo: house,
        width: 20,
        height: 20,
        fill: true,
        color: darkColor,
        rotate: {y: TAU/4},
        translate: {y: -3, z: 0, x: 62}
    })
}

export function Tree(parent, colorName, x, y, z) {
    const trunkColor = '#9e5132'
    const colors = {
        'red': '#900C3F',
        'pink': '#c05770',
        'yellow': '#fdc748'
    }

    const color = colors[colorName] ?? colors['red']
    
    let tree = new Zdog.Anchor({
        addTo: parent,
        translate: {x, y, z},
        rotate: {x: TAU/4}
    })

    new Zdog.Cone({
        addTo: tree,
        diameter: 50,
        length: 90,
        color,
    })

    new Zdog.Hemisphere({
        addTo: tree,
        diameter: 50,
        color,
        rotate: {y: TAU/2},
        translate: {z: 0}
    })

    new Zdog.Cylinder({
        addTo: tree,
        diameter: 10,
        length: 27,
        color: trunkColor,
        translate: {z: -35}
    })
}