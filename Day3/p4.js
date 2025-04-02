const http=require('http')
const server=http.createServer(async(req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    const data=await fetch("https://fakestoreapi.com/products");
    const products=await data.json();
    res.end(JSON.stringify(products));
    

})


server.listen(9000,(err)=>{
    if (err)
        console.log(err);
    else
       console.log("server is running at http://localhost:9000/ ");
});