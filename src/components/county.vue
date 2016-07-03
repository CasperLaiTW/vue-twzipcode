<template>
  <select
          :name="name"
          v-bind:class="[className, 'county']"
          v-model="value"
          v-on:change="onChange"
  >
    <option v-for="county in counties">{{ county }}</option>
  </select>
</template>
<style>
  .county {
    width: 9rem;
    display: inline-block;
    margin-right: 4px;
  }
</style>
<script lang="babel">
  export default {
    props: {
      name: {
        type: String,
        default: 'county',
      },
      className: {
        type: String,
      },
      value: {
        type: String,
      },
      counties: {
        type: Array,
      },
    },
    methods: {
      onChange() {
        this.$dispatch('on-change');
      },
    },
    ready() {
      if (this.value) {
        this.$dispatch('on-change');
      }
    },
  };
</script>
