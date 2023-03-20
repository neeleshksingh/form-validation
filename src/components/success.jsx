import { useNavigate } from "react-router-dom"

const Success = () =>{
    const navigate = useNavigate()

    const handleBack = () =>[
        navigate("/")
    ]
    return(
        <div className="flex-row success">
            <h1>Form Submitted Succesfully !</h1>
            <button onClick={handleBack}>Add another form</button>
        </div>
    )
}

export default Success