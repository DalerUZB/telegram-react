import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function PrivateRoute() {

    const { auth } = useSelector(store => store.reducer)
    if (!auth) {
        <Navigate to='/login' />
    }
}

export default PrivateRoute

