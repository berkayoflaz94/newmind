const { Client } = require('@elastic/elasticsearch')
const logger = require('../utils/logger')

const esClient = new Client({
    cloud:{
        id: 'ec2f61e55acd43caac719e41358588d6:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvOjQ0MyRiMmJlOWY0YmJiM2Y0ZjBmYWE1ODM3MDY5YmEzOTExMCRjMjQ0MDU4NDBmZjE0YjNmYWY1OTU4ZDk2M2UzNTJkYQ=='
    },
    auth:{
        username:'elastic',
        password:'hfuESDL9zq8Qb6qQUKxwwTX1'
    }
})


// add product

const addProduct = async(product) => {
    try{
        const results = await esClient.index({
            index:'products',
            body: product
        })
        await esClient.indices.refresh({index:'products'});
        return results
    }catch(e){
        logger.error(`elasticsearch e bagli add product çalışmıyor`)
    }
}


const deleteProduct = async(id) => {
    try{
        const results = await esClient.delete({
            index:'products',
            id
        })
        await esClient.indices.refresh({index:'products'});
        return results
    }catch(e){
        logger.error(`elasticsearch e bagli add product çalışmıyor - ${e}`,)
    }
}

const searchProducts = async(text) => {
    try{
        const results = await esClient.search({
            query: {
              match: {
                name: text
              }
            }
          })
        return results.hits.hits.map((hit) => hit._source)
    }catch(e){
        logger.error(`elasticsearch e bagli add product çalışmıyor - ${e}`,)
    }
}
module.exports = {
    addProduct,
    searchProducts,
    deleteProduct
}