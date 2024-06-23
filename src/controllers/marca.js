import { marca } from '../model/marca.js';

export const registro = async (req, res) => {
    /*const {id, detalle, estado} = req.body;*/
    try{
        const newMarca = await marca.create({
            id:req.body.id,
            detalle:req.body.detalle,
            estado:req.body.estado
        });
        newMarca.save();
        res.status(200).jsonp(newMarca);
    }catch (error){
        console.log(error);
    }     
};

export default registro;