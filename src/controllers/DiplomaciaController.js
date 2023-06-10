import prisma from '../prismaClient.js'

const createDiplomacia = async (req, res) => {
    const { id_reino_1, id_reino_2, es_aliado } = req.body
    const diplomacia = await prisma.diplomacia.create({
        data: {
            id_reino_1,
            id_reino_2,
            es_aliado
        }
    })
    res.json(diplomacia)
}

const getDiplomacia = async (req , res) => {
    const diplomacia = await prisma.diplomacia.findMany()
    res.json(diplomacia)
}

const getDiplomaciaById = async (req, res) => {
    const { id } = req.params
    const diplomacia = await prisma.diplomacia.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(diplomacia)
}

const updateDiplomacia = async (req, res) => {
    const { id } = req.params
    const { personajeId, reinoId } = req.body
    const diplomacia = await prisma.diplomacia.update({
        where: {
            id: Number(id)
        },
        data: {
            personajeId,
            reinoId
        }
    })
    res.json(diplomacia)
}

const deleteDiplomacia = async (req, res) => {
    const { id } = req.params
    const diplomacia = await prisma.diplomacia.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(diplomacia)
}

const DiplomaciaController = {
    createDiplomacia,
    getDiplomacia,
    getDiplomaciaById,
    updateDiplomacia,
    deleteDiplomacia
}

export default DiplomaciaController
