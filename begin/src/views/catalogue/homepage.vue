
<template>
<div class="all">
  homepage
   用户: {{name||'游客'}}
</div>
</template>

<script >
export default {
  data(){
    return{
       name:'',
      excessive:false,
    }
  },
  created() {
   this.name=this.$route.query.name
    console.log(name)
  },
  methods:{

  }
}
</script>

<style scoped>
.all{
  background: #52c41a;
  height: 300px;
  width: 300px;
}
</style>
