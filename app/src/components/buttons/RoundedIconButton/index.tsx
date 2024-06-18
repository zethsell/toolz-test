import ChevronLeft from "@/components/svgs/chevron-left";
import Moon from "@/components/svgs/moon";

type Props = {
    iconClasses?: string,
    icon: "chevron-left" | "moon",
    className?: string
    classes?: string

}


function IconButton({iconClasses, icon, classes = "border-white"}: Props) {
    const getIcon = () => {
        switch (icon) {
            case "chevron-left":
                return (<ChevronLeft width={18} height={18} classPath={iconClasses}/>)
            case "moon":
            default:
                return (<Moon width={18} height={18}/>)
        }
    }

    return (
        <button
            className={`h-12 w-12 rounded-full gap-[10px]  border  inline-flex justify-center items-center ${classes}`}
            type="button">
            {getIcon()}
        </button>
    )
}

export default IconButton