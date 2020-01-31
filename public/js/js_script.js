
function menu_item(name, ingredients, allergens, kCal) {
    this.name = name;
    this.ingredients = ingredients;
    this.allergerns = allergens;
    this.kCal = kCal;

    this.get_name = () => this.name;
    this.get_kCal = () => this.kCal;
}

let special = new menu_item("The Special Boi",
			    ["100% ground beef", "Gruyére cheese", "Egg"],
			    ["Gluten, Lactose"],
			    1200);

let porky = new menu_item("The Porky Boi",
			  ["Muck pork", "Egg", "Cheddar cheese"],
			  ["Gluten", "Lactose"],
			  3000);

let mystery = new menu_item("The Mystery Boi", ["Yes"], ["Yes"], "Yes");

let boring = new menu_item("The boring Boi", ["The usual stuff"], ["Gluten", "Lactose"], 800);

let soy = new menu_item("The Soy Boi", ["Soy beans"], [], 500);

let container = document.getElementById('myID');

let list = document.createElement('ul');
let item = document.createElement('li');

item.appendChild(document.createTextNode(special.get_name()));
list.appendChild(item);
item = document.createElement('li');
item.appendChild(document.createTextNode(porky.get_name()));
list.appendChild(item);
item = document.createElement('li');
item.appendChild(document.createTextNode(mystery.get_name()));
list.appendChild(item);
item = document.createElement('li');
item.appendChild(document.createTextNode(boring.get_name()));
list.appendChild(item);
item = document.createElement('li');
item.appendChild(document.createTextNode(soy.get_name()));
list.appendChild(item);

container.appendChild(list);
