// 定义防抖函数
// 目的：控制函数执行频率
// 特征：间隔事件内触发事件，回调函数只执行一次，以最后一次为准

export function debounce(callback,wait){
    let timerId=null
    // 返回防抖函数
    return function(event){
        //间隔内触发事件，则清除其事件，通过清除定时器的方式
        if (timerId) {
            clearTimeout(timerId)
        }
        // 通过定时器来控制间隔时间
        timerId = setTimeout(()=>{ // 必须是箭头函数,函数里面的this是事件触发元素
            callback.call(this,event)
            // 执行完成之后将timerId指定为null
            timerId = null
        },wait)
    }
}