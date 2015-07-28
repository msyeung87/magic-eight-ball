var net = require('net');
var answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "please try again","Ask again later","Better not tell you now","Cannot predict now", "Concentrate and ask again", "Don't count on it", "My sources say no", "Very doubtful"]

var server = net.createServer(function(connection){
	connection.setEncoding("utf8");
	connection.write("Magic 8 ball \n Ask me any question \n");
	
	connection.on("data", function(input){
		var dataQuestion = input.toString().trim();
		if (dataQuestion){
		var random = answers[Math.floor(Math.random()*answers.length)]
		connection.write(random + "\n")
		}
	})
})

server.listen(3500, function(){
	console.log("Magic 8 Ball server up!");
})