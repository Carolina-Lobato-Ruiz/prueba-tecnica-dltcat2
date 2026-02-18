import { DataSource, DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";


export const DataSourceConfig: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: '1234',
    database: 'postgresqlPruebaTecnica',
    entities: [__dirname + '/../**/**/*.entity{.ts, .js}'],
    //migrations: [],
    synchronize: false,
    migrationsRun: true,
    logging: false,
    namingStrategy: new SnakeNamingStrategy(),
};

export const AppDS = new DataSource(DataSourceConfig);