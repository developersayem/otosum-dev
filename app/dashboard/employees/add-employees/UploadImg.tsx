"use client";
import type { NextComponentType, NextPageContext } from "next";
import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image"; // Add this line

interface FileData {
  fileName: string;
  fileImage: string;
}

interface Props {}

const UploadImg: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  const [selectedFiles, setSelectedFiles] = useState<FileData[]>([]);

  const InputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const images: File[] = Array.from(e.target.files!);

    images.forEach((file) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedFiles((prevValue) => [
          ...prevValue,
          {
            fileName: file.name,
            fileImage: reader.result as string,
          },
        ]);
      };

      reader.readAsDataURL(file);
    });
  };

  const FileUploadSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // form reset on submit
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <div className="fileupload-view">
      <div className="row justify-content-center m-0">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <div className="kb-data-box">
                <div className="kb-modal-data-title"></div>
                <form onSubmit={FileUploadSubmit}>
                  <div className="kb-file-upload">
                    <div className="file-upload-box">
                      <input
                        type="file"
                        id="fileupload"
                        className="file-upload-input"
                        onChange={InputChange}
                        multiple
                      />
                    </div>
                  </div>
                  <div className="kb-attach-box mb-3">
                    {selectedFiles.map((data, index) => {
                      const { fileName, fileImage } = data;
                      return (
                        <div className="file-atc-box" key={index}>
                          {fileName.match(/.(jpg|jpeg|png|gif|svg)$/i) ? (
                            <div className="w-10 rounded-full">
                              <Image
                                src={fileImage}
                                alt={fileName}
                                width={40}
                                height={40}
                                className="bg-transparent transition-all duration-300"
                              />
                            </div>
                          ) : (
                            <div className="file-image">
                              <i className="far fa-file-alt"></i>
                            </div>
                          )}
                          <div className="file-detail"></div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="kb-buttons-box">
                    <button
                      type="submit"
                      className="btn btn-primary form-submit"
                    >
                      Upload
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadImg;
