import { ICountry } from './countries';
import { IGlobal } from './global';

export interface ICorona {
  Countries: ICountry;
  Global: IGlobal;
  Date: string;
}
