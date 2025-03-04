
import React from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  selectedFiles: File[];
  previewUrls: string[];
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ 
  selectedFiles, 
  previewUrls, 
  handleFileChange 
}) => {
  return (
    <div className="flex flex-col items-center">
      <label htmlFor="file-upload" className="cursor-pointer w-full">
        <div className="border-2 border-dashed border-gray-300 rounded-lg h-40 flex flex-col items-center justify-center">
          <Upload size={24} className="mb-2" />
          <p className="text-sm text-gray-500">upload photos and videos</p>
        </div>
        <input 
          type="file" 
          id="file-upload" 
          multiple 
          accept="image/*,video/*" 
          className="hidden" 
          onChange={handleFileChange}
        />
      </label>
      
      {previewUrls.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-2 w-full">
          {previewUrls.map((url, index) => (
            <div key={index} className="relative">
              <img src={url} alt="Preview" className="w-full h-20 object-cover rounded-lg" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
