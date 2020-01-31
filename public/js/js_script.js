
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


console.log(special.get_name());
console.log(special.get_kCal());

console.log(porky.get_name());
console.log(porky.get_kCal());

console.log(mystery.get_name());
console.log(mystery.get_kCal());

console.log(boring.get_name());
console.log(boring.get_kCal());

console.log(soy.get_name());
console.log(soy.get_kCal());
