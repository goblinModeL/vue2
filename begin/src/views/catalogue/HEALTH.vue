
<template>
<div class="father">
  <div>{{name}}</div>
  <el-tag
    v-for="tag in tags"
    :key="tag.name"
    :disable-transitions="false"
    @click.native="Username(tag)"
    @close="handleClose(tag)"
    closable
    :type="tag.type">
    {{tag.name}}
  </el-tag>
  <input
    class="opopop"
    type="text"
    v-model="sendMessage"
    @keyup.enter="handleSendButton()"
    placeholder="请输入你要发送的消息">
  <input
    type="text"
    v-model="username"
    placeholder="请输入接收方id/name">
  <button @click="handleLogoutButton()">退出</button>
  <table class="ww">
    <thead>
    <tr>
      <th>消息编号</th>
      <th>发送者</th>
      <th>接收者</th>
      <th>发送时间</th>
      <th>发送内容</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in messageList" >
      <td>{{ item.id }}</td>
      <td>{{ item.username }}</td>
      <td>{{ username }}</td>
      <td>{{ new Date(item.time).toLocaleTimeString() }}</td>
      <td>{{ item.message }}</td>
    </tr>
    </tbody>
  </table>
  <div class="box">
    <div class="left">

    </div>
    <div class="right">
    <div class="title">在线咨询</div>
    <div class="content">
        <span v-for="(item,index) in messageList"  :class="{'right':index%2==0, 'left':index%2!=0,}">
          <span>{{ item.id }}</span>
          <span>{{ item.username }}</span>
          <span>{{ username }}</span>
          <span>{{ new Date(item.time).toLocaleTimeString() }}</span>
          <span>{{ item.message }}</span>
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
      const webSocketUrl = 'ws://192.168.0.76:8465/websocket/'+ this.name
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
   flex: 1;
    background-color: #8c939d;
  }
  .right {
    flex: 8;
    .title {
      display: flex;
      align-items: center;
      padding-left: 20px;
      background-color: palevioletred;
      font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
      height: 10%;
    }

    .content {
      background-color: #f78989;
      width: 100%;
      height: 80%;
     display: block;
      flex-direction: column;
      .left{
        max-width: 80%;
      }
      .right{
        max-width: 80%;

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
        width: 80%;
      }
      .send{

      }
    }
  }
}

</style>
