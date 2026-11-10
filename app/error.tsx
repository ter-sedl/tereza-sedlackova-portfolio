'use client'

import Link from "next/link"

export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center text-center mt-15">
            <h1 className=" font-paragraph mb-6 text-4xl sm:text-5xl">Něco se pokazilo</h1>
            <h2 className=" font-paragraph mb-6 text-xl sm:text-2xl" >
                <Link href="/">Zpět na domovskou stránku</Link>
            </h2>
        </div>
    )
}