// 3p
import { Permission } from '@foal/typeorm';
import { createConnection, getConnection, getManager } from 'typeorm';

export const schema = {
  additionalProperties: false,
  properties: {
    codeName: { type: 'string', maxLength: 100 },
    name: { type: 'string' },
  },
  required: [ 'name', 'codeName' ],
  type: 'object',
};

export async function main(args: any) {
  const permission = new Permission();
  permission.codeName = args.codeName;
  permission.name = args.name;

  await createConnection({
    database: './e2e_db.sqlite',
    entities: [ Permission ],
    type: 'sqlite',
  });

  try {
    console.log(
      await getManager().save(permission)
    );
  } catch (error) {
    console.log(error.message);
  } finally {
    await getConnection().close();
  }
}
