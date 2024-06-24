var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');
var users = [];
var entro = false;
app.listen(9000);
console.log('Servidor escuchando');
users.length = 0;
function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}
io.on('connection', function (socket) {
	socket.on('disconnect',function(){
  		console.log('disconnect');
	});
	socket.on('conn',function(data){
		data = JSON.parse(data);
		socket.join(data.usuario);
		user = {'usuario':data.usuario,
				'nombre':data.nombre,
				'hora':0,
				'socket':socket};		
		for(i=0;i<users.length;i++){
			if(users[i].usuario==data.usuario){
				users[i].hora=new Date();
				users[i].socket=socket;
				entro = true;
				return;
			}
		}
		if(!entro){
			user.hora = new Date();
			users.push(user);
		}else{
			entro = false;
		}
		socket.on('enviar',function(data){
			data = JSON.parse(data);
			io.emit('enviado',data);
		})
		/*
		users.forEach(function(usuario) {
			if(usuario.usuario==data.usuario){
				//io.to(usuario.usuario).emit('1100', data);
				socket.broadcast.to(usuario.socket.id).emit('enviar', data);
				return;
			}
		});
		*/
	});
});