<template>
  <input
          type="text"
          maxLength="3"
          v-bind:class="[className, 'zipcode']"
          :name="name"
          :placeholder="placeholder"
          v-on:change="onChange"
          v-model="value"
  />
</template>
<style>
  .zipcode {
    width: 9rem;
    display: inline-block;
    margin-right: 4px;
  }
</style>
<script type="text/babel">
  export default {
    props: {
      name: {
        type: String,
        default: 'zipcode',
      },
      className: {
        type: String,
      },
      placeholder: {
        type: String,
      },
      value: {
        type: String,
      },
    },
    methods: {
      onChange() {
        if (this.value.length === 3) {
          this.$dispatch('on-change');
        }
      },
    },
  };
</script>
