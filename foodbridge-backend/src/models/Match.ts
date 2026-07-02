import mongoose, { Document, Schema } from 'mongoose';

export type MatchStatus = 'proposed' | 'accepted' | 'rejected' | 'expired';

export interface IMatch extends Document {
  donationId: mongoose.Types.ObjectId;
  organizationId: mongoose.Types.ObjectId;
  status: MatchStatus;
  aiScore: number;
  aiExplanation: string;
  distanceKm?: number;
  proposedAt: Date;
  respondedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const MatchSchema = new Schema<IMatch>(
  {
    donationId: { type: Schema.Types.ObjectId, ref: 'Donation', required: true },
    organizationId: { type: Schema.Types.ObjectId, ref: 'Organization', required: true },
    status: {
      type: String,
      enum: ['proposed', 'accepted', 'rejected', 'expired'],
      default: 'proposed',
    },
    aiScore: { type: Number, required: true, min: 0, max: 100 },
    aiExplanation: { type: String, required: true },
    distanceKm: { type: Number },
    proposedAt: { type: Date, default: Date.now },
    respondedAt: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model<IMatch>('Match', MatchSchema);
