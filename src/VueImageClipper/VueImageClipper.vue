<template>
<div class="VueImageClipper">
<!--html code-->
</div>
</template>

<script>
import AlloyCrop from 'alloycrop' 
export default {
  name:'VueImageClipper',
  props:{
    options:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
      const _this=this
      const defaultOptions={
        image_src: "",
        className: 'VueImageClipper',
        circle: true, // optional parameters , the default value is false
        width: 200, // crop width
        height: 200, // crop height
        output: 1, // output resolution --> 400*200
        ok: function (base64, canvas) {
          console.log(base64,canvas);
          _this.$emit('confirm',base64,canvas)
           _this.mAlloyCrop.destroy();
         },
        cancel: function () { 
         _this.$emit('cancel')
        },
        ok_text: "yes", // optional parameters , the default value is ok
        cancel_text: "no" // optional parameters , the default value is cancel
      }
      const mergeOptions=Object.assign({},defaultOptions,this.options)
      this.mAlloyCrop=new AlloyCrop(mergeOptions);
    }
  }
}
</script>
