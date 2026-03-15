import { BoltIcon, WrenchIcon, ClipboardDocumentCheckIcon, CubeIcon } from '@heroicons/react/24/outline'

const icons = {
    "Progettazione reti": <BoltIcon className="h-8 w-8 text-blue-600 mb-3" />,
    "Installazione fibra": <WrenchIcon className="h-8 w-8 text-blue-600 mb-3" />,
    "Manutenzione reti": <ClipboardDocumentCheckIcon className="h-8 w-8 text-blue-600 mb-3" />,
    "Collaudo e certificazione": <CubeIcon className="h-8 w-8 text-blue-600 mb-3" />
}

export default function ServiceCard({ title, description }) {

    return (

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition text-center transition-transform duration-300">
            {icons[title]}
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}