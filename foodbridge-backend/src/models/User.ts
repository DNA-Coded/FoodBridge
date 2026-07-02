import mongoose, { Document, Schema } from 'mongoose';

export type UserRole = 'donor' | 'recipient' | 'admin';

export interface IUser extends Document {
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  location?: {
    address: string;
    city: string;
    state: string;
    coordinates?: { lat: number; lng: number };
  };
  organizationId?: mongoose.Types.ObjectId;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String },
    role: { type: String, enum: ['donor', 'recipient', 'admin'], required: true },
    location: {
      address: { type: String },
      city: { type: String },
      state: { type: String },
      coordinates: {
        lat: { type: Number },
        lng: { type: Number },
      },
    },
    organizationId: { type: Schema.Types.ObjectId, ref: 'Organization' },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>('User', UserSchema);
