import { Link } from "@inertiajs/react";

export default function Layouts({ children }) {
    return (
        <>
            <div className="w-screen bg-slate-200 flex relative  h-screen ">
                <div className="w-full h-1/2 rounded-b-3xl z-0 absolute  bg-[#6256CA]"></div>
                <div className="z-10 flex w-full">
                    <div className="py-16 ">
                        <div className="text-3xl h-full justify-center flex flex-col">
                            <Link
                                href="/"
                                className="bg-white group ease-in-out transition-all duration-150 hover:bg-[#6256CA] hover:border-purple-300 border-2 p-5 rounded-tr-lg"
                            >
                                <i className="fas fa-home group-hover:text-white"></i>
                            </Link>
                            <Link
                                href="/data"
                                className="bg-white group ease-in-out transition-all duration-150 hover:bg-[#6256CA] hover:border-purple-300 border-2 p-5 "
                            >
                                <i className="fas fa-book group-hover:text-white"></i>
                            </Link>
                            <Link className="bg-white group ease-in-out transition-all duration-150 hover:bg-[#6256CA] hover:border-purple-300 border-2 p-5 rounded-br-lg">
                                <i className="fas fa-power-off group-hover:text-white"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full">{children}</div>
                </div>
            </div>
        </>
    );
}
