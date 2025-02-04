"use client";

import { useState } from "react";
import Header from "../components/Header";
import FileExplorer from "../components/FileExplorer";
import type { FileItem } from "./types";

const initialFiles: FileItem[] = [
  {
    id: "1",
    name: "Documents",
    type: "folder",
    children: [
      {
        id: "2",
        name: "Work",
        type: "folder",
        children: [
          { id: "3", name: "Project Proposal.docx", type: "file", url: "#" },
          { id: "4", name: "Budget.xlsx", type: "file", url: "#" },
        ],
      },
      {
        id: "5",
        name: "Personal",
        type: "folder",
        children: [{ id: "6", name: "Resume.pdf", type: "file", url: "#" }],
      },
    ],
  },
  {
    id: "7",
    name: "Images",
    type: "folder",
    children: [
      { id: "8", name: "Vacation.jpg", type: "file", url: "#" },
      { id: "9", name: "Family.png", type: "file", url: "#" },
    ],
  },
  {
    id: "10",
    name: "Music",
    type: "folder",
    children: [{ id: "11", name: "Playlist.mp3", type: "file", url: "#" }],
  },
];

export default function Home() {
  const [currentFolder, setCurrentFolder] = useState<FileItem[]>(initialFiles);
  const [breadcrumbs, setBreadcrumbs] = useState<FileItem[]>([]);

  const handleFolderClick = (folder: FileItem) => {
    setCurrentFolder(folder.children || []);
    setBreadcrumbs([...breadcrumbs, folder]);
  };

  const handleBreadcrumbClick = (index: number) => {
    if (index === -1) {
      setCurrentFolder(initialFiles);
      setBreadcrumbs([]);
    } else {
      const newBreadcrumbs = breadcrumbs.slice(0, index + 1);
      setCurrentFolder(
        newBreadcrumbs[newBreadcrumbs.length - 1].children || [],
      );
      setBreadcrumbs(newBreadcrumbs);
    }
  };

  return (
    <div className="flex h-screen flex-col bg-gray-900 text-gray-100">
      <Header />
      <FileExplorer
        files={currentFolder}
        onFolderClick={handleFolderClick}
        breadcrumbs={breadcrumbs}
        onBreadcrumbClick={handleBreadcrumbClick}
      />
    </div>
  );
}
