## Flexi-accordion

Flexible accordion

## Features
* speed:  400,           // set your speed in m-seconds
* isVertical: true,      // set to false if a horizontal accordion is required
* collapsible: false,    // set to true to close all panels
* icons: false,          // set to false to hide header icons
* hover: 'off',          // set to 'on' to turn on open on hover

## Usage:

1. Custom arguments which you can pass into the call to the plugin below. Alternatively you can just specify them directly (Point 2).

```html
var args = {
	speed: 500,
	icons: false,
	hover: 'off'
};

$(selector).FluidSlider(args);
```

2. Passing in options directly.

```html
$(selector).flexiaccordion({
        speed:  400
});
```
