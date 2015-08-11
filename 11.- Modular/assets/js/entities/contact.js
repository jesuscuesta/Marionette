// 1. the module itself (i.e. what name we’re going to use within the callback to refer to the module
// we’re defining)
// 2. the application object that module was called from
// 3. Backbone
// 4. Backbone.Marionette
// 5. jQuery
// 6. Underscore

// Le llamamos ContactManager porque así es como lo hemos definido en app.js
//Entities, será como lo tendremos que llamar desde el index.
ContactManager.module('Entities', function(Entities, ContactManager,Backbone, Marionette, $, _)
{
	var alertPrivate = function(message){
		alert("Private alert: " + message);
	};
	
	Entities.alertPublic = function(message){
		alert("I will now call alertPrivate");
		alertPrivate(message);
	};
});