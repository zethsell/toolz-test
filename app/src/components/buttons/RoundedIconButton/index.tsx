import Image from "next/image";

type Props = {
    text?: string
    icon: string
}


function IconButton({text, icon}: Props) {
    return (
        <button
            className="h-12 w-12 rounded-full gap-[10px] border border-white inline-flex justify-center items-center"
            type="button"
        >
            <Image width="18" height="18" src={icon} alt="icon"></Image>
        </button>
    )
}

export default IconButton