import StatCard from "../components/StatCard"

export default function HomeStats() {

  const stats = [
    { number: "+150", label: "Progetti completati" },
    { number: "+10", label: "Anni di esperienza" },
    { number: "+50", label: "Clienti soddisfatti" },
    { number: "24/7", label: "Supporto tecnico" }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          I Nostri Numeri
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} number={stat.number} label={stat.label} />
          ))}
        </div>

      </div>
    </section>
  )
}