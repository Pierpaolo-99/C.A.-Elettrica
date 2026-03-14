import { Link } from "react-router-dom"

export default function Header () {

    return(

        <header className="bg-white shadow-md">

            <div className="max-w-7x1 mx-auto flex justify-between items-center p-4">
                
                {/* Logo */}
                <Link to={"/"} className="font-bold text-xl">
                    LOGO
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link to={"/business"}>Business</Link>
                    <Link to={"/azienda"}>Azienda</Link>
                    <Link to={"/lavora-con-noi"}>Lavora con noi</Link>
                    <Link to={"/contatti"}>Contatti</Link>
                </nav>

                {/* Menu button */}
                <button className="text-2x1">
                    ☰
                </button>

            </div>

        </header>
    )
}