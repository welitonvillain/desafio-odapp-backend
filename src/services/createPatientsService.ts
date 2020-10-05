import { getCustomRepository } from 'typeorm';

import Patients from '../models/Patients'
import PatientsRepository from '../repositories/patientsRepository';

interface Request {
    code: number;
    name: string;
    age: number;
    register: Date;
    city: string;
    state: string;
}

class CreatePatientsService {
    public async execute ({ 
        code, 
        name, 
        age, 
        register, 
        city, 
        state, 
    }: Request) : Promise<Patients> {
        const patientsRepository = getCustomRepository(PatientsRepository);

        const patientExists = await patientsRepository.findOne({
            where: { code },
        });

        if (patientExists) {
            throw new Error('Código de usuário já utilizado.');
        }

        const patients = patientsRepository.create({
            code, 
            name, 
            age, 
            register, 
            city, 
            state,
        });

        await patientsRepository.save(patients);

        return patients;
    }
}

export default CreatePatientsService;