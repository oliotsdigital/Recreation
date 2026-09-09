export default {
  async fetch(request, env) {
    // Directly serve static assets generated from Next.js export
    return env.ASSETS.fetch(request);
  },
};
