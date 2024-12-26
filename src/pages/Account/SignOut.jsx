import Cookies from 'js-cookie';

const handleLogout = () => {
    // Clear the cookie
    Cookies.remove('token');
    
    // Redirect to login or update state
    window.location.href = '/login';
    
};