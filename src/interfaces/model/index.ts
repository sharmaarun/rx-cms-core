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
}

export type TVALIDATION_TYPE = "required" | "range" | "regex";
