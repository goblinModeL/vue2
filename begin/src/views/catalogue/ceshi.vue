

<template>
  <div class="uuu">
  <el-form label-position="right" label-width="80px" :model="formLabelAlign">

    <el-form-item label="名称">
      <el-input v-model="formLabelAlign.name"></el-input>
    </el-form-item>
    <el-form-item label="图片">


    </el-form-item>
    <el-form-item>
    <div class="demo-image">
      <img class="icon" src="http://192.168.0.76:8465/img/fe08d3fcf830abf280edbc02009dce3.png" alt="">
<!--      :src="require('@/assets/ceshi.jpg')"-->
      <!--      <div class="block">-->
<!--        <span class="demonstration">默认</span>-->
<!--        <el-image src="http://192.168.0.76:8465/Demo2/img/ceshi.jpg"></el-image>-->

<!--      </div>-->
      </div>

    </el-form-item>
  </el-form>
    <el-upload
      name="file"
      :action="url"
      list-type="picture-card"
      :on-progress="handleProgress"
      :on-success="handleAvatarSuccess"
      :on-error="imgError"
    >
    </el-upload>
  </div>

</template>
<script>
export default {
  data() {
    return {
      formLabelAlign: {
        name: '',
       src:''
      },
      url:'http://192.168.0.76:8465/getActive/upload',
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
    };
  },
  methods:{
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(res)
      console.log(file)
    },
    imgError(err, file,List){
      console.log(err)
      console.log(file)
      this.$message('上传失败')
    },
    // handleProgress(event,file,List){
    //   console.log(event)
    //   console.log(file)
    // },
    onBeforeUpload(file){
      console.log(file)
    },

  }
}

</script>
<style scoped lang="scss">
.uuu{
  width: 300px;
}
</style>
