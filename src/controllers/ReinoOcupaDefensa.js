import prisma from '../prismaClient.js'

const createReinoOcupaDefensa = async (req, res) => {
    const { personajeId, reinoId } = req.body
    const reinoOcupaDefensa = await prisma.reinoOcupaDefensa.create({
        data: {
            personajeId,
            reinoId
        }
    })
    res.json(reinoOcupaDefensa)
}

const getReinoOcupaDefensa = async (req , res) => {
    const reinoOcupaDefensa = await prisma.reinoOcupaDefensa.findMany()
    res.json(reinoOcupaDefensa)
}

const getReinoOcupaDefensaById = async (req, res) => {
    const { id } = req.params
    const reinoOcupaDefensa = await prisma.reinoOcupaDefensa.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(reinoOcupaDefensa)
}

const updateReinoOcupaDefensa = async (req, res) => {
    const { id } = req.params
    const { personajeId, reinoId } = req.body
    const reinoOcupaDefensa = await prisma.reinoOcupaDefensa.update({
        where: {
            id: Number(id)
        },
        data: {
            personajeId,
            reinoId
        }
    })
    res.json(reinoOcupaDefensa)
}

const deleteReinoOcupaDefensa = async (req, res) => {
    const { id } = req.params
    const reinoOcupaDefensa = await prisma.reinoOcupaDefensa.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(reinoOcupaDefensa)
}

const ReinoOcupaDefensaController = {
    createReinoOcupaDefensa,
    getReinoOcupaDefensa,
    getReinoOcupaDefensaById,
    updateReinoOcupaDefensa,
    deleteReinoOcupaDefensa
}

export default ReinoOcupaDefensaController