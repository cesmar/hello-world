angular.
	module('phoneList').
	component('phoneList', {
		templateUrl: 'phone-list/phone-list.template.html',
		controller: function PhoneListController(){
			this.phones = [
				{
					name:'Nexus S',
					snippet: 'Fast just got faster with Nexus S.',
					age: 1
				}, {
					name:'Motorola XOOM™ with Wi-Fi',
					snippet: 'The Next, Next Generation tablet.',
					age: 2
				}, {
					name:'Motorola XOOM',
					snippet: 'The Next, Next Generation tablet.',
					age: 3
				}, {
					name:'LG G5',
					snippet: 'The best one. All in one',
					age: 4
				}
			];

			this.orderProp = 'age';
		}
	});

