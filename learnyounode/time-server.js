const net = require('net');

let date = new Date();
let month = zeroCheck(date.getUTCMonth() + 1);
let monthDate = zeroCheck(date.getDate());
let hours = zeroCheck(date.getHours());
let minutes = zeroCheck(date.getMinutes());

function zeroCheck(moment){
	return moment < 10 ? "0" + moment : moment;
}

let formattedDate = date.getFullYear()
formattedDate += "-" + month;
formattedDate += "-" + monthDate;
formattedDate += " " + hours;
formattedDate += ":" + minutes;

const server = net.createServer((socket) => {
  socket.write(formattedDate);
  socket.end("\n");


}).on('error', (err) => {
  // handle errors here
  throw err;
});


server.listen(process.argv[2]);
