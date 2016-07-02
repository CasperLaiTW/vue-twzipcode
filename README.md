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
    :class-names="{county: 'form-control', district: 'form-control', zipcode: 'form-control'}"
    default-zipcode="403"
  >
  </twzipcode>
</div>
```

## Props
| Prop            | Type   | Default                                 | Example                                                                     |
|-----------------|--------|-----------------------------------------|-----------------------------------------------------------------------------|
| classNames      | Object | `{county: '', district: '', zipcode: ''}` | `{county: 'form-control', district: 'form-control', zipcode: 'form-control'}` |
| defaultCounty   | String | '基隆市'                                | 403                                                                         |
| defaultDistrict | String | ''                                      | 台中市                                                                      |
| defaultZipcode  | String | ''                                      | 西區                                                                        |

1. *Using props to component, notice `kebab-case`*
2. **defaultZipcode** is `highest` priority than defaultCounty and defaultDistrict. So if you using both, will be `ignored` defaultCounty and defaultDistrict props.


## Contributing
All contributions (in the form on pull requests, issues and feature-requests) are welcome.

## License
Licenced under the MIT License (MIT). Please see the [license file](LICENSE.md) for more information.
