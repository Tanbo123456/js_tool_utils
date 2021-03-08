// 自定义函数的apply方法
// 执行函数，并且改变函数里面的this指向,通过数组的方式传入参数
export default function apply(fn,obj,args){
    if (obj===nul||obj===undefined) { // 传入为null或者undefined赋值为window
        obj=window
    }
    obj.fn = fn //本地fn里面的this
    const result = obj.fn(...args) // 执行函数，返回结果
    delete obj.fn
    return result
}