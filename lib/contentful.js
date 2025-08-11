const SPACE = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

export async function fetchPropFirms() {
  if (!SPACE || !ACCESS_TOKEN) {
    console.warn('Contentful credentials are missing');
    return [];
  }

  const query = `
    {
      propFirmCollection {
        items {
          name
          promoText
          affiliateLink
        }
      }
    }
  `;

  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${SPACE}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  );

  if (!res.ok) {
    console.error('Failed to fetch from Contentful', res.statusText);
    return [];
  }

  const json = await res.json();
  return json?.data?.propFirmCollection?.items ?? [];
}
