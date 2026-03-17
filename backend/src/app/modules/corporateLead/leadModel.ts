import mongoose, { Schema, Document } from 'mongoose';

import { ICorporateLead } from './leadInterface';
export interface ICorporateLeadDocument extends ICorporateLead, Document {}

const CorporateLeadSchema = new Schema<ICorporateLeadDocument>(
  {
    company: { type: String, required: true },
    email: { type: String, required: true },
    salutation: {
      type: String,
      enum: ['Mr', 'Mrs', 'Ms', 'Dr', 'Prof'],
      required: true,
    },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    rm: {
      type: String,
      enum: ['abc', 'xyz'],
      required: true,
    },
    leadSource: {
      type: String,
      enum: ['abc', 'xyz'],
      required: true,
    },
    country: { type: String, required: true },
    city: { type: String, required: true },
    area: { type: String, required: true },
    pin: { type: Number, required: true },
    address: { type: String, required: true },
    remarks: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const CorporateLead = mongoose.model<ICorporateLeadDocument>(
  'CorporateLead',
  CorporateLeadSchema,
);
