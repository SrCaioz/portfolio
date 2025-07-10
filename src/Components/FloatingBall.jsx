import ftcortada from '../assets/static/ftcortada3.png';

export default function FloatingBall() {
    return (
        <div id="FloatingBall" className="absolute w-72 h-72 top-32 bg-blue shadow-md shadow-black right-1/5 rotate-45 overflow-hidden">
            <img src={ftcortada} alt="" className="h-72 w-72 -rotate-45 mt-10 ml-6"/> 
        </div>
    )
}