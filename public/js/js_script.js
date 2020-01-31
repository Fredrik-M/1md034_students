
function menu_item(name, ingredients, allergens, kCal, img) {
    this.name = name;
    this.ingredients = ingredients;
    this.allergens = allergens;
    this.kCal = kCal;
    this.img = img;

    this.get_allergens = function() {
  	let str = '';
	for(var a of this.allergens) {
    	    str += a + ', ';
	}
	return str.slice(0, str.length - 2);
    }
}

let special = new menu_item("The Special Boi",
			    ["100% ground beef", "Gruyére cheese", "Egg"],
			    ["gluten, lactose"],
			    1200,
			    "img/special.jpeg");
let porky = new menu_item("The Porky Boi",
			  ["Much pork", "Egg", "Cheddar cheese"],
			  ["gluten", "lactose"],
			  3000,
			  "img/porky.jpeg");
let mystery = new menu_item("The Mystery Boi",
			    ["Order at your own risk"],
			    [],
			    "Unknown",
			    "img/qmark.jpeg");
let boring = new menu_item("The boring Boi",
			   ["The usual stuff"],
			   ["gluten"],
			   800,
			   "img/placeholder.jpeg");
let soy = new menu_item("The Soy Boi", ["Soy beans"], [], 500, "img/placeholder.jpeg");

let menu = [special, porky, mystery, boring, soy];

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
	allerg.innerHTML = "Contains " + b.get_allergens();
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

