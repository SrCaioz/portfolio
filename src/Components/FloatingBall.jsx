import ftcortada from '../assets/static/ftcortada3.png';

export default function FloatingBall() {
    return (
        <div id="FloatingBall" className="relative w-72 h-72 bg-blue shadow-md shadow-black rotate-45 overflow-hidden md:w-96 md:h-96">
            <img src={ftcortada} alt="" className="h-72 w-72 -rotate-45 mt-10 ml-6 md:w-96 md:h-96"/> 
        </div>
    )
}