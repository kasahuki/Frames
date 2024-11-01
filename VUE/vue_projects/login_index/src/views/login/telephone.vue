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
    <h2>HELLO THERE!</h2>
  </div>
  <div class="form">
    <van-field
      v-model="username"
      type="text"
      placeholder="请输入手机号"
      clearable
    ></van-field>
    <div class="validator">
    <input type="text" placeholder="请输入图形验证码" v-model="gracode">
   <img :src="picCode" alt="" @click="getPicCode">
    </div>
    <div class="validator">
    <input type="text" placeholder="请输入短信验证码" v-model="msg" @keydown.enter="getmsg">
    <span @click="getmsg" >{{time>=Totaltime?"获取验证码":`${time}秒后重新发送`}}</span>
    </div>
    <van-button type="primary" block>登录</van-button>
    <div class="option">
     <button>忘记密码</button>
     <button>注册</button>
    </div>
  </div>
  </div>

  </div>

</template>

<script>
// import { Toast } from 'vant'
import request from '@/utils/request'
export default {
  name: 'LoginIndex',
  data () {
    return {
      picCode: '',
      key: '',
      username: '',
      password: '',
      gracode: '',
      msg: '',
      time: 5,
      Totaltime: 5,
      timber: null
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    async getPicCode () {
      const res = await request.get('/captcha/image')
      this.picCode = res.data.base64
      this.key = res.data.key
    },
    getmsg () {
      console.log('获取验证码')
      if (this.time === this.Totaltime && this.timber === null) {
        // 只有在倒计时结束时才可以重新发
        this.timber = setInterval(() => {
          this.time--
          if (this.time <= 0) {
            this.time = this.Totaltime
            // 恢复状态
            clearInterval(this.timber)
          }
        }, 1000)
      } else {
        this.$toast('请等待' + this.time + '秒后再获取')
      }
    },
    created () {
      this.getPicCode()
    }
  }
}
</script>

<style scoped>

.validator
{
  display: flex;
  justify-content: space-between;
  padding-left:15px ;
  font-size: 14px;
  color: #323233;
  margin-top:20px ;
}
.validator input
{
  width: 50%;
  border:0;
}
.validator img
{

}
.validator span
{
  display:inline-block;
  margin-right: 15px;
  cursor: pointer;
  color: chocolate;
  vertical-align: middle;
}
.container
{
  width: 500px;
  height: 600px;
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
}
.other p
{
  border: 1px solid #000;
  border-radius: 20px;
  margin-top: 20px;
  transition: .5s;
}
.other p i
{
  margin-right: 10px;
  font-size: 15px;
  font-weight: 400;
  color: #a2a0a0;
}
.other p:hover
{
  box-shadow: 0 0 10px #d6d4d4;
  background-color: black;
  color: white;
}

</style>
