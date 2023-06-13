import prisma from '../prismaClient.js'


const createPersonajes = async (req, res) => {
  const { nombre, fuerza, fecha_nacimiento, objeto } = req.body;
  const fecha_Nacimiento = new Date(fecha_nacimiento);
  try {
    const personaje = await prisma.personajes.create({
      data: {
        nombre,
        fuerza,
        fecha_nacimiento: fecha_Nacimiento,
        objeto,
      },
    });
    res.json(personaje);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al crear el personaje.' });
  }
}

const getPersonajes = async (req, res) => {
  try {
    const personajes = await prisma.personajes.findMany({
      orderBy: { id: 'asc' }, // Ordenar por el campo "id" de forma ascendente
    });
    res.json(personajes);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al obtener los personajes.' });
  }
}


const getPersonajesById = async (req, res) => {
  const { id } = req.params;
  try {
    const personaje = await prisma.personajes.findUnique({
      where: { id: Number(id) },
    });
    if (personaje == null) {
      res.status(404).json({ error: 'El personaje no existe.' });
    } else {
      res.json(personaje);
    }
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al obtener el personaje.' });
  }
}

const updatePersonajes = async (req, res) => {
  const { id } = req.params;
  const { nombre, fuerza, fecha_nacimiento, objeto } = req.body;
  try {
    const updatedPersonaje = await prisma.personajes.update({
      where: { id: Number(id) },
      data: { nombre, fuerza, fecha_nacimiento, objeto },
    });
    res.json(updatedPersonaje);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al actualizar el personaje.' });
  }
}

const deletePersonajes = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.personajes.delete({
      where: { id: Number(id) },
    });
    res.json({ message: 'El personaje ha sido eliminado correctamente.' });
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al eliminar el personaje.' });
  }
}


const PersonajesController = {
  createPersonajes,
  getPersonajes,
  getPersonajesById,
  updatePersonajes,
  deletePersonajes
}

export default PersonajesController