import mongoose from 'mongoose';

const marcaSchema = mongoose.Schema(
{
    id:{
        type: Number,
        required:true
    },
    detalle:{
        type:String,
        required:true,
        trim:true
    },
    estado:{
        type:Number,
        required:true,
        trim:true
    }
},
{
    timestamps:true
});

export const marca = mongoose.model('marcas', marcaSchema);