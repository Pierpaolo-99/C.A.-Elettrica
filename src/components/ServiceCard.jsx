export default function ServiceCard({ title, description}) {

    return (

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">

            <h3 className="text-xl font-semibold mb-3">
                {title}
            </h3>

            <p className="text-gray-600">
                {description}
            </p>

        </div>
    )
}