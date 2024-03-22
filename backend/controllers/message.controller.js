import Conversation from "../Models/conversation.model.js";
import Message from "../Models/message.model.js";

export const sendMessage = async (req,res)=>{
    // console.log("message sent ",req.param.id)

    try {
        const {message} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id;


        let conversation =    await Conversation.findOne({
            participants:{$all :[senderId,receiverId] },
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,receiverId],
            })   
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }
        
          await Promise.all([conversation.save(),newMessage.save()]);

        res.status(201).json(newMessage);



       } catch (error) {
        console.log("error in sendMessage controller: ",error.message);
         res.status(500).json({error:"internal server error"});
       }
}

export const getMessage = async (req,res)=>{
        try {
            const {id:useToChatId} = req.params;
            const senderId = req.user._id;

            const conversation = await Conversation.findOne({
                participants:{ $all: [senderId,useToChatId] },
            }).populate("messages");
                 
            if(!conversation) return res.status(200).json([]);

            const AllMessages = conversation.messages;
            res.status(200).json(AllMessages);


        } catch (error) {
            console.log("error in getMessage controller: ",error.message);
            res.status(500).json({error:"internal server error"});
        }
}