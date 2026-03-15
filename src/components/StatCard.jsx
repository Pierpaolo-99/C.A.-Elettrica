export default function StatCard({ number, label }) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition">

      <h3 className="text-3xl font-bold mb-2">{number}</h3>
      <p className="text-gray-600">{label}</p>

    </div>
  )
}