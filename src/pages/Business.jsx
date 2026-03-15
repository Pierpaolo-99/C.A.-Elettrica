import { Helmet } from "react-helmet"

export default function Business() {
  return (
    <>

      <Helmet>
        <title>Business - FiberCompany</title>
        <meta name="description" content="Scopri le soluzioni FiberCompany per aziende e operatori telecom, dalla progettazione all’installazione di reti in fibra ottica." />
      </Helmet>

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">Business</h1>
          <p className="text-lg text-gray-700">
            Offriamo soluzioni complete per aziende e operatori telecom, dalla progettazione all’installazione e manutenzione di reti in fibra ottica.
          </p>
        </div>
      </section>

      {/* Se vuoi, puoi aggiungere cards simili a HomeServices per dettagliare i servizi */}
    </>
  )
}