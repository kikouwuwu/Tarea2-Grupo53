import prisma from '../prismaClient.js'

const getTop5Personajes = async (req, res) => {
  try {
    const topPersonajes = await prisma.personajes.findMany({
      take: 5, 
      orderBy: {
        fuerza: 'desc', 
      },
    });
    res.json(topPersonajes);
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al obtener el top de personajes.' });
  }
}

const getPersonajeConMasKarts = async (req, res) => {
  try {
    const personajeConMasKarts = await prisma.personajes.findFirst({
      orderBy: {
        karts: {
          _count: "desc",
        },
      },
      include: {
        karts: true,
      },
    });

    if (personajeConMasKarts) {
        // Si se encuentra el personaje, extraemos su nombre y la cantidad de karts.
      const { nombre, karts } = personajeConMasKarts;
      const cantidadKarts = karts.length;
        // Enviamos la respuesta con el nombre y la cantidad de karts.
      res.json({
        nombre,
        cantidadKarts,
      });
    } else {
    // Si no se encuentra ningún personaje, devolvemos un mensaje de error.

      res.status(404).json({ message: "No se encontró ningún personaje" });
    }
  } catch (error) {

    res.status(500).json({ error: "Error al obtener el personaje con más karts" });
  }
  };




const getCantidadHabitantesPorReino = async (req, res) => {
  try {
    const { idR} = req.params;
    
    const habitantes = await prisma.personaje_habita_reino.count({
      where: {
        id_reino: parseInt(idR)
      }
    });
    
    res.json({
      habitantes
    });
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al obtener la cantidad de habitantes.' });
  }
}


const getGobernantes = async (req, res) => {
  try {
    const { id } = req.params;
    
    let gobernantes;
    
    if (id) {
      gobernantes = await prisma.personaje_habita_reino.findMany({
        where: {
          id_reino: parseInt(id),
          es_gobernante: true
        },
        select: {
          personaje: {
            select: {
              nombre: true
            }
          }
        }
      });
    } else {
      gobernantes = await prisma.personaje_habita_reino.findMany({
        where: {
          es_gobernante: true
        },
        select: {
          personaje: {
            select: {
              nombre: true
            }
          }
        }
      });
    }
    
    if (!gobernantes || gobernantes.length === 0) {
      return res.status(404).json({ error: 'No se encontraron gobernantes.' });
    }
    
    const nombresGobernantes = gobernantes.map(gobernante => gobernante.personaje.nombre);
    
    res.json({
      nombresGobernantes
    });
  } catch (error) {
    res.status(500).json({ error: 'Ocurrió un error al obtener los gobernantes.' });
  }
}


const EPControllers = {
  getTop5Personajes,
  getPersonajeConMasKarts,
  getCantidadHabitantesPorReino,
  getGobernantes
  
}

export default EPControllers
