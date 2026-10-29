import Link from "next/link";

export default function Games() {
    return(
        <div>

        <p>vyber hru</p>
        <Link href={"./breakout"} >Breakout</Link>
        <Link href={"./pokemon-battle"} >Pokemon Type Battle</Link>
        </div>
    )
}