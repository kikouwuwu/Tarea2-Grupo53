
import prisma from '../prismaClient.js'

const createReinos = async (req, res) => {
  const { nombre, ubicacion, superficie } = req.body;
  try {
    const reino = await prisma.reinos.create({
      data: {
        nombre,
        ubicacion,
        superficie,
      },
    });
    res.json(reino);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al crear el reino.' });
  }
}

const getReinos = async (req, res) => {
  try {
    const reinos = await prisma.reinos.findMany({
      orderBy: {
        id: 'asc',
      },
    });
    res.json(reinos);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al obtener los reinos.' });
  }
}

const getReinosById = async (req, res) => {
  const { id } = req.params;
  try {
    const reino = await prisma.reinos.findUnique({
      where: { id: Number(id) },
    });
    if (reino === null) {
      res.status(404).json({ error: 'El reino no existe.' });
    } else {
      res.json(reino);
    }
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al obtener el reino.' });
  }
}

const updateReinos = async (req, res) => {
  const { id } = req.params;
  const { nombre, ubicacion, superficie } = req.body;
  try {
    const updatedReino = await prisma.reinos.update({
      where: { id: Number(id) },
      data: { nombre, ubicacion, superficie },
    });
    res.json(updatedReino);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al actualizar el reino.' });
  }
}

const deleteReinos = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.reinos.delete({
      where: { id: Number(id) },
    });
    res.json({ message: 'El reino ha sido eliminado correctamente.' });
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al eliminar el reino.' });
  }
}

const ReinosController = {
  createReinos,
  getReinos,
  getReinosById,
  updateReinos,
  deleteReinos
}

export default ReinosController