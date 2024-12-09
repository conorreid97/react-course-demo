import { useParams } from 'react-router-dom';

const LoginSuccessPage = () => {
    const params = useParams();
    
    return (
        <div>
            <h1>Welcome {params.username}</h1>
        </div>
    )
}

export default LoginSuccessPage;