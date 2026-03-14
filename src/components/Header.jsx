import { Link } from "react-router-dom"

export default function Header () {

    return(

        <header className="bg-white shadow">

            <div className="max-w-7x1 mx-auto flex justify-between items-center p-4">

                <Link to={"/"} className="font-bold text-xl">
                    LOGO
                </Link>

                <nav className="flex gap-6">
                    <Link to={"/business"}>Business</Link>
                    <Link to={"/azienda"}>Azienda</Link>
                    <Link to={"/lavora-con-noi"}>Lavora con noi</Link>
                    <Link to={"/contatti"}>Contatti</Link>
                </nav>

            </div>

        </header>
    )
}