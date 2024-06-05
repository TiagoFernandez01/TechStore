import { Link } from "react-router-dom"

const Category = ({name, id, image}) =>{
    return (
        <div>
            <Link to={`/categories/${id}`}>
                <img src={image} alt="image" className="" />

                <h1 className="">{name}</h1>
            </Link>
        </div>
    );
}

export default Category;