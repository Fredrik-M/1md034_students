
const vm_1 = new Vue({
    el: "#burgers",
    data: {
    	menu: menu,
	selected: []
    }
})

let order = ["Something", "Something else"]

const vm_2 = new Vue({
    el: "#order",
    data: {
	order_placed: false,
	this_order: [],
	name: "",
	email: "",
	street: "",
	house: null,
	payment: "Credit card",
	gender: "undisclosed"
    },
    methods: {
	order: function() {
	    this.order_placed = true;
	    this.this_order = vm_1.selected;
	    vm_1.selected = [];
	}
    }
})
