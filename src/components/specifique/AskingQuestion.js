import React, { useState } from "react"
import DragDropFiles from "../kits/DragDropFiles"
import DropdownSelect from "../kits/DropdownSelect"
function AskingQuestion(props) {
    const [inputTitle, setInputTitle] = useState('')
    const [inputContent, setInputContent] = useState('')
    function handleChange(e) {
        const { name, value } = e.target
        if (name === "inputTitle") {
            setInputTitle(value)
        }
        else {
            setInputContent(value)
        }
    }
    function handleSubmit(e) {
        e.preventDefault()
        props.createQuestion({ title: inputTitle, content: inputContent })

    }
    return (
        <div>

            <div className="row">
                <form onSubmit={handleSubmit} className="offset-md-2 col-md-8 py-3">

                    <div className="shadow-sm px-2 py-3 mb-5 border-primary">
                        <input
                            type="text"
                            name="inputTitle"
                            placeholder="Le titre de votre question"
                            value={inputTitle}
                            onChange={handleChange}
                            className="form-control mb-1"
                        />
                        <div className="text-muted pt-1 pb-3">
                            Entrez le titre de votre préocupation! <span className="text-danger">*</span><br />
                            <span className="text-primary">Eg </span>: Comment affichez une variable en Python ?
                        </div>
                    </div>
                    <div className="shadow-sm px-2 py-3">
                        <textarea placeholder="Le contenu de votre préocupation ..." name="inputContent" value={inputContent} onChange={handleChange} className="form-control">

                        </textarea>
                        <div className="text-muted pt-1 pb-3">
                            Entrez le contenu de votre préocupation! <span className="text-danger">*</span><br />
                            <span className="text-primary">Eg </span>: Je recherche la fonction qui permet de le faire. J'ai besoin d'aide Svp!
                        </div>
                    </div>

                    <div className="shadow-sm px-2 py-3">
                        <div className="h5">
                            Avez-vous une vidéo ou une image ? <span className="text-danger">(optional)</span>
                        </div>
                        <DragDropFiles></DragDropFiles>
                    </div>
                    <div className="shadow-sm px-2 py-3 mt-4">
                        <DropdownSelect></DropdownSelect>
                        <div className="text-muted pt-1 pb-3">
                            Choisissez vos tags ... <br />
                            <span className="text-primary">Eg </span>: Programation | Python
                        </div>
                    </div>


                    <button type="submit" className="btn btn-primary w-100 mt-2">submit</button>
                </form>
            </div>


        </div>

    )


}
export default AskingQuestion;