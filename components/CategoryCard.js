const CategoryCard = (props) => {

    const { img_url , cat_name  } = props;

    return ( 
        <div className="md:w-auto">
            <img src={img_url} alt="Error loading category image!" className="w-full h-32 sm:h-80 object-cover cursor-pointer"/>
            <div className="m-4 text-center">
                <span className="md:text-2xl text-xl text-[#011F44] font-bold">{cat_name}</span>
            </div>
        </div>
    );
}
 
export default CategoryCard;