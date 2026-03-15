import ProjectCard from "../components/ProjectCard"

export default function HomeProjects() {

  const projects = [
    { title: "Rete FTTH Milano", image: "/images/progetto1.jpg", description: "Installazione rete FTTH per cliente business." },
    { title: "Rete aziendale Roma", image: "/images/progetto2.jpg", description: "Rete in fibra per complesso industriale." },
    { title: "Scuole connesse Napoli", image: "/images/progetto3.jpg", description: "Connessione veloce per istituti scolastici." },
    { title: "FTTC Comune Torino", image: "/images/progetto4.jpg", description: "Rete FTTC pubblica con manutenzione inclusa." }
  ]

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Progetti Realizzati
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
            />
          ))}
        </div>

      </div>
    </section>
  )
}