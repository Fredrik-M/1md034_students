'use strict';
const socket = io();

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
	orders: {},
	this_order: [],
	name: "",
	email: "",
	payment: "Credit card",
	gender: "undisclosed"
    },
    created: function() {
        socket.on('initialize',
		  function(data) { this.orders = data.orders; }.bind(this)
		 );

	socket.on('currentQueue',
		  function(data) { this.orders = data.orders; }.bind(this)
		 );
    },
    methods: {
	order: function() {
	    this.order_placed = true;
	    this.this_order = vm_1.selected;
	    vm_1.selected = [];
	},
	getNext: function() {
	    let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
		return Math.max(last, next); }, 0);

	    return lastOrder + 1;
	},
	addOrder: function(event) {
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };

	    socket.emit('addOrder', {
		orderId: this.getNext(),
		details: {
		    x: event.clientX - 10 - offset.x,
		    y: event.clientY - 10 - offset.y,
		},
		orderItems: ['Beans', 'Curry'],
	    });
	}
    }
})


