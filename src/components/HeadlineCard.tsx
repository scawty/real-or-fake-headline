import { Headline } from "@/types"

interface HeadlineCardProps {
    headline: Headline
    reveal?: boolean

}

export function HeadlineCard({headline, reveal = true}: HeadlineCardProps): JSX.Element {
    return(<div className="border-slate-400 shadow-md rounded-xl flex flex-col h-64 w-2/3 m-4 justify-center">
        {reveal ? <div className=""></div> : <div className="text-3xl text-wrap text-slate-800 font-bold font-old-standard-tt text-center m-2">{headline.text}</div>}
        </div>)
}

