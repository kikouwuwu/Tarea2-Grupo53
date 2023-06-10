
import prisma from '../prismaClient.js'

const createReinos = async (req, res) => {
    const { nombre, ubicacion, superficie} = req.body
    const reinos = await prisma.reinos.create({
        data: {
            nombre,
            ubicacion,
            superficie
        }
    })
    res.json(reinos)
}

const getReinos = async (req , res) => {
    const reinos = await prisma.reinos.findMany()
    res.json(reinos)
}

const getReinosById = async (req, res) => {
    const { id } = req.params
    const reinos = await prisma.reinos.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(reinos)
}

const updateReinos = async (req, res) => {
    const { id } = req.params
    const { nombre, ubicacion, superficie } = req.body
    const reinos = await prisma.reinos.update({
        where: {
            id: Number(id)
        },
        data: {
            nombre,
            ubicacion,
            superficie
        }
    })
    res.json(reinos)
}

const deleteReinos = async (req, res) => {
    const { id } = req.params
    const reinos = await prisma.reinos.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(reinos)
}

const ReinosController = {
    createReinos,
    getReinos,
    getReinosById,
    updateReinos,
    deleteReinos
}

export default ReinosController