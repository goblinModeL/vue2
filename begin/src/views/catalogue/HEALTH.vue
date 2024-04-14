
<template>
<div class="father">



  <div class="box">
    <div class="left">

    </div>
    <div class="right">
    <div class="title">在线咨询<span class="ti">(该会话关闭后内容自动清除)</span></div>
    <div class="content">
        <span v-for="(item,index) in messageList"  class="boxs">
          <span>{{ item.username }}</span>
          <span>{{ username }}</span>
          <span>{{ new Date(item.time).toLocaleTimeString() }}</span>
          <span style="display: block;margin-top: 10px">{{ item.message }}</span>
              <el-divider></el-divider>
        </span>
    </div>
    <div class="bar">
      <el-input
        @keyup.native.enter="handleSendButton()"
        class="input"
        placeholder="请输入内容"
        v-model="sendMessage"
        clearable>
      </el-input>
      <el-button type="success"  class="send" @click="handleSendButton()">发送</el-button>

    </div>
    </div>
  </div>
</div>
</template>

<script >
export default {
  data(){
    return{
      webSocketObject:null,
      messageList:[],
      name:'',
      username:'',
      sendMessage:'',
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
    webSocketInit(){
      const webSocketUrl = 'ws://192.168.244.1:8465/websocket/'+ this.name
      this.webSocketObject = new WebSocket(webSocketUrl);
      this.webSocketObject.onopen = this.webSocketOnOpen
      this.webSocketObject.onmessage = this.webSocketOnMessage
      // this.webSocketObject.onerror = this.webSocketOnError
      this.webSocketObject.onclose = this.webSocketOnClose
    },
    webSocketOnMessage(e){
      console.log('来自服务端的消息->',e)
      const receiveMessage = JSON.parse(e.data);
      this.messageList.push(receiveMessage)
      var fatherElement = document.getElementsByClassName('father')[0];
      fatherElement.scrollTop = fatherElement.scrollHeight - fatherElement.offsetHeight;

    },
    webSocketOnOpen(e){
      console.log('与服务端连接打开->',e)
    },
    handleClose(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
    },
    Username(tag){
      // this.username=tag.name
      // this.webSocketObject.close();
      // this.webSocketInit()
    },
    handleSendButton() {
      const username = this.name
      const message = this.sendMessage
      this.webSocketObject.send(JSON.stringify({
        id: 1,
        message,
        username,
        time: new Date().getTime()
      }))
      this.sendMessage = ''
    },
    handleLogoutButton(){
     this.username=''
      // removeUsername() //清除username然后断开连接
      this.webSocketObject.close();

    },
    webSocketOnError(e){
      console.log('与服务端连接异常->',e)
    },
    webSocketOnClose(e){
      console.log('与服务端连接关闭->',e)
    },
  },
  mounted(){
    this.name=this.$store.state.A.user
    this.webSocketInit()
  }
}
</script>

<style scoped lang="scss">
.father{
  scroll-behavior: smooth;
  overflow-y: auto;
  height: 100%;
  width: 100%;
  .el-tag{
    margin-right:20px ;
  }
}
.opopop{
  position: fixed;
  top:20px;
}
.box{
 border: #8c939d 2px solid;
  border-radius: 10px;
display: flex;
  flex-direction: row;
  width: 60%;
  height: 70%;
  position: absolute;
  left: 50%;
  top:50%;
  transform: translate(-50%,-50%);
  .left{
   flex: 0;
  }
  .right {
    flex: 8;
    .title {
      display: flex;
      flex-direction: row;
      gap:50px;
      align-items: center;
      padding-left: 20px;
      font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
      height: 10%;
      .ti{
        color: #8c939d;

      }
    }

    .content {
      overflow-y: auto;
      position: relative;
      left:5%;
      width: 90%;
      height: 80%;
      //background-color: #8c939d;
      display: flex;
      flex-direction: column;
      .boxs{
        padding:10px;
        width:90%;

      }

    }

    .bar {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 10%;
      .input{

      }
      .send{

      }
    }
  }
}

</style>
<style>
::-webkit-scrollbar {
width: 6px; /* 纵向滚动条*/
height: 5px; /* 横向滚动条 */
background-color: #fff;
}

/*定义滚动条轨道 内阴影*/
::-webkit-scrollbar-track {
box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
background-color: white;
}

/*定义滑块 内阴影*/
::-webkit-scrollbar-thumb {
box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
background-color: #ccc;
border-radius: 10px;
}

</style>
