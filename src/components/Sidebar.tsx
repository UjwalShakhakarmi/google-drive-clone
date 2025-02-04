import { FolderIcon, ImageIcon, MusicIcon, FileIcon } from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="w-64 p-4 bg-gray-800 border-r border-gray-700">
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-gray-100">
              <FolderIcon className="h-5 w-5" />
              <span>My Drive</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-gray-100">
              <ImageIcon className="h-5 w-5" />
              <span>Images</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-gray-100">
              <MusicIcon className="h-5 w-5" />
              <span>Music</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-gray-100">
              <FileIcon className="h-5 w-5" />
              <span>Documents</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

