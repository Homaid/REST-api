const fs = require('fs');
const express = require("express")
const index = fs.readFileSync('data.json', 'utf-8')
const data =JSON.parse(index)
const products = data.products;




const server = express()
server.use(express.json())

//products

server.get('/products', (req,res) => {  
   res.json(products)
})
server.get('/products/:id', (req,res) => {
  const id = +req.params.id;
  // console.log(products[0].id)

  //  let product = products.filter((x) => {
  //      if(id === x.id){
  //        return x[id]
  //      }else {
  //       return {
  //         type :"ERROR 404"
  //       }
  //      }

  //     //  console.log(product)

  //  })
  // let product = products.filter((x) => x.id === id);
  // if (product.length > 0) {
    
  // //  console.log(product)
  // res.json(product[0])}
  const product = products.find((p) => {
    if(p.id === id){
     return p;
    }
 })
 res.json(product)
})
server.post('/products', (req,res) => {
   console.log(req.body)
   products.push(req.body)
  res.json(req.body)
})
server.put('/products/:id', (req,res) => {
  const id = +req.params.id;
  // console.log(products[0].id)

  //  let product = products.filter((x) => {
  //      if(id === x.id){
  //        return x[id]
  //      }else {
  //       return {
  //         type :"ERROR 404"
  //       }
  //      }

  //     //  console.log(product)

  //  })

  // const Index = products.findIndex
  // let product = products.filter((x) => x.id === id);
  
  // if (product.length > 0) {
    
  // //  console.log(product)
    
  // res.json(product[0])}
  const productIndex = products.findIndex((p) => {
     if(p.id === id){
      return p;
     }
  })
  products.splice(productIndex,1,{...req.body, id:id})
  res.json({
    product : "Updated"
  })
  // console.log(productIndex)
  // res.json(product)

})

server.patch('/products/:id', (req,res) => {
  const id = +req.params.id;
  // console.log(products[0].id)

  //  let product = products.filter((x) => {
  //      if(id === x.id){
  //        return x[id]
  //      }else {
  //       return {
  //         type :"ERROR 404"
  //       }
  //      }

  //     //  console.log(product)

  //  })

  // const Index = products.findIndex
  // let product = products.filter((x) => x.id === id);
  
  // if (product.length > 0) {
    
  // //  console.log(product)
    
  // res.json(product[0])}
  const productIndex = products.findIndex((p) => {
     if(p.id === id){
      return p;
     }
  })
  const product = products[productIndex]
  products.splice(productIndex,1,{...product,...req.body})
  res.json({
    product : "Updated"
  })
  // console.log(productIndex)
  // res.json(product)

})
server.delete('/products/:id', (req,res) => {
  const id = +req.params.id;
  // console.log(products[0].id)

  //  let product = products.filter((x) => {
  //      if(id === x.id){
  //        return x[id]
  //      }else {
  //       return {
  //         type :"ERROR 404"
  //       }
  //      }

  //     //  console.log(product)

  //  })

  // const Index = products.findIndex
  // let product = products.filter((x) => x.id === id);
  
  // if (product.length > 0) {
    
  // //  console.log(product)
    
  // res.json(product[0])}
  const productIndex = products.findIndex((p) => {
     if(p.id === id){
      return p;
     }
  })
  // const product = products[productIndex]
  products.splice(productIndex,1)
  res.json({
    product : "Deleted"
  })
  // console.log(productIndex)
  // res.json(product)

})

// server.get('/', (req,res) => {
//     res.send("<h1>I wish someon could hold me </h1>")

// })



const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});