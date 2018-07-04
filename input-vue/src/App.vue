<template>
  <div id="app" class="container">
      <div>请输入验证码</div>
  <div>
    <input type="text"
           maxlength=1
           tabindex="0" ref="a1" v-on:input="$refs.a2.focus()">
    <input type="text"
           maxlength=1 ref="a2"  v-on:input="$refs.a3.focus()">
    <input type="text"
           maxlength=1 ref="a3"  v-on:input="$refs.a4.focus()">
    <input type="text"
           maxlength=1 ref="a4"  v-on:input="submit()">
  </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    submit(){}
  },
  mounted(){
    this.$refs.a1.focus()
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

input {
  width: 2rem;
  height: 2rem;
  margin: 0 1rem;
  vertical-align: middle;
  text-align: center;
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  &:focus {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }
}
</style>
