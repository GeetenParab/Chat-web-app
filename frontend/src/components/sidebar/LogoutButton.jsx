import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";


const LogoutButton = () => {
      
	 const { logout } = useLogout();
	 
	return (
		<div className='mt-auto'>
			{/*  */}
			     <div className='divider my-0 py-0 h-5' />
				<BiLogOut className='w-6 h-6 text-white cursor-pointer' 
				onClick={logout}
				/>
			
		</div>
	);
};
export default LogoutButton;



// import { BiLogOut } from "react-icons/bi";


// const LogoutButton = () => {
      

//    return (
// 	   <div className='mt-auto'>
// 		   {/*  */}
// 				<div className='divider my-0 py-0 h-5' />
// 			   <BiLogOut className='w-6 h-6 text-white cursor-pointer' 
// 			   onClick={}
// 			   />
		   
// 	   </div>
//    );
// };
// export default LogoutButton;