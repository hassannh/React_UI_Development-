import { useNavigate } from "react-router-dom"

export const Notfound = () => {
    const navigate = useNavigate()
    return (
        <>
        <div className="not-found">
            <div class="section">
                <h1 className="error">404</h1>
                <div className="page">Ooops!!! The page you are looking for is not found</div>
                <button className="back-home" onClick={(() => navigate('/'))}>Back to home</button>
            </div>
        </div>
        </>
    )
}