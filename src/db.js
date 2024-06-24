import mongoose from 'mongoose';

export const  connectionDB  = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://diegomhc01:4odsU3K9j7PjpB9Z@Clutser0.ilvgtbm.mongodb.net/finanzas?retryWrites=true&w=majority');
        console.log('>>>> DB conectada');
    }catch (error){
        console.log(error);
    }
};

export default connectionDB;

