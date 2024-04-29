import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const ChatHeader = ({ user }) => {
    const [cookies, , removeCookie] = useCookies(['user']);
    const navigate = useNavigate(); // Initialize useNavigate hook

    const logout = () => {
        removeCookie('UserId', cookies.UserId);
        removeCookie('Authtoken', cookies.Authtoken);
        navigate("/"); // Redirect to the home page
        window.location.reload(); // You may not need this line
    };

    return (
        <div className="chat-container-header">
            <div className="profile">
                <div className="img-container">
                    <img src={user.url} alt={"photo of" + user.first_name}/>
                </div>
                <h3>{user.first_name}</h3>
            </div>
            <i className="log-out-icon" onClick={logout}>#</i>
        </div>
    );
};

export default ChatHeader;
