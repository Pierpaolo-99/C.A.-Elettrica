import { Link } from "react-router-dom";

export default function FullscreenMenu({ isOpen, setIsOpen }) {

    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 bg-black text-white z-50 flex flex-col p-10">

            <div className="flex justify-end">
                <button
                    onClick={() => setIsOpen(false)}
                    className="text-3x1"
                >
                    x
                </button>
            </div>

            <div className="grid md:grid-cols-4 gap-10 mt-20 text-lg">

                <div>
                    <h3 className="font-bold mb-4">Business</h3>
                    <ul className="space-y-2">
                        <li><Link to="#">Servizi</Link></li>
                        <li><Link to="#">Soluzioni</Link></li>
                        <li><Link to="#">Progetti</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Azienda</h3>
                    <ul className="space-y-2">
                        <li><Link to="#">Chi siamo</Link></li>
                        <li><Link to="#">Team</Link></li>
                        <li><Link to="#">Certificazioni</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Carriere</h3>
                    <ul className="space-y-2">
                        <li><Link to="#">Lavora con noi</Link></li>
                        <li><Link to="#">Posizioni aperte</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Supporto</h3>
                    <ul className="space-y-2">
                        <li><Link to="#">FAQ</Link></li>
                        <li><Link to="#">Contatti</Link></li>
                    </ul>
                </div>                                              

            </div>

        </div>
    )
}