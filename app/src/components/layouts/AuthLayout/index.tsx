import BannerLogin from "@/components/banners/BannerLogin";
import ButtonLight from "@/components/buttons/ButtonLight";
import Logo from "@/components/svgs/logo";

type Props = {
    content: JSX.Element
}

function AuthLayout({content}: Props) {
    return (
        <div className="bg-[#F9F9F9] dark:bg-[#232323] h-full w-full inline-flex">
            <BannerLogin/>
            <div className="w-[692px] p-[24px] h-full gap-[8px]">
                <div className="h-[96px] w-[644px] flex justify-between p-6 items-center">
                    <Logo/>
                    <ButtonLight text="Criar Conta"/>
                </div>
                {content}
            </div>
        </div>
    )
}

export default AuthLayout