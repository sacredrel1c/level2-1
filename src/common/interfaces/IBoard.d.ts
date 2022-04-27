import { IList } from './IList';

export interface IBoard {
  id: number;
  title: string;
  lists: IList[];
}
