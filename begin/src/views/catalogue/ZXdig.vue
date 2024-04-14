
<template>

  <el-dialog
    custom-class="saveAsDialog"
    :visible.sync="dig"
    title="发布"
    width="45%"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :before-close="handleClose">
    <el-form label-position="right" label-width="80px" ref="formLabelAlign" :model="formLabelAlign" :rules="rules">
      <el-form-item label="类型"  prop="type">
        <el-select v-model="formLabelAlign.type" placeholder="请选择类型">
          <el-option label="无要求" :value="1"></el-option>
          <el-option label="阳虚质" :value="1"></el-option>
          <el-option label="阴虚质" :value="2"></el-option>
          <el-option label="气虚质" :value="3"></el-option>
          <el-option label="湿热质" :value="4"></el-option>
          <el-option label="痰湿质" :value="5"></el-option>
          <el-option label="血瘀质" :value="6"></el-option>
          <el-option label="特禀质" :value="7"></el-option>
          <el-option label="气郁质" :value="8"></el-option>
          <el-option label="平和质" :value="9"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题"  prop="name">
        <el-input v-model="formLabelAlign.name" ></el-input>
      </el-form-item>

      <el-form-item label="内容"  prop="region">
        <el-input type="textarea" v-model="formLabelAlign.region"></el-input>
      </el-form-item>
    </el-form>
    <el-input
      v-if="backAn"
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4}"
      placeholder="请输入内容"
      v-model="textarea">
    </el-input>

    <el-divider></el-divider>
    <el-button type="primary" @click="submitForm('formLabelAlign')">立即创建</el-button>
    <el-button @click="resetForm('formLabelAlign')">重置</el-button>
  </el-dialog>
</template>
<script >
import {comment, insertcomment} from "../../axios/AllRequest";

export  default {


  data(){
    return{
      formLabelAlign: {
        name: '',
        region:'',
        type: '',
        img:'',
      },
      anList:[],
      dig:false,
      title:'',
      mes:'',
      outList:[],
      backAn:false,
      textarea:'',
      id:'',
      userid:sessionStorage.getItem('OrgId'),
      rules: {
        name: [
          { required: true, message: '请输入活动标题', trigger: 'blur' },
        ],
        region: [
          { required: true, message: '请输入内容',trigger: 'blur' }
        ],
        type: [
          {required: true, message: '请选择类型', trigger: 'blur' }
        ],

      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClose(done) {
      this.anList=[]
      this.dig=false
      this.backAn = false
      this.textarea = ''
      this.$emit('close1', false)
    },
    insertcomments(){
      if(this.textarea==''){
        this.$message({
          message: '评论不能为空',
          type: 'warning'
        });
        return;
      }
      insertcomment('/home/insertList',{
        mesid:this.id,
        an_mes:this.textarea,
        an_userid:this.userid,
        state:1
      }).then(({data})=>{
        if(data.code==200){
          this.$message({
            message: '发布成功',
            type: 'success'
          });
          this.comments()
          this.textarea=''
        }
      })

    },

    init(dig){

      this.dig=dig


    }
  },
  mounted() {

  }
}
</script>

<style scoped lang="scss">
.reply{
  display: block;
  float: right;
  cursor: pointer;
  margin-top: 4px;
  color: #3a8ee6;
  margin-right: 20px;

}
.bu-box {
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction:row-reverse;
  .button {
    top: 10px;
  }
}
.scoll{
  max-height: 300px;
  overflow-y: auto;
}
.answerbottom{
  display: flex;
  flex-direction: column;
  gap: 10px;
  .text{
    padding:10px;
    background-color: rgba(230,230,250,0.8);
  }
}
</style>
<style>
.saveAsDialog{
  min-width: 500px;
}
</style>
