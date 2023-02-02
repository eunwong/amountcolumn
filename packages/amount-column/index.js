import AmountColumn from './src/index';
// 为组件提供install 安装方法，供按需引入
AmountColumn.install = function (Vue) {
    Vue.component(AmountColumn.name, AmountColumn)
}

// 默认导出组件
export default AmountColumn