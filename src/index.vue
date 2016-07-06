<template>
  <div>
    <zipcode :name="names.zipcode" :class-name="classNames.zipcode" :value.sync="zipcode" v-on:on-change="handleZipcodeChange"></zipcode>
    <county :name="names.county" :class-name="classNames.county" :value.sync="county" :counties="counties" v-on:on-change="handleCountyChange"></county>
    <district :name="names.district" :class-name="classNames.district" :value.sync="district" :districts="districts"></district>
  </div>
</template>

<script type="text/babel">
  import _ from 'lodash';
  import Zipcode from './components/zipcode.vue';
  import County from './components/county.vue';
  import District from './components/district.vue';
  import Data from './data';

  export default {
    data() {
      return {
        zipcode: '',
        county: '',
        district: '',
        counties: Object.keys(Data),
      };
    },
    props: {
      names: {
        type: Object,
        default: (value) => Object.assign({
          county: 'county',
          district: 'district',
          zipcode: 'zipcode',
        }, value),
      },
      classNames: {
        type: Object,
        default: (value) => Object.assign({
          county: '',
          district: '',
          zipcode: '',
        }, value),
      },
      defaultCounty: {
        type: String,
        default: Object.keys(Data)[0],
      },
      defaultDistrict: {
        type: String,
      },
      defaultZipcode: {
        type: String,
      },
    },
    components: {
      Zipcode,
      County,
      District,
    },
    computed: {
      districts() {
        return this.county ? Object.keys(Data[this.county]) : [];
      },
    },
    watch: {
      district() {
        if (this.county && this.district) {
          this.$set('zipcode', Data[this.county][this.district]);
        }
      },
    },
    methods: {
      getCountyAndDistrictFromZipcode(defaultZipcode) {
        // eslint-disable-next-line
        _.some(Data, (districts, county) => {
          return _.some(districts, (zipcode, district) => {
            if (zipcode === defaultZipcode.toString()) {
              this.$set('county', county);
              this.$set('district', district);
              return true;
            }
            return false;
          });
        });
      },
      handleCountyChange() {
        this.$set('zipcode', '');
        this.$set('district', Object.keys(Data[this.county])[0]);
      },
      handleZipcodeChange() {
        this.getCountyAndDistrictFromZipcode(this.zipcode);
      },
    },
    ready() {
      if (this.defaultZipcode) {
        this.getCountyAndDistrictFromZipcode(this.defaultZipcode);
        return;
      }
      this.$set('county', this.defaultCounty);
      if (this.defaultDistrict) {
        this.$set('district', this.defaultDistrict);
      } else {
        this.handleCountyChange();
      }
    },
  };
</script>
