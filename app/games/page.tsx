import Link from "next/link";

export default function Games() {
    return(
        <div>

        <p>vyber hru</p>
        <Link href="/games/breakout" >Breakout</Link>
        <Link href="/games/pokemon-battle" >Pokemon Type Battle</Link>
        </div>
    )
}