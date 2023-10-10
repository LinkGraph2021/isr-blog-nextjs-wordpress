if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Added for static export
<<<<<<< HEAD
=======

>>>>>>> 9d756866956a129f93ad230c95b2faa3579773d5
  images: {
    unoptimized: true, // Disabling the Image Optimization API
    domains: [
      process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
      '0.gravatar.com',
      '1.gravatar.com',
      '2.gravatar.com',
      'secure.gravatar.com',
    ],
  }
}

module.exports = nextConfig;
