import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePatients1601839395887 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: 'patients',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: 'code',
                        type: 'integer',
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'age',
                        type: 'integer',
                        isNullable: false,
                    },
                    {
                        name: 'register',
                        type: 'datetime',
                        isNullable: false,
                    },
                    {
                        name: 'city',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'state',
                        type: 'varchar',
                        isNullable: false,
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('patients');
    }

}
