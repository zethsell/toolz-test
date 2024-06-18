import ChevronLeft from "@/components/svgs/chevron-left";

type Props = {
    next?: boolean
    previous?: boolean
}


export default function PaginatorNavigator({next, previous}: Props) {
    const colorNext = !next ? '#222222' : '#FFFFFF'
    const colorPrevious = !previous ? '#222222' : '#FFFFFF'

    return (
        <div className="flex gap-6">
            <ChevronLeft color={colorPrevious} width={32} height={32}/>
            <ChevronLeft className="rotate-180" color={colorNext} width={32} height={32}/>
        </div>
    )
}
