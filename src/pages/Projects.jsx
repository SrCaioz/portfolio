import BackGround from "../Components/BackGround";
import Header from "../Components/Header";

export default function Projects() {
    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <BackGround/>
            <Header/>
            <div className="relative w-full p-1 bg-black -top-11/12">
                <div className="w-full">
                    <div className="w-32 h-32 rounded-xl">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}