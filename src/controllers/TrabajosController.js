import prisma from '../prismaClient.js'

const createTrabajos = async (req, res) => {
    const { descripcion, sueldo } = req.body
    const trabajos = await prisma.trabajos.create({
        data: {
            descripcion,
            sueldo
        }
    })
    res.json(trabajos)
}

const getTrabajos = async (req , res) => {
    const trabajos = await prisma.trabajos.findMany()
    res.json(trabajos)
}

const getTrabajosById = async (req, res) => {
    const { id } = req.params
    const trabajos = await prisma.trabajos.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(trabajos)
}

const updateTrabajos = async (req, res) => {
    const { id } = req.params
    const { nombre, descripcion, salario } = req.body
    const trabajos = await prisma.trabajos.update({
        where: {
            id: Number(id)
        },
        data: {
            nombre,
            descripcion,
            salario
        }
    })
    res.json(trabajos)
}

const deleteTrabajos = async (req, res) => {
    const { id } = req.params
    const trabajos = await prisma.trabajos.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(trabajos)
}

const TrabajosController = {
    createTrabajos,
    getTrabajos,
    getTrabajosById,
    updateTrabajos,
    deleteTrabajos
}

export default TrabajosController
