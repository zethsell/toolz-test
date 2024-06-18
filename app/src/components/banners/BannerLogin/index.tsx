import AuthAdBackground from "@/components/AuthAdBackground";
import RoundedIconButton from "@/components/buttons/RoundedIconButton";
import Paginator from "@/components/Paginator";
import {Page} from "@/models";

function BannerLogin() {
    const contentArray: Array<Page> = [
        {
            category: "Cursos",
            title: "Plataforma de cursos completa",
            description: "Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum"
        },
        {
            category: "Cursos 2",
            title: "Plataforma de cursos completa 2",
            description: "Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum"
        },
        {
            category: "Cursos 3",
            title: "Plataforma de cursos completa 3",
            description: "Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum"
        },
    ]


    const content = (
        <>
            <div className="w-full h-[245.33px] flex justify-between">
                <RoundedIconButton icon="chevron-left"/>
                <RoundedIconButton icon="moon"/>
            </div>
            <Paginator content={contentArray}/>
        </>
    )


    return (
        <AuthAdBackground content={content}/>
    )
}

export default BannerLogin