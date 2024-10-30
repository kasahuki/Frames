<template>
  <div>
    <h1 @click="changeMsg">{{$store.state.msg}}</h1>
  </div>
</template>

<script>
export default {
  methods: {
    changeMsg () {
      console.log(this.$store.state.msg)
    }
  }
}
</script>

<style>

</style>
