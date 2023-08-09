const Banner = (props) => {

    const { imagePath , text } = props;

    return ( 
        <div class="md:h-[80vh] h-[40vh] w-100 relative">
            <img src={imagePath} alt="Pizza" class="block object-cover h-full w-full"/>
            <div class="absolute w-full inset-0 flex items-center justify-center">
                <p class="text-white md:text-4xl text-2xl ease-in duration-300 hover:opacity-1">{text}</p>
            </div>
        </div>
     );
}
 
export default Banner;