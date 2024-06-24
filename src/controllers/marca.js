import { marca } from '../model/marca.js';

export const registro = async (req, res) => {
    const {id, detalle, estado} = req.body;    
    try{
        const newMarca = await marca.create({
            id:id,
            detalle:detalle,
            estado:estado
        });
        newMarca.save();
        res.status(200).send(newMarca);
    }catch (error){
        console.log(error);
    }     
};

export default registro;