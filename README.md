# Vue-TWzipcode
Rewrite [jQuery-TWzipcode](https://github.com/essoduke/jQuery-TWzipcode) in Vue.js

### Screenshot
![pic](/screenshots/screenshot.png)

## Installation
``` sh
$ npm install vue-twzipcode --save
```

## Usage

``` javascript
import Vue from 'vue';
import Twzipcode from 'vue-twzipcode';

new Vue({
  el: '#app',
  components: {
    Twzipcode: Twzipcode,
    // or
    Twzipcode,
  },
});
```

``` html
<div id="app">
  <label>Address:</label>
  <twzipcode
    :class-names="{county: 'form-control form-control-lg', district: 'form-control form-control-lg', zipcode: 'form-control form-control-sm'}"
    default-zipcode="403"
  >
  </twzipcode>
</div>
```

## Contributing
All contributions (in the form on pull requests, issues and feature-requests) are welcome.

## License
Licenced under the MIT License (MIT). Please see the [license file](LICENSE.md) for more information.