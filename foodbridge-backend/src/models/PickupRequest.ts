import mongoose, { Document, Schema } from 'mongoose';

export type PickupStatus = 'scheduled' | 'in_transit' | 'completed' | 'failed';

export interface IPickupRequest extends Document {
  donationId: mongoose.Types.ObjectId;
  matchId: mongoose.Types.ObjectId;
  organizationId: mongoose.Types.ObjectId;
  donorId: mongoose.Types.ObjectId;
  status: PickupStatus;
  scheduledAt: Date;
  completedAt?: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const PickupRequestSchema = new Schema<IPickupRequest>(
  {
    donationId: { type: Schema.Types.ObjectId, ref: 'Donation', required: true },
    matchId: { type: Schema.Types.ObjectId, ref: 'Match', required: true },
    organizationId: { type: Schema.Types.ObjectId, ref: 'Organization', required: true },
    donorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    status: {
      type: String,
      enum: ['scheduled', 'in_transit', 'completed', 'failed'],
      default: 'scheduled',
    },
    scheduledAt: { type: Date, required: true },
    completedAt: { type: Date },
    notes: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IPickupRequest>('PickupRequest', PickupRequestSchema);
