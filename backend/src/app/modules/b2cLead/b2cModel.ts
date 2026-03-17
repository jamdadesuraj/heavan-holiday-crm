import mongoose, { Schema, Document } from 'mongoose';
import { IB2C } from './b2cInterface';

// Extend IB2C with Document to get Mongoose methods (save, _id, etc.)
export interface IB2CDocument extends IB2C, Document {}

const B2CSchema = new Schema<IB2CDocument>({
  email: { type: String, required: true },
  phone: { type: String, required: true },
  salutation: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  leadSource: { type: String, required: true },
  leadStage: { type: String, required: true },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const B2C = mongoose.model<IB2CDocument>('B2C', B2CSchema);
