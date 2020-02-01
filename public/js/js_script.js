
collect_details = function() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let street = document.getElementById("street").value;
    let house = document.getElementById("house").value;
    let payment_opts = document.getElementById("payment");
    let payment = payment_opts.options[payment_opts.selectedIndex].text;
    let gender = document.querySelector("input[name='gender']:checked").value;

    let tmp = [name, email, street, house, payment, gender];
    console.log(tmp);
    
    return [name, email, street, house, payment, gender];
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
	allerg.innerHTML = "Contains " + b.allergens;
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
