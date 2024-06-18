import BannerLogin from "@/components/banners/BannerLogin";
import ButtonLight from "@/components/buttons/ButtonLight";
import Logo from "@/components/svgs/logo";
import RoundedIconButton from "@/components/buttons/RoundedIconButton";

type Props = {
    content: JSX.Element
}

function AuthLayout({content}: Props) {
    return (
        <div className="bg-[#F9F9F9] dark:bg-[#232323] h-full md:w-full inline-flex overflow-auto md:overflow-hidden">
            <BannerLogin/>
            <div className=" w-full md:w-[692px] md:p-[24px] h-full gap-[8px] overflow-y-auto">
                <div
                    className="h-[96px] w-full  flex justify-between p-6 items-center md:border-none border-b border-black border-opacity-10 dark:border-white dark:border-opacity-10">
                    <Logo className="hidden md:block"/>
                    <RoundedIconButton iconClasses="dark:fill-white fill-black"
                                       classes="border-black md:hidden dark:border-white"
                                       icon="chevron-left"/>
                    <ButtonLight text="Criar Conta"/>
                </div>
                {content}
            </div>
        </div>
    )
}

export default AuthLayout