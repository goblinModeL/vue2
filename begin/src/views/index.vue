

<template>
<div class="home">
  <el-card  class="form">
    <p class="title">用户登录</p>
    <p class="skip" @click="jumpOutOf">跳过登录</p>
    <el-form label-position="left" label-width="80px" :model="user" class="login-form" :rules="rules" ref="users">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="user.name" placeholder="输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password" type="password"  placeholder="输入密码" show-password></el-input>
      </el-form-item>
    </el-form>
    <div class="logIn">
     <p class="skip1" @click="signIn">没有账号?点击注册</p>
      <el-button type="primary" @click="register(user)">登录</el-button>
    </div>
  </el-card >
  <transition name="slide">
<sign-in :open="open"  v-if="open" @close="open=!open"></sign-in>
  </transition>
  <transition name="slide">
  <Ma-sk v-if="open" ></Ma-sk>
  </transition>
</div>
</template>

<script>
import {logIn} from "../axios/AllRequest";
import  signIn from  "./catalogue/signIn.vue"
import Mask from "../ui-FZ/Mask.vue"
export default {
  components:{
    signIn,
    'Ma-sk':Mask
  },
data(){
  return {
    user:{
      name:'',
      password:''
    },
    excessive:false,
    open:false,
    rules:{
      name:[
        { required: true, message: '请输入用户名', trigger: 'blur' },
      ],
      password:[
        { required: true, message: '请输入密码', trigger: 'blur' },
      ]
    }
  }
},
  mounted() {
  },
  methods:{
    register(){
      this.$refs.users.validate((valid)=>{
         if(valid){
            //接口
           logIn('/home/login',{
              username:this.user.name,
             password:this.user.password
           }).then((msg)=>{
             if(msg.data.status==200){
               this.$message({
                 message: '登录成功,即将跳转',
                 type: 'success'
               });
               setTimeout(()=>{
                 this.excessive=true;
                 this.$router.push({
                   path:'/homepage',
                   query:{name:this.user.name}
                 })
               },1000)
             }

             if(msg.data.status==201){
               // this.user.password=''
               this.$message({
                 message: '密码错误',
                 type: 'error'
               });

             }
             if(msg.data.status==202){
              // this.user.password=''
               this.$message({
                 message: '用户不存在',
                 type: 'warning'
               });
             }
           }).catch((error)=>{
             this.$message({
               message: '服务器错误,请联系管理员',
               type: 'error'
             });
           })
         }
         else{
           console.log('false')
           return false;
         }
      })

    },
    signIn(){
 this.open=!this.open;
    },
    jumpOutOf(){
      this.excessive=true;
      this.$router.push({
        path:'/homepage',
      })
    }
  }
}

</script>
<style scoped>
.skip{
  color: #A9A9A9;
  position: absolute;
  font-size: 14px;

  right: 50px;
  cursor: pointer;
}
.home{
  z-index:1;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: PingFang SC,serif;
}
.form{
  display: flex;
  position: relative;
  width: 500px;
  height: 400px;
  flex-direction: column;
  padding: 50px;
  gap:20px;
  .title{
    font-size: 20px;
    font-family: PingFang SC,serif;
    position: absolute;
    font-weight: 800;
    width: 350px;
    top:25px;
    text-align: center;
  }
  .logIn{
    display: flex;
   justify-content: space-between;
    width: 100%;
   height: 40px;
    .skip1{
      height: 40px;
       line-height: 60px;
      width: 200px;
      white-space: normal;
      font-size: 14px;
      color: #A9A9A9;
      margin-bottom: 0;
      cursor: pointer;
    }
  }
}
.login-form{
  margin-top: 40px;
}
/deep/.login-form .el-form-item__content{

  margin-left: 80px  !important;
}
/deep/.login-form .el-form-item__label{
  width: 80px  !important;
  white-space: nowrap;
}
.fade-enter-active, .fade-leave-active, .slide-enter-active, .slide-leave-active {
  transition: opacity 0.5s;/* 根据需要设置动画持续时间和其他属性 */
}
.fade-enter, .fade-leave-to, .slide-enter, .slide-leave-to {
  opacity: 0;
}
</style>

