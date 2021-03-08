// 定义节流函数
// 特征：控制函数执行频率，周期内触发事件，执行一次回调函数

export function throttle(callback,wait){
    let start = 0
    //返回 节流的回调函数
    return function (event) {
        // 获取当前时间
        const current = Date.now()
        // 如果当前时间-上一次执行时间大于wait ，执行真正的callback函数
        if (current-start>wait) {
            callback.call(this,event)
            // 执行完成之后，把start重新赋值为当前时间
            start = current
        }
     
    }
}