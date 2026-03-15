export default function HomeHero() {

    return (

        <section className="bg-gray-900 text-white">

            <div className="max-w-7x1 mx-auto px-6 py-32 grid md:grid-cols-2 gap-10 items-center">

                <div>

                    <h1 className="text-5xl font-bold leading-tight mb-6">
                        Infrastrutture in Fibra Ottica per il Futuro Digitale
                    </h1>

                    <p className="text-lg text-gray-300 mb-8">
                        Progettiamo, installiamo e manuteniamo reti in fibra ottica
                        per operatori telecom, aziende ed enti pubblici.
                    </p>

                    <div className="flex gap-4">
                        <button className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                            Scopri i servizi
                        </button>

                        <button className="border border-white px-6 py-3 rounded-lg">
                            Contattaci
                        </button>
                    </div>
                </div>

                <div className="hidden md:block">
                    <div className="bg-gray-700 h-[400px] rounded-xl"></div>
                </div>
            </div>
        </section>
    )
}