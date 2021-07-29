import { IEntity } from "interfaces/model";
/**
 * Core api controller structure
 */
export interface IAPIController {
  name: string;
  handler?: any;
}

/**
 * Core api methods/verbs : get,post,put,delete
 */
export enum IAPIMethod {
  POST = "post",
  GET = "get",
  PUT = "put",
  DELETE = "delete",
}

/**
 * Core API structure interface
 */
export interface IAPI {
  name: string;
  title: string;
  rootPath?: string;
  config: IEndpoint[];
  service?: any;
  model?: IEntity;
}

/**
 * Endpoint's configuration
 */
export interface IEndpointConfig {
  auth?: any;
}

/**
 * Core endpoint configuration
 */
export interface IEndpoint {
  path: string;
  method: IAPIMethod | IAPIMethod[];
  controller: IAPIController;
  policies?: string[];
  config?: IEndpointConfig;
}
