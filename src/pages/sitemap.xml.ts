import { getCollection } from 'astro:content';

const siteUrl = 'https://shambalaholisticandretreatcentre.com';

const staticRoutes = [
  '/',
  '/about/',
  '/therapies/',
  '/therapies/holistic/',
  '/therapies/massage/',
  '/therapies/training/',
  '/retreats/',
  '/wellness-days/',
  '/sound-baths-yoga/',
  '/sound-baths/',
  '/yoga/',
  '/corporate-wellness/',
  '/self-catering/',
  '/getting-here/',
  '/benefits/',
  '/blog/',
  '/testimonials/',
  '/contact/'
];

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const toUrl = (path: string) => `${siteUrl}${path}`;

export async function GET() {
  const [blogPosts, retreats] = await Promise.all([
    getCollection('blog'),
    getCollection('retreats')
  ]);

  const blogRoutes = blogPosts.map((post) => `/blog/${post.id.replace(/\.md$/, '')}/`);
  const retreatRoutes = retreats.map((retreat) => `/retreats/${retreat.data.slug ?? retreat.id.replace(/\.md$/, '')}/`);
  const routes = [...staticRoutes, ...retreatRoutes, ...blogRoutes].sort();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${escapeXml(toUrl(route))}</loc>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
