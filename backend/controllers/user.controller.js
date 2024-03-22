import User from "../Models/User.model.js";

export const getUsersForSidebar = async (req,res) =>{

    try {
        const loggedInUser = req.user._id;
           ///  all user except current logged in user;
        const allUser = await User.find({ _id : { $ne : loggedInUser} }).select("-password");
        // const allUser = await User.find();   all user
         
        res.status(200).json(allUser); 

    } catch (error) {
        console.log("error in getUsersForSidebar: ",error.message);
        res.status(500).json({error: "Internal server error"});
    }
}