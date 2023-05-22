const points = [
    // {
    //     "name": "",
    //     "description": "",
    //     "related_images" : [],
    //     "icon": "./icons/debug.png",
    //     "positioning": "poitioned_on_top",
    //     "xPos": -630,
    //     "yPos": 190
    // },
    // satellites
    {
        "name": "Papa",
        "description": "",
        "related_images" : [],
        "icon": "./icons/p.png",
        "positioning": "poitioned_on_top",
        "xPos": 300,
        "yPos": 300
    },
    {
        "name": "Golf",
        "description": "",
        "related_images" : [],
        "icon": "./icons/g.png",
        "positioning": "poitioned_on_top",
        "xPos": 200,
        "yPos": 100
    },
    {
        "name": "Foxtrot",
        "description": "",
        "related_images" : [],
        "icon": "./icons/f.png",
        "positioning": "poitioned_on_top",
        "xPos": 200,
        "yPos": 0
    },
    {
        "name": "Echo",
        "description": "",
        "related_images" : [],
        "icon": "./icons/e.png",
        "positioning": "poitioned_on_top",
        "xPos": 200,
        "yPos": -100
    },
    {
        "name": "Oscar",
        "description": "",
        "related_images" : [],
        "icon": "./icons/o.png",
        "positioning": "poitioned_on_top",
        "xPos": 300,
        "yPos": -300
    },
    {
        "name": "Tango",
        "description": "",
        "related_images" : [],
        "icon": "./icons/t.png",
        "positioning": "poitioned_on_top",
        "xPos": 500,
        "yPos": -500
    },
    {
        "name": "Uniform",
        "description": "",
        "related_images" : [],
        "icon": "./icons/u.png",
        "positioning": "poitioned_on_top",
        "xPos": 500,
        "yPos": 0
    },
    {
        "name": "India",
        "description": "",
        "related_images" : [],
        "icon": "./icons/i.png",
        "positioning": "poitioned_on_top",
        "xPos": 0,
        "yPos": 200
    },
    {
        "name": "Victor",
        "description": "",
        "related_images" : [],
        "icon": "./icons/v.png",
        "positioning": "poitioned_on_top",
        "xPos": 500,
        "yPos": 500
    },
    {
        "name": "Hotel",
        "description": "",
        "related_images" : [],
        "icon": "./icons/h.png",
        "positioning": "poitioned_on_top",
        "xPos": 100,
        "yPos": 200
    },
    {
        "name": "Juliett",
        "description": "",
        "related_images" : [],
        "icon": "./icons/j.png",
        "positioning": "poitioned_on_top",
        "xPos": -100,
        "yPos": 200
    },
    {
        "name": "Whiskey",
        "description": "",
        "related_images" : [],
        "icon": "./icons/w.png",
        "positioning": "poitioned_on_top",
        "xPos": 0,
        "yPos": 500
    },
    {
        "name": "Xray",
        "description": "",
        "related_images" : [],
        "icon": "./icons/x.png",
        "positioning": "poitioned_on_top",
        "xPos": -500,
        "yPos": 500
    },
    {
        "name": "Quebec",
        "description": "",
        "related_images" : [],
        "icon": "./icons/q.png",
        "positioning": "poitioned_on_top",
        "xPos": -300,
        "yPos": 300
    },
    {
        "name": "Kilo",
        "description": "",
        "related_images" : [],
        "icon": "./icons/k.png",
        "positioning": "poitioned_on_top",
        "xPos": -200,
        "yPos": 100
    },
    {
        "name": "Lima",
        "description": "",
        "related_images" : [],
        "icon": "./icons/l.png",
        "positioning": "poitioned_on_top",
        "xPos": -200,
        "yPos": 0
    },
    {
        "name": "Mike",
        "description": "",
        "related_images" : [],
        "icon": "./icons/m.png",
        "positioning": "poitioned_on_top",
        "xPos": -200,
        "yPos": -100
    },
    {
        "name": "Bravo",
        "description": "",
        "related_images" : [],
        "icon": "./icons/b.png",
        "positioning": "poitioned_on_top",
        "xPos": -100,
        "yPos": -200
    },
    {
        "name": "Charlie",
        "description": "",
        "related_images" : [],
        "icon": "./icons/c.png",
        "positioning": "poitioned_on_top",
        "xPos": 0,
        "yPos": -200
    },
    {
        "name": "Delta",
        "description": "",
        "related_images" : [],
        "icon": "./icons/d.png",
        "positioning": "poitioned_on_top",
        "xPos": 100,
        "yPos": -200
    },
    {
        "name": "Sierra",
        "description": "",
        "related_images" : [],
        "icon": "./icons/s.png",
        "positioning": "poitioned_on_top",
        "xPos": 0,
        "yPos": -500
    },
    {
        "name": "November",
        "description": "",
        "related_images" : [],
        "icon": "./icons/n.png",
        "positioning": "poitioned_on_top",
        "xPos": -300,
        "yPos": -300
    },
    {
        "name": "Romeo",
        "description": "",
        "related_images" : [],
        "icon": "./icons/r.png",
        "positioning": "poitioned_on_top",
        "xPos": -500,
        "yPos": -500
    },
    {
        "name": "Yankee",
        "description": "",
        "related_images" : [],
        "icon": "./icons/y.png",
        "positioning": "poitioned_on_top",
        "xPos": -500,
        "yPos": 0
    },
    // metal tiles
    {
        "name": "Metal Tile #1",
        "description": "Found on top of the base. You can get on top of the base by using the ladder on the south of the base.",
        "related_images" : ['./images/tile1_1.png', './images/tile1_2.png', './images/tile1_3.png'],
        "icon": "./icons/metal_tile.png",
        "positioning": "positioned_above",
        "xPos": 0,
        "yPos": -9
    },
    {
        "name": "Metal Tile #2",
        "description": "On top of the truss of the bridge.",
        "related_images" : ['./images/tile2_1.png', './images/tile2_2.png'],
        "icon": "./icons/metal_tile.png",
        "positioning": "positioned_above",
        "xPos": -68.5,
        "yPos": 16
    },
    {
        "name": "Metal Tile #3",
        "description": "This is, by far, the hardest tile to find. If you don't have a digital map, I recommend you: <br><br>1. go to quebec.<br>2. reset your compass with <i>sv.target reset</i>.<br>3. go below quebec and orient yourself to what is seen in the first image below.<br>4. walk forward until you are around halfway inbetween quebec and sierra. you should find yourself in a clearing similar to what is seen in image 2, 3, and 4 (note the 3 trees next to eachother).<br>5. continue searching in that area until you find the key.",
        "related_images" : ['./images/tile3_1.png', './images/tile3_2.png', './images/tile3_3.png', './images/tile3_4.png'],
        "icon": "./icons/metal_tile.png",
        "positioning": "positioned_above",
        "xPos": -464,
        "yPos": 173
    },
    {
        "name": "Metal Tile #4",
        "description": "Found at the base of a tree to the north of Yankee.",
        "related_images" : ['./images/tile4_1.png', './images/tile4_2.png', './images/tile4_3.png'],
        "icon": "./icons/metal_tile.png",
        "positioning": "positioned_above",
        "xPos": -525,
        "yPos": -47
    },
    {
        "name": "Metal Tile #5",
        "description": "Under the table at the hole.",
        "related_images" : ['./images/tile5_1.png', './images/tile5_2.png', './images/tile5_3.png'],
        "icon": "./icons/metal_tile.png",
        "positioning": "positioned_above",
        "xPos": -620,
        "yPos": -28
    },
    {
        "name": "Metal Tile #6",
        "description": "Under the table at the guard's booth. You will need to get outside of the fence to access the guard's booth.",
        "related_images" : ['./images/tile6_1.png', './images/tile6_2.png', './images/tile6_3.png'],
        "icon": "./icons/metal_tile.png",
        "positioning": "positioned_above",
        "xPos": -371,
        "yPos": 702
    },
    {
        "name": "Metal Tile #7",
        "description": "Found on the ground next to the green locker.",
        "related_images" : ['./images/tile7_1.png', './images/tile7_2.png', './images/tile7_3.png'],
        "icon": "./icons/metal_tile.png",
        "positioning": "positioned_above",
        "xPos": 616,
        "yPos": 621
    },
    {
        "name": "Metal Tile #8",
        "description": "Found behind the top room of uniform. Once you are near the doors, crouch under the railing and walk around the platform to find it.",
        "related_images" : ['./images/tile8_1.png', './images/tile8_2.png'],
        "icon": "./icons/metal_tile.png",
        "positioning": "positioned_above",
        "xPos": 500,
        "yPos": -3
    },
    {
        "name": "Metal Tile #9",
        "description": "No, seriously. This marker isn't placed wrong. Go past the fence and keep going until you hit the corner between the northern and eastern invisible walls.",
        "related_images" : ['./images/tile9_1.png', './images/tile9_2.png', './images/tile9_3.png'],
        "icon": "./icons/metal_tile.png",
        "positioning": "positioned_above",
        "xPos": 874,
        "yPos": -874
    },
    // Argemia Plushes
    {
        "name": "Green Argemia",
        "description": "Outside of the fence, located on the top of the mountain",
        "related_images" : ['./images/greenArgemia_1.png', './images/greenArgemia_2.png', './images/greenArgemia_3.png', './images/greenArgemia_4.png'],
        "icon": "./icons/green_argemia.png",
        "positioning": "poitioned_on_top",
        "xPos": 239,
        "yPos": 828
    },
    {
        "name": "Red Argemia",
        "description": "Located in a steep pit with a piece of paper on its head.<br>IMPORTANT NOTE: Bring your ATV into the pit, the walls of the pit are too steep to allow you to walk out.",
        "related_images" : ['./images/redArgemia_1.png', './images/redArgemia_2.png', './images/redArgemia_3.png', './images/redArgemia_4.png'],
        "icon": "./icons/red_argemia.png",
        "positioning": "poitioned_on_top",
        "xPos": 626,
        "yPos": -128
    },
    {
        "name": "Blue Argemia",
        "description": "At the bottom of the river, near quebec. Depending on your graphics settings, the plush might appear <i>in</i> the ground and may require you to scour the riverbed while crouching to find it.",
        "related_images" : ['./images/blueArgemia_1.png', './images/blueArgemia_2.png'],
        "icon": "./icons/blue_argemia.png",
        "positioning": "poitioned_on_top",
        "xPos": -315,
        "yPos": 398
    },
    {
        "name": "Glowing Blue Argemia",
        "description": "Found atop a white cube in the sky. You can get it by either knocking it off with a drone, or going to it yourself using a flying machine glitch. The plushie is stuck firmly to the cube, so knocking it off by drone will take multiple attempts and you may lose it when it falls. You can check out different flying machine designs on the <a href=\"https://discord.gg/WKBvqu4tjV\" target=\"_blank\" rel=\"noopener noreferrer\">discord</a>.",
        "related_images" : ['./images/glowingBlueArgemia_1.png', './images/glowingBlueArgemia_2.png', './images/glowingBlueArgemia_3.png'],
        "icon": "./icons/glowing_blue_argemia.png",
        "positioning": "poitioned_on_top",
        "xPos": 872,
        "yPos": -792
    },
    {
        "name": "Glowing Cyan Argemia",
        "description": "Needs to be dug up using a shovel. You can use a metal detector if you're having any trouble finding it, but it probably won't be nessessary. Be careful to not let the plushie roll down the hill.",
        "related_images" : ['./images/glowingCyanArgemia_1.png', './images/glowingCyanArgemia_2.png', './images/glowingCyanArgemia_3.png'],
        "icon": "./icons/glowing_cyan_argemia.png",
        "positioning": "poitioned_on_top",
        "xPos": -630,
        "yPos": 189.6
    },
    {
        "name": "Glowing Magenta Argemia",
        "description": "The plush's spawn location is located near the top of the tower. In order for the plush to spawn, something (a piece of trash, a drone, etc.) needs to enter that spawning location's hitbox. The usual method is placing a drone around (34.8, -36.8) and then having the drone fly up. When the plush spawns, it will fall and you may not notice it. I recommend placing a camera down below and constantly flicking to it to see it the plush has spawned. You may need to repeat this method multiple times to get it. Good luck.",
        "related_images" : ['./images/glowingMagentaArgemia_1.png', './images/glowingMagentaArgemia_2.png'],
        "icon": "./icons/glowing_magenta_argemia.png",
        "positioning": "poitioned_on_top",
        "xPos": 34.8,
        "yPos": -36.8
    },
    // Unknown Rozital Technology
    {
        "name": "Unknown Rozital Technology",
        "description": "Found situated between two rocks, and will do nothing until you discover a signal.<br>Once the <i>lifecrystal</i> signal has been downloaded and processed to level 3, an event will occur the next night that features a purple laser coming down from the sky onto the technology. After the event, the technology will glow a subtle pink, and after approaching, will begin to spin and click before flying into the air and disappearing in a flash of light.<br>Whether the technology was supposed to originate from the laser, or that the laser simply \'activated\' the technology is unknown.",
        "related_images" : ['./images/rozital_1.png', './images/rozital_2.png', './images/rozital_3.png', './images/rozital_4.png'],
        "icon": "./icons/rozital.png",
        "positioning": "poitioned_on_top",
        "xPos": 637,
        "yPos": 44
    },
    // Antibreather Plush
    {
        "name": "Antibreather Plush",
        "description": "Appears in the antibreather cave at 3:33am in-game. In order for it to spawn, you must be in the cave when the time passes. The plush won't disappear, but the plush only spawns in once, so don't lose it.",
        "related_images" : ['./images/antibreatherPlush_1.png', './images/antibreatherPlush_2.png'],
        "icon": "./icons/antibreather_plush.png",
        "positioning": "poitioned_on_top",
        "xPos": -652.7,
        "yPos": -598.8
    },
    // Items of interest
    {
        "name": "Shovel",
        "description": "Found leaning on 3 supply boxes next to stonehenge",
        "related_images" : ['./images/shovel_1.png'],
        "icon": "./icons/shovel.png",
        "positioning": "poitioned_on_top",
        "xPos": 209.2,
        "yPos": 535.2
    },
    // Chicken Burgers
    // {
    //     "name": "Burger",
    //     "description": "",
    //     "related_images" : [],
    //     "icon": "./icons/burger.png",
    //     "positioning": "poitioned_on_top",
    //     "xPos": -8,
    //     "yPos": 3
    // },
    // {
    //     "name": "Burger",
    //     "description": "",
    //     "related_images" : [],
    //     "icon": "./icons/burger.png",
    //     "positioning": "poitioned_on_top",
    //     "xPos": -9,
    //     "yPos": 9
    // },
    // {
    //     "name": "Burger",
    //     "description": "",
    //     "related_images" : [],
    //     "icon": "./icons/burger.png",
    //     "positioning": "poitioned_on_top",
    //     "xPos": -9,
    //     "yPos": -3
    // },
    // {
    //     "name": "Burger",
    //     "description": "",
    //     "related_images" : [],
    //     "icon": "./icons/burger.png",
    //     "positioning": "poitioned_on_top",
    //     "xPos": -10,
    //     "yPos": -3
    // },
    // {
    //     "name": "Burger",
    //     "description": "",
    //     "related_images" : [],
    //     "icon": "./icons/burger.png",
    //     "positioning": "poitioned_on_top",
    //     "xPos": -13,
    //     "yPos": 6
    // },
    // {
    //     "name": "Burger",
    //     "description": "",
    //     "related_images" : [],
    //     "icon": "./icons/burger.png",
    //     "positioning": "poitioned_on_top",
    //     "xPos": -14,
    //     "yPos": 19
    // },
    // {
    //     "name": "Burger",
    //     "description": "",
    //     "related_images" : [],
    //     "icon": "./icons/burger.png",
    //     "positioning": "poitioned_on_top",
    //     "xPos": -6,
    //     "yPos": 19
    // },
    // {
    //     "name": "Burger",
    //     "description": "",
    //     "related_images" : [],
    //     "icon": "./icons/burger.png",
    //     "positioning": "poitioned_on_top",
    //     "xPos": -7,
    //     "yPos": 13
    // },
    // {
    //     "name": "Burger",
    //     "description": "",
    //     "related_images" : [],
    //     "icon": "./icons/burger.png",
    //     "positioning": "poitioned_on_top",
    //     "xPos": -4,
    //     "yPos": 16
    // },
    // {
    //     "name": "Burger",
    //     "description": "",
    //     "related_images" : [],
    //     "icon": "./icons/burger.png",
    //     "positioning": "poitioned_on_top",
    //     "xPos": 6,
    //     "yPos": 19
    // },
    // {
    //     "name": "Burger",
    //     "description": "",
    //     "related_images" : [],
    //     "icon": "./icons/burger.png",
    //     "positioning": "poitioned_on_top",
    //     "xPos": 5,
    //     "yPos": 10
    // },
    // {
    //     "name": "Burger",
    //     "description": "",
    //     "related_images" : [],
    //     "icon": "./icons/burger.png",
    //     "positioning": "poitioned_on_top",
    //     "xPos": -14,
    //     "yPos": -10
    // },
    // {
    //     "name": "Burger",
    //     "description": "",
    //     "related_images" : [],
    //     "icon": "./icons/burger.png",
    //     "positioning": "poitioned_on_top",
    //     "xPos": -62,
    //     "yPos": 12
    // },
    // {
    //     "name": "Burger",
    //     "description": "",
    //     "related_images" : [],
    //     "icon": "./icons/burger.png",
    //     "positioning": "poitioned_on_top",
    //     "xPos": 43,
    //     "yPos": -12
    // },
    // {
    //     "name": "Burger",
    //     "description": "",
    //     "related_images" : [],
    //     "icon": "./icons/burger.png",
    //     "positioning": "poitioned_on_top",
    //     "xPos": 11,
    //     "yPos": 29
    // },
    // {
    //     "name": "Burger",
    //     "description": "",
    //     "related_images" : [],
    //     "icon": "./icons/burger.png",
    //     "positioning": "poitioned_on_top",
    //     "xPos": 3,
    //     "yPos": 18
    // },
    // {
    //     "name": "Burger",
    //     "description": "",
    //     "related_images" : [],
    //     "icon": "./icons/burger.png",
    //     "positioning": "poitioned_on_top",
    //     "xPos": -100,
    //     "yPos": 203
    // },
    // {
    //     "name": "Burger",
    //     "description": "",
    //     "related_images" : [],
    //     "icon": "./icons/burger.png",
    //     "positioning": "poitioned_on_top",
    //     "xPos": -621,
    //     "yPos": -28
    // },
    // {
    //     "name": "Burger",
    //     "description": "",
    //     "related_images" : [],
    //     "icon": "./icons/burger.png",
    //     "positioning": "poitioned_on_top",
    //     "xPos": -651,
    //     "yPos": -587
    // },
    // {
    //     "name": "Burger",
    //     "description": "",
    //     "related_images" : [],
    //     "icon": "./icons/burger.png",
    //     "positioning": "poitioned_on_top",
    //     "xPos": 639,
    //     "yPos": 44
    // },
    // {
    //     "name": "Burger",
    //     "description": "",
    //     "related_images" : [],
    //     "icon": "./icons/burger.png",
    //     "positioning": "poitioned_on_top",
    //     "xPos": 157,
    //     "yPos": -584
    // },
]
const lines = [
    {
        "color": "#058ED9",
        "coordinates": [[-690, -700], [700, -700], [700, -215]]
    },
    {
        "color": "#058ED9",
        "coordinates": [[700, -200], [700, 700], [-700, 700], [-700, -70]]
    },
    {
        "color": "#058ED9",
        "coordinates": [[-700, -85], [-700, -700]]
    },
    {
        "color": "#29B1FA",
        "coordinates": [[224, 476.5], [229.9, 478], [235.5, 480.5], [241.2, 482.3], [251, 489.5], [254.9, 494.3], [261.6, 504.4], [266.8, 515.4], [270, 526.9], [276, 526.9], [284.5, 535.7], [279.3, 546.4], [277.7, 552.5], [279.6, 558.2], [279.2, 564.2], [280.4, 570.2], [278.7, 576], [274, 580], [262.3, 582.5], [258, 586.8], [250.9, 596.7], [246.2, 600.6], [238.1, 609.7], [234.7, 615], [229, 617.2], [223, 617.6], [211.7, 613.5], [205.8, 612.6], [194.5, 608], [188.5, 608.3], [188, 602.4], [183.3, 598.5], [172.6, 593.4], [169.2, 588.6], [164.6, 584.7], [159.5, 581.8], [152.1, 572.6], [149, 561], [146.8, 555.4], [143.8, 550.4], [142.1, 544.6], [142.1, 538.8], [143.7, 526.8], [145.1, 521], [147.1, 515.6], [153.5, 505.4], [157.9, 501.2], [159.8, 495.6], [163.7, 491], [168.5, 487.5], [172.7, 482.9], [178.5, 483.7], [183.8, 486.4], [189.8, 485.7], [201, 481], [206.3, 478], [218, 476], [224, 476.5]]
    }
]
var map_container = document.getElementById('map_container');
var information_pane = document.getElementById('information_pane');
var information_header = document.getElementById('information_header');
var information_coords = document.getElementById('information_coords');
var information_text = document.getElementById('information_text');
var information_images = document.getElementById('information_images');
var map_pane = document.getElementById('map_pane')
var map_image = document.getElementById('map_image')
var map_canvas = document.getElementById('map_canvas')
var ctx = map_canvas.getContext('2d');
var display_image = document.getElementById('display_image')
var display_image_container = document.getElementById('display_image_container')
function centerMap() {
    map_container.style.left = Math.floor((map_pane.offsetWidth - map_image.offsetWidth) / 2).toString() + 'px'
    map_container.style.top = Math.floor((map_pane.offsetHeight - map_image.offsetHeight) / 2).toString() + 'px'
};

var currentSize = 896;
var clickedWithoutMovement = false;
var drag = {
    x: 0,
    y: 0,
    state: false
};

// ensure that the map centers in the map_pane when the page is loaded

window.addEventListener('load', centerMap, false);


// creating the points on the map

points.forEach((data, pointindex) => {
    let element = document.createElement('img');
    element.classList.add('image_label')
    element.classList.add(data.positioning)
    element.style.left = (((data.xPos+745)/1490)*currentSize).toString()+'px';
    element.style.top = (((data.yPos+745)/1490)*currentSize).toString()+'px';
    element.dataset.pointindex = pointindex
    element.ondragstart = () => { return false; }
    element.src = data.icon
    map_container.appendChild(element)
})

lines.forEach((data, lineindex) => {
    ctx.beginPath();
    data['coordinates'].forEach((coords, index) => {
        if (index == 0) {
            ctx.moveTo(((coords[0]+745)/1490)*currentSize, ((coords[1]+745)/1490)*currentSize);
        } else {
            ctx.lineTo(((coords[0]+745)/1490)*currentSize, ((coords[1]+745)/1490)*currentSize);
        }
        ctx.lineWidth = 2;
        ctx.strokeStyle = data['color'];
        ctx.lineCap = "square";
        ctx.lineJoin = "miter";
        ctx.stroke();
    })
})


// map panning functionality

map_container.addEventListener('mousedown', function(event) {
    clickedWithoutMovement = true
    if (event.target == map_canvas) {
        if (!drag.state && event.button == 0) {
            map_container.classList.add('unselectable')
            drag.x = event.pageX
            drag.y = event.pageY
            drag.state = true
        }
    }
});
map_container.addEventListener('touchstart', function(event) {
    clickedWithoutMovement = true
    if (event.target == map_canvas) {
        if (!drag.state && event.touches.length == 1) {
            map_container.classList.add('unselectable')
            drag.x = event.touches[0].pageX
            drag.y = event.touches[0].pageY
            drag.state = true
        }
    } else if (event.target.classList.contains('image_label')) {
        if (!drag.state && event.touches.length == 1) {
            map_container.classList.add('unselectable')
            drag.x = event.touches[0].pageX
            drag.y = event.touches[0].pageY
            drag.state = true
        }
    }
});
document.addEventListener('mousemove', function(event) {
    clickedWithoutMovement = false
    if (drag.state) {
        map_container.style.left = parseInt(map_container.style.left, 10) + (event.pageX - drag.x) + 'px'
        map_container.style.top = parseInt(map_container.style.top, 10) + (event.pageY - drag.y) + 'px'
        drag.x = event.pageX
        drag.y = event.pageY
        clickedWithoutMovement = false
    }
});
document.addEventListener('touchmove', function(event) {
    clickedWithoutMovement = false
    if (drag.state) {
        map_container.style.left = parseInt(map_container.style.left, 10) + (event.touches[0].pageX - drag.x) + 'px';
        map_container.style.top = parseInt(map_container.style.top, 10) + (event.touches[0].pageY - drag.y) + 'px';
        drag.x = event.touches[0].pageX;
        drag.y = event.touches[0].pageY;
        clickedWithoutMovement = false
    }
});
document.addEventListener('mouseup', function(event) {
    if (drag.state) {
        drag.state = false;
        if (clickedWithoutMovement) {
            information_header.innerHTML = 'Select a Point'
            information_coords.innerHTML = ''
            information_text.innerHTML = 'Click on a point on the map to see some information about what it is and where it\'s located, along with some additional pictures that can tell you where <i>exactly</i> it is or what it looks like.'
            information_images.replaceChildren()
            information_pane.classList.remove('showing_information')
        }
    } else if (clickedWithoutMovement) {
        let data = points[event.target.dataset.pointindex]
        information_header.innerHTML = data.name
        information_coords.innerHTML = `x: <u>${data.xPos}</u>, y: <u>${data.yPos}</u>`
        information_text.innerHTML = data.description
        information_images.replaceChildren()
        information_pane.classList.add('showing_information')
        if (data.related_images.length) {
            data.related_images.forEach((link, imageindex) => {
                let element = document.createElement('img');
                element.src = link;
                element.onclick = function() { previewImage(element) };
                element.classList.add('information_image');
                element.dataset.pointindex = event.target.dataset.pointindex
                element.dataset.imageindex = imageindex
                information_images.appendChild(element);
            });
        };
    }
    map_container.classList.remove('unselectable');
});
document.addEventListener('touchend', function(e) {
    if (drag.state) {
        drag.state = false;
        if (clickedWithoutMovement) {
            information_header.innerHTML = 'Select a Point'
            information_coords.innerHTML = ''
            information_text.innerHTML = 'Click on a point on the map to see some information about what it is and where it\'s located, along with some additional pictures that can tell you where <i>exactly</i> it is or what it looks like.'
            information_images.replaceChildren()
            information_pane.classList.remove('showing_information')
        }
    }
});


// image preview code

function previewImage(element) {
    display_image.src = element.src
    display_image.dataset.pointindex = element.dataset.pointindex
    display_image.dataset.imageindex = element.dataset.imageindex
    display_image_container.classList.remove('hidden')
}

function hidePreview() {
    display_image_container.classList.add('hidden')
}

document.addEventListener('keydown', (event) => {
    if (!event.shiftKey && !event.altKey && !event.ctrlKey && !event.metaKey) {
        // accept hotkeys
        if (!display_image_container.classList.contains('hidden')) {
            // currently previewing an image
            if (event.key == 'Escape') {
                display_image_container.classList.add('hidden')
            } else if (event.key == 'ArrowLeft' || event.key == 'a') {
                if (!(points[display_image.dataset.pointindex].related_images[Number(display_image.dataset.imageindex)-1] === undefined)) {
                    display_image.dataset.imageindex = Number(display_image.dataset.imageindex) - 1
                    display_image.src = points[display_image.dataset.pointindex].related_images[display_image.dataset.imageindex]
                }
            } else if (event.key == 'ArrowRight' || event.key == 'd') {
                if (!(points[display_image.dataset.pointindex].related_images[Number(display_image.dataset.imageindex)+1] === undefined)) {
                    display_image.dataset.imageindex = Number(display_image.dataset.imageindex) + 1
                    display_image.src = points[display_image.dataset.pointindex].related_images[display_image.dataset.imageindex]
                }
            }
        }
    }
});
