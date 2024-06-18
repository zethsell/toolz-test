import {redirect} from "next/navigation";

export default function Page() {
    const auth = false

    if (!auth) {
        redirect("auth/sign-in")
    }
    return (<><span>HOME</span></>)
}
