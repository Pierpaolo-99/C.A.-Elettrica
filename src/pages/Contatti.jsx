export default function Contatti() {
  return (
    <>
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">Contatti</h1>
          <p className="text-lg text-gray-700 mb-8">
            Per informazioni o richieste, compila il modulo qui sotto o contattaci direttamente.
          </p>
          <form className="max-w-xl mx-auto flex flex-col gap-4">
            <input type="text" placeholder="Nome" className="p-3 rounded border border-gray-300"/>
            <input type="email" placeholder="Email" className="p-3 rounded border border-gray-300"/>
            <textarea placeholder="Messaggio" className="p-3 rounded border border-gray-300"></textarea>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Invia Messaggio
            </button>
          </form>
        </div>
      </section>
    </>
  )
}