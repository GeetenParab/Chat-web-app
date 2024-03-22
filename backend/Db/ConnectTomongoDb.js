import mongoose from 'mongoose';


const connectToMongoDb = async ()=>{
    try {
            await mongoose.connect(process.env.MONGO_DB_URI);
            // await mongoose.connect(mongodb+srv://geetenparab:Bright_77@cluster.zurdw7o.mongodb.net/Chat-app-db?retryWrites=true&w=majority&appName=Cluster);
            console.log("connected to MongoDb");
        
    } catch (error) {
        console.log("Error connecting to MongoDb",error.message);
    }
}

export default connectToMongoDb;