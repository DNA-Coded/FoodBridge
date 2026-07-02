import Donation from '../models/Donation';

export const getAllDonations = async () => {
  return await Donation.find().populate('donorId', 'name email').sort({ createdAt: -1 });
};

export const getDonationById = async (id: string) => {
  return await Donation.findById(id).populate('donorId', 'name email');
};

export const createDonation = async (data: any) => {
  const donation = new Donation({
    ...data,
    expiresAt: new Date(Date.now() + 6 * 60 * 60 * 1000), // expires in 6 hours by default
  });
  return await donation.save();
};

export const updateDonationStatus = async (id: string, status: string) => {
  return await Donation.findByIdAndUpdate(id, { status }, { new: true });
};

export const getDonationsByDonor = async (donorId: string) => {
  return await Donation.find({ donorId }).sort({ createdAt: -1 });
};
