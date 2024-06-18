import AuthLayout from "@/components/layouts/AuthLayout";
import IconButton from "@/components/buttons/IconButton";
import Line from "@/components/Line";
import Image from "next/image";
import "./SignIn.css"
import AuthInput from "@/components/inputs/AuthInput";
import LogoMini from "@/components/svgs/logo-mini";

export default function Page() {
    const btnTz = (<LogoMini/>)
    // const btnFace = ()
    // const btnTwitter = ()
    // const btnApple = ()


    const content = (
        <>
            <div className="division h-[134px]">
                <div className="w-full flex flex-col gap-4 justify-between">
                    <div className="gap-4">
                        <h2 className=" h-[45px] font-[600] text-[32px] leading-[44.8px] dark:text-white">
                            Boas-vindas!
                        </h2>
                    </div>
                    <h5 className=" font-[500] leading-[25.2px] text-[#585858] text-[18px] h-[25px] dark:text-[#909090]">
                        Entre utilizando uma das opções abaixo
                    </h5>
                </div>
            </div>

            <div className="division h-[96px]">
                <IconButton icon="tz"/>
                <IconButton icon="facebook"/>
                <IconButton icon="apple"/>
                <IconButton icon="twitter"/>
            </div>

            <div className="division items-center h-[73px]">
                <Line/>
                <h5 className="font-[500] text-[18px] leading-[25.2px] text-[#585858] dark:text-[#909090]">ou</h5>
                <Line/>
            </div>

            <div className="division-input">
                <AuthInput icon="/images/user.svg" type="text" label="Usuário"/>
            </div>

            <div className="division-input">
                <AuthInput icon="/images/lock.svg" type="password" label="Senha"/>
            </div>

            <div className="w-full gap-4 inline-flex pt-0 px-6 pb-6 h-[44px]">
                <input type="checkbox"/>
                <label className=" dark:text-[#EDEDED]"> Manter Conectado</label>
            </div>

            <div className="w-full gap-4 inline-flex py-0 px-6  h-[76px] items-center justify-center">
                <Image src="/images/fake-captcha.svg" alt="fake-captcha" width="454" height="76"/>
            </div>

            <div className="division items-center h-[96px]">
                <button
                    className="h-12 bg-[#0761E2] px-6 py-5 gap-3 rounded-[8px] text-center inline-flex items-center justify-center w-full">
                    <Image alt="sign-in" src="/images/sign-in.svg" width="18" height="22"/>
                    <span className=" text-white ">Entrar</span>
                </button>
            </div>

            <div className="division justify-center h-[70px]">
                <div className="gap-1 inline-flex font-[400] text-[16px] leading-[22.4px]">
                    <p className="text-[#585858]  dark:text-[#909090]">Esqueceu sua senha?</p>
                    <p className="text-[#0761E2]">Recuperar Senha</p>
                </div>
            </div>

        </>
    )


    return (
        <AuthLayout content={content}/>
    );
}
