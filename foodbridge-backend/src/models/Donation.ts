import mongoose, { Document, Schema } from 'mongoose';

export type DonationStatus = 'pending' | 'ai_analysis' | 'matched' | 'accepted' | 'pickup_scheduled' | 'completed' | 'expired' | 'cancelled';

export interface IDonationItem {
  name: string;
  category: string;
  quantity: string;
  weight?: number;
  unit?: string;
}

export interface IDonation extends Document {
  donorId: mongoose.Types.ObjectId;
  items: IDonationItem[];
  description?: string;
  imageUrl?: string;
  status: DonationStatus;
  pickupWindow: string;
  expiresAt: Date;
  location?: {
    address: string;
    city: string;
    state: string;
    coordinates?: { lat: number; lng: number };
  };
  aiAnalysis?: {
    summary: string;
    urgencyLevel: 'low' | 'medium' | 'high' | 'critical';
    estimatedServings?: number;
    recommendedCategories: string[];
    analysedAt: Date;
  };
  createdAt: Date;
  updatedAt: Date;
}

const DonationSchema = new Schema<IDonation>(
  {
    donorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
      {
        name: { type: String, required: true },
        category: { type: String, required: true },
        quantity: { type: String, required: true },
        weight: { type: Number },
        unit: { type: String, default: 'kg' },
      },
    ],
    description: { type: String },
    imageUrl: { type: String },
    status: {
      type: String,
      enum: ['pending', 'ai_analysis', 'matched', 'accepted', 'pickup_scheduled', 'completed', 'expired', 'cancelled'],
      default: 'pending',
    },
    pickupWindow: { type: String, required: true },
    expiresAt: { type: Date, required: true },
    location: {
      address: { type: String },
      city: { type: String },
      state: { type: String },
      coordinates: {
        lat: { type: Number },
        lng: { type: Number },
      },
    },
    aiAnalysis: {
      summary: { type: String },
      urgencyLevel: { type: String, enum: ['low', 'medium', 'high', 'critical'] },
      estimatedServings: { type: Number },
      recommendedCategories: [{ type: String }],
      analysedAt: { type: Date },
    },
  },
  { timestamps: true }
);

export default mongoose.model<IDonation>('Donation', DonationSchema);
