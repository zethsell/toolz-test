type Props = {
    text: string
    type?: "submit" | "button"
}

function ButtonLight(props: Props) {
    const type = props.type ?? "button"

    return (
        <button className="min-w-[144px] h-12 rounded-[8px] px-6 py-5 gap-3 inline-flex items-center" type={type}>
            <h5 className="font-[500] text-[18px] md:text-[#0761e2] text-black dark:text-white leading-[25.2px]">{props.text}</h5>
        </button>
    )
}

export default ButtonLight