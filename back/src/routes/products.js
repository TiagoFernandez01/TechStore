import { Router } from "express";
import { getAllProducts } from '../controllers/controller.js'
import { Products } from "../models/Products.js";
import { Categories } from "../models/Categories.js";

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const { name } = req.query;
        const products = await getAllProducts();

        if (name) {
            const product = products.filter(el => el.name.toLowerCase().includes(name.toLocaleLowerCase()));
            product.length ? res.status(200).json(product) : res.status(400), json({ 'message': 'Ups, Prooducts Not Found' })
        } else {
            res.status(200).json(products)
        }
    } catch (error) {
        next(error)
    }
})

router.get('/:idProduct', async (req, res, next) => {
    try {
        const { id } = req.params;
        const products = await getAllProducts();
        const idProduct = products.filter(el => el.id == id);

        idProduct.length ? res.status(200).json(idProduct) : res.status(400).json({ 'message': 'ID Not Found' })

    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {

    let {
        name,
        price,
        category,
        description,
        image,
        stock
    } = req.body
    
        
    if(!name || !price || !category || !description || !image || !stock ){
        return res.status(400).json({error: 'Complete all fields requerid'})
    }

    try {
    
        

        let product = await Products.create({
            name,
            price,
            description,
            image: image ? image : "",
            stock
        })

        let associatedProduct = await Categories.findAll({
            where: { name: category },
        })

        product.addCategories(associatedProduct);
            console.log(product)
        res.status(200).send("Product created succesfully!") 
        
    } catch (error) {
        next(error)
    }
})

export default router