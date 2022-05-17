import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';



export default async function create(req, res) {
    console.log(req.body);
    axios({
        method: 'post',
        url: 'https://api.bigcommerce.com/stores/n77zs23ju7/v3/catalog/products',
        headers:{
          'X-Auth-Token':'8n7pe0hilba4n4oig32m835q12wiyvo'
        },
        data:{"name": req.body.name,"price": req.body.price,"weight": req.body.weight,"type": req.body.type, "sku":req.body.sku},
        responseType: 'json'
      })
        .then(function (response) {
            console.log(response);
          //response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
        });
        res.send('Hello Sir');
    
}
