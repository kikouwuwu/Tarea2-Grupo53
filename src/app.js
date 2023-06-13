import express from 'express';
import morgan from 'morgan';
import PersonajesController from './controllers/PersonajesController.js';
import TrabajosController from './controllers/TrabajosController.js';
import ReinoOcupaDefensaController from './controllers/ReinoOcupaDefensa.js';
import PersonajeTieneTrabajoController from './controllers/PersonajeTieneTrabajoController.js';
import DiplomaciaController from './controllers/DiplomaciaController.js';
import KartsController from './controllers/KartsController.js';
import PersonajeHabitaReinoController from './controllers/PersonajeHabitaReino.js';
import DefensasController from './controllers/DefensasController.js';
import ReinosController from './controllers/ReinosController.js';
import EPControllers from './controllers/EPControllers.js';


const ENV = process.env;
const app = express();
const route = express.Router();

//middleware
app.use(express.json());
app.use(morgan('dev'));
//config routes



//endpoints(Routes)
app.get('/api/personajes/top', EPControllers.getTop5Personajes);
app.get('/api/personajes/masKarts', EPControllers.getPersonajeConMasKarts);
app.get('/api/reinos/cantidadHabitantes/:idR', EPControllers.getCantidadHabitantesPorReino);
app.get('/api/gobernante', EPControllers.getGobernantes);
app.get('/api/gobernante/:id', EPControllers.getGobernantes);



app.get('/api/personajes', PersonajesController.getPersonajes)
app.get('/api/personajes/:id', PersonajesController.getPersonajesById)
app.post('/api/personajes', PersonajesController.createPersonajes)
app.put('/api/personajes/:id', PersonajesController.updatePersonajes)
app.delete('/api/personajes/:id', PersonajesController.deletePersonajes)

app.get('/api/trabajos', TrabajosController.getTrabajos)
app.get('/api/trabajos/:id', TrabajosController.getTrabajosById)
app.post('/api/trabajos', TrabajosController.createTrabajos)
app.put('/api/trabajos/:id', TrabajosController.updateTrabajos)
app.delete('/api/trabajos/:id', TrabajosController.deleteTrabajos)

app.get('/api/reino_ocupa_defensa', ReinoOcupaDefensaController.getReinoOcupaDefensa);
app.get('/api/reino_ocupa_defensa/:id_reino/:id_defensa', ReinoOcupaDefensaController.getReinoOcupaDefensaById);
app.post('/api/reino_ocupa_defensa', ReinoOcupaDefensaController.createReinoOcupaDefensa);
app.put('/api/reino_ocupa_defensa/:id_reino/:id_defensa', ReinoOcupaDefensaController.updateReinoOcupaDefensa);
app.delete('/api/reino_ocupa_defensa/:id_reino/:id_defensa', ReinoOcupaDefensaController.deleteReinoOcupaDefensa);

app.get('/api/personaje_tiene_trabajo', PersonajeTieneTrabajoController.getPersonajeTieneTrabajo)
app.get('/api/personaje_tiene_trabajo/:id', PersonajeTieneTrabajoController.getPersonajeTieneTrabajoById)
app.post('/api/personaje_tiene_trabajo', PersonajeTieneTrabajoController.createPersonajeTieneTrabajo)
app.put('/api/personaje_tiene_trabajo/:id', PersonajeTieneTrabajoController.updatePersonajeTieneTrabajo)
app.delete('/api/personaje_tiene_trabajo/:id', PersonajeTieneTrabajoController.deletePersonajeTieneTrabajo)

app.get('/api/diplomacia', DiplomaciaController.getDiplomacia)
app.get('/api/diplomacia/:id', DiplomaciaController.getDiplomaciaById)
app.post('/api/diplomacia', DiplomaciaController.createDiplomacia)
app.put('/api/diplomacia/:id', DiplomaciaController.updateDiplomacia)
app.delete('/api/diplomacia/:id', DiplomaciaController.deleteDiplomacia)

app.get('/api/karts', KartsController.getKarts)
app.get('/api/karts/:id', KartsController.getKartsById)
app.post('/api/karts', KartsController.createKarts)
app.put('/api/karts/:id', KartsController.updateKarts)
app.delete('/api/karts/:id', KartsController.deleteKarts)

app.get('/api/personaje_habita_reino', PersonajeHabitaReinoController.getPersonajeHabitaReino)
app.get('/api/personaje_habita_reino/:id_personaje/:id_reino', PersonajeHabitaReinoController.getPersonajeHabitaReinoById)
app.post('/api/personaje_habita_reino', PersonajeHabitaReinoController.createPersonajeHabitaReino)
app.put('/api/personaje_habita_reino/:id', PersonajeHabitaReinoController.updatePersonajeHabitaReino)
app.delete('/api/personaje_habita_reino/:id', PersonajeHabitaReinoController.deletePersonajeHabitaReino)

app.get('/api/defensas', DefensasController.getDefensas)
app.get('/api/defensas/:id', DefensasController.getDefensasById)
app.post('/api/defensas', DefensasController.createDefensas)
app.put('/api/defensas/:id', DefensasController.updateDefensas)
app.delete('/api/defensas/:id', DefensasController.deleteDefensas)

app.get('/api/reinos', ReinosController.getReinos)
app.get('/api/reinos/:id', ReinosController.getReinosById)
app.post('/api/reinos', ReinosController.createReinos)
app.put('/api/reinos/:id', ReinosController.updateReinos)
app.delete('/api/reinos/:id', ReinosController.deleteReinos)


//==========================================================//














//==========================================================//
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!!' });
})
//==========================================================//


// 404 not found route
app.use((_, res) => {
    res.status(404).json({ message: 'Not found Crack!' });
})


//Init server
app.listen(ENV.API_PORT, () => {
    console.log(`Server running on port ${ENV.API_PORT}`);
})