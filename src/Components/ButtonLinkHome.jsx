export default function ButtonLinkHome({ MySVG, NameInfo, Link }) {
    return (
        <a href={Link} target="_blank" className="flex p-1 text-center justify-center basis-1/3 bg-slate-500 rounded-md gap-2 dark:text-white dark:bg-gray-800">
            <img className="w-6 h-6 " src={MySVG} />
            <p className="">{NameInfo}</p>
        </a>
    )
}