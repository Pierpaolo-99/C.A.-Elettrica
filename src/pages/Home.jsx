import { Helmet } from "react-helmet"
import HomeHero from "../sections/HomeHero"
import HomeServices from "../sections/HomeServices"
import HomeStats from "../sections/HomeStats"
import HomeProjects from "../sections/HomeProjects"
import HomeCTA from "../sections/HomeCTA"

export default function Home() {

    return (
        <>

            <Helmet>
                <title>FiberCompany - Reti in Fibra Ottica</title>
                <meta name="description" content="FiberCompany progetta, installa e mantiene reti in fibra ottica per aziende, operatori telecom e enti pubblici." />
            </Helmet>


            <HomeHero />
            <HomeServices />
            <HomeStats />
            <HomeProjects />
            <HomeCTA />
        </>
    )
}