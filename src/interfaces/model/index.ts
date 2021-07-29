/**
 * core validation types
 */
export enum TVALIDATION_TYPE {
  "REQUIRED" = "required",
  "RANGE" = "range",
  "REGEX" = "regex",
}

/**
 * Entity relation types
 */
export enum TENTITY_RELATION_TYPE {
  "ONE_TO_ONE" = "1:1",
  "ONE_TO_MANY" = "1:m",
  "MANY_TO_ONE" = "m:1",
  "MANY_TO_MANY" = "m:n",
  "HAS_ONE" = "1{1}",
  "HAS_MANY" = "1{m}",
}

/**
 * Structure of a logical entity schema
 */
export interface IEntity {
  title?: string;
  props: IEntityProp[];
}

/**
 * Schema properties
 */
export interface IEntityProp {
  name: string;
  title?: string;
  type: any;
  required?: boolean;
  private?: boolean;
  index?: boolean;
  unique?: boolean;
  primary?: boolean;
  ref?: string;
  enum?: string[];
  default?: any;
  validations?: TVALIDATION_TYPE[] | string[];
  min?: number;
  max?: number;
  regex?: string;
  relation?: TENTITY_RELATION_TYPE | string;
  foreignKey?: string;
  refPath?: string;
}
