const TitleText = (props) => {

    const { title , text } = props;

    return ( 
        <div class="md:p-20 p-10 w-full mt-10 2xl:container mx-auto">

            {/* Title */}
            <div class="text-center p-5 w-full border-b border-[#011F44] "> 
                <p class="text-3xl font-bold text-[#011F44]">{title}</p>
            </div>

            {/* Text */}
            <div class="text-center p-5 w-full text-justify ">
                <p class="text-2xl text-[#011F44]">{text}</p>
            </div>

        </div>
     );
}
 
export default TitleText;