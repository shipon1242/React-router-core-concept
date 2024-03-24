import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {
    const users=useLoaderData()
    // console.log(users)
    return (
        <div>
            <h3>Our users:{users.length}</h3>
            <h2>I am a user</h2>
            
            <div className="users">
                {
                    users.map(user=> <User key={user.id} user={user}></User>)
                }
            </div>
            <p>My feedback is positive to your website</p>
        </div>
        
        
            
        
    );
};

export default Users;