// 引入组件
import VueImageClipper from './VueImageClipper.vue';
// 组件需要添加name属性，代表注册的组件名称，也可以修改成其他的
VueImageClipper.install = Vue => Vue.component(VueImageClipper.name, VueImageClipper); //注册组件

export default VueImageClipper;