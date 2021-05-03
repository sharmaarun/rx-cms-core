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
  config: IEndpointConfig[];
  services?: any;
  model?: IEntity;
}

/**
 * Core endpoint configuration
 */
export interface IEndpointConfig {
  path: string;
  method: IAPIMethod;
  controller: IAPIController;
  policies?: string[];
}
