import { clerkClient } from '@clerk/nextjs/server'
import { NextApiRequest, NextApiResponse } from 'next'

function handleOptions(res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Methods', 'PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.status(200).end();
}

async function handlePut(req: NextApiRequest, res: NextApiResponse) {
  const { stripe, userId } = req.body

  try {
    // Retrieve the current user metadata
    const user = await clerkClient.users.getUser(userId)
    const currentPrivateMetadata = user.privateMetadata || {}

    // Update user metadata
    await clerkClient.users.updateUserMetadata(userId, {
      privateMetadata: {
        ...currentPrivateMetadata, // Spread existing metadata
        ...stripe, // Add stripe metadata
      },
    })

    res.status(200).json({ success: true })
  } catch (error) {
    // Handle errors
    console.error('Error updating user metadata:', error)
    res.status(500).json({ success: false, error: 'Failed to update metadata' })
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
      switch (req.method) {
          case 'OPTIONS':
              return handleOptions(res);
          case 'PUT':
              return await handlePut(req, res);
          default:
              return res.status(405).json({ message: 'Method not allowed' });
      }
  } catch (error) {
      console.error('Unexpected error in API handler:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
}
