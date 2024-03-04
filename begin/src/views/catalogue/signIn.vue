

<template>
<div v-if="open" class="register">
  <span class="title">用户注册</span>
  <i class="el-icon-close  close" @click="closes"></i>
 <div class="form">
   <el-form label-position="left" label-width="80px" :model="sign" class="login-form" :rules="rules" ref="formName">
     <el-form-item label="用户名" prop="name">
       <el-input v-model="sign.name" placeholder="输入用户名"></el-input>
     </el-form-item>
     <el-form-item label="密码" prop="password">
       <el-input v-model="sign.password" type="password"  placeholder="输入密码" show-password></el-input>
     </el-form-item>
     <el-form-item label="确认密码" prop="password2">
       <el-input v-model="sign.password2" type="password"  placeholder="输入密码" show-password></el-input>
     </el-form-item>
   </el-form>
   <div class="button">
     <el-button type="primary" @click.native="insertlog">注册</el-button>
     <el-button @click="clear">重置</el-button>
   </div>
 </div>
</div>
</template>

<script >
import {insert} from "../../axios/AllRequest";
let  Arule=/^(?=.*\d)(?=.*[a-zA-Z]).{6,10}$/
export  default {

  props:{
    open:Boolean,
  },
  data(){
    let definition=(rule,value,callback)=> {
      if(Arule.test(value)===false){
        callback(new Error('密码至少要包含数字和字母且长度在6-10位'));
      }
      else if (value !== this.sign.password) {
        callback(new Error('两次密码不一致'));
      }
      else{
        callback();}
    };
    let one=(rule,value,callback)=> {
      if(value===''){
        callback(new Error('请输入密码'));
      }
      if(Arule.test(value)==false){
        callback(new Error('密码至少要包含数字和字母且长度在6-10位'));
      }
          else{
        callback();}
    }

    return{
      sign:{
        name:'',
        password:'',
        password2:''
      },
      rules:{
        name:[
          { required: true, message: '请输入用户名', trigger: 'blur'},
        ],
        password:[
          { required: true, trigger: 'blur' ,validator:one},
        ],
        password2:[
          { required: true, trigger: 'blur' ,validator:definition},
        ]
      }
    }
  },
  methods:{
    closes(){
      this.$emit('close')
    },
    clear(){
      this.$refs.formName.resetFields();
    },
    insertlog(){
      this.$refs.formName.validate((valid)=>{
        if (valid) {
         insert('/home/insert',{username:this.sign.name,password:this.sign.password}).then(({data})=>{

         if(data.status==200){
           this.$message({
             message: '注册成功,即将返回登录页',
             type: 'success'
           });
       setTimeout( this.closes,2000)
         }
         if(data.status==201){
           this.$message({
             message: '用户名已存在,请重新输入',
             type: 'error'
           });
         }
         }).catch((error)=>{
           this.$message({
             message: '服务器错误,请联系管理员',
             type: 'error'
           });
         })
        } else {
          console.log('false')
          return false;
        }
      })
    }

    },

}
</script>
<style scoped lang="scss">
.register{
  border-radius: 10px;
  position: absolute;
  background: white;
  height: 500px;
  width: 650px;
  z-index: 200;
  right: 50%;
  transform: translate(50%,0);
  display: flex;
  align-items: center;
  justify-content: center;
  .title{
    font-size: 16px;
    font-family: PingFang SC,serif;
    position: absolute;
    font-weight: 800;
    top:25px;
  }
  .close{
    position: absolute;
    height: 20px;
    right:20px;
    top:10px;
    cursor: pointer;
    font-size: 20px;
  }
  .form{
    height: 350px;
    width: 550px;
    display: flex;
    flex-direction: column;
    gap:30px;
    .button{
      height: 40px;
      width: 50%;
      display: flex;
      gap:0 50px;
    }
  }
}
.login-form{
  margin-top: 50px;
  width: 100%;
}
/deep/.login-form .el-form-item__content{

  margin-left: 80px  !important;
}
/deep/.login-form .el-form-item__label{
  width: 80px  !important;
  white-space: nowrap;
}

</style>
