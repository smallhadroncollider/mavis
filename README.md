# Mavis

Mavis is a very simple jQuery plugin that takes an object of class/regex pairs. When applied to an `input` it will update the class when the regex value is matched.

## Installation

Mavis can be easily installed using [Bower](http://bower.io):

```bash
bower install jquery-mavis
```

It will be placed in `components/jquery-mavis`.

## Usage

```html
<input class="mavis" />
```

```javascript
$('.mavis').mavis({
    'twitter': /twitter\.com/i,
    'facebook': /facebook\.com/i,
    'google': /google\.com/i
});
```

Now typing `twitter.com` into the `input` will add a `twitter` class to it.

## License
DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
Version 2, December 2004

Copyright (C) 2013 Small Hadron Collider <mark@smallhadroncollider.com>

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document, and changing it is allowed as long
as the name is changed.

DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

0. You just DO WHAT THE FUCK YOU WANT TO.