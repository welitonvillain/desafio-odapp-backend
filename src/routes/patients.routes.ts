import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import PatientsRepository from '../repositories/patientsRepository';
import PatientsService from '../services/createPatientsService';

const patientsRouter = Router();

patientsRouter.get('/', async (request, response) => {
    const patientsRepository = getCustomRepository(PatientsRepository);

    const patients = await patientsRepository.find();

    return response.json(patients);
});

patientsRouter.post('/', async (request, response) => {
    try {
        const { code, name, age, register, city, state } = request.body;

        const patientsService = new PatientsService();

        const patient = await patientsService.execute({
            code, 
            name, 
            age, 
            register, 
            city, 
            state,
        });

        return response.json(patient);
    } catch (e) {
        return response.status(400).json({ error: e.message });
    }
});

export default patientsRouter;