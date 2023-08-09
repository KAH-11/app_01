const Banner = (props) => {

    const { imagePath , text } = props;

    return ( 
        <div class="h-80 w-100 relative">
            <img src={imagePath} alt="Pizza" class="block object-cover h-full w-full"/>
            <div class="absolute bottom-40 w-full text-center text-white md:text-3xl text-2xl p-[20px] ease-in duration-300 hover:opacity-1">{text}</div>
        </div>
     );
}
 
export default Banner;