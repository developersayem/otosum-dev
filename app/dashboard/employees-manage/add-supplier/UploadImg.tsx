import Image from "next/image";
import React, { ChangeEvent } from "react";
import { RiAttachment2 } from "react-icons/ri";

interface FileData {
  fileName: string;
  fileImage: string;
}

interface UploadImgProps {
  selectedFiles: FileData[];
  setSelectedFiles: React.Dispatch<React.SetStateAction<FileData[]>>;
}

const UploadImg: React.FC<UploadImgProps> = ({
  selectedFiles,
  setSelectedFiles,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files![0]; // Only get the first file
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedFiles([
        {
          fileName: file.name,
          fileImage: reader.result as string,
        },
      ]);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="fileupload-view">
      <div className="kb-attach-box mb-3 flex justify-center items-center">
        {selectedFiles.length === 0 ? (
          <div className="avatar placeholder flex justify-center items-center">
            <div className="avatar">
              <label
                htmlFor="fileupload"
                className="p-2 text-md text-blue-600 rounded-md cursor-pointer text-center flex items-center justify-center"
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
          selectedFiles.map((data, index) => {
            const { fileName, fileImage } = data;
            return (
              <div className="file-atc-box" key={index}>
                {fileName.match(/.(jpg|jpeg|png|gif|svg)$/i) ? (
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <Image
                        src={fileImage}
                        alt={fileName}
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
            );
          })
        )}
      </div>
    </div>
  );
};

export default UploadImg;
