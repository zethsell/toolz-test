import LogoMini from "@/components/svgs/logo-mini";
import LogoApple from "@/components/svgs/logo-apple";
import LogoFacebook from "@/components/svgs/logo-facebook";
import LogoTwitter from "@/components/svgs/logo-twitter";
import LogoGoogle from "@/components/svgs/logo-google";


type Props = {
    classes?: string
    icon: "tz" | "facebook" | "google" | "twitter" | "apple"
}


function IconButton({classes = "", icon}: Props) {
    const getIcon = () => {
        switch (icon) {
            case "facebook":
                return (<LogoFacebook/>)
            case "google":
                return (<LogoGoogle/>)
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
            className={`w-full md:min-w-[137px] h-12 rounded-[8px]  gap-[10px] border border-[#151515]  dark:border-[#EDEDED] inline-flex md:inline-flex justify-center items-center ${classes}`}
            type="button"
        >
            {getIcon()}
        </button>
    )
}

export default IconButton