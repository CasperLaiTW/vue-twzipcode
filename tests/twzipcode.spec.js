/**
 * Created by casperlai on 2016/7/3.
 */
/* global describe, it, expect */

import Vue from 'vue';
import Twzipcode from '../src/index.vue';
import Data from '../src/data';

describe('Twzipcode.vue', () => {
  it('should have correct county data', () => {
    expect(Twzipcode.data().counties).toEqual(Object.keys(Data));
  });

  describe('no more props', () => {
    const vm = new Vue({
      template: '<div><twzipcode v-ref:twzipcode></twzipcode></div>',
      components: { Twzipcode },
    }).$mount();
    const { twzipcode } = vm.$refs;

    it('should defaultCounty correct', () => {
      expect(twzipcode.defaultCounty).toBe('基隆市');
    });

    describe('on component get ready', () => {
      vm.$appendTo(document.body);

      it('should zipcode correct', (done) => {
        twzipcode.$nextTick(() => {
          expect(twzipcode.zipcode).toBe('200');
          done();
        });
      });

      it('should county correct', (done) => {
        twzipcode.$nextTick(() => {
          expect(twzipcode.county).toBe('基隆市');
          done();
        });
      });

      it('should district correct', (done) => {
        twzipcode.$nextTick(() => {
          expect(twzipcode.district).toBe('仁愛區');
          done();
        });
      });
    });
  });

  describe('set default zipcode is 403', () => {
    const vm = new Vue({
      template: '<div><twzipcode v-ref:twzipcode default-zipcode="403"></twzipcode></div>',
      components: { Twzipcode },
    }).$mount();
    const { twzipcode } = vm.$refs;

    describe('on component get ready', () => {
      vm.$appendTo(document.body);

      it('zipcode is 403', (done) => {
        twzipcode.$nextTick(() => {
          expect(twzipcode.zipcode).toBe('403');
          done();
        });
      });

      it('city is 台中市', (done) => {
        twzipcode.$nextTick(() => {
          expect(twzipcode.county).toBe('台中市');
          done();
        });
      });

      it('district is 西區', (done) => {
        twzipcode.$nextTick(() => {
          expect(twzipcode.district).toBe('西區');
          done();
        });
      });
    });
  });

  describe('set default city is 台中市', () => {
    const vm = new Vue({
      template: '<div><twzipcode v-ref:twzipcode default-county="台中市"></twzipcode></div>',
      components: { Twzipcode },
    }).$mount();
    const { twzipcode } = vm.$refs;

    describe('on component ready', () => {
      vm.$appendTo(document.body);

      it('should zipcode is 400, because district would be get first item', (done) => {
        twzipcode.$nextTick(() => {
          expect(twzipcode.zipcode).toBe('400');
          done();
        });
      });

      it('should county is 台中市', (done) => {
        twzipcode.$nextTick(() => {
          expect(twzipcode.county).toBe('台中市');
          done();
        });
      });

      it('should district is 中區', (done) => {
        twzipcode.$nextTick(() => {
          expect(twzipcode.district).toBe('中區');
          done();
        });
      });
    });
  });

  describe('set default city is 台中市 and default district is 西區', () => {
    const vm = new Vue({
      template: '<div>' +
      '<twzipcode v-ref:twzipcode default-county="台中市" default-district="西區"></twzipcode>' +
      '</div>',
      components: { Twzipcode },
    }).$mount();
    const { twzipcode } = vm.$refs;

    describe('on component ready', () => {
      vm.$appendTo(document.body);

      it('should zipcode is 403', (done) => {
        vm.$nextTick(() => {
          expect(twzipcode.zipcode).toBe('403');
          done();
        });
      });

      it('should county is 台中市', (done) => {
        vm.$nextTick(() => {
          expect(twzipcode.county).toBe('台中市');
          done();
        });
      });

      it('should district is 西區', (done) => {
        vm.$nextTick(() => {
          expect(twzipcode.district).toBe('西區');
          done();
        });
      });
    });
  });

  describe('set default city is 台中市 and default district is 西區 and zipcode is 320', () => {
    const vm = new Vue({
      template: '<div>' +
      '<twzipcode v-ref:twzipcode ' +
      'default-county="台中市" default-district="西區" default-zipcode="320"></twzipcode>' +
      '</div>',
      components: { Twzipcode },
    }).$mount();
    const { twzipcode } = vm.$refs;
    describe('but zipcode is the highest priority', () => {
      describe('on component ready', () => {
        vm.$appendTo(document.body);

        it('should zipcode is 320', (done) => {
          vm.$nextTick(() => {
            expect(twzipcode.zipcode).toBe('320');
            done();
          });
        });

        it('should county is 桃園市', (done) => {
          vm.$nextTick(() => {
            expect(twzipcode.county).toBe('桃園市');
            done();
          });
        });

        it('should district is 中壢區', (done) => {
          vm.$nextTick(() => {
            expect(twzipcode.district).toBe('中壢區');
            done();
          });
        });
      });
    });
  });
});
