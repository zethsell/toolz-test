type Props = {
    disabled?: boolean
}


export default function PaginatorMarker({disabled}: Props) {
    const classes = `border-[4px] w-[96px] ${disabled ? 'border-[#222222]' : 'border-[#FFFFFF]'} `
    return (<div className={classes}></div>)

}
