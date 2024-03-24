import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const postDetails=useLoaderData()
    console.log(postDetails)
    const {id,title,body}=postDetails
    const navigate=useNavigate()
    const handleGoBack=()=>{
      navigate(-1)
    }
    const {userId}=useParams()
    console.log(userId)
    return (
        <div>
            <h4>id:{id}</h4>
            <h2>Title:{title}</h2>
            <p>{body}</p>
            <br />
            <button onClick={handleGoBack}> Go back</button>
        </div>
    );
};

export default PostDetails;