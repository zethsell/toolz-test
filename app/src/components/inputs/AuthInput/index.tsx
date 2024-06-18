import User from "@/components/svgs/user";
import Lock from "@/components/svgs/lock";

type Props = {
    icon: string
    type: "text" | "password"
    label: string
}

export default function AuthInput(props: Props) {
    const icon = props.type !== "password"
        ? (<User height={18} width={18}/>)
        : (<Lock height={18} width={18}/>)


    return (
        <div className="w-full flex flex-col gap-2 h-[78px]">
            <span className="font-[400] text-[16px] leading-[22.4px] h-[22px] dark:text-[#EDEDED]">{props.label}</span>
            <div className="inline-flex border rounded-[8px] border-[#6a6a6a] p-4 gap-[40px] h-[48px] ">
                {icon}
                <input className="w-full bg-transparent outline-none dark:text-[#909090]" type={props.type}/>
            </div>
        </div>
    )
}