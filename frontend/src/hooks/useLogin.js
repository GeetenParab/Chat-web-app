import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
     const [loading,setloading] = useState(false);
     const  {authUser,setauthUser} = useAuthContext();

     const login = async({ username, password})=>{
         const success = handleInputErrors({ username, password })
         if(!success) return;


         setloading(true);
           try {
                  const res = await fetch("/api/auth/login",{
                    method:"POST",
                    headers:{"Content-Type": "application/json"},
                    body:JSON.stringify({username, password})
                  })

                  const data = await res.json();
                  console.log(data);

                  if(data.error){
                    throw new Error(data.error)
                  }

                  //localstorage
                  localStorage.setItem("chat-user",JSON.stringify(data));
                  //context
                  setauthUser(data);


            
           } catch (error) {
              toast.error(error.message);
           }  finally{
            setloading(false);
           }
     };
     return {loading,login};
};

export default useLogin;


function handleInputErrors({  username, password}) {
	if (!username || !password ) {
		toast.error("Please fill in all fields");
		return false;
	}


	if (password.length < 6) {
		toast.error("Password is incorrect!");
		return false;
	}

	return true;
}