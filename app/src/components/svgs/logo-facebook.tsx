import {Svg} from "@/models";

export default function LogoFacebook({color = '#585858', height = 18, width = 19, className}: Svg) {
    return (
        <svg width={width} height={height} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                className="dark:fill-[#EDEDED]"
                d="M18.2188 8.75C18.2188 13.1094 15.0195 16.7305 10.8359 17.3633V11.2812H12.875L13.2617 8.75H10.8359V7.13281C10.8359 6.42969 11.1875 5.76172 12.2773 5.76172H13.3672V3.61719C13.3672 3.61719 12.3828 3.44141 11.3984 3.44141C9.42969 3.44141 8.12891 4.67188 8.12891 6.85156V8.75H5.91406V11.2812H8.12891V17.3633C3.94531 16.7305 0.78125 13.1094 0.78125 8.75C0.78125 3.93359 4.68359 0.03125 9.5 0.03125C14.3164 0.03125 18.2188 3.93359 18.2188 8.75Z"
                fill={color}/>
        </svg>
    )
}