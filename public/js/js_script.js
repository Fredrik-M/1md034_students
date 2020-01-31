
format_allergens = function(arr) {
    let str = '';
    for(var a of arr) {
    	str += a + ', ';
    }
    return str.slice(0, str.length - 2);
}

let section = document.getElementById("burgers");
let grid = document.createElement('div');
grid.className = "grid";

var box, list, item;
for(var b of menu) {
    box = document.createElement("div");
    box.className = "box a";
    
    box.innerHTML = b.name;
    grid.appendChild(box);

    box = document.createElement("div");
    box.className = "box b";
    box.innerHTML = "<img src=\"" + b.img + "\" alt=\"" + b.name + "\" />";
    grid.appendChild(box);

    box = document.createElement("div");
    list = document.createElement("ul");
    for(var i of b.ingredients) {
	item = document.createElement("li");
	item.innerHTML = i;
	list.appendChild(item);
    }
    if(b.allergens.length) {
	item = document.createElement("li");
	let allerg = document.createElement("span");
	allerg.className = "allergen";
	allerg.innerHTML = "Contains " + format_allergens(b.allergens);
	item.appendChild(allerg);
	list.appendChild(item);	
    }
    item = document.createElement("li");
    item.innerHTML = b.kCal + " kCal";
    list.appendChild(item);

    box.appendChild(list);
    grid.appendChild(box);    
}

section.appendChild(grid);

