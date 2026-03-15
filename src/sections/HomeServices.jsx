import ServiceCard from "../components/ServiceCard";

export default function HomeServices() {

    const services = [

        {
            title: "Progettazione reti",
            description: "Progettazione e pianificazione di infrastrutture in fibra ottica."
        },
        {
            title: "Installazione fibra",
            description: "Installazione e posa di reti in fibra ottica per operatori e aziende."
        },
        {
            title: "Manutenzione reti",
            description: "Servizi di manutenzione e monitoraggio delle infrastrutture."
        },
        {
            title: "Collaudo e certificazione",
            description: "Verifica e certificazione delle reti in fibra ottica."
        }

    ]

    return (

        <section className="bg-gray-100 py-24">

            <div className="max-w-7x1 mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-16">
                    I Nostri Servizi
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {services.map((service, index) =>
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                        />
                    )}

                </div>

            </div>

        </section>
    )
}