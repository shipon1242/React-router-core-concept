import { useLoaderData } from "react-router-dom";


const UsersDetails = () => {
    const user=useLoaderData();
    const {name}=user;
    return (
        <div>
           
            <h3>Details about:  {name}</h3>
        </div>
    );
};

export default UsersDetails;