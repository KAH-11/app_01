const TitleText = (props) => {

    const { title , text } = props;

    return ( 
        <div class="md:p-10 p-10 w-full mt-5 2xl:container mx-auto">

            {/* Title */}
            <div class="text-center p-5 w-full border-b-2 border-[#011F44] "> 
                <p class="text-3xl font-bold text-[#011F44]">{title}</p>
            </div>

            {/* Text */}
            <div class="text-center p-5 w-full text-justify text-2xl text-[#011F44] ">
                {text}
            </div>

        </div>
     );
}
 
export default TitleText;