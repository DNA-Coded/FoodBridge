import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import User from '../models/User';
import Organization from '../models/Organization';
import Donation from '../models/Donation';
import Match from '../models/Match';
import Notification from '../models/Notification';

const seed = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI not set');

  await mongoose.connect(uri);
  console.log('Connected to MongoDB');

  // Clear existing data
  await Promise.all([
    User.deleteMany({}),
    Organization.deleteMany({}),
    Donation.deleteMany({}),
    Match.deleteMany({}),
    Notification.deleteMany({}),
  ]);
  console.log('Cleared existing data');

  // Seed Organizations
  const orgs = await Organization.insertMany([
    {
      name: 'Kolkata Food Bank',
      type: 'food_bank',
      email: 'info@kolkataFoodBank.org',
      phone: '+91 98300 11111',
      location: { address: '14A, Park Street', city: 'Kolkata', state: 'West Bengal', coordinates: { lat: 22.5726, lng: 88.3639 } },
      capacity: 500,
      acceptedFoodTypes: ['cooked_meals', 'grains', 'vegetables', 'dairy'],
      isVerified: true,
      description: 'Serving the city since 2010. We distribute meals to over 500 families daily.',
    },
    {
      name: 'City Harvest Foundation',
      type: 'ngo',
      email: 'contact@cityharvest.in',
      phone: '+91 98300 22222',
      location: { address: '22, Salt Lake Sector V', city: 'Kolkata', state: 'West Bengal', coordinates: { lat: 22.5697, lng: 88.4316 } },
      capacity: 300,
      acceptedFoodTypes: ['cooked_meals', 'baked_goods', 'fruits', 'vegetables'],
      isVerified: true,
      description: 'Connecting surplus food with those in need across urban Kolkata.',
    },
    {
      name: 'Shanti Community Kitchen',
      type: 'community_kitchen',
      email: 'shanti.kitchen@gmail.com',
      phone: '+91 98300 33333',
      location: { address: '7, Rabindra Sarani', city: 'Kolkata', state: 'West Bengal', coordinates: { lat: 22.5831, lng: 88.3694 } },
      capacity: 200,
      acceptedFoodTypes: ['cooked_meals', 'grains', 'lentils'],
      isVerified: true,
      description: 'A community-run kitchen providing free meals to daily wage workers.',
    },
    {
      name: 'Hope Orphanage',
      type: 'orphanage',
      email: 'hope.orphanage@kolkata.org',
      phone: '+91 98300 44444',
      location: { address: '3, Ballygunge Place', city: 'Kolkata', state: 'West Bengal', coordinates: { lat: 22.5228, lng: 88.3621 } },
      capacity: 80,
      acceptedFoodTypes: ['cooked_meals', 'baked_goods', 'dairy', 'fruits'],
      isVerified: true,
      description: 'Home to 80 children who rely on community support for nutritious meals.',
    },
    {
      name: 'Asha Homeless Shelter',
      type: 'homeless_shelter',
      email: 'asha.shelter@gmail.com',
      phone: '+91 98300 55555',
      location: { address: '9, Sealdah Station Rd', city: 'Kolkata', state: 'West Bengal', coordinates: { lat: 22.5636, lng: 88.3697 } },
      capacity: 150,
      acceptedFoodTypes: ['cooked_meals', 'packaged_food', 'grains'],
      isVerified: true,
      description: 'Providing shelter and meals to the homeless population near Sealdah.',
    },
  ]);
  console.log(`Seeded ${orgs.length} organizations`);

  // Seed Users
  const users = await User.insertMany([
    {
      name: 'Ananya Ghosh',
      email: 'ananya.donor@example.com',
      phone: '+91 98765 11111',
      role: 'donor',
      location: { address: '45 Park Street', city: 'Kolkata', state: 'West Bengal', coordinates: { lat: 22.5535, lng: 88.3503 } },
      isVerified: true,
    },
    {
      name: 'Rahul Sharma',
      email: 'rahul.donor@example.com',
      phone: '+91 98765 22222',
      role: 'donor',
      location: { address: '12 Camac Street', city: 'Kolkata', state: 'West Bengal', coordinates: { lat: 22.5475, lng: 88.3490 } },
      isVerified: true,
    },
    {
      name: 'Priya Das',
      email: 'priya.recipient@kolkataFoodBank.org',
      phone: '+91 98765 33333',
      role: 'recipient',
      organizationId: orgs[0]._id,
      isVerified: true,
    },
    {
      name: 'Admin User',
      email: 'admin@foodbridge.ai',
      phone: '+91 98765 99999',
      role: 'admin',
      isVerified: true,
    },
  ]);
  console.log(`Seeded ${users.length} users`);

  // Seed Donations
  const donations = await Donation.insertMany([
    {
      donorId: users[0]._id,
      items: [
        { name: 'Biryani', category: 'cooked_meals', quantity: '20 kg', weight: 20, unit: 'kg' },
        { name: 'Raita', category: 'dairy', quantity: '5 litres', weight: 5, unit: 'litre' },
      ],
      description: 'Leftover from a wedding reception. Freshly cooked this morning.',
      status: 'matched',
      pickupWindow: 'Today, 2:00 PM – 5:00 PM',
      expiresAt: new Date(Date.now() + 4 * 60 * 60 * 1000),
      location: { address: '45 Park Street', city: 'Kolkata', state: 'West Bengal', coordinates: { lat: 22.5535, lng: 88.3503 } },
      aiAnalysis: {
        summary: 'Large quantity of freshly cooked biryani from a wedding event. High urgency due to cooked nature. Suitable for community meals.',
        urgencyLevel: 'high',
        estimatedServings: 80,
        recommendedCategories: ['food_bank', 'community_kitchen', 'homeless_shelter'],
        analysedAt: new Date(),
      },
    },
    {
      donorId: users[1]._id,
      items: [
        { name: 'Assorted Pastries', category: 'baked_goods', quantity: '50 pieces', weight: 5, unit: 'kg' },
        { name: 'Bread Loaves', category: 'baked_goods', quantity: '10 loaves', weight: 4, unit: 'kg' },
      ],
      description: 'End-of-day surplus from our bakery. Best consumed by tomorrow morning.',
      status: 'pending',
      pickupWindow: 'Today, 7:00 PM – 9:00 PM',
      expiresAt: new Date(Date.now() + 12 * 60 * 60 * 1000),
      location: { address: '12 Camac Street', city: 'Kolkata', state: 'West Bengal', coordinates: { lat: 22.5475, lng: 88.3490 } },
    },
    {
      donorId: users[0]._id,
      items: [
        { name: 'Dal Makhani', category: 'cooked_meals', quantity: '15 kg', weight: 15, unit: 'kg' },
        { name: 'Steamed Rice', category: 'cooked_meals', quantity: '10 kg', weight: 10, unit: 'kg' },
        { name: 'Mixed Sabzi', category: 'cooked_meals', quantity: '8 kg', weight: 8, unit: 'kg' },
      ],
      description: 'Corporate cafeteria surplus from lunch service.',
      status: 'completed',
      pickupWindow: 'Yesterday, 3:00 PM – 5:00 PM',
      expiresAt: new Date(Date.now() - 12 * 60 * 60 * 1000),
      location: { address: '45 Park Street', city: 'Kolkata', state: 'West Bengal' },
      aiAnalysis: {
        summary: 'High-quality cafeteria surplus with balanced nutrition. Immediate redistribution recommended.',
        urgencyLevel: 'medium',
        estimatedServings: 110,
        recommendedCategories: ['food_bank', 'homeless_shelter'],
        analysedAt: new Date(Date.now() - 13 * 60 * 60 * 1000),
      },
    },
  ]);
  console.log(`Seeded ${donations.length} donations`);

  // Seed Matches
  const matches = await Match.insertMany([
    {
      donationId: donations[0]._id,
      organizationId: orgs[0]._id,
      status: 'accepted',
      aiScore: 92,
      aiExplanation: 'Kolkata Food Bank has the highest capacity and accepts cooked meals. Distance is within 3km from donor. This is the best match for the high-urgency biryani donation.',
      distanceKm: 2.8,
      proposedAt: new Date(Date.now() - 60 * 60 * 1000),
      respondedAt: new Date(Date.now() - 30 * 60 * 1000),
    },
    {
      donationId: donations[0]._id,
      organizationId: orgs[2]._id,
      status: 'proposed',
      aiScore: 78,
      aiExplanation: 'Shanti Community Kitchen accepts cooked meals and has moderate capacity. Secondary recommendation.',
      distanceKm: 4.1,
      proposedAt: new Date(Date.now() - 60 * 60 * 1000),
    },
  ]);
  console.log(`Seeded ${matches.length} matches`);

  // Seed Notifications
  await Notification.insertMany([
    {
      userId: users[0]._id,
      type: 'match_accepted',
      title: 'Match Accepted!',
      message: 'Kolkata Food Bank has accepted your donation of Biryani and will arrange pickup by 5:00 PM today.',
      isRead: false,
      relatedDonationId: donations[0]._id,
    },
    {
      userId: users[2]._id,
      type: 'match_proposed',
      title: 'New Donation Available',
      message: 'A donation of 20kg Biryani is available near Park Street. Review and accept to confirm pickup.',
      isRead: true,
      relatedDonationId: donations[0]._id,
    },
  ]);
  console.log('Seeded notifications');

  console.log('\n✅ Database seeded successfully!');
  console.log(`   Organizations: ${orgs.length}`);
  console.log(`   Users: ${users.length}`);
  console.log(`   Donations: ${donations.length}`);
  console.log(`   Matches: ${matches.length}`);
  await mongoose.disconnect();
  process.exit(0);
};

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
