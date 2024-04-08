import React from 'react';
import { useAuthContext } from '../../context/AuthContext';

const Userinfo = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="fixed top-0 left-0 p-4 bg-black shadow-lg rounded-lg">
      <div className="flex items-center space-x-4">
        <img
          className="w-12 h-12 rounded-full"
          src={authUser.profilePic}
          alt={authUser.username}
        />
        <div>
          <h2 className="text-lg font-bold">{authUser.fullName}</h2>
         
        </div>
      </div>
    </div>
  );
};

export default Userinfo;
