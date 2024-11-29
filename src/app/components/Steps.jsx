import { FaPencil } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";

export default function Steps() {
    return (
        <div className="mx-6 my-14">
            <div className="w-auto text-center m-6">
                <p>Three steps. Three minutes.</p>
                <h1 className="font-bold text-5xl">Everything should be this easy.</h1>
            </div>

            <div className="grid grid-cols-3 gap-2">
                <div className="grid gap-4">
                    <LuMessagesSquare size={80} className="text-green-500"/>
                    <h1 className="text-3xl font-bold">Answer questions</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, at non, error nemo iste fugiat voluptatum.</p>
                </div>

                <div className="grid gap-4">
                    <IoMailUnreadOutline size={80} className="text-orange-500"/>
                    <h1 className="text-3xl font-bold">Select a quote</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, at non, error nemo iste fugiat voluptatum.</p>
                </div>

                <div className="grid gap-4">
                    <FaPencil size={80} className="text-violet-500"/>
                    <h1 className="text-3xl font-bold">Get registered</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, at non, error nemo iste fugiat voluptatum.</p>
                </div>
            </div>
        </div>
    );
}