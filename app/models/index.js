// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Page } = initSchema(schema);

export {
  Page
};