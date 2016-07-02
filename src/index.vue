<template>
  <div>
    <zipcode :class-name="classNames.zipcode" :value.sync="zipcode" v-on:on-keyup="handleZipcodeKeyup"></zipcode>
    <county :class-name="classNames.county" :value.sync="county" :counties="counties" v-on:on-change="handleCountyChange"></county>
    <district :class-name="classNames.district" :value.sync="district" :districts="districts"></district>
  </div>
</template>

<script lang="babel">
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
      classNames: {
        type: Object,
        default: {
          county: '',
          district: '',
          zipcode: '',
        },
      },
      defaultCounty: {
        type: String,
        default: Object.keys(Data)[0],
      },
      defaultDistrict: {
        type: String,
        default: '',
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
        this.$set('zipcode', null);
        this.$set('district', Object.keys(Data[this.county])[0]);
      },
      handleZipcodeKeyup() {
        this.getCountyAndDistrictFromZipcode(this.zipcode);
      },
    },
    ready() {
      if (this.defaultZipcode) {
        this.getCountyAndDistrictFromZipcode(this.defaultZipcode);
      } else if (this.defaultCounty && this.defaultDistrict) {
        this.$set('county', this.defaultCounty);
        this.$set('district', this.defaultDistrict);
      }
    },
  };
</script>
