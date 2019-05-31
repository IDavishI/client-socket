
// First Client
const io1 = require('socket.io-client')('http://localhost:3004', {query: 'auth_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2U2ZjQzY2Y0ZTE2MTI3YjQ4M2VmZTciLCJwaG9uZSI6Iis3NzAwMjYyNTcxMyIsImlwIjoiOjpmZmZmOjEyNy4wLjAuMSIsInRva2VuQ3JlYXRlZEF0IjoiMjAxOS0wNS0zMFQxNzoyMTo0OS4xMzJaIiwiaWF0IjoxNTU5MjM2OTA5fQ.PI5fGPPMn2dYMRwrm6sWQsIOxNg4zcS-oP7N25GnG6qD6kuLJikfk8HyXWjBY9ymRCjh0vT-L9zgnergypF1aA'});

// Second Client
const io2 = require('socket.io-client')('http://localhost:3004', {query: 'auth_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2VlOWQxZDAyNGVhMDFkOWNhMzM1MTkiLCJwaG9uZSI6Iis3NzAwMjYyNTUxMyIsImlwIjoiOjpmZmZmOjEyNy4wLjAuMSIsInRva2VuQ3JlYXRlZEF0IjoiMjAxOS0wNS0zMFQxNzoyMjoxOC43NzBaIiwiaWF0IjoxNTU5MjM2OTM4fQ.N7fk3PGbw-YSXvTi7mBqTfAlCwB9ddhGuj9OL5eqIC9yemm2EuxEYFpk1FdihuY8P_GiacHd99DVkNqvLyiRog'});

// Third Client
const io3 = require('socket.io-client')('http://localhost:3004', {query: 'auth_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2YwMTE1NTg1NjkwNjE1MDg4M2FiZjciLCJwaG9uZSI6Iis3NzAwMjYyNTcxMiIsImlwIjoiOjpmZmZmOjEyNy4wLjAuMSIsInRva2VuQ3JlYXRlZEF0IjoiMjAxOS0wNS0zMFQxNzoyMjoyOS44MDlaIiwiaWF0IjoxNTU5MjM2OTQ5fQ.PNzNesEBASP58GBgs87SQonZSP72dnoT9KnvwuHTURQPuLtAA98WhsHcr4EysdgmVfOpkbtZKEGv0JCnwx6S8A'});

// Listen on error event
io1.on('error',(err) => {
    console.log(err);
});

io2.on('error',(err) => {
    console.log(err);
});

io3.on('error',(err) => {
    console.log(err);
});

var roomId = "5cf016e1a35f35d38fb8a94e";
var messageId = "5cf11907005b7f0b0487bde7";

// Call join event
io1.emit('join', (`${roomId}`));

io2.emit('join', (`${roomId}`));

io3.emit('join', (`${roomId}`));


// Listen newMessage event
io1.on('newMessage', (data) => {
    console.log(data);
});

io2.on('newMessage', (data) => {
    console.log(data);
});

io3.on('newMessage', (data) => {
    console.log(data);
});


// Call newMessage event
/*io1.emit('newMessage', ({
    'roomId' : `${roomId}`,
    'message' : {
        'type' : 'group',
        'content' : 'Dance, baby, dance!'
    }
}));*/

/*io2.emit('newMessage', ({
    'roomId' : `${roomId}`,
    'message' : {
        'type' : 'group',
        'content' : 'Hello!'
    }
}));

io3.emit('newMessage', ({
    'roomId' : `${roomId}`,
    'message' : {
        'type' : 'group',
        'content' : 'How are u?!'
    }
}));*/

// Call messageRead event
io1.emit('messageRead', ({
    'messageId' : `${messageId}`
}));

io2.emit('messageRead', ({
    'messageId' : `${messageId}`
}));

/*io3.emit('messageRead', ({
    'messageId' : `${messageId}`
}));*/

// Call disconnect event
// io1.emit('disconnect');

// io2.emit('disconnect');

// io3.emit('disconnect');