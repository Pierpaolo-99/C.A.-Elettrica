export default function ProjectCard({ title, image, description }) {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-md group">

      <img src={image} alt={title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />

      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-4">
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-200 text-sm">{description}</p>
      </div>

    </div>
  )
}