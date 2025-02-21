const http = require('http');
const server = http.createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const data = await fetch('https://fakestoreapi.com/products');
    const jsonData = await data.json();
    const myhtml = `<html>
    <head>
        <title>My Product</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f5f5f5;
                text-align: center;
                margin: 0;
                padding: 20px;
            }
            h1 {
                color: #333;
            }
            .product-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 20px;
                padding: 20px;
            }
            .product-card {
                background: white;
                border-radius: 10px;
                padding: 15px;
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                max-width: 250px;
                text-align: center;
            }
            img {
                max-width: 100%;
                border-radius: 5px;
            }
            .price {
                font-size: 18px;
                font-weight: bold;
                color: #28a745;
            }
            .rating {
                color: #ff9800;
                font-weight: bold;
            }
            hr {
                border: none;
                height: 1px;
                background: #ddd;
                margin: 10px 0;
            }
        </style>
    </head>
    <body>
        <h1>Products</h1>
        <div class="product-container">
            ${jsonData.map((product) => {
                return `<div class="product-card">
                    <h2>${product.title}</h2>
                    <img src="${product.image}" height="200" width="150" alt="${product.title}">
                    <p>${product.description.substring(0, 100)}...</p>
                    <p class="price">$${product.price}</p>
                    <p class="rating">Rating: ${product.rating.rate} </p>
                </div>`;
            }).join('')}
        </div>
    </body>
    </html>`;

    res.end(myhtml);
});
server.listen(9100, (err) => {
    if (err) throw err;
    console.log('Server is Running at http://localhost:9100');
});
