import prisma from '../prismaClient.js'

const createPersonajeHabitaReino = async (req, res) => {
    const { id_personaje, id_reino, fecha_registro, es_gobernante } = req.body
    const personajeHabitaReino = await prisma.personajeHabitaReino.create({
        data: {
            id_personaje,
            id_reino,
            fecha_registro,
            es_gobernante
        }
    })
    res.json(personajeHabitaReino)
}

const getPersonajeHabitaReino = async (req , res) => {
    const personajeHabitaReino = await prisma.personajeHabitaReino.findMany()
    res.json(personajeHabitaReino)
}

const getPersonajeHabitaReinoById = async (req, res) => {
    const { id } = req.params
    const personajeHabitaReino = await prisma.personajeHabitaReino.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(personajeHabitaReino)
}

const updatePersonajeHabitaReino = async (req, res) => {
    const { id } = req.params
    const { personajeId, reinoId } = req.body
    const personajeHabitaReino = await prisma.personajeHabitaReino.update({
        where: {
            id: Number(id)
        },
        data: {
            personajeId,
            reinoId
        }
    })
    res.json(personajeHabitaReino)
}

const deletePersonajeHabitaReino = async (req, res) => {
    const { id } = req.params
    const personajeHabitaReino = await prisma.personajeHabitaReino.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(personajeHabitaReino)
}

const PersonajeHabitaReinoController = {
    createPersonajeHabitaReino,
    getPersonajeHabitaReino,
    getPersonajeHabitaReinoById,
    updatePersonajeHabitaReino,
    deletePersonajeHabitaReino
}

export default PersonajeHabitaReinoController