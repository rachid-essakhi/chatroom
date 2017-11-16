
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

var messages = [
  {id: 1, msg: "Hello", senderName: "Rachid"},
  {id: 2, msg: "Hey man", senderName: "Ahmed"}
];

(function($) {
	var otaku = {
		vars	: {
			AllCoversCached								: true,
			currentProjectProgress				: 30
		},
		dom		: {
			window												: $(window),
			messages											: $('.messages'),
			message									   		: $('.message'),
			form									      	: $('.form'),
			sendBtn								      	: $('.form button'),
			input									        : $('.form input')
		},
		init: function () {
			otaku.events();
      _.forEach(messages, function(message) {
        otaku.dom.messages.append(
          '<div class="message">' +
            '<span>' + message.senderName + '</span>' +
            '<p>' + message.msg + '</p>' +
          '</div>'
        );
      });
		},
		events: function () {
			otaku.dom.sendBtn.on("click", function() {

			});
		}
	};

	$(document).ready(function() {
		otaku.init();
	});
})(jQuery);
