module.exports = file => () => import('@/views/' + file + '.vue')
//生产环境
// 懒加载
