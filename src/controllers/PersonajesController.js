import prisma from '../prismaClient.js'


const createPersonajes = async (req, res) => {
    const { nombre, fuerza, fecha_nacimiento, objeto } = req.body;
    const fecha_Nacimiento = new Date(fecha_nacimiento); 
    const nuevoPersonaje = await prisma.personajes.create({
        data: {
            nombre,
            fuerza,
            fecha_nacimiento: fecha_Nacimiento,
            objeto,
        },
    });
    res.json(nuevoPersonaje);
};

const getPersonajes = async (req , res) => {
    const personajes = await prisma.personajes.findMany()
    res.json(personajes)
}


const getPersonajesById = async (req, res) => {
    const { id } = req.params
    const personajes = await prisma.personajes.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(personajes)
}

const updatePersonajes = async (req, res) => {
    const { id } = req.params
    const { nombre, fuerza, fecha_nacimiento, objeto} = req.body
    const personajes = await prisma.personajes.update({
        where: {
            id: Number(id)
        },
        data: {
            nombre,
            fuerza,
            fecha_nacimiento,
            objeto
        }
    })
    res.json(personajes)
}

const deletePersonajes = async (req, res) => {
    const { id } = req.params
    const personajes = await prisma.personajes.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(personajes)
}
    

const PersonajesController = {
    createPersonajes,
    getPersonajes,
    getPersonajesById,
    updatePersonajes,
    deletePersonajes
}

export default PersonajesController