import prisma from '../prismaClient.js'

const createReinoOcupaDefensa = async (req, res) => {
  const { id_reino, id_defensa } = req.body;
  try {
    const reinoOcupaDefensa = await prisma.reino_ocupa_defensa.create({
      data: {
        reino: { connect: { id: id_reino } },
        defensa: { connect: { id: id_defensa } },
      },
    });
    res.json(reinoOcupaDefensa);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al crear la relación.' });
  }
}




const getReinoOcupaDefensa = async (req, res) => {
  const { id_reino, id_defensa } = req.params;
  try {
    const reinoOcupaDefensa = await prisma.reino_ocupa_defensa.findUnique({
      where: {
        id_reino_id_defensa: {
          id_reino: parseInt(id_reino),
          id_defensa: parseInt(id_defensa),
        },
      },
    });
    res.json(reinoOcupaDefensa);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al obtener la relación.' });
  }
}

const getReinoOcupaDefensaById = async (req, res) => {
  const { id_reino, id_defensa } = req.params;
  try {
    const reinoOcupaDefensa = await prisma.reino_ocupa_defensa.findUnique({
      where: {
        id_defensa_id_reino: {
          id_reino: parseInt(id_reino),
          id_defensa: parseInt(id_defensa),
        },
      },
    });
    res.json(reinoOcupaDefensa);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al obtener la relación.' });
  }
}

const updateReinoOcupaDefensa = async (req, res) => {
  const { id_reino, id_defensa } = req.params;
  const { nuevoCampo } = req.body;
  try {
    const updatedReinoOcupaDefensa = await prisma.reino_ocupa_defensa.update({
      where: {
        id_reino_id_defensa: {
          id_reino: parseInt(id_reino),
          id_defensa: parseInt(id_defensa),
        },
      },
      data: {
        nuevoCampo,
      },
    });
    res.json(updatedReinoOcupaDefensa);
  } catch (error) {
    res
    .status(500)
    .json({ error: 'Ocurrió un error al actualizar la relación.' });
  }
};

const deleteReinoOcupaDefensa = async (req, res) => {
  const { id_reino, id_defensa } = req.params;
  try {
    const deletedReinoOcupaDefensa = await prisma.reino_ocupa_defensa.delete({
      where: {
        id_reino_id_defensa: {
          id_reino: parseInt(id_reino),
          id_defensa: parseInt(id_defensa),
        },
      },
    });
    res.json(deletedReinoOcupaDefensa);
  } catch (error) {
    res
    .status(500)
    .json({ error: 'Ocurrió un error al eliminar la relación.' });
  }
}

const ReinoOcupaDefensaController = {
  createReinoOcupaDefensa,
  getReinoOcupaDefensa,
  getReinoOcupaDefensaById,
  updateReinoOcupaDefensa,
  deleteReinoOcupaDefensa
}

export default ReinoOcupaDefensaController