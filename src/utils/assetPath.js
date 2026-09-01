// Helper to resolve public assets correctly in all deployment environments (Localhost, Vercel, GitHub Pages)
export const getAssetUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  // Strip leading slash
  const cleanPath = path.replace(/^\//, '');
  const base = import.meta.env.BASE_URL || './';
  // Ensure base ends with a slash if not ending with one
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
};
