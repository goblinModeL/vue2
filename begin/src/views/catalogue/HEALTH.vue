
<template>
<div class="father">
  <div></div>
  <el-tag
    v-for="tag in tags"
    :key="tag.name"
    :disable-transitions="false"
    @close="handleClose(tag)"
    closable
    :type="tag.type">
    {{tag.name}}
  </el-tag>
</div>
</template>

<script >
export default {
  data(){
    return{
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ]
    }
  },
  methods:{
   init(){

   },
    handleClose(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
    },
  },
  mounted(){

  }
}
</script>

<style scoped lang="scss">
.father{
  height: 100%;
  width: 100%;
  .el-tag{
    margin-right:20px ;
  }
}

</style>
