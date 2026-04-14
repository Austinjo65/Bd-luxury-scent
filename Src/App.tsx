import { createClient } from '@sanity/client';
import { useEffect, useState } from 'react';

// CONNECTING TO YOUR LUXURY DASHBOARD
const client = createClient({
  projectId: '2bua5qjw', 
  dataset: 'production',
  useCdn: true,
  apiVersion: '2026-04-15',
});

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // FEEDS YOUR LIVE SITE FROM SANITY
    client.fetch(`*[_type == "product"]{title, price, "imageUrl": image.asset->url}`)
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ backgroundColor: '#0a0a0a', color: 'white', minHeight: '100vh', padding: '20px', fontFamily: 'serif' }}>
      <header style={{ textAlign: 'center', paddingBottom: '40px', borderBottom: '1px solid #c5a059' }}>
        <h1 style={{ color: '#c5a059', fontSize: '2.5rem', letterSpacing: '2px' }}>BD LUXURY SCENTS</h1>
        <p style={{ color: '#888', fontStyle: 'italic' }}>Premium Fragrances for the Elite</p>
      </header>

      <main style={{ marginTop: '40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {products.length > 0 ? products.map((item, index) => (
            <div key={index} style={{ border: '1px solid #222', padding: '20px', textAlign: 'center', transition: '0.3s' }}>
              <img src={item.imageUrl} alt={item.title} style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '15px' }} />
              <h3 style={{ color: '#c5a059' }}>{item.title}</h3>
              <p style={{ fontSize: '1.2rem' }}>${item.price}</p>
              <button style={{ backgroundColor: '#c5a059', color: 'black', border: 'none', padding: '10px 20px', cursor: 'pointer', fontWeight: 'bold' }}>
                PURCHASE NOW
              </button>
            </div>
          )) : (
            <div style={{ textAlign: 'center', gridColumn: '1/-1', padding: '50px' }}>
              <p>Dashboard connected! Add your first scent in Sanity to see it here.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
