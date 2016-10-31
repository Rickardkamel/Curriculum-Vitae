import { ITimestamp } from './timestamp.interface';

export interface IResume {
    id: number;
    section: string;
    timeStamps: ITimestamp[];
}
