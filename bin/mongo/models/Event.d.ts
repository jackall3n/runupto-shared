import { Document } from 'mongoose';
interface IEvent extends Document {
    description: string;
}
export declare const Event: import("mongoose").Model<IEvent, {}>;
export {};
