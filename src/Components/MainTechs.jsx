export default function MainTechs({ NomeTech, FBL, N }) {
    return (
        <div className="flex w-full items-center justify-between bg-blue-500 p-5 mb-5 rounded-lg cursor-pointer transition-all ease-out translate-y-0 translate-x-0 scale-100 opacity-100 duration-300 hover:scale-105 hover:bg-blue-300">
            <div>
                <h3 className="text-2xl font-bold">
                    {NomeTech}
                </h3>
                <p className="font-light">
                    {FBL}
                </p>
            </div>
            <div className="text-3xl font-black text-black/50">
                {N}
            </div>
        </div>
    )
}