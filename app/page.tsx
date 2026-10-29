// import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"./about"}>O mě</Link>
      <Link href={"./games/pokemon-battle"}>Pokemon Type battle</Link>
      <Link href={"./games/breakout"}>Breakout(arcanoid)</Link>
    </div>
  );
}
