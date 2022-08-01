import { Provider } from '@nestjs/common';
import { getDataSourceToken, getRepositoryToken } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { DataSource, Repository } from 'typeorm';

type EntityRepository = Repository<any>;

export const dataSourceProvider = (
  entity: EntityClassOrSchema,
  methods: Partial<EntityRepository>,
): Provider<EntityRepository> => ({
  inject: [getDataSourceToken()],
  provide: getRepositoryToken(entity),
  useFactory: (dataSource: DataSource) => {
    return dataSource.getRepository(entity).extend(methods);
  },
});
