import { EntityRepository, Repository } from 'typeorm';

import Patients from '../models/Patients';

@EntityRepository(Patients)
class PatientsRepository extends Repository<Patients> { }

export default PatientsRepository;