import Organization from '../models/Organization';

export const getAllOrganizations = async () => {
  return await Organization.find({ isVerified: true }).sort({ name: 1 });
};

export const getOrganizationById = async (id: string) => {
  return await Organization.findById(id);
};

export const getNearbyOrganizations = async (city: string) => {
  return await Organization.find({ 'location.city': city, isVerified: true });
};
