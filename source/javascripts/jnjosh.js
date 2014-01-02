/**
 * Returns a description of this past date in relative terms.
 * Takes an optional parameter (default: 0) setting the threshold in ms which
 * is considered "Just now".
 *
 * Examples, where new Date().toString() == "Mon Nov 23 2009 17:36:51 GMT-0500 (EST)":
 *
 * new Date().toRelativeTime()
 * --> 'Just now'
 *
 * new Date("Nov 21, 2009").toRelativeTime()
 * --> '2 days ago'
 *
 * // One second ago
 * new Date("Nov 23 2009 17:36:50 GMT-0500 (EST)").toRelativeTime()
 * --> '1 second ago'
 *
 * // One second ago, now setting a now_threshold to 5 seconds
 * new Date("Nov 23 2009 17:36:50 GMT-0500 (EST)").toRelativeTime(5000)
 * --> 'Just now'
 *
 */
Date.prototype.toRelativeTime = function(now_threshold) {
  var delta = new Date() - this;

  now_threshold = parseInt(now_threshold, 10);

  if (isNaN(now_threshold)) {
	now_threshold = 0;
  }

  if (delta <= now_threshold) {
	return 'Just now';
  }

  var units = null;
  var conversions = {
	millisecond: 1, // ms    -> ms
	second: 1000,   // ms    -> sec
	minute: 60,     // sec   -> min
	hour:   60,     // min   -> hour
	day:    24,     // hour  -> day
	month:  30,     // day   -> month (roughly)
	year:   12      // month -> year
  };

  for (var key in conversions) {
	if (delta < conversions[key]) {
	  break;
	} else {
	  units = key; // keeps track of the selected key over the iteration
	  delta = delta / conversions[key];
	}
  }

  // pluralize a unit when the difference is greater than 1.
  delta = Math.floor(delta);
  if (delta !== 1) { units += "s"; }
  return [delta, units, "ago"].join(" ");
};

/*
 * Wraps up a common pattern used with this plugin whereby you take a String
 * representation of a Date, and want back a date object.
 */
Date.fromString = function(str) {
  return new Date(Date.parse(str));
};

/**
 * main js file for jsh.in 
 * by Josh Johnson
 */
var jnjosh = {};
jnjosh.application = function() {
	// @summary: twitter formatting borrowed from an online source... but then modified...
	function _format_tweet(msg) {
		var tweet = msg.text;
		tweet = tweet.replace(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/g, function(url) {
			return '<a href="'+url+'">'+url+'</a>';
		}).replace(/B@([_a-z0-9]+)/ig, function(reply) {
			return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
		});
		$("#twitter p").html(tweet + "<br /><span class=\"tweet-date\"><a href=\"http://twitter.com/#!/jnjosh/status/" + msg.id_str + "\">" + new Date(msg.created_at).toRelativeTime()) + "</a></span>";
	}

	// @sumamary: format flickr results for display
	function _display_images(data) {
		var htmlString = "",
			cnt = 0;

		$.each(data.items, function(i,item){
			if (cnt > 2) return;
			htmlString += "<a class=\"flickr-box\" href=\"" + (item.media.m).replace("_m.jpg", ".jpg") + "\"><img src=\"" + (item.media.m).replace("_m.jpg", "_s.jpg") + "\" /></a>";
			cnt++;
		});

		$('#flickr_results').html(htmlString);
		$("a.flickr-box").fancybox({
			'opacity'		: false,
			'overlayShow'	: true,
			'transitionIn'	: 'elastic',
			'transitionOut'	: 'elastic',
			'centerOnScroll': true,
			'overlayColor'  : "#000",
			'cyclic'        : true,
			'titleShow'		: true,
			'titlePosition' : 'over'
		});
	}



	return {
		formatTweet: function(msg) { _format_tweet(msg); },
		displayImages: function(data) { _display_images(data); }
	}
}();

// @summary: jquery implementation
$(function() {
	$.getJSON('http://twitter.com/statuses/user_timeline.json?screen_name=jnjosh&count=3&callback=?', function(data) {
		jnjosh.application.formatTweet(data[0]);
	}); 
	$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=87151163@N00&format=json&jsoncallback=?", function(data) {
		jnjosh.application.displayImages(data);
	});
});


