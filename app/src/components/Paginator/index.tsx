import {Page} from "@/models";
import PaginatorMarker from "@/components/PaginatorMarker";
import PaginatorNavigator from "@/components/PaginatorNavigator";

type Props = { content: Array<Page> }


export default function Paginator(props: Props) {
    const page = 0

    return (
        <nav className="w-full min-h-[316px] flex flex-col gap-[96px]">
            <div className="gap-6 flex flex-col">
                <span
                    className="rounded-full bg-[#0761E2] px-3 py-2 gap-2 h-8 text-white max-w-[78px] inline-flex items-center">
                    {props.content.at(0)!.category}
                </span>

                <div className="flex flex-col gap-4 max-h-[134px] ">
                    <h3 className="font-[600] text-[24px] text-white">{props.content.at(0)!.title}</h3>
                    <h4 className="font-[500] text-[20px] text-[#909090]">{props.content.at(0)!.description}</h4>
                </div>
            </div>

            <div className="flex justify-between">
                <div className="flex gap-4 max-h-[4px] w-[320px] ">
                    {props.content.map((_, index) => (
                            <PaginatorMarker key={index} disabled={index !== page}/>
                        )
                    )}
                </div>
                <PaginatorNavigator next={true} previous={false}/>
            </div>
        </nav>
    )
}