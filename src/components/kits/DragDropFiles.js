import { useRef, useState } from "react";
import '../../assets/css/dragdropfiles.css'

const DragDropFiles = () => {
    const [file, setFiles] = useState(null)
    const inputRef = useRef()
    const handleDragOver = (e) => {
        e.preventDefault()

    }
    const handleDrop = (e) => {
        e.preventDefault()
        setFiles(e.dataTransfer.files[0])
    }
    const handleChange = (e) => {
        setFiles(e.target.files[0])
        console.log(e.target.files)
    }
    const handleClick = () => {
        inputRef.current.click()
    }
    //send files
    const handleUpload = () => {

    }

    return (

        <div>
            <div className="dropzone d-flex flex-column justify-content-center align-items-center mb-3"
                onDragOver={handleDragOver}
                onDrop={handleDrop}>
                <h1><span className="text-primary"><i className="bi bi-cloud-upload"></i></span></h1>
                <span className="text-muted">Drag and Drop your file or</span>
                <input
                    type="file"
                    onChange={handleChange}
                    hidden
                    ref={inputRef}

                />
                <a onClick={handleClick} href="#">select files</a>
            </div>
            {file ? (<div className="uploads">
                <div className="px-3">

                    <div className="py-3 file-liste mb-4 rounded row">
                        <span
                            className="col-sm-2 fs-1 text-primary d-flex justify-content-center"
                        >
                            {file.type === 'video/mp4'
                                ? (<i className="bi bi-filetype-mp4"></i>)
                                : file.type === 'video/mp3'
                                    ? (<i className="bi bi-filetype-mp3"></i>)
                                    : (<i className="bi bi-image"></i>)}
                        </span>
                        <span className="file-name col-sm-9 d-flex align-items-center">{file.name}
                        </span>

                    </div>

                </div>

            </div>) : (<div>
                Vous n'avez selectionné aucun fichier.
            </div>)}
        </div>


    )
}
export default DragDropFiles;