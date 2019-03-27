const net = require('net')
const socket = net.connect(12306,"192.168.46.198")
socket.on('connect',function(){
    console.log('已连接到服务器了')
    console.log(socket.remoteAddress)
    console.log(socket.remotePort)
    console.log(socket.localAddress)
    console.log(socket.localPort)
})

socket.write('hello world')

socket.on('data',function(data){
    console.log(data.toString())
    // socket.end()
})
socket.on('close',function(){
    console.log('发送完成已关闭')
})