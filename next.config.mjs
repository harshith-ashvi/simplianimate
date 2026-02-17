/** @type {import('next').NextConfig} */
const supabaseUrl = process.env.SUPABASE_ASSET_URL || "";
const supabaseDomain = supabaseUrl ? new URL(supabaseUrl).hostname : "";

const nextConfig = {
  images: {
    domains: supabaseDomain ? [supabaseDomain] : [],
  },
};

export default nextConfig;
