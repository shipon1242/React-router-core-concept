import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    console.log(post)
    const {id,title,body}=post
    
    const userStyle={
        border:"2px solid green",
        padding:"5px",
        borderRadius:"20px",}
        const navigate = useNavigate()

        const handlePostBack=()=>{
            navigate(`/post/${id}`);

        }
    return (
        <div style={userStyle} >
            <h1><span><small>{id}</small></span></h1>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link to={`/post/${id}`}><button>Post Details</button></Link><br />
            <button onClick={handlePostBack} style={{marginTop:"10px"}}>Back show details</button>
           
        </div>
    );
};

export default Post;