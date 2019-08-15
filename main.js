	var TestSiteRouter = Backbone.Router.extend({
	
		routes: {
			"": "home",
			"home": "home",
			"services": "services",
			"address": "address"
		},

		deselectMenu: function(){			
			$('ul.menu li').removeClass('active');
		},

		selectMenu: function(menu){			
			this.deselectMenu();			
			$(menu).addClass('active');
		},

		hidePages: function(){			
			$('div.infoblock').hide();
		},

		showPage: function(page){			
			this.hidePages();			
			$(page).show();
		},

		home: function() {
			this.showPage('div#home-page');
			this.selectMenu('li.home-menu');
		},

		services: function() {
			this.showPage('div#services-page');
			this.selectMenu('li.services-menu');
		},

		address: function() {
			this.showPage('div#address-page');
			this.selectMenu('li.address-menu');
		}

	});

	var TestSiteView = Backbone.View.extend({

		el: $('body'),

		events: {
			'click ul.menu li.home-menu a': 'displayHome',
			'click ul.menu li.services-menu a': 'displayServices',
			'click ul.menu li.address-menu a': 'displayAddress'
		},

		initialize: function(){
			this.router = new TestSiteRouter();

			Backbone.history.start();
		},

		displayHome: function(){
			this.router.navigate("home", true);
		},

		displayServices: function(){
			this.router.navigate("services", true);
		},

		displayAddress: function(){
			this.router.navigate("address", true);
		}

	});

	new TestSiteView();