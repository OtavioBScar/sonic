import Sorvete from "../models/sorvete.model.js"

export default class SorveteController{

    static async getAll( req, res ){
        const sorvetes = await Sorvete.findMany()
        res.status(200).json(sorvetes)
    }

    static async getUnique( req,res ){
        const id = parseInt(req.params.id)
        const sorvete = await Sorvete.findUnique({
            where:{
                id: id
            }
        })
        res.status(200).json(sorvete)
    }

    static async create(req,res){
        const sorvete = await Sorvete.create({
            data:{
                sabor: req.body.sabor,
                quantidade: req.body.quantidade,
                valor : req.body.valor
            }
        })
        res.status(201).json(sorvete)
    }

    static async update(req, res) {
        const id = parseInt(req.params.id)
        const newSorvete = await Sorvete.update({
            where:{
                id: id
            },
            data:{
                sabor: req.body.sabor,
                quantidade: req.body.quantidade,
                valor : req.body.valor
            }
        })
        res.status(200).json({ message: "Atualizado com sucesso!", novo_sorvete: newSorvete })
    }

    static async delete(req,res){
        const id = parseInt(req.params.id)
        const deletedSorvete = await Sorvete.delete({
            where:{
                id: id
            }
        })
        res.status(200).json({ message: "Sorvete deletado com sucesso!", sorvete_deletado: deletedSorvete })
    }
}