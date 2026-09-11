import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "standalone" is only for the Docker image (see Dockerfile); Vercel has
  // its own build/tracing pipeline and breaks when this is set.
  output: process.env.VERCEL ? undefined : "standalone",
};

export default withPayload(nextConfig);
