# FlowType.JS for MooTools #

Responsive web typography at its finest: font-size and line-height based on element width.

Demo @ [jsFiddle](http://jsfiddle.net/Fire2Burn/Q6muc/)

Check out [original creator site](http://simplefocus.com/flowtype).
Documentation at [original github](https://github.com/simplefocus/FlowType.JS)

## Setup ##

```javascript
window.addEvent('domready', function() {
	$(document.body).flowtype({
		minimum   : 500,
		maximum   : 1200,
		minFont   : 12,
		maxFont   : 40,
		fontRatio : 30,
		lineRatio : 1.45
	});
});
```
