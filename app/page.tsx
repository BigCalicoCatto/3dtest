'use client';

import { useState } from 'react';

export default function Portfolio() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Color palette
  const colors = {
    orange: '#E74D1A',
    blue: '#4089BC',
    pink: '#F6B5D3',
    lime: '#C8D540',
    green: '#0D6B36',
  };

  const cloudClipPath = 'polygon(2% 0%, 8% 0%, 10% 1%, 15% 0%, 20% 0%, 22% 1%, 27% 0%, 32% 0%, 34% 2%, 39% 0%, 44% 0%, 48% 2%, 52% 0%, 56% 0%, 60% 2%, 64% 0%, 68% 0%, 70% 1%, 75% 0%, 80% 0%, 82% 1%, 87% 0%, 92% 0%, 98% 2%, 100% 5%, 100% 10%, 99% 12%, 100% 18%, 100% 24%, 99% 26%, 100% 32%, 100% 38%, 99% 42%, 100% 48%, 100% 52%, 99% 56%, 100% 62%, 100% 68%, 99% 72%, 100% 78%, 100% 82%, 99% 85%, 100% 90%, 100% 95%, 98% 98%, 92% 100%, 88% 99%, 82% 100%, 78% 100%, 76% 99%, 72% 100%, 68% 100%, 64% 98%, 60% 100%, 56% 100%, 52% 98%, 48% 100%, 44% 100%, 40% 98%, 36% 100%, 32% 100%, 30% 99%, 25% 100%, 20% 100%, 18% 99%, 13% 100%, 8% 100%, 2% 98%, 0% 95%, 0% 90%, 1% 85%, 0% 78%, 0% 72%, 1% 68%, 0% 62%, 0% 56%, 1% 52%, 0% 48%, 0% 42%, 1% 38%, 0% 32%, 0% 26%, 1% 18%, 0% 12%, 0% 10%, 2% 5%)';

  // Best Works data (original 3)
  const bestWorks = [
    {
      id: 1,
      emoji: '👗',
      title: 'GRWM - Festival Fit',
      niche: 'fashion',
      url: 'https://vt.tiktok.com/ZS5TMXHoT/',
    },
    {
      id: 2,
      emoji: '✨',
      title: 'Skincare Routine',
      niche: 'skincare',
      url: 'https://vt.tiktok.com/ZS5TM5mhb/',
    },
    {
      id: 3,
      emoji: '💄',
      title: 'Full Glam Tutorial',
      niche: 'beauty',
      url: 'https://vt.tiktok.com/ZS5TreCwh/',
    },
  ];

  // Content carousel data (8 each)
  const contentData = {
    fashion: Array(8).fill(null).map((_, i) => ({
      id: i + 1,
      emoji: '👗',
      title: `Fashion ${i + 1}`,
      niche: 'fashion',
      url: 'https://example.com/fashion' + (i + 1),
    })),
    skincare: Array(8).fill(null).map((_, i) => ({
      id: i + 1,
      emoji: '🧴',
      title: `Skincare ${i + 1}`,
      niche: 'skincare',
      url: 'https://example.com/skincare' + (i + 1),
    })),
    beauty: Array(8).fill(null).map((_, i) => ({
      id: i + 1,
      emoji: '💄',
      title: `Beauty ${i + 1}`,
      niche: 'beauty',
      url: 'https://example.com/beauty' + (i + 1),
    })),
  };

  // Pillars data
  const pillars = [
    {
      id: 1,
      title: 'Fashion',
      emoji: '👗',
      points: ['Get Ready With Me', 'Styling Guides', 'Lifestyle', 'Expressive combining lifestyle and storytelling'],
      tagline: 'if it sparks joy, it\'s valid',
      layout: 'left' as const,
    },
    {
      id: 2,
      title: 'Skin Care',
      emoji: '🧴',
      points: ['Close up shot UGC POV', 'Snappy USP short reels', 'Honest experience sharing', 'Highlighting USP', 'Aesthetic mini documentary with voiceover', 'Skincare routine'],
      tagline: 'Skincare is hard science…but let\'s make it easy with ME!',
      layout: 'right' as const,
    },
    {
      id: 3,
      title: 'Beauty',
      emoji: '💄',
      points: ['GRWM', 'Close up product moment', 'Voiceover storytelling over makeup application', 'Themed looks', 'Full glam looks'],
      tagline: 'more glitter, less gatekeeping',
      layout: 'left' as const,
    },
  ];

  // Cloud button component
  const CloudButton = ({ href, bgColor, textColor, children }: any) => (
    <a
      href={href}
      style={{
        padding: '12px 24px',
        background: bgColor,
        color: textColor,
        textDecoration: 'none',
        fontSize: '14px',
        fontWeight: 'bold',
        boxShadow: `0 8px 15px rgba(0, 0, 0, 0.2)`,
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        display: 'inline-block',
        clipPath: cloudClipPath,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {children}
    </a>
  );

  // Horizontal Scroll Carousel Component
  const HorizontalCarousel = ({ data }: any) => (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        overflowX: 'auto',
        paddingBottom: '10px',
        scrollBehavior: 'smooth',
      }}
    >
      {data.map((work: any) => (
        <a
          key={work.id}
          href={work.url}
          style={{
            flex: '0 0 220px',
            cursor: 'pointer',
            textDecoration: 'none',
          }}
          onMouseEnter={() => setHoveredCard(work.title)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div
            style={{
              background: colors.orange,
              width: '100%',
              aspectRatio: '4 / 5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '70px',
              boxShadow: hoveredCard === work.title
                ? `0 20px 40px rgba(231, 77, 26, 0.5), 0 0 30px rgba(200, 213, 64, 0.4)`
                : `0 15px 30px rgba(231, 77, 26, 0.3), 0 0 20px rgba(200, 213, 64, 0.3)`,
              transform: hoveredCard === work.title ? 'scale(1.08)' : 'scale(1)',
              transition: 'all 0.3s ease',
              animation: hoveredCard !== work.title ? 'jiggle 2s ease-in-out infinite' : 'none',
              border: `3px solid ${colors.lime}`,
              clipPath: cloudClipPath,
            }}
          >
            {work.emoji}
          </div>
          <p
            style={{
              textAlign: 'center',
              marginTop: '12px',
              fontSize: '13px',
              fontWeight: 'bold',
              color: colors.lime,
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            {work.niche}
          </p>
          <p
            style={{
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: '600',
              color: colors.pink,
            }}
          >
            {work.title}
          </p>
        </a>
      ))}
    </div>
  );

  return (
    <div style={{ fontFamily: "'Quicksand', 'Segoe UI', sans-serif", overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;600;700&display=swap');
        .cabin-title {
          font-family: 'Cabin', sans-serif !important;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes jiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-2deg); }
          75% { transform: rotate(2deg); }
        }
      `}</style>

      {/* HERO SECTION */}
      <section
        style={{
          background: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.pink} 100%)`,
          padding: '60px 20px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: '20px', right: '30px', fontSize: '40px', opacity: 0.6, animation: 'spin 6s linear infinite' }}>✨</div>
        <div style={{ position: 'absolute', bottom: '30px', left: '20px', fontSize: '40px', opacity: 0.6, animation: 'spin 8s linear infinite reverse' }}>💕</div>

        <div
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: colors.blue,
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '60px',
            boxShadow: `0 10px 30px rgba(64, 137, 188, 0.4)`,
            border: `4px solid ${colors.lime}`,
            backgroundImage: 'url(https://i.imgur.com/kJTlgG8.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <h1 className="cabin-title" style={{ fontSize: '42px', fontWeight: 'bold', color: colors.blue, margin: '10px 0 5px', letterSpacing: '-1px' }}>
          Fazlina Yahya
        </h1>

        <p style={{ fontSize: '16px', color: colors.green, margin: '10px 0 30px', fontWeight: '500' }}>
          Content creator ✨ Fashion, Beauty & Skincare
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <CloudButton href="https://instagram.com/fazlina_yahya" bgColor={colors.green} textColor={colors.lime}>
              📸 Instagram
            </CloudButton>
            <CloudButton href="https://tiktok.com/@fazlina_yahya" bgColor={colors.blue} textColor={colors.pink}>
              🎵 TikTok
            </CloudButton>
          </div>

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <CloudButton href="https://www.flair.com.my/" bgColor={colors.pink} textColor={colors.green}>
              💖 Flair | Flair for Everywear
            </CloudButton>
            <CloudButton href="https://machino.co" bgColor={colors.lime} textColor={colors.green}>
              🔗 MACHINO | FAZLINA10 for RM10 off
            </CloudButton>
          </div>
        </div>
      </section>

      {/* COLORFUL DIVIDER 1 */}
      <div style={{ height: '8px', background: `linear-gradient(90deg, ${colors.orange}, ${colors.lime}, ${colors.pink}, ${colors.blue}, ${colors.green})` }} />

      {/* ABOUT ME SECTION */}
      <section style={{ background: colors.lime, padding: '50px 20px', textAlign: 'center' }}>
        <h2 className="cabin-title" style={{ fontSize: '32px', fontWeight: 'bold', color: colors.green, marginBottom: '25px' }}>
          About Me 💕
        </h2>

        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{ fontSize: '15px', lineHeight: '1.8', color: colors.green, marginBottom: '15px', fontWeight: '500' }}>
            I dress like my mood has a paintbrush—dopamine dressing is my love language: clashing colors, bold prints, and zero fashion rules. Wear what makes your soul vibrate!
          </p>
          <p style={{ fontSize: '15px', lineHeight: '1.8', color: colors.green, marginBottom: '15px', fontWeight: '500' }}>
            When it comes to skincare? I don't preach "must-dos." I share what works for my skin, my honest takes, and the products that earned a spot on my shelf. Your skin, your story—I'm just here to share mine.
          </p>
          <p style={{ fontSize: '15px', lineHeight: '1.8', color: colors.green, fontWeight: '500' }}>
            Beauty isn't one-size-fits-all. It's colorful, personal, and gloriously yours. ✨
          </p>
        </div>
      </section>

      {/* COLORFUL DIVIDER 2 */}
      <div style={{ height: '8px', background: `linear-gradient(90deg, ${colors.green}, ${colors.blue}, ${colors.pink}, ${colors.lime}, ${colors.orange})` }} />

      {/* BEST WORKS SECTION */}
      <section style={{ background: colors.blue, padding: '50px 20px' }}>
        <h2 className="cabin-title" style={{ fontSize: '32px', fontWeight: 'bold', color: colors.pink, marginBottom: '30px', textAlign: 'center' }}>
          Best Works 🔥
        </h2>

        <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '10px', scrollBehavior: 'smooth' }}>
          {bestWorks.map((work) => (
            <a
              key={work.id}
              href={work.url}
              style={{ flex: '0 0 220px', cursor: 'pointer', textDecoration: 'none' }}
              onMouseEnter={() => setHoveredCard(work.title)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                style={{
                  background: colors.orange,
                  width: '100%',
                  aspectRatio: '4 / 5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '70px',
                  boxShadow: hoveredCard === work.title
                    ? `0 20px 40px rgba(231, 77, 26, 0.5), 0 0 30px rgba(200, 213, 64, 0.4)`
                    : `0 15px 30px rgba(231, 77, 26, 0.3), 0 0 20px rgba(200, 213, 64, 0.3)`,
                  transform: hoveredCard === work.title ? 'scale(1.08)' : 'scale(1)',
                  transition: 'all 0.3s ease',
                  animation: hoveredCard !== work.title ? 'jiggle 2s ease-in-out infinite' : 'none',
                  border: `3px solid ${colors.lime}`,
                  clipPath: cloudClipPath,
                }}
              >
                {work.emoji}
              </div>
              <p style={{ textAlign: 'center', marginTop: '12px', fontSize: '13px', fontWeight: 'bold', color: colors.lime, textTransform: 'uppercase', letterSpacing: '1px' }}>
                {work.niche}
              </p>
              <p style={{ textAlign: 'center', fontSize: '14px', fontWeight: '600', color: colors.pink }}>
                {work.title}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* COLORFUL DIVIDER 3 */}
      <div style={{ height: '8px', background: `linear-gradient(90deg, ${colors.pink}, ${colors.orange}, ${colors.green}, ${colors.blue}, ${colors.lime})` }} />

      {/* STATS SECTION */}
      <section style={{ background: colors.pink, padding: '50px 20px', display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center' }}>
          <div className="cabin-title" style={{ fontSize: '48px', fontWeight: 'bold', color: colors.orange, marginBottom: '8px' }}>500+</div>
          <div style={{ fontSize: '14px', color: colors.green, fontWeight: 'bold' }}>Videos Produced ✨</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div className="cabin-title" style={{ fontSize: '48px', fontWeight: 'bold', color: colors.blue, marginBottom: '8px' }}>80+</div>
          <div style={{ fontSize: '14px', color: colors.green, fontWeight: 'bold' }}>Brand Collaborations 💕</div>
        </div>
      </section>

      {/* COLORFUL DIVIDER 4 */}
      <div style={{ height: '8px', background: `linear-gradient(90deg, ${colors.blue}, ${colors.lime}, ${colors.orange}, ${colors.pink}, ${colors.green})` }} />

      {/* CONTENT PILLARS SECTION */}
      <section style={{ background: colors.green, padding: '50px 20px' }}>
        <h2 className="cabin-title" style={{ fontSize: '32px', fontWeight: 'bold', color: colors.lime, marginBottom: '40px', textAlign: 'center' }}>
          Content Pillars 💫
        </h2>

        {pillars.map((pillar) => (
          <div
            key={pillar.id}
            style={{
              display: 'flex',
              flexDirection: pillar.layout === 'left' ? 'row' : 'row-reverse',
              alignItems: 'center',
              gap: '30px',
              marginBottom: '40px',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                flex: '0 0 120px',
                aspectRatio: '4 / 5',
                background: pillar.id === 1 ? colors.orange : pillar.id === 2 ? colors.pink : colors.blue,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '55px',
                boxShadow: `0 12px 25px rgba(0, 0, 0, 0.2)`,
                border: `3px solid ${colors.lime}`,
                clipPath: cloudClipPath,
                backgroundImage: pillar.id === 1 ? 'url(https://i.imgur.com/YmTY2Oc.jpeg)' : pillar.id === 2 ? 'url(https://i.imgur.com/88p54eM.jpeg)' : 'url(https://i.imgur.com/9453s3N.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            <div style={{ flex: '1', minWidth: '200px' }}>
              <h3 className="cabin-title" style={{ fontSize: '24px', fontWeight: 'bold', color: colors.lime, marginBottom: '12px' }}>
                {pillar.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 12px 0' }}>
                {pillar.points.map((point, idx) => (
                  <li key={idx} style={{ fontSize: '14px', lineHeight: '1.5', color: colors.pink, fontWeight: '500', marginBottom: '4px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ fontSize: '16px' }}>💕</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '13px', fontStyle: 'italic', color: colors.orange, fontWeight: 'bold' }}>
                "{pillar.tagline}"
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* COLORFUL DIVIDER 5 */}
      <div style={{ height: '8px', background: `linear-gradient(90deg, ${colors.orange}, ${colors.pink}, ${colors.blue}, ${colors.lime}, ${colors.green})` }} />

      {/* FASHION CONTENT SECTION */}
      <section style={{ background: colors.blue, padding: '50px 20px' }}>
        <h2 className="cabin-title" style={{ fontSize: '32px', fontWeight: 'bold', color: colors.pink, marginBottom: '40px', textAlign: 'center' }}>
          Fashion Content 👗
        </h2>
        <HorizontalCarousel data={contentData.fashion} />
      </section>

      {/* COLORFUL DIVIDER 6 */}
      <div style={{ height: '8px', background: `linear-gradient(90deg, ${colors.pink}, ${colors.orange}, ${colors.green}, ${colors.blue}, ${colors.lime})` }} />

      {/* SKINCARE CONTENT SECTION */}
      <section style={{ background: colors.pink, padding: '50px 20px' }}>
        <h2 className="cabin-title" style={{ fontSize: '32px', fontWeight: 'bold', color: colors.green, marginBottom: '40px', textAlign: 'center' }}>
          Skincare Content 🧴
        </h2>
        <HorizontalCarousel data={contentData.skincare} />
      </section>

      {/* COLORFUL DIVIDER 7 */}
      <div style={{ height: '8px', background: `linear-gradient(90deg, ${colors.blue}, ${colors.lime}, ${colors.orange}, ${colors.pink}, ${colors.green})` }} />

      {/* BEAUTY CONTENT SECTION */}
      <section style={{ background: colors.orange, padding: '50px 20px' }}>
        <h2 className="cabin-title" style={{ fontSize: '32px', fontWeight: 'bold', color: colors.lime, marginBottom: '40px', textAlign: 'center' }}>
          Beauty Content 💄
        </h2>
        <HorizontalCarousel data={contentData.beauty} />
      </section>

      {/* COLORFUL DIVIDER 8 */}
      <div style={{ height: '8px', background: `linear-gradient(90deg, ${colors.orange}, ${colors.lime}, ${colors.pink}, ${colors.blue}, ${colors.green})` }} />

      {/* REVIEWS SECTION */}
      <section style={{ background: colors.orange, padding: '50px 20px' }}>
        <h2 className="cabin-title" style={{ fontSize: '32px', fontWeight: 'bold', color: colors.lime, marginBottom: '30px', textAlign: 'center' }}>
          What Brands Say 💕
        </h2>

        <div style={{ display: 'flex', gap: '20px', flexDirection: 'column', maxWidth: '600px', margin: '0 auto' }}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{ background: colors.lime, padding: '20px', border: `2px solid ${colors.green}`, boxShadow: `0 10px 20px rgba(0, 0, 0, 0.1)`, clipPath: cloudClipPath }}>
              <p style={{ fontSize: '14px', color: colors.green, fontWeight: '500', lineHeight: '1.6', marginBottom: '10px' }}>
                "Amazing collaboration! Fazlina's creativity and authentic content resonated with our brand perfectly."
              </p>
              <p style={{ fontSize: '12px', color: colors.blue, fontWeight: 'bold' }}>— Brand {i} Team ✨</p>
            </div>
          ))}
        </div>
      </section>

      {/* COLORFUL DIVIDER 9 */}
      <div style={{ height: '8px', background: `linear-gradient(90deg, ${colors.green}, ${colors.orange}, ${colors.pink}, ${colors.blue}, ${colors.lime})` }} />

      {/* CTA SECTION */}
      <section style={{ background: `linear-gradient(135deg, ${colors.blue} 0%, ${colors.green} 100%)`, padding: '50px 20px', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '15px', right: '25px', fontSize: '35px', opacity: 0.5 }}>✨</div>

        <h2 className="cabin-title" style={{ fontSize: '28px', fontWeight: 'bold', color: colors.lime, marginBottom: '25px' }}>
          Let's Work Together!
        </h2>

        <div style={{ width: '150px', aspectRatio: '4 / 5', margin: '0 auto 30px', boxShadow: `0 15px 35px rgba(0, 0, 0, 0.3)`, border: `3px solid ${colors.lime}`, clipPath: cloudClipPath, backgroundImage: 'url(https://i.imgur.com/0HIFVHI.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />

        <p style={{ fontSize: '15px', color: colors.pink, marginBottom: '30px', fontWeight: '500' }}>
          Ready for your next brand collaboration? Let's create magic together! 💌
        </p>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '30px' }}>
          <CloudButton href="mailto:fazlina_yahya@yahoo.com?subject=Paid Review" bgColor={colors.lime} textColor={colors.green}>
            💕 Paid Review
          </CloudButton>
          <CloudButton href="mailto:fazlina_yahya@yahoo.com?subject=Gifted Review" bgColor={colors.pink} textColor={colors.green}>
            ✨ Gifted Review
          </CloudButton>
          <CloudButton href="mailto:fazlina_yahya@yahoo.com?subject=Collaboration Works" bgColor={colors.orange} textColor={colors.lime}>
            💫 Collaboration Works
          </CloudButton>
          <CloudButton href="mailto:fazlina_yahya@yahoo.com?subject=Brand Partnership" bgColor={colors.blue} textColor={colors.pink}>
            💖 Brand Partnership
          </CloudButton>
        </div>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <CloudButton href="mailto:fazlina_yahya@yahoo.com" bgColor={colors.lime} textColor={colors.green}>
            📧 Email Me
          </CloudButton>
          <CloudButton href="https://instagram.com/fazlina_yahya" bgColor={colors.pink} textColor={colors.green}>
            💬 DM on Insta
          </CloudButton>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: colors.green, padding: '20px', textAlign: 'center', borderTop: `3px solid ${colors.lime}` }}>
        <p style={{ fontSize: '13px', color: colors.lime, margin: 0, fontWeight: '500' }}>
          © 2025 Fazlina Yahya • Engineered by FatCalicoBoy ✨
        </p>
      </footer>
    </div>
  );
}
