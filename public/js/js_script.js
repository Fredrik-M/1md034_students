
function menu_item(name, ingredients, allergens, kCal) {
    this.name = name;
    this.ingredients = ingredients;
    this.allergens = allergens;
    this.kCal = kCal;

    this.get_name = () => this.name;
    this.get_kCal = () => this.kCal;
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
			    1200);
let porky = new menu_item("The Porky Boi",
			  ["Much pork", "Egg", "Cheddar cheese"],
			  ["gluten", "lactose"],
			  3000);
let mystery = new menu_item("The Mystery Boi", [], [], "Yes");
let boring = new menu_item("The boring Boi", ["The usual stuff"], ["gluten"], 800);
let soy = new menu_item("The Soy Boi", ["Soy beans"], [], 500);

let menu = [special, porky, mystery, boring, soy];

let container = document.getElementById('myID');
let list = document.createElement('ul');

var item;
var str;
for (var b of menu) {
    str = b.allergens.length ? " (contains " + b.get_allergens() + ")" : "";
    item = document.createElement('li');
    item.appendChild(document.createTextNode(b.name + str));
    list.appendChild(item);
}
container.appendChild(list);
