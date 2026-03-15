import { Link } from "react-router-dom"
import { useState } from "react"
import FullscreenMenu from "./FullscreenMenu"

export default function Header() {

    const [openMenu, setOpenMenu] = useState(null)
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <header className="bg-white shadow-md relative">

                <div className="max-w-7x1 mx-auto flex justify-between items-center p-4">

                    {/* Logo */}
                    <Link to={"/"} className="font-bold text-xl">
                        LOGO
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8">

                        <div
                            onMouseEnter={() => setOpenMenu("business")}
                            onMouseLeave={() => setOpenMenu(null)}
                            className="relative"
                        >
                            <button>Business</button>

                            {openMenu === "business" && (
                                <div className="absolute left-0 top-full w-[500px] bg-white shadow-lg p-6 grid grid-cols-2 gap-6">

                                    <div>
                                        <h3 className="font-semibold mb-2">Servizi</h3>
                                        <ul className="space-y-2 text-sm">
                                            <li><Link to="#">Progettazione reti</Link></li>
                                            <li><Link to="#">Installazione fibra</Link></li>
                                            <li><Link to="#">Manutenzione</Link></li>
                                            <li><Link to="#">Collaudo</Link></li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold mb-2">Soluzioni</h3>
                                        <ul className="space-y-2 text-sm">
                                            <li><Link to="#">Operatori telecom</Link></li>
                                            <li><Link to="#">Aziende</Link></li>
                                            <li><Link to="#">Enti pubblici</Link></li>
                                        </ul>
                                    </div>

                                </div>
                            )}

                        </div>

                        <div
                            onMouseEnter={() => setOpenMenu("azienda")}
                            onMouseLeave={() => setOpenMenu(null)}
                            className="relative"
                        >
                            <button>Azienda</button>

                            {openMenu === "azienda" && (
                                <div className="absolute left-0 top-full w-[400px] bg-white shadow-lg p-6">

                                    <ul className="space-y-3 text-sm">
                                        <li><Link to="/azienda">Chi siamo</Link></li>
                                        <li><Link to="#">Team</Link></li>
                                        <li><Link to="#">Certificazioni</Link></li>
                                        <li><Link to="#">Partner</Link></li>
                                    </ul>

                                </div>
                            )}

                        </div>

                        <Link to="/lavora-con-noi">Lavora con noi</Link>
                        <Link to="/contatti">Contatti</Link>

                    </nav>

                    {/* Menu button */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="text-2x1"
                    >
                        ☰
                    </button>

                </div>

            </header>

            <FullscreenMenu
                isOpen={menuOpen}
                setIsOpen={setMenuOpen}
            />
        </>
    )
}