export default function HomeCTA() {
  return (
    <section className="bg-blue-600 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Vuoi una rete veloce e affidabile per la tua azienda?
        </h2>

        <p className="text-lg mb-8">
          Contattaci subito per un preventivo personalizzato e scopri le nostre soluzioni in fibra ottica.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
            Richiedi Preventivo
          </button>
          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition">
            Contattaci
          </button>
        </div>

      </div>
    </section>
  )
}