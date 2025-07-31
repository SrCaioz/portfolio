export default function Projectwindow({ Img, NameProject, Text }) {
    return (
        <div className="w-full transition-all bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-800 mt-8 rounded-3xl overflow-hidden">
            <figure className="flex justify-center transition-all bg-gray-100 hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-900">
                <img className="w-7/12 h-7/12 transition-all hover:scale-110" src={Img} alt />
            </figure>
            <div className="p-4">
                <h2 className="font-semibold text-2xl mb-2 text-gray-700 dark:text-gray-300">
                    {NameProject}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                    {Text}  
                </p>
                <div>
                    
                </div>
            </div>
        </div>
    )
}