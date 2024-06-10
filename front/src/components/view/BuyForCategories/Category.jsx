

const Category = ({ name, image }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl">{name}</h1>
            <img className ="rounded-full w-80 h-80 bg-purple-600" src={image} alt="image" />
        </div>
    );
}

export default Category;