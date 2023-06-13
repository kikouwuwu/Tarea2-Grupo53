import prisma from '../prismaClient.js'

const createKarts = async (req, res) => {
  const { modelo, color, velocidad_maxima, id_personaje } = req.body;
  try {
    const kart = await prisma.karts.create({
      data: {
        modelo,
        color,
        velocidad_maxima,
        personaje: { connect: { id: id_personaje } },
      },
    });
    res.json(kart);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al crear el kart.' });
  }
}

const getKarts = async (req, res) => {
  try {
    const karts = await prisma.karts.findMany({
      orderBy: { id: 'asc' }, // Ordenar por el campo "id" de forma ascendente
    });
    res.json(karts);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al obtener los karts.' });
  }
}
const getKartsById = async (req, res) => {
  const { id } = req.params;
  try {
    const kart = await prisma.karts.findUnique({
      where: { id: Number(id) },
    });
    if (kart === null) {
      res.status(404).json({ error: 'El kart no existe.' });
    } else {
      res.json(kart);
    }
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al obtener el kart.' });
  }
};

const updateKarts = async (req, res) => {
  const { id } = req.params;
  const { modelo, color, velocidad_maxima } = req.body;
  try {
    const updatedKart = await prisma.karts.update({
      where: { id: Number(id) },
      data: { modelo, color, velocidad_maxima },
    });
    res.json(updatedKart);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al actualizar el kart.' });
  }
}

const deleteKarts = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.karts.delete({
      where: { id: Number(id) },
    });
    res.json({ message: 'El kart ha sido eliminado correctamente.' });
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al eliminar el kart.' });
  }
}

const KartsController = {
  createKarts,
  getKarts,
  getKartsById,
  updateKarts,
  deleteKarts
}

export default KartsController