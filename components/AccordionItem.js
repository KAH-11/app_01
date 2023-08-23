import { Accordion , AccordionHeader , AccordionBody } from "@material-tailwind/react";
import { useState } from "react";

const AccordionItem = () => {

    const [open1 , setOpen1] = useState(1);
    const [open2 , setOpen2] = useState(2);

    const handleOpen = (value) => { 

        if(value === 1){
            setOpen1(open1 === value ? 0 : value);
        }

        if(value === 2){
            setOpen2(open2 === value ? 0 : value);
        }
        
    }

    return ( 

        <div class="md:p-10 p-10 w-full mt-5 2xl:container mx-auto">

            <Accordion open={open1 === 1}>
                <AccordionHeader onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
                {
                    open1 === 1 ? (
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    ) : (<></>)
                }
            </Accordion>

            <Accordion open={open2 === 2}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                    How to use Material Tailwind?
                </AccordionHeader>
                {
                    open2 === 2 ? (
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    ) : (<></>)
                }
                
            </Accordion>

        </div>

     );
}
 
export default AccordionItem;