const net = require('net')
const server = net.createServer()
server.listen(12306,"192.168.46.198")
server.on('listening',function(){
    console.log(server.address())
    console.log('服务已启动')
})
server.on('connection',function(socket){
    console.log('有新的连接 ')
    socket.on('data',function(data){
        console.log(data.toString())
        socket.write("HTTP 200OK\r\nContent-type:text/html\r\nServer:ZWM/1.1\r\n\r\n<html><body>hello brower</body></html>" )
        socket.end()
    })
    /*socket.on('close',function(){
        console.log('客户断已关闭')
        server.close()
    })*/
    // socket.write('hello client')
})

server.on('close',function(){
    console.log('服务已关闭')
})