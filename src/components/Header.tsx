import { Upload } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { toast } from "~/hooks/use-toast";

export default function Header() {
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      toast({
        title: "File uploaded successfully",
        description: "Your file has been uploaded to your drive.",
      });
    }, 2000);
  };

  return (
    <header className="flex items-center justify-between border-b border-gray-700 bg-gray-800 p-4">
      <h1 className="text-2xl font-bold text-gray-100">Google Drive Clone</h1>
      <Button onClick={handleUpload} disabled={isUploading} variant="secondary">
        <Upload className="mr-2 h-4 w-4" />
        {isUploading ? "Uploading..." : "Upload"}
      </Button>
    </header>
  );
}
