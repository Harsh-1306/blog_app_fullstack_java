import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import BlogItem from "./BlogItem";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Profile = (props) => {
  const user_id = Cookies.get("user_id");
  const navigate = useNavigate();
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {    
    const fetchData = async () => {
      const url = "http://localhost:5000/api/blogs/my";
      try {
        const response = await axios.get(url, {
          headers: {
            "Cookie": `user_id = ${user_id}`, // Set the 'user_id' cookie in the headers
          },
          withCredentials: true, // Include this line to send cookies
        });

        if(response) {
          setIsLoading(false);
          setBlogs(response.data.blogs);
        }

      } catch(err) {
        setIsLoading(false);
        console.log("Error while fetching user's blogs", err);
      }
    }

    fetchData();

  }, []);

  const joiningDate = user.createdAt.substring(0, 10);

  const navigateToEditProfile = () => {
    navigate("/profile/edit"); // component to edit the profile
  }

  const deleteUser = async () => {
  const confirmDelete = window.confirm("Are you sure?");
  if (!confirmDelete) return;

  try {
    const response = await axios.delete("http://localhost:5000/api/users/delete", {
      withCredentials: true, // ✅ Sends real browser cookies
    });

    if (response) {
      navigate("/logout");
    }
  } catch (err) {
    console.log("Error while deleting user: ", err);
  }
};


  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="card" style={{ width: "100%", margin: "25px" }}>
          <div className="card-body">
            <h3 className="card-title">{user.name}</h3>
            <p className="card-title">Username: {user.username}</p>
            <p className="card-title">{user.email}</p>
            <p className="card-text">Joined {joiningDate}</p>
            <p className="card-text">Authored  {user.posts.length} blogs till now.</p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-primary mr-4" onClick={navigateToEditProfile}>Edit Profile</button>
              <button className="btn btn-outline-danger ml-4" onClick={deleteUser}>Delete Profile</button>
            </div>
            
          </div>
        </div>
      </div>

      <div className="container my-4 d-flex flex-column">
        <h3 className="text-center"> My Blogs </h3>
        {isLoading ? <h4 className="text-center my-5"> Fetching your blogs ... </h4>: null}

        { blogs.length === 0 ? 
        <div className="container d-flex flex-column">
            <h5 className="text-center my-4"> You haven't published any blogs till now. </h5>
            
        </div>
        :
          blogs.map((blog, i) => {
            return (
              <BlogItem 
                key={i} 
                blog={blog}
               />
            )
          })
        }

      <button className="btn btn-outline-success justify-content-center" onClick={()=>navigate("/write")}> Write a Blog </button>
      </div>

    </>
  )
}

export default Profile;