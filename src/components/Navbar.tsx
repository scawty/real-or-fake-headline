export function Navbar(): JSX.Element {
    return(<nav className="h-16 w-screen bg-slate-100 flex justify-center drop-shadow-sm">
        <div className="h-full w-full max-w-screen-lg md:w-2/3 flex justify-between items-center mx-2">
            <div className="font-old-standard-tt font-bold text-2xl flex flex-row"><div className="text-green-600">Real </div>or <div className="text-red-600">fake</div>headline</div>
            <ul className="text-xl font-semibold font-old-standard-tt">
                <li><div className="border-2 border-slate-800 text-xl rounded-full p-2">+ Create</div></li>
            </ul>
        </div>
    </nav>)
}