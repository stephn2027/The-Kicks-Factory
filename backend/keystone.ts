import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { ProductImage } from './schemas/ProductImage';
import { Product } from './schemas/Product';
import { User } from './schemas/User';
import 'dotenv/config';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-kicks-factory';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    //TODO: add in initial roles here
  },
});

export default withAuth(
  config({
    // @ts-ignore
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      // add seeding here
    },
    lists: createSchema({
      // schema items here
      User,
      Product,
      ProductImage,
    }),
    ui: {
      // Show the UI only for people who pass this test
      isAccessAllowed: ({ session }) => {
        return !!session?.data;
      },
    },

    session: withItemData(statelessSessions(sessionConfig), {
      User: 'id',
    }),
  })
);
