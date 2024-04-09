import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({conversation,lastIdx}) => {

	         const { selectedConversation,setSelectedConversation}= useConversation();
                  
			 const isSelected = selectedConversation?._id === conversation._id;
			 const { onlineUser } = useSocketContext();
			 const isOnline = onlineUser.includes(conversation._id);
		 
			 return (
				 <>
					 <div
						 className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
						 ${isSelected ? "bg-sky-500" : ""}`}
						 onClick={() => setSelectedConversation(conversation)}>

						 <div className={`avatar ${isOnline ? "online" : ""}`}>
							 <div className='w-12 rounded-full'>
						<img
							src={conversation.profilePic}
							alt='user avatar'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>{conversation.fullName}</p>
						
					</div>
				</div>
			</div>

			{!lastIdx && <div className='divider my-0 py-0 h-1' />}
		</>
	);
};
export default Conversation;


// import React, { useRef } from 'react';
// import useConversation from "../../zustand/useConversation";

// const Conversation = ({ conversation, lastIdx, ref }) => {
//   const { selectedConversation, setSelectedConversation } = useConversation();
//   const isSelected = selectedConversation?._id === conversation._id;
//   const itemRef = useRef(null);

//   const handleClick = () => {
//     setSelectedConversation(conversation);
//   };

//   // Scroll to this conversation when selected
//   React.useEffect(() => {
//     if (isSelected && itemRef.current) {
//       itemRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
//     }
//   }, [isSelected]);

//   return (
//     <>
//       <div
//         ref={ref || itemRef}
//         className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
// 			${isSelected ? "bg-sky-500" : ""}`}
//         onClick={handleClick}
//       >
//         <div className='avatar online'>
//           <div className='w-12 rounded-full'>
//             <img
//               src={conversation.profilePic}
//               alt='user avatar'
//             />
//           </div>
//         </div>

//         <div className='flex flex-col flex-1'>
//           <div className='flex gap-3 justify-between'>
//             <p className='font-bold text-gray-200'>{conversation.fullName}</p>
//           </div>
//         </div>
//       </div>

//       {!lastIdx && <div className='divider my-0 py-0 h-1' />}
//     </>
//   );
// };

// export default React.forwardRef((props, ref) => <Conversation {...props} ref={ref} />)