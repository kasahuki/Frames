<template>
  <button @click="changeTitle">
    改变Title
  </button>
</template>

<script>
export default {
    methods: {  
        changeTitle() {
           this.$emit('changeTitle', 'Hello World')
        }
    }
}
</script>

<style>

</style>