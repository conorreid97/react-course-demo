import '../styles/UserCard.css';

const UserCard = (props) => {
    const { name, username, email, phone } = props.user;

    return (
        <div className = 'user-card'>
            <h3>{name}</h3>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Phone: +44 0 {phone}</p>
            <button>Update</button>
            <button>Delete</button>
        </div>
    )
}

export default UserCard;