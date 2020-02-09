'use strict';
const socket = io();

const vm_1 = new Vue({
    el: "#burgers",
    data: {
    	menu: menu,
	selected: []
    }
})

const vm_2 = new Vue({
    el: "#order",
    data: {
	order_placed: false,
	order_id: 0,
	this_order: {
	    orderId: 0,
	    location: { x: -20, y: -20 },
	    details: {
		name: "",
		email: "",
		payment: "Credit card",
		gender: "undisclosed"
	    },
	    orderItems: []
	},
    },
    methods: {
	order: function() {
	    this.order_placed = true;
	    this.this_order.orderId = ++this.order_id;
	    this.this_order.orderItems = vm_1.selected;
	    this.addOrder();
	    vm_1.selected = [];
	},
	update_location: function(event) {
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };

	    this.this_order.location.x = event.clientX - 6 - offset.x;
	    this.this_order.location.y = event.clientY - 6 - offset.y;
	},
	addOrder: function() {
	    socket.emit('addOrder', this.this_order);
	},
	reset: function() {
	    this.order_placed = false;
	}
    }
})


