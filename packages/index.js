import AmountColumn from "./amount-column/index.js"; // 引入封装好的组件
// 存储组件列表
// const components = [AmountColumn]
// // 定义install 安装方法, 接收Vue作为参数，如果使用use注册插件，则所有的组件都将被注册
// const install = function (Vue) {
//     // 判断是否安装
//     if (install.installed) return;
//     //遍历注册去全局组件
//     components.forEach(component => {
//         Vue.component(component.name, component)
//     });
// }
// //判断是否直接引入文件
// if (typeof window !== "undefined" && window.Vue) {
//     install(window.Vue)
// }

// 默认导出组件
export default AmountColumn;