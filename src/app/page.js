import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Hero />

      {/* Placeholder for verify/next steps - easy to inspect visually */}
      <section className="container section-padding">
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Core Competencies</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div style={{ padding: '30px', background: '#F5F5F5', borderRadius: '8px' }}>
            <h3>Pneumatic Compressors</h3>
            <p>High-efficiency air compressors for industrial applications.</p>
          </div>
          <div style={{ padding: '30px', background: '#F5F5F5', borderRadius: '8px' }}>
            <h3>Oxygen Plants</h3>
            <p>Reliable oxygen generation plants for medical and industrial use.</p>
          </div>
          <div style={{ padding: '30px', background: '#F5F5F5', borderRadius: '8px' }}>
            <h3>Service & Spares</h3>
            <p>Genuine parts and 24/7 support to keep your operations running.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
