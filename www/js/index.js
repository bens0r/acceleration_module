
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
//    	  original code
//        document.addEventListener('deviceready', this.onDeviceReady, false);
        if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
            document.addEventListener("deviceready", this.onDeviceReady, false);
        } else {
            this.onDeviceReady();
        }
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
    	app.load();
        app.receivedEvent('deviceready');
    },

    //load Event Handler
    load: function()
    {
		$(document).ready(
//			include("js/alert.js",function(){ console.log("included alert.js")})
			include("js/acceleration.js",function(){})
		);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    receivedAccelerateEvent: function(id, x, y, z) {
      var parentElement = document.getElementById(id);
      var xElement = parentElement.querySelector('.x');
      var yElement = parentElement.querySelector('.y');
      var zElement = parentElement.querySelector('.z');

      xElement.innerHTML = 'x='+x;
      yElement.innerHTML = 'y='+y;
      zElement.innerHTML = 'z='+z;
    }
};

app.initialize();
