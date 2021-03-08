// 自定义函数的bind方法
// 返回新函数，改变this指向，支持分批传参
import call from './call'

export default function bind(fn,obj,...args1){

    return function (...args2){
        return call(fn,obj,...args1,args2)
    }
}