import { BsChatDots } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { PiPencilSimpleLineBold } from "react-icons/pi";

export default function Steps() {
    return (
        <div className="mx-6 my-20">
            <div className="w-auto text-center m-6">
                <p className='mb-5'>Three steps. Three minutes.</p>
                <h1 className="font-semibold text-5xl">Everything should be this easy.</h1>
            </div>

            <div className="grid grid-cols-3 gap-96 px-6 mt-10">
                <div className="grid gap-6 items-center justify-center">
                    <BsChatDots size={80} className="text-green-500" alt='Chat Icon'/>
                    <h1 className="text-2xl font-semibold">Answer questions</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum.</p>
                </div>

                <div className="grid gap-6 items-center justify-center">
                    <BiMailSend size={80} className="text-orange-500" alt='Email Icon'/>
                    <h1 className="text-2xl font-semibold">Select a quote</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum.</p>
                </div>

                <div className="grid gap-6 items-center justify-center">
                    <PiPencilSimpleLineBold size={80} className="text-violet-500" alt='Pencil Icon'/>
                    <h1 className="text-2xl font-semibold">Get registered</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum.</p>
                </div>
            </div>
        </div>
    );
}