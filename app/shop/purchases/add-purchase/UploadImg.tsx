import Image from "next/image";
import React, { ChangeEvent } from "react";
import { RiAttachment2 } from "react-icons/ri";

interface FileData {
  fileName: string;
  fileImage: string;
}

interface UploadImgProps {
  selectedFile: FileData | null;
  setSelectedFile: React.Dispatch<React.SetStateAction<FileData | null>>;
}

const UploadImg: React.FC<UploadImgProps> = ({
  selectedFile,
  setSelectedFile,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files![0]; // Only get the first file
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedFile({
        fileName: file.name,
        fileImage: reader.result as string,
      });
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="fileupload-view h-[14.5rem]">
      <div className="kb-attach-box mb-3 flex justify-center items-center py-5">
        {selectedFile === null ? (
          <div className="avatar placeholder flex justify-center items-center">
            <div className="avatar">
              <label
                htmlFor="fileupload"
                className="p-2 text-md text-blue-600 rounded-md cursor-pointer text-center flex items-center justify-center mt-14"
              >
                <RiAttachment2 />
                Upload Photo
              </label>
              <input
                type="file"
                id="fileupload"
                className="file-upload-input"
                onChange={handleInputChange}
                style={{ display: "none" }}
              />
            </div>
          </div>
        ) : (
          <div className="">
            {selectedFile.fileName.match(/.(jpg|jpeg|png|gif|svg)$/i) ? (
              <div className="avatar py-0 w-full h-full flex justify-center items-center">
                <div className="w-44 rounded-lg">
                  <Image
                    src={selectedFile.fileImage}
                    alt={selectedFile.fileName}
                    width={15}
                    height={15}
                    className="bg-transparent transition-all duration-300"
                  />
                </div>
              </div>
            ) : (
              <div className="file-image">
                <i className="far fa-file-alt"></i>
              </div>
            )}
            <div className="file-detail"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadImg;
