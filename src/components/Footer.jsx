export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-10">
            <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

                <div>
                    <h3 className="font-bold text-lg mb-3">FiberCompany</h3>
                    <p>Soluzioni in fibra ottica per aziende e pubblica amministrazione.</p>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-3">Link utili</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Business</a></li>
                        <li><a href="#" className="hover:underline">Azienda</a></li>
                        <li><a href="#" className="hover:underline">Lavora con noi</a></li>
                        <li><a href="#" className="hover:underline">Contatti</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-3">Contatti</h3>
                    <p>Email: info@fibercompany.com</p>
                    <p>Telefono: +39 0123 456789</p>
                    <p>Via Roma 123, Milano</p>
                </div>

            </div>

            <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
                © 2026 FiberCompany - Tutti i diritti riservati
            </div>
        </footer>
    )
}