var io = require('socket.io')(http);

io.on('connection', function(socket) {
    socket.on('disconnect', function() {
        console.log('someone left');
    });
    socket.on('test', function(msg) {
        io.emit('test', msg);
    });
});

module.exports = io;
