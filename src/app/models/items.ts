export enum ItemType {
  Job = 'job',
  Story = 'story',
  Comment = 'comment',
  Poll = 'poll',
  Pollopt = 'pollopt'
}

export interface Item {
  id?: number;
  deleted?: boolean;
  type?: ItemType;
  by?: string;
  time?: Date;
  text?: string;
  dead?: boolean;
  kids?: number[];
  url?: string;
  score?: number;
  title?: string;
  descendants?: number;

}
