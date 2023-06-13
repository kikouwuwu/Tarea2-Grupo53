import prisma from '../prismaClient.js'

const createTrabajos = async (req, res) => {
  const { descripcion, sueldo } = req.body;
  try {
    const trabajo = await prisma.trabajos.create({
      data: {
        descripcion,
        sueldo,
      },
    });
    res.json(trabajo);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al crear el trabajo.' });
  }
}


const getTrabajos = async (req, res) => {
  try {
    const trabajos = await prisma.trabajos.findMany({
      orderBy: {
        id: 'asc',
      },
    });
    res.json(trabajos);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al obtener los trabajos.' });
  }
};

const getTrabajosById = async (req, res) => {
  const { id } = req.params;
  try {
    const trabajo = await prisma.trabajos.findUnique({
      where: { id: Number(id) },
    });
    if (trabajo === null) {
      res.status(404).json({ error: 'El trabajo no existe.' });
    } else {
      res.json(trabajo);
    }
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al obtener el trabajo.' });
  }
}



const updateTrabajos = async (req, res) => {
  const { id } = req.params;
  const { descripcion, sueldo } = req.body;
  try {
    const updatedTrabajo = await prisma.trabajos.update({
      where: { id: Number(id) },
      data: { descripcion, sueldo },
    });
    res.json(updatedTrabajo);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al actualizar el trabajo.' });
  }
}

const deleteTrabajos = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.trabajos.delete({
      where: { id: Number(id) },
    });
    res.json({ message: 'El trabajo ha sido eliminado correctamente.' });
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al eliminar el trabajo.' });
  }
}

const TrabajosController = {
  createTrabajos,
  getTrabajos,
  getTrabajosById,
  updateTrabajos,
  deleteTrabajos
}

export default TrabajosController