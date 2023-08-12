const TwoDiv = (props) => {

    const { imagePath , text } = props;

    return ( 
        <div class="mt-10 flex items-center justify-center">

            <div class="md:p-10 mt-5 md:h-[40vh] h-auto flex flex-col md:flex-row items-center 2xl:container mx-auto">

                <div class="md:w-1/2 md:p-4">
                    <p class="md:text-2xl text-xl text-[#011F44] md:text-justify">{text}</p>
                </div>

                <div class="md:w-1/2 md:p-4">
                    <img src={imagePath} alt="Error loading image!" class="w-full h-[40vh] block object-cover"/>
                </div>

            </div>

        </div>
     );
}
 
export default TwoDiv;