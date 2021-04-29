/**
 * Structure of a logical entity schema
 */
export interface IEntity {
  name: string;
  title?: string;
  props: IEntityProp[];
}

/**
 * Schema properties
 */
 export interface IEntityProp {
    name: string;
    type: "id" | "string" | "number" | "email" | "password" | "richtext";
  }
  