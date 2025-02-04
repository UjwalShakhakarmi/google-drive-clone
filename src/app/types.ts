export interface FileItem {
  id: string
  name: string
  type: "file" | "folder"
  children?: FileItem[]
  url?: string
}

