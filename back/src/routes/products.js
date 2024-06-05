import { Router } from "express";
import { getAllProducts } from '../controllers/controller.js';
import { Products } from "../models/Products.js";
import { Categories } from "../models/Categories.js";
import parser from "../middlewareCloudinary.js"; // Asegúrate de que la ruta sea correcta

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const { name } = req.query;
        const products = await getAllProducts();

        if (name) {
            const product = products.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
            product.length ? res.status(200).json(product) : res.status(400).json({ 'message': 'Ups, Products Not Found' }); // Corregido json a json
        } else {
            res.status(200).json(products);
        }
    } catch (error) {
        next(error);
    }
});

router.get('/:idProduct', async (req, res, next) => {
    try {
        const { idProduct } = req.params; // Corregido para usar idProduct en lugar de id
        const products = await getAllProducts();
        const idProductFilter = products.filter(el => el.id == idProduct);

        idProductFilter.length ? res.status(200).json(idProductFilter) : res.status(400).json({ 'message': 'ID Not Found' });
    } catch (error) {
        next(error);
    }
});

router.post('/', parser.single('image'), async (req, res, next) => {
    const {
        name,
        price,
        category,
        description,
        stock
    } = req.body;
    const image = req.file?.path; // Usa opcional chaining para evitar errores si req.file no existe

    if (!name || !price || !category || !description || !image || !stock) {
        return res.status(400).json({ error: 'Complete all required fields' });
    }

    try {
        let product = await Products.create({
            name,
            price,
            description,
            image,
            stock
        });

        let associatedCategory = await Categories.findOne({
            where: { name: category },
        });

        if (associatedCategory) {
            await product.addCategory(associatedCategory); // Asegúrate de usar addCategory correctamente
        }

        console.log(product);
        res.status(200).json({ message: "Product created successfully!", product });

    } catch (error) {
        next(error);
    }
});

export default router;