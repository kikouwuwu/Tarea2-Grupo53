import prisma from '../prismaClient.js'

const createKarts = async (req, res) => {
    const { modelo, color, velocidad_maxima, id_personaje} = req.body
    const karts = await prisma.karts.create({
        data: {
            modelo,
            color,
            velocidad_maxima,
            id_personaje
        }
    })
    res.json(karts)
}

const getKarts = async (req , res) => {
    const karts = await prisma.karts.findMany()
    res.json(karts)
}

const getKartsById = async (req, res) => {
    const { id } = req.params
    const karts = await prisma.karts.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(karts)
}

const updateKarts = async (req, res) => {
    const { id } = req.params
    const { modelo, color, velocidad_maxima, id_personaje } = req.body
    const karts = await prisma.karts.update({
        where: {
            id: Number(id)
        },
        data: {
            modelo, 
            color,
            velocidad_maxima,
            id_personaje
        }
    })
    res.json(karts)
}

const deleteKarts = async (req, res) => {
    const { id } = req.params
    const karts = await prisma.karts.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(karts)
}

const KartsController = {
    createKarts,
    getKarts,
    getKartsById,
    updateKarts,
    deleteKarts
}

export default KartsController
