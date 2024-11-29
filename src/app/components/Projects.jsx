import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import house1 from '../../../public/house-1.jpg';
import house2 from '../../../public/house-2.jpg';
import house3 from '../../../public/house-3.jpg';
import { FaRegStar, FaStar } from "react-icons/fa6";

export default function Projects() {
    return (
        <div className="mx-6 my-14">
            <div>
                <p className="font-medium">Best Project of the Years</p>
            </div>

            <div className="flex justify-between items-center mt-6">
                <h1 className="font-bold text-5xl">Our recent projects</h1>

                <div className="flex">
                    <IoIosArrowBack className="h-12 w-12 p-2" size={36}/>
                    <IoIosArrowForward className="bg-zinc-800 text-white rounded-full h-12 w-12 p-2" size={36}/>
                </div>
            </div>

            <div className="flex mt-6 gap-52">
                <div className="flex flex-col gap-2">
                    <Image src={house1} alt="house 1"/>
                    <h1 className="text-3xl font-semibold">Sobha Hearland I Villas</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="text-[#FF791A] flex items-center gap-1">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaRegStar className="text-zinc-600"/>
                        <p className="text-black">4.00</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <Image src={house2} alt="house 2"/>
                    <h1 className="text-3xl font-semibold">Sobha Hearland II Villas</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="text-[#FF791A] flex items-center gap-1">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <p className="text-black">5.00</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <Image src={house3} alt="house 3"/>
                    <h1 className="text-3xl font-semibold">Sobha Hearland III Villas</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="text-[#FF791A] flex items-center gap-1">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaRegStar className="text-zinc-600"/>
                        <FaRegStar className="text-zinc-600"/>
                        <p className="text-black">3.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}