import prisma from '../prismaClient.js'

const createDiplomacia = async (req, res) => {
  const { id_reino_1, id_reino_2, es_aliado } = req.body;
  try {
    const diplomacia = await prisma.diplomacia.create({
      data: {
        reino1: { connect: { id: id_reino_1 } },
        reino2: { connect: { id: id_reino_2 } },
        es_aliado,
      },
    });
    res.json(diplomacia);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al crear la relación diplomática.' });
  }
}

const getDiplomacia = async (req, res) => {
  try {
    const diplomacias = await prisma.diplomacia.findMany({
      include: {
        reino1: true,
        reino2: true,
      },
    });
    res.json(diplomacias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error al obtener las relaciones diplomáticas.' });
  }
};

const getDiplomaciaById = async (req, res) => {
  const { id } = req.params;
  try {
    const diplomacia = await prisma.diplomacia.findUnique({
      where: { id: Number(id) },
    });
    if (diplomacia === null) {
      res.status(404).json({ error: 'La relación diplomática no existe.' });
    } else {
      res.json(diplomacia);
    }
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al obtener la relación diplomática.' });
  }
}

const updateDiplomacia = async (req, res) => {
  const { id } = req.params;
  const { es_aliado } = req.body;
  try {
    const updatedDiplomacia = await prisma.diplomacia.update({
      where: { id: Number(id) },
      data: { es_aliado },
    });
    res.json(updatedDiplomacia);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al actualizar la relación diplomática.' });
  }
}

const deleteDiplomacia = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.diplomacia.delete({
      where: { id: Number(id) },
    });
    res.json({ message: 'La relación diplomática ha sido eliminada correctamente.' });
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al eliminar la relación diplomática.' });
  }
}

const DiplomaciaController = {
  createDiplomacia,
  getDiplomacia,
  getDiplomaciaById,
  updateDiplomacia,
  deleteDiplomacia
}

export default DiplomaciaController