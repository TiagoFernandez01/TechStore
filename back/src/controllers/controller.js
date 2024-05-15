import { Categories } from "../models/Categories.js";
import { Products } from "../models/Products.js";

export const createCategory = async (name) => {
    const newCategory = await Categories.create({ name });
    return newCategory;

}

export const getAllCategories = async () => {

    const categories = await Categories.findAll();
    return categories
}

export const createProduct = async (name, price, category, description, image, stock ) => {
        const newProduct = await Products.create({
            name,
            price,
            category,
            description,
            image,
            stock
        });
        
        return newProduct;
}

export const getAllProducts = async () => {

    const products = await Products.findAll({
        include: {
            model: Categories,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    })
    return products;
}


