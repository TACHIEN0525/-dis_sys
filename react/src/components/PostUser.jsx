import axio from "axios";
import { useState } from "react";

const PostUse = () => {
    const [user, setUser] = useState({
        name:'', 
        age:'',
        email:'',
    });
    const createUser = async () = {
        await axio.post("https://localhost:8080/api/from")
    };
};


export default PostUse;