import Layouts from "../Layouts/Layouts";

export default function Home() {
    return (
        <div className="flex flex-col w-full h-full">
            <div className="p-2 text-white">
                <div className="text-2xl mt-2  font-semibold ">Home</div>
                <div className="pt-2 flex gap-x-1 font-thin">
                    <div className="underline font-thin text-sky-300">Home</div>
                    <div>/</div>
                </div>
            </div>
            <div className="w-full h-full flex p-3">
                <div className="w-full border-slate-200 border-4 rounded-xl h-full bg-white"></div>
            </div>
        </div>
    );
}
