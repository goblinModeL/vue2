
<template>

  <el-dialog
    custom-class="saveAsDialog"
    :visible.sync="dig"
    :title="title"
    width="45%"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :before-close="handleClose">
    <span class="content">{{mes}}</span>

    <el-divider></el-divider>

      <span slot="footer" class="dialog-footer">
      浏览次数:{{num}}
  </span>

  </el-dialog>
</template>
<script >
import {comment, insertcomment} from "../../axios/AllRequest";

export  default {


  data(){
    return{
      anList:[],
      dig:false,
      title:'',
      mes:'',
      num:0,
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

   updata(){
     insertcomment('/home/Guiupdata',{
       id:this.id,
     }).then(({data})=>{
       if(data.code==200){
         this.num=data.data[0].num

       }
     })
   },
    init(list,dig){
      this.outList=list
      this.dig=dig
      this.id=this.outList.id
      this.title=this.outList.title
      this.mes=this.outList.content
      this.updata()

    }
  },
  mounted() {

  }
}
</script>

<style scoped lang="scss">


.content{
  text-indent:2em;
}
</style>
<style>
.saveAsDialog{
  min-width: 500px;
}
</style>

