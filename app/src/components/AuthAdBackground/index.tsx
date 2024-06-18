import "./AuthAdBackground.css"

type Props = {
    content: JSX.Element
}


function AuthAdBackground({content}: Props) {
    return (
        <div className="background w-[1228px] h-full ">
            <div className=" h-full w-full backdrop flex justify-between flex-col px-[56px] py-[80px]">
                {content}
            </div>
        </div>
    )
}

export default AuthAdBackground