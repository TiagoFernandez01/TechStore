import { Router } from "express";
import { Categories } from "../models/Categories.js";
import { getAllCategories } from "../controllers/controller.js";

const router = Router();


router.get('/', async (req, res) => {

    const categories = await getAllCategories();

    categories.length ? res.status(200).json(categories) : res.status(400).json({ "message": "Categories not found" })
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

router.delete('/', async (req, res) => {
    try {
        const { name } = req.body;
        console.log(name);

        // Verificar si se proporciona el nombre de la categoría
        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        // Buscar y eliminar la categoría
        const category = await Categories.destroy({ where: { name } });

        // Verificar si la categoría fue encontrada y eliminada
        if (category === 0) {
            return res.status(404).json({ error: 'Category not found' });
        }

        // Enviar la respuesta indicando que la categoría fue eliminada
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        // Manejar cualquier error que ocurra durante la eliminación de la categoría
        res.status(400).json({ error: error.message });
    }
});


export default router;