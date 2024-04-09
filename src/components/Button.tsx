
interface ButtonProps {
    type: "REAL" | "FAKE"
}

export function Button({type}: ButtonProps): JSX.Element {
    return(<button className={`w-24 flex justify-center hover:scale-105 items-center ${type === 'REAL' ? 'bg-green-500': 'bg-red-600'} rounded-3xl h-16 p-2 my-4 font-semibold text-xl text-slate-100 font-old-standard-tt`}>{type}</button>)
}