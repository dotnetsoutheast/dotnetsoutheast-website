// Yes it's weird. We're compiling our SCSS to CSS by including in our JS. It's a webpack thing.
require('../scss/main.scss');

// And again, I can get webpack to generate a SVG Fragment sprite by requireing each file.
require('../svgs/dotnetse_logo.svg');
require('../svgs/seagulls.svg');
require('../svgs/icon-calendar.svg');
require('../svgs/meetup-logo.svg');
require('../svgs/icon-newtab.svg');
require('../svgs/icon-youtube.svg');
require('../svgs/icon-twitter.svg');

const primaryNav = require('./primaryNav');

// On to the JavaScript…

// Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
if ('content' in document.createElement('template')) {
  primaryNav();
}
