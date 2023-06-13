import prisma from '../prismaClient.js'

const createPersonajeTieneTrabajo = async (req, res) => {
  const { id_trabajo, id_personaje, fecha_inicio, fecha_termino } = req.body;
  const fecha_Inicio = new Date(fecha_inicio);
  const fecha_Termino = fecha_termino ? new Date(fecha_termino) : null; // Si no se proporciona fecha_termino, asignar null

  try {
    const personajeTieneTrabajo = await prisma.personaje_tiene_trabajo.create({
      data: {
        trabajo: { connect: { id: id_trabajo } },
        personaje: { connect: { id: id_personaje } },
        fecha_inicio: fecha_Inicio,
        fecha_termino: fecha_Termino,
      },
    });
    res.json(personajeTieneTrabajo);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al crear el registro.' });
  }
}

const getPersonajeTieneTrabajo = async (req, res) => {
  try {
    const personajesTieneTrabajo = await prisma.personaje_tiene_trabajo.findMany({
      orderBy: { id_personaje: 'desc' }, // Ordenar por el campo "id_personaje" de forma descendente
    });
    res.json(personajesTieneTrabajo);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al obtener los registros.' });
  }
}

const getPersonajeTieneTrabajoById = async (req, res) => {
  const { id } = req.params;
  try {
    const personajeTieneTrabajo = await prisma.personaje_tiene_trabajo.findUnique({
      where: { id },
    });
    res.json(personajeTieneTrabajo);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al obtener el registro.' });
  }
}

const updatePersonajeTieneTrabajo = async (req, res) => {
  const { id } = req.params;
  const { fecha_inicio, fecha_termino } = req.body;
  try {
    const updatedPersonajeTieneTrabajo = await prisma.personaje_tiene_trabajo.update({
      where: { id },
      data: {
        fecha_inicio,
        fecha_termino,
      },
    });
    res.json(updatedPersonajeTieneTrabajo);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al actualizar el registro.' });
  }
}

const deletePersonajeTieneTrabajo = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.personaje_tiene_trabajo.delete({
      where: { id },
    });
    res.json({ message: 'Registro eliminado correctamente.' });
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al eliminar el registro.' });
  }
}

const PersonajeTieneTrabajoController = {
  createPersonajeTieneTrabajo,
  getPersonajeTieneTrabajo,
  getPersonajeTieneTrabajoById,
  updatePersonajeTieneTrabajo,
  deletePersonajeTieneTrabajo
}

export default PersonajeTieneTrabajoController