const http=require('http');
const Users=[
    {id:1,name:"John",age:25},
    {id:2,name:"Ryan",age:23},
    {id:3,name:"Mike",age:26},
]
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    const names = Users.map(user => user.name);
    
    res.end(JSON.stringify(names)); // Sending only names as JSON array
});

server.listen(9001,()=>{
    
    console.log('Server is running at http://localhost:9001');
});