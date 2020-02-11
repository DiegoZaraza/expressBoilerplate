import examplesRouter from './api/controllers/examples/router'
import inventoryRouter from './api/controllers/inventory/router'
import classificationRouter from './api/controllers/classification/router'
import productRouter from './api/controllers/product/router'

export default function routes(app) {
  app.use('/api/v1/examples',examplesRouter);
  app.use('/api/v1/inventory',inventoryRouter);
  app.use('/api/v1/classification',classificationRouter);
  app.use('/api/v1/product',productRouter);
};
