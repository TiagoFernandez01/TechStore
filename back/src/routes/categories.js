import { Router } from "express";
import { Categories } from "../models/Categories.js";
import { getAllCategories } from "../controllers/controller.js";

const router = Router();


router.get('/', async(req, res) =>{

    const categories = await getAllCategories();

     categories.length ? res.status(200).json(categories) : res.status(400).json({"message" : "Categories not found"})
})

router.post('/', async (req, res) => {
    try {
        const { name } = req.body;
        console.log(name)
        // Verificar si se proporciona el nombre de la categoría
        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        // Crear la categoría
        const category = await Categories.create({ name });

        // Enviar la respuesta con la categoría creada
        res.status(200).json(category);
    } catch (error) {
        // Manejar cualquier error que ocurra durante la creación de la categoría
        res.status(400).json({ error: error.message });
    }
});

export default router;