<template>
  <div class="whole">
    <div class="container">
    <van-nav-bar
  title="Login"
  left-text="返回"
  right-text="more"
  left-arrow
  @click-left="onClickLeft"
/>
<div class="header">
    <h2><img :src="logo" alt="" width="200"></h2>
  </div>
  <div class="form">
    <van-field
      v-model="username"
      type="text"
      placeholder="请输入用户名"
      clearable
    ></van-field>
    <van-field
      v-model="password"
      type="password"
      placeholder="请输入密码"
      clearable
    ></van-field>
    <van-button type="primary" block>登录</van-button>
    <div class="option">
     <button>忘记密码</button>
     <button>注册</button>
    </div>
    <div class="other">
      <p><img src="@/assets/facebook.svg" alt="" width="20" height="20"><i>continue with facebook</i></p>
      <p><img src="@/assets/google.svg" alt="" width="19" height="20"><i>continue with google</i></p>
      <a href="#/telephone">login with telephone</a>
    </div>
  </div>
  </div>

  </div>

</template>

<script>
export default {
  name: 'LoginIndex',
  data () {
    return {
      username: '',
      password: '',
      logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    }
  }
}
</script>

<style scoped>
.header h2
{
  cursor: pointer;
}
.container
{
  width: 500px;
  height: 700px;
  margin: 5% auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px #d6d4d4;
  text-align: center;
  font-size: 20px;
  color: #333;
  font-weight: bold;

}
h2
{
  border-bottom: 1px solid #c5bfbf;
  padding-bottom: 15px;
  margin:25px 0;
}
.van-cell
{
  margin-bottom: 20px;
}
button
{
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  margin-top:40px;
}
.option
{
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
}
.other
{
  padding: 0 140px;
  cursor: pointer;
  padding-top:10px ;
  margin-top: 10px;
  border-top: 1px solid #cccbcb;
}
.other p
{
  border: 1px solid #000;
  border-radius: 20px;
  margin-top: 20px;
  transition: .5s;
  background-color: white;
  text-align: start;
  padding-left:5px ;
}
.other p i
{
  margin-right: 10px;
  font-size: 15px;
  font-weight: 400;
  color: #a2a0a0;
  font-weight: 700;
}
.other p:hover
{
  box-shadow: 0 0 10px #d6d4d4;
  background-color: black;
  color: white;
  border-color: white;
}
a
{
  display: inline-block;
  margin-top: 20px;
  text-decoration: none;
  color: #4CAF50;
  font-size: 16px;
  font-weight: bold;
}
p img
{
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
}
</style>
