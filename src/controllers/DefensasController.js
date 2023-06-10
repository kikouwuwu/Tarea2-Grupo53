import prisma from '../prismaClient.js'

const createDefensas = async (req, res) => {
    const { personajeId, reinoId } = req.body
    const defensas = await prisma.defensas.create({
        data: {
            personajeId,
            reinoId
        }
    })
    res.json(defensas)
}

const getDefensas = async (req , res) => {
    const defensas = await prisma.defensas.findMany()
    res.json(defensas)
}

const getDefensasById = async (req, res) => {
    const { id } = req.params
    const defensas = await prisma.defensas.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(defensas)
}

const updateDefensas = async (req, res) => {
    const { id } = req.params
    const { personajeId, reinoId } = req.body
    const defensas = await prisma.defensas.update({
        where: {
            id: Number(id)
        },
        data: {
            personajeId,
            reinoId
        }
    })
    res.json(defensas)
}

const deleteDefensas = async (req, res) => {
    const { id } = req.params
    const defensas = await prisma.defensas.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(defensas)
}

const DefensasController = {
    createDefensas,
    getDefensas,
    getDefensasById,
    updateDefensas,
    deleteDefensas
}

export default DefensasController