import initDB from '../../helpers/initDB'
import Product from '../../models/Product'

initDB()

export default async (req,res)=>{
  switch (req.method)
    {
       case "GET":
         await getallProducts(req,res)
         break
       case "POST":
         await saveProduct(req,res)   
         break
    }  
}


const getallProducts = async (req,res)=>{
  try{
      //console.log('test=>'+req.query.name);
      var query = {name:req.query.name};
    const products =  await Product.find(query)
    res.status(200).send(products)
  }catch(err){
    console.log(err)
  }
  
}


const saveProduct = async (req,res)=>{
 
  const {name,price,description,mediaUrl,canvas} =  req.body
  try{
      if(!name || !price || !description || !mediaUrl){
    return res.status(422).json({error:"Please add all the fields"})
  }
   const product = await new Product({
     name,
     price,
     description,
     canvas,
     mediaUrl
   }).save()
   res.status(201).json(product);
   console.log('done');
  }catch(err){
    res.status(500).json({error:"internal server error"})
    console.log(err)
  }


}