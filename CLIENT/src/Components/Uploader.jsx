import React from 'react'
import { useDropzone } from 'react-dropzone'
import { RiUploadCloud2Fill } from "react-icons/ri";

const Uploader = () => {
    const { getRootProps, getInputProps } = useDropzone({
        multiple: false,
        maxSize: 1000,
        onDrop: (acceptedFiles) => {
            alert(acceptedFiles[0].name);
        },
    });
    return (
        <div className='w-full text-center py-4'>
            <div
                {...getRootProps()}
                className='px-6 pt-5 pb-6 border-2 border-border border-dashed bg-main rounded-md'>
                    <input {...getInputProps()} />
                    <span className='mx-auto flex-colo text-sky-500 text-3xl'>
                        <RiUploadCloud2Fill/>
                    </span>
                    <p className='text-sm mt-2 text-sky-500 font-bold'>Drag your file here</p>
            </div>
        </div>
    )
}

export default Uploader