import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DevStack } from '../lib/dev-stack';
import { ProductionStack } from '../lib/production-stack';

const app = new cdk.App();

const branch = app.node.tryGetContext('branch');

if (branch === 'dev') {
  new DevStack(app, 'TestingStack');
} else if (branch === 'production') {
  new ProductionStack(app, 'ProductionStack');
} else {
  throw new Error('Invalid branch specified');
}