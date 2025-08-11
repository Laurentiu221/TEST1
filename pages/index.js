import { fetchPropFirms } from '../lib/contentful';

export default function Home({ firms }) {
  return (
    <main>
      <h1>Promoții Prop Firms</h1>
      {firms.length === 0 && <p>Nicio promoție disponibilă.</p>}
      {firms.map((firm) => (
        <div key={firm.name} className="firm">
          <h2>{firm.name}</h2>
          <p>Promoție: {firm.promoText}</p>
          <a href={firm.affiliateLink} target="_blank" rel="noopener noreferrer">
            Vezi oferta &rarr;
          </a>
        </div>
      ))}
    </main>
  );
}

export async function getStaticProps() {
  const firms = await fetchPropFirms();
  return {
    props: { firms },
    revalidate: 60,
  };
}
