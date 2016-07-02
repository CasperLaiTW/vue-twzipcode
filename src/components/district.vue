<template>
  <select
          :name="name"
          v-bind:class="[className, 'district']"
          v-model="value"
  >
    <option v-for="district in districts">{{ district }}</option>
  </select>
</template>
<style>
  .district {
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
        default: 'district',
      },
      className: {
        type: String
      },
      value: {
        type: String
      },
      districts: {
        type: Array,
      },
    },
  }
</script>
