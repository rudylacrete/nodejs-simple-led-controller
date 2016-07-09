'use strict';

let five = require("johnny-five");
let express = require('express');
let board = new five.Board({repl: false});
let app = express();

app.use(express.static('public'));

let led = null;

board.on("ready", function() {

  // Create a standard `led` component instance
  led = new five.Led(6);
});

app.get('/on', function(req, res) {
	if(!led) return res.send('No led yet');
	led.on();
	res.send('ok');
});

app.get('/off', function(req, res) {
	if(!led) return res.send('No led yet');
	led.off();
	res.send('ok');
});

app.listen(3000);