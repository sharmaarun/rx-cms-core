/**
 * Types of extensions
 */
export enum EXTENSION_TYPE {
  extension = "extension",
}

/**
 * Extension's meta information structure
 */
export interface IExtensionMeta {
  name: string;
  version: string;
  description?: string;
  type: EXTENSION_TYPE | string;
  author?: string;
  license?: string;
}
