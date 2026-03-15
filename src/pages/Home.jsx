import HomeHero from "../sections/HomeHero"
import HomeServices from "../sections/HomeServices"
import HomeStats from "../sections/HomeStats"
import HomeProjects from "../sections/HomeProjects"
import HomeCTA from "../sections/HomeCTA"

export default function Home() {

    return(
        <>
            <HomeHero />
            <HomeServices />
            <HomeStats />
            <HomeProjects />
            <HomeCTA />
        </>
    )
}