import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function PrivateRoute({ children }) {
    const { auth } = useSelector(store => store.reducer);

    if (auth) {
        return <Navigate to="/" />
    }

    return children;
}

export default PrivateRoute


