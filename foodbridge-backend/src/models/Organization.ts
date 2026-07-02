import mongoose, { Document, Schema } from 'mongoose';

export type OrgType =
  | 'food_bank'
  | 'ngo'
  | 'community_kitchen'
  | 'orphanage'
  | 'old_age_home'
  | 'homeless_shelter'
  | 'disaster_relief'
  | 'government_welfare'
  | 'animal_shelter';

export interface IOrganization extends Document {
  name: string;
  type: OrgType;
  email: string;
  phone: string;
  location: {
    address: string;
    city: string;
    state: string;
    coordinates?: { lat: number; lng: number };
  };
  capacity: number;
  acceptedFoodTypes: string[];
  isVerified: boolean;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const OrganizationSchema = new Schema<IOrganization>(
  {
    name: { type: String, required: true, trim: true },
    type: {
      type: String,
      enum: [
        'food_bank', 'ngo', 'community_kitchen', 'orphanage', 'old_age_home',
        'homeless_shelter', 'disaster_relief', 'government_welfare', 'animal_shelter',
      ],
      required: true,
    },
    email: { type: String, required: true, unique: true, lowercase: true },
    phone: { type: String, required: true },
    location: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      coordinates: {
        lat: { type: Number },
        lng: { type: Number },
      },
    },
    capacity: { type: Number, default: 100 },
    acceptedFoodTypes: [{ type: String }],
    isVerified: { type: Boolean, default: false },
    description: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IOrganization>('Organization', OrganizationSchema);
