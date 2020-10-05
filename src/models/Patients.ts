import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('patients')
class Patients {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('integer')
    code: number;

    @Column()
    name: string;

    @Column('integer')
    age: number;

    @Column('datetime')
    register: Date;

    @Column()
    city: string;

    @Column()
    state: string;
};

export default Patients;