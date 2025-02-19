const http=require('http')

const server=http.createServer(async(req,res)=>{
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json(); // Convert response to JSON

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const titles=data.products.map((user)=>user.title);
    res.end(JSON.stringify(titles)); 
})

server.listen(9011,(err)=>{
    if (err) throw err;
    else
    console.log('Server is Running at http://localhost:9011/');
});