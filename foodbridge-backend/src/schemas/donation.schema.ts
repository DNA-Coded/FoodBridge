import { z } from 'zod';

export const createDonationSchema = z.object({
  body: z.object({
    donorId: z.string({ message: 'Donor ID is required' }),
    items: z.array(z.object({
      name: z.string(),
      category: z.string(),
      quantity: z.string(),
      weight: z.number().optional()
    })).min(1, 'At least one item is required'),
    pickupWindow: z.string({ message: 'Pickup window is required' })
  })
});
