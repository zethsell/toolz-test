"use client"

import AuthLayout from "@/components/layouts/AuthLayout";
import IconButton from "@/components/buttons/IconButton";
import Line from "@/components/Line";
import Image from "next/image";
import "./SignIn.css"
import AuthInput from "@/components/inputs/AuthInput";
import Logo from "@/components/svgs/logo";
import Swal from 'sweetalert2'

import {FormEvent} from "react";

export default function Page() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const response = await fetch('http://localhost:8000/api/sign-in', {
            method: 'POST',
            body: formData,
        })

        const result = await response.json()
        if (result.error) {
            await Swal.fire({
                title: `Error ${response.status}!`,
                text: result.error.errorMessage,
                icon: 'error',
                confirmButtonText: 'Ok'
            })

            return
        }

        await Swal.fire({
            title: 'Success!',
            text: `Welcome ${result.data.user.name}`,
            icon: 'success',
            confirmButtonText: 'Thanks!'
        })
    }

    const content = (
        <form onSubmit={onSubmit}>
            <div className="division-hidden-logo">
                <Logo/>
            </div>

            <div className="division h-[96px] md:h-[134px]">
                <div className="w-full flex flex-col md:gap-4 justify-between">

                    <div className="md:gap-4">
                        <h2 className=" h-[45px] font-[600] text-[20px] md:text-[32px]  leading-6 md:leading-[44.8px] dark:text-white ">
                            Boas-vindas!
                        </h2>
                    </div>
                    <h5 className=" font-[500] leading-6 md:leading-[25.2px] text-[#585858] text-[16px] md:text-[18px] h-[25px] dark:text-[#909090] mb-[10px]">
                        Entre utilizando uma das opções abaixo
                    </h5>
                </div>
            </div>

            <div className="division-buttons">
                <IconButton icon="tz" classes="hidden"/>
                <IconButton icon="google" classes="md:hidden"/>
                <IconButton icon="facebook"/>
                <IconButton icon="apple"/>
                <IconButton icon="twitter"/>
            </div>

            <div className="division-or">
                <Line/>
                <h5 className="font-[500] text-[18px] leading-[25.2px] text-[#585858] dark:text-[#909090] uppercase md:lowercase">ou</h5>
                <Line/>
            </div>

            <div className="division-input p-6 h-[126px]">
                <AuthInput icon="/images/user.svg" type="text" label="Usuário" name="email"/>
            </div>

            <div className="division-input pt-0 px-6 pb-6 h-[102px]">
                <AuthInput icon="/images/lock.svg" type="password" label="Senha" name="password"/>
            </div>

            <div className="w-full gap-4 hidden md:inline-flex pt-0 px-6 pb-6 h-[44px]">
                <input type="checkbox"/>
                <label className=" dark:text-[#EDEDED]"> Manter Conectado</label>
            </div>

            <div className="w-full gap-4 hidden md:inline-flex py-0 px-6  h-[76px] items-center justify-center">
                <Image src="/images/fake-captcha.svg" alt="fake-captcha" width="454" height="76"/>
            </div>

            <div className="division-signIn-button  ">
                <button
                    type="submit"
                    className="h-12 bg-[#0761E2] px-6 py-5 gap-3 rounded-[8px] text-center inline-flex items-center justify-center w-full">
                    <Image alt="sign-in" src="/images/sign-in.svg" width="18" height="22" className="hidden md:block"/>
                    <span className=" text-white ">Entrar</span>
                </button>
            </div>

            <div className="w-full gap-4  md:hidden inline-flex pt-0 px-6 pb-6 h-[44px]">
                <input type="checkbox"/>
                <label className=" dark:text-[#EDEDED]"> Manter Conectado</label>
            </div>


            <div className="division-pass-recovery ">
                <div className="gap-1 inline-flex font-[400] text-[16px] leading-[22.4px]">
                    <p className="text-[#585858]  dark:text-[#909090]">Esqueceu sua senha?</p>
                    <p className="md:text-[#0761E2] dark:text-white">Recuperar Senha</p>
                </div>
            </div>

        </form>
    )


    return (
        <AuthLayout content={content}/>
    );
}
