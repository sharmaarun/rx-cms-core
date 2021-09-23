import { IEntity } from "interfaces/model";

export enum TAPI_ANNOTATIONS {
  READ_ONLY = "read-only",
  PRIVATE = "private"
}

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
  annotations?: TAPI_ANNOTATIONS[];
  noDefaultHandlers?: boolean;
}

/**
 * CORS policy for endpoint
 */
export interface IEndpointCORS {
  origin?: string[]
  maxAge?: number
  headers?: string[]
  additionalHeaders?: string[];
  exposedHeaders?: string[];
  additionalExposedHeaders?: string[];
  credentials?: boolean
}

/**
 * File/Payload upload configuration
 */
export interface IEndpointPayloadOpts {
  output: "data" | "stream" | "file",
  allow: string
  parse?:boolean;
  multipart?:boolean;
  maxBytes?:number;
}

/**
 * Endpoint's configuration
 */
export interface IEndpointConfig {
  auth?: any;
  cors?: IEndpointCORS;
  payload?: IEndpointPayloadOpts
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
  annotations?: TAPI_ANNOTATIONS[]
}
