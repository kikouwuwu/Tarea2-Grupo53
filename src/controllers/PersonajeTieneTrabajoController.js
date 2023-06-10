import prisma from '../prismaClient.js'

const createPersonajeTieneTrabajo = async (req, res) => {
    const { id_trabajo, id_personaje, fecha_inicio, fecha_termino } = req.body
    const personajeTieneTrabajo = await prisma.personajeTieneTrabajo.create({
        data: {
            id_trabajo,
            id_personaje,
            fecha_inicio,
            fecha_termino
        }
    })
    res.json(personajeTieneTrabajo)
}

const getPersonajeTieneTrabajo = async (req , res) => {
    const personajeTieneTrabajo = await prisma.personajeTieneTrabajo.findMany()
    res.json(personajeTieneTrabajo)
}

const getPersonajeTieneTrabajoById = async (req, res) => {
    const { id } = req.params
    const personajeTieneTrabajo = await prisma.personajeTieneTrabajo.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(personajeTieneTrabajo)
}

const updatePersonajeTieneTrabajo = async (req, res) => {
    const { id } = req.params
    const { personajeId, trabajoId } = req.body
    const personajeTieneTrabajo = await prisma.personajeTieneTrabajo.update({
        where: {
            id: Number(id)
        },
        data: {
            personajeId,
            trabajoId
        }
    })
    res.json(personajeTieneTrabajo)
}

const deletePersonajeTieneTrabajo = async (req, res) => {
    const { id } = req.params
    const personajeTieneTrabajo = await prisma.personajeTieneTrabajo.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(personajeTieneTrabajo)
}

const PersonajeTieneTrabajoController = {
    createPersonajeTieneTrabajo,
    getPersonajeTieneTrabajo,
    getPersonajeTieneTrabajoById,
    updatePersonajeTieneTrabajo,
    deletePersonajeTieneTrabajo
}

export default PersonajeTieneTrabajoController
