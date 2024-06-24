import mongoose from 'mongoose';

export const  connectionDB  = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://...');
        console.log('>>>> DB conectada');
    }catch (error){
        console.log(error);
    }
};

export default connectionDB;

