export default function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { password } = req.body;
    
    // Get password from environment variable (no REACT_APP_ prefix)
    const correctPassword = process.env.PASSWORD;
    
    if (!correctPassword) {
      console.error('PASSWORD environment variable not set');
      return res.status(500).json({ success: false, message: 'Server configuration error' });
    }
    
    // Validate password
    if (password === correctPassword) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false });
    }
  } catch (error) {
    console.error('Password validation error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
} 