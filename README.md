### 介绍 
A Vue.js mobile Component based on alloycrop, With this component, you can crop images(一个基于alloycrop的vue移动端组件,使用该组件你可以在移动端做图片的裁剪)
### 安装
```
npm i vue-image-clipper -S
```
or
```
yarn add vue-image-clipper 
```
### 使用
- 在main.js中
```
import Vue from 'vue'

import VueImageClipper from 'vue-image-clipper'

Vue.use(VueImageClipper)

```
- 在组件中
```
<template>
  <div id="app">
    <vue-image-clipper 
      v-if="isShow" 
      :options="options"
      @confirm="handleConfirm" 
      @cancel="handleCancel"
    /> 
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
        image_src: "https://img0.baidu.com/it/u=3710399885,2923078079&fm=26&fmt=auto&gp=0.jpg", //必传
        className: 'VueImageClipper',
        circle: true, // 可选参数默认为true,展示原型的选择框,false为矩形选择框
        width: 400,  //选择框的框 默认200
        height: 400,  //选择框的高 默认200
        output: 1, // 输出的图片比例 800*800 默认200*200
        ok_text: "yes111", // 确认按钮的文字 默认是ok
        cancel_text: "no2222" //取消按钮的文字 默认是cancel
      }
    }
  },
  methods:{
    handleConfirm(imgSrc,canvas){
      this.imgSrc=imgSrc
      document.querySelector('#test').appendChild(canvas)
      this.isShow=false
    }
  }
}
</script>
```
|props|说明|type|默认值|返回参数
|--|--|--|--|--|
|image_src|需要裁剪的图片|string|null(必传)|
|className|渲染的canvas挂载点|string|'VueImageClipper'|
|circle|裁剪框的形状|boolean|true(原型,false为矩形)|
|width|裁剪框的宽|string|默认200px|
|height|裁剪框的高|string|默认200px|
|output|裁剪出的图片分辨率|number|1|输出的图片比例 800\*800 默认200\*200
|ok_text|确认裁剪按钮的文字|string|ok|
|cancel_text|取消裁剪按钮的文字|string|cancel|
|confirm|确认裁剪按钮的事件|function|null|(base64图片地址,canvasDom)
|cancel|取消裁剪按钮的事件|function|null|null

- 注：对于onBlur事件，可以自定义校验规则和相关逻辑，但必须显示的指定返回值返回false，则终止更新列表数据，返回true，则正常更新列表值
- 效果
[移动端打开](https://alloyteam.github.io/AlloyCrop/)