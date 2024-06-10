import Category from "./Category.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCategories } from "../../../features/categorySlice";

const Categories = () => {

    const dispatch = useDispatch();
    const { allCategories: categories } = useSelector((state) => state.categories)

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch])

    return (
        <>
            <div className="flex items-center justify-center text-5xl font-bold py-4">Compar por categoria</div>
            <div className="flex flex-wrap items-center  justify-center gap-6">
                {categories?.length
                    ? categories.map((category) => (
                        <div key={category.id}>
                            <Category name={category.name} image={category.image} />
                        </div>
                    ))
                    : console.log(categories)}
            </div>
        </>
    )

}

export default Categories;