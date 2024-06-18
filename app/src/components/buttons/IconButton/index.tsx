import LogoMini from "@/components/svgs/logo-mini";
import LogoApple from "@/components/svgs/logo-apple";
import LogoFacebook from "@/components/svgs/logo-facebook";
import LogoTwitter from "@/components/svgs/logo-twitter";


type Props = {
    text?: string
    icon: "tz" | "facebook" | "google" | "twitter" | "apple"
}


function IconButton({text, icon}: Props) {
    const getIcon = () => {
        switch (icon) {
            case "facebook":
                return (<LogoFacebook/>)
            case "google":
                return (<LogoMini/>)
            case "twitter":
                return (<LogoTwitter/>)
            case "apple":
                return (<LogoApple/>)
            case "tz":
            default:
                return (<LogoMini/>)
        }
    }


    return (
        <button
            className="min-w-[137px] h-12 rounded-[8px]  gap-[10px] border border-[#151515]  dark:border-[#EDEDED] inline-flex justify-center items-center"
            type="button"
        >
            {getIcon()}
        </button>
    )
}

export default IconButton