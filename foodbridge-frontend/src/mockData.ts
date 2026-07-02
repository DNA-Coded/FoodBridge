export interface Donor {
  id: string;
  name: string;
  location: string;
  type: string;
}

export interface Recipient {
  id: string;
  name: string;
  location: string;
  type: string;
}

export interface DonationItem {
  id: string;
  name: string;
  category: string;
  quantity: string;
  weight: number;
}

export interface Donation {
  id: string;
  donorId: string;
  recipientId?: string;
  status: 'Available' | 'Pending' | 'In Transit' | 'Completed' | 'Ready';
  items: DonationItem[];
  pickupWindow: string;
  createdAt: string;
  expiresAt: string;
  distance?: number;
}

export const mockDonors: Donor[] = [
  { id: 'd1', name: 'Whole Foods Market', location: 'Downtown', type: 'Supermarket' },
  { id: 'd2', name: 'Downtown Deli', location: 'City Center', type: 'Restaurant' },
  { id: 'd3', name: 'FreshMarket Downtown', location: '1200 Commerce St.', type: 'Supermarket' },
];

export const mockRecipients: Recipient[] = [
  { id: 'r1', name: 'Community Food Bank', location: '850 Hope Ave.', type: 'Food Bank' },
  { id: 'r2', name: 'City Harvest Foundation', location: 'Downtown District', type: 'Non-profit' },
];

export const mockDonations: Donation[] = [
  {
    id: 'don1',
    donorId: 'd1',
    recipientId: 'r1',
    status: 'Ready',
    items: [
      { id: 'i1', name: 'Dairy Surplus', category: 'Dairy', quantity: '5 crates', weight: 50 },
    ],
    pickupWindow: 'Today, 2:00 PM - 4:00 PM',
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
    distance: 2.4,
  },
  {
    id: 'don2',
    donorId: 'd2',
    status: 'Pending',
    items: [
      { id: 'i2', name: 'Prepared Sandwiches', category: 'Prepared Food', quantity: '30 units', weight: 15 },
    ],
    pickupWindow: 'Today, 5:30 PM - 6:00 PM',
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 12 * 60 * 60 * 1000).toISOString(),
    distance: 4.1,
  },
  {
    id: 'don3',
    donorId: 'd3',
    recipientId: 'r1',
    status: 'In Transit',
    items: [
      { id: 'i3', name: 'Produce - Mixed Veg', category: 'Produce', quantity: 'Bulk', weight: 100 },
      { id: 'i4', name: 'Dairy - Milk/Cheese', category: 'Dairy', quantity: 'Bulk', weight: 50 },
      { id: 'i5', name: 'Bakery - Bread', category: 'Bakery', quantity: 'Bulk', weight: 100 },
    ],
    pickupWindow: 'Today, 8:00 AM - 10:00 AM',
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    distance: 3.2,
  }
];

export const mockStats = {
  donor: {
    totalDonations: 142,
    activeListings: 3,
    foodRescued: 450,
  },
  recipient: {
    availableNearby: 1240,
    acceptedClaims: 45,
    mealsReceived: 12500,
  }
};
