
<template>

  <el-dialog
    custom-class="saveAsDialog"
    :visible.sync="dig"
    :title="title"
    width="45%"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :before-close="handleClose">
    <span>{{mes}}</span>
    <span class="reply" @click="backAn=!backAn">回复</span>
    <el-input
      v-if="backAn"
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4}"
      placeholder="请输入内容"
      v-model="textarea">
    </el-input>
    <div class="bu-box">
    <el-button type="primary"  class="button"  v-if="backAn" @click="insertcomments">确认回复</el-button>
    </div>
    <el-divider></el-divider>
    <div class="scoll">

    <div v-for="(item,index) in anList" class="answerbottom">
      <span><span>用户:{{item.username}}&nbsp;</span>回答时间：{{item.problemList.finishtime.slice(0,10)}}</span>
      <span class="text">{{item.problemList.anMes}}</span>
    </div>
    <div v-if="anList==null"><el-empty :image-size="50" description="暂无评论"></el-empty></div>
    <span slot="footer" class="dialog-footer">
  </span>
    </div>
  </el-dialog>
</template>
<script >
import {comment, insertcomment} from "../../axios/AllRequest";

export  default {

  watch:{
    dig:{
      handler(newvalue){
      }
    }
  },
  data(){
    return{
      anList:[],
      queid:0,
      dig:false,
      title:'',
      mes:'',
      outList:[],
      backAn:false,
      textarea:'',
      id:'',
      userid:sessionStorage.getItem('OrgId')
    }
  },
  methods: {
    handleClose(done) {
      this.anList=[]
      this.dig=false
      this.backAn = false
      this.textarea = ''
      this.$emit('close', false)
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
            message: '评论成功',
            type: 'success'
          });
          this.comments()
          this.textarea=''
        }
      })

    },
    comments() {
      comment('/home/AnswerList',
        {
          id: this.id,
          queid:this.queid
        }).then(({data}) => {
        if(data.code==200){
          this.anList=data.data
        }
      })
    },
    init(list,dig){
      this.outList=list
      this.dig=dig
      this.queid=this.outList.problemList.userid,
      this.title=this.outList.problemList.proTitle
      this.mes=this.outList.problemList.mes
       this.id=this.outList.problemList.mesid
      this.comments()
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
