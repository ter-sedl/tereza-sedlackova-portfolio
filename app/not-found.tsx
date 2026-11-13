import Image from "next/image";
import Link from "next/link";

export default function NotFound() {

    // kdybych chtěla v rámci funkce někoho přesměrovat, tak existuje funkce redirect (z next/navigation), do které jen zadám path

    return (
        <div className="flex flex-col text-center justify-center w-auto h-auto">
            <Image
                src="/notFound.jpg"
                alt="these are not the routes you're looking for"
                width={900}
                height={600}
                className="w-auto"
                loading="eager"
            />
            <h2 className=" font-paragraph mb-6 text-xl sm:text-2xl m-2"><Link href="/">Zpět na domovskou stránku</Link></h2>

        </div>
    )
};