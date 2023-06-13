import prisma from '../prismaClient.js'

const createDefensas = async (req, res) => {
  const { defensa } = req.body;
  try {
    const nuevaDefensa = await prisma.defensas.create({
      data: {
        defensa,
      },
    });
    res.json(nuevaDefensa);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al crear la defensa.' });
  }
};


const getDefensas = async (req, res) => {
  try {
    const defensas = await prisma.defensas.findMany({
      orderBy: { id: 'asc' }, // Ordenar por el campo "id" de forma ascendente
    });
    res.json(defensas);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al obtener las defensas.' });
  }
}

const getDefensasById = async (req, res) => {
  const { id } = req.params;
  try {
    const defensa = await prisma.defensas.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    res.json(defensa);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al obtener la defensa.' });
  }
};

const updateDefensas = async (req, res) => {
  const { id } = req.params;
  const { defensa } = req.body;
  try {
    const updatedDefensa = await prisma.defensas.update({
      where: {
        id: parseInt(id),
      },
      data: {
        defensa,
      },
    });
    res.json(updatedDefensa);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al actualizar la defensa.' });
  }
};

const deleteDefensas = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDefensa = await prisma.defensas.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.json(deletedDefensa);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al eliminar la defensa.' });
  }
};


const DefensasController = {
  createDefensas,
  getDefensas,
  getDefensasById,
  updateDefensas,
  deleteDefensas
}

export default DefensasController