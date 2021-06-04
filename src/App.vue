<template>
  <div id="app">
  <vue-image-clipper v-if="isShow" @confirm="handleConfirm" @cancel="handleCancel" :options="options"></vue-image-clipper>
  <img :src="imgSrc" alt="" width="300" height="300">
  <hr/>
  <div id="test"></div>
  <button @click="isShow=true">测试代码</button>
  </div>
</template>

<script>
import VueImageClipper from './VueImageClipper/VueImageClipper'
export default {
  name: 'app',
  components:{
    VueImageClipper
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgSrc:'',
      isShow:true,
      options:{
        image_src: "https://img0.baidu.com/it/u=3710399885,2923078079&fm=26&fmt=auto&gp=0.jpg",
        // className: 'VueImageClipper',
        // circle: true, // 可选参数默认为true,展示原型的选择框,false为矩形选择框
        width: 400,  //选择框的框 默认200
        height: 400,  //选择框的高 默认200
        output: 1, // 输出的图片比例 800*800 默认200*200
        ok_text: "yes111", // 确认按钮的文字 默认是ok
        cancel_text: "no2222" //取消按钮的文字 默认是cancel
      }
    }
  },
  methods:{
    handleCancel(){

    },
    handleConfirm(imgSrc,canvas){
      this.imgSrc=imgSrc
      document.querySelector('#test').appendChild(canvas)
      this.isShow=false
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
