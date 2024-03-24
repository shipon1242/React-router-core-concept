import { Link } from "react-router-dom";


const User = ({user}) => {
    console.log(user)
    const {id,name,phone,email}=user
    const userStyle={
        border:"2px solid yellow",
        padding:"5px",
        borderRadius:"20px",
       
    }
    return (
        <div style={userStyle}>
            <h2>name:{name}</h2>
            <p>Email:{email}</p>
            <p>Phone:{phone} </p>
            <Link to={`/user/${id}`}>Show details</Link>
        </div>
    );
};

export default User;