import mongoose, { Document, Schema } from 'mongoose';

export type NotificationType = 'match_proposed' | 'match_accepted' | 'pickup_scheduled' | 'donation_completed' | 'system';

export interface INotification extends Document {
  userId: mongoose.Types.ObjectId;
  type: NotificationType;
  title: string;
  message: string;
  isRead: boolean;
  relatedDonationId?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const NotificationSchema = new Schema<INotification>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: {
      type: String,
      enum: ['match_proposed', 'match_accepted', 'pickup_scheduled', 'donation_completed', 'system'],
      required: true,
    },
    title: { type: String, required: true },
    message: { type: String, required: true },
    isRead: { type: Boolean, default: false },
    relatedDonationId: { type: Schema.Types.ObjectId, ref: 'Donation' },
  },
  { timestamps: true }
);

export default mongoose.model<INotification>('Notification', NotificationSchema);
