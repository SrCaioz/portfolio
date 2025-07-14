

export default function ButtonsTechName({ img, imgName, TechName }) {
    return (
        <div className="group/tech p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-300 hover:bg-gray-500 dark:bg-gray-900 dark:hover:bg-gray-800">
            <div className="flex items-center space-x-3">
                <div className="relative h-8 w-8">
                    <img src={img} alt={imgName} />
                </div>
                <span className="text-sm font-medium transition-colors duration-300 text-gray-700 group-hover/tech:text-black dark:text-gray-300 dark:group-hover/tech:text-white">
                    {TechName}
                </span>
            </div>
        </div>
    )
}