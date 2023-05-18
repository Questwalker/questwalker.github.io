const points = [
    // {
    //     "name": "",
    //     "description": "",
    //     "related_images" : [],
    //     "icon": "./icons/debug.png",
    //     "positioning": "poitioned_on_top",
    //     "xPos": -745,
    //     "yPos": -745
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
    }
]
var map_container = document.getElementById('map_container');
var information_pane_body = document.getElementById('information_pane_body');
var information_header = document.getElementById('information_header');
var information_coords = document.getElementById('information_coords');
var information_text = document.getElementById('information_text');
var information_images = document.getElementById('information_images');
var map_pane = document.getElementById('map_pane')
var map_image = document.getElementById('map_image')
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
    element.ondragstart = () => {return false;}
    element.addEventListener('click', pointClicked, false)
    element.src = data.icon
    map_container.appendChild(element)
})


// point click functionality
function pointClicked() {
    let data = points[this.dataset.pointindex]
    information_header.innerHTML = data.name
    information_coords.innerHTML = `x: <u>${data.xPos}</u>, y: <u>${data.yPos}</u>`
    information_text.innerHTML = data.description
    information_images.replaceChildren()

    if (data.related_images.length) {
        data.related_images.forEach((link, imageindex) => {
            let element = document.createElement('img');
            element.src = link;
            element.onclick = function() { previewImage(this) };          // add functionality to left and right arrow to switch to previous and next images
            element.classList.add('information_image');
            element.dataset.pointindex = this.dataset.pointindex
            element.dataset.imageindex = imageindex
            information_images.appendChild(element);
        });
    };
}


// map panning functionality
map_container.addEventListener('mousedown', function(e) {
    if (!drag.state && e.button == 0) {
        // cancel drag if the mouse is hovering over a point
        let hovering = true
        document.querySelectorAll('.image_label').forEach(function(element) {
            if (element.matches(":hover")) hovering = false;
        });
        if (!hovering) return false;

        map_container.classList.add('unselectable');
        drag.x = e.pageX;
        drag.y = e.pageY;
        drag.state = true;
        clickedWithoutMovement = true;
    }
    return false;
});

document.addEventListener('mousemove', function(e) {
    if (drag.state) {
        map_container.style.left = parseInt(map_container.style.left, 10) + (e.pageX - drag.x) + 'px';
        map_container.style.top = parseInt(map_container.style.top, 10) + (e.pageY - drag.y) + 'px';
        drag.x = e.pageX;
        drag.y = e.pageY;
        clickedWithoutMovement = false;
    }
});

document.addEventListener('mouseup', function(e) {
    if (drag.state) {
        drag.state = false;
        if (clickedWithoutMovement) {
            information_header.innerHTML = 'Select a Point'
            information_coords.innerHTML = ''
            information_text.innerHTML = 'Click on a point on the map to see some information about what it is and where it\'s located, along with some additional pictures that can tell you where <i>exactly</i> it is or what it looks like.'
            information_images.replaceChildren()
        }
    }
    map_container.classList.remove('unselectable');
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



