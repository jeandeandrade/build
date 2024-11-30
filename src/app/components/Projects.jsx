import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import house1 from '../../../public/house-1.jpg';
import house2 from '../../../public/house-2.jpg';
import house3 from '../../../public/house-3.jpg';
import { FaRegStar, FaStar } from "react-icons/fa6";

export default function Projects() {
    return (
        <div className="mx-6 my-28">
            <div>
                <p className="font-medium">Best Project of the Years</p>
            </div>

            <div className="flex justify-between items-center mt-6">
                <h1 className="font-semibold text-5xl mb-5">Our recent projects</h1>

                <div className="flex gap-2">
                    <IoIosArrowBack className="h-10 w-10 p-2" size={36} />
                    <IoIosArrowForward className="bg-zinc-800 text-white shadow-md shadow-zinc-600 rounded-full h-10 w-10 p-2" size={36}/>
                </div>
            </div>

            <div className="flex mt-6 gap-5">
                <div className="flex flex-col gap-2 border bg-zinc-50 border-zinc-200 rounded-xl pb-5">
                    <Image src={house1} size={355} height={355} alt="house 1"/>
                    <h1 className="text-2xl font-semibold my-2 ml-4">Sobha Hearland I Villas</h1>
                    <p className="ml-4">Lorem ipsum dolor sit amet consectetur. <br/> Adipiscing imperdiet bibendum.</p>
                    <div className="text-[#FF791A] flex items-center gap-1 mt-2 ml-4">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaRegStar className="text-zinc-600"/>
                        <p className="text-black">4.00</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 border bg-zinc-50 border-zinc-200 rounded-xl pb-5">
                    <Image src={house2} size={355} height={355} alt="house 2"/>
                    <h1 className="text-2xl font-semibold my-2 ml-4">Sobha Hearland II Villas</h1>
                    <p className="ml-4">Lorem ipsum dolor sit amet consectetur. <br/> Adipiscing imperdiet bibendum.</p>
                    <div className="text-[#FF791A] flex items-center gap-1 mt-2 ml-4">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <p className="text-black">5.00</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 border bg-zinc-50 border-zinc-200 rounded-xl pb-5">
                    <Image src={house3} size={355} height={355} alt="house 3"/>
                    <h1 className="text-2xl font-semibold my-2 ml-4">Sobha Hearland III Villas</h1>
                    <p className="ml-4">Lorem ipsum dolor sit amet consectetur. <br/> Adipiscing imperdiet bibendum.</p>
                    <div className="text-[#FF791A] flex items-center gap-1 mt-2 ml-4">
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