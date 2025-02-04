import { FileIcon, FolderIcon } from "lucide-react";
import type { FileItem } from "../app/types";

interface FileExplorerProps {
  files: FileItem[];
  onFolderClick: (folder: FileItem) => void;
  breadcrumbs: FileItem[];
  onBreadcrumbClick: (index: number) => void;
}

export default function FileExplorer({
  files,
  onFolderClick,
  breadcrumbs,
  onBreadcrumbClick,
}: FileExplorerProps) {
  return (
    <main className="flex-1 overflow-auto bg-gray-900 p-4">
      <div className="mb-4 flex items-center space-x-2 text-sm">
        <button
          onClick={() => onBreadcrumbClick(-1)}
          className="text-blue-400 hover:underline"
        >
          My Drive
        </button>
        {breadcrumbs.map((item, index) => (
          <span key={item.id} className="flex items-center">
            <span className="mx-2 text-gray-500">/</span>
            <button
              onClick={() => onBreadcrumbClick(index)}
              className="text-blue-400 hover:underline"
            >
              {item.name}
            </button>
          </span>
        ))}
      </div>
      <div className="space-y-1">
        {files.map((item) => (
          <div
            key={item.id}
            className="flex cursor-pointer items-center space-x-4 rounded p-2 hover:bg-gray-800"
            onClick={() => item.type === "folder" && onFolderClick(item)}
          >
            {item.type === "folder" ? (
              <FolderIcon className="h-5 w-5 text-yellow-500" />
            ) : (
              <FileIcon className="h-5 w-5 text-blue-500" />
            )}
            <span className="flex-grow">{item.name}</span>
            <span className="text-sm text-gray-400">
              {item.type === "folder"
                ? `${item.children?.length || 0} items`
                : "File"}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
