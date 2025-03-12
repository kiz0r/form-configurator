import { FIELD_TYPES } from '../model';

export type IFormConfigField = (typeof FIELD_TYPES)[keyof typeof FIELD_TYPES];
