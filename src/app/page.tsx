import Script from 'next/script';

export default function HomePage() {
  return (
    <>
      <Script
        src="./index.js"
        strategy="lazyOnload"
      />
      <Script id="jasper-assets" strategy="lazyOnload">
        {`
          // Check if window is defined to avoid errors in server-side rendering
          if (typeof window !== 'undefined') {
            window.jasperAssets = {
              textures: {
                matcap: 'https://assets.itsoffbrand.io/jasper/webgl/texture/texture--matcap.webp',
                masks: {
                  top: 'https://assets.itsoffbrand.io/jasper/webgl/texture/texture--mask-min.png',
                },
                base: 'https://assets.itsoffbrand.io/jasper/webgl/texture/texture--base-min-2.png',
                ao: 'https://assets.itsoffbrand.io/jasper/webgl/texture/texture--ao-min.png',
              },
              models: {
                cubeDetailed: 'https://assets.itsoffbrand.io/jasper/webgl/model/model--detailed.glb',
                cubeSurroundings: 'https://assets.itsoffbrand.io/jasper/webgl/model/model--basic.glb',
              },
              logs: (e) => {
              console.log(e)},
            }
          }
        `}
      </Script>
      <Script src="./AI that’s built for marketing – Jasper_files/gsap.min.js" />
      <Script src="./AI that’s built for marketing – Jasper_files/ScrollTrigger.min.js" />
      <Script src="./AI that’s built for marketing – Jasper_files/TextPlugin.min.js" />

      <section data-gl-container="" data-theme="inherit" className="hero_main_wrap">
        <div className="u-embed-css w-embed">
          <style>
            {`[data-gl-reduced-motion="trigger"] {
              display: none;
            }

            @media screen and (prefers-reduced-motion: reduce) {
              [data - gl - reduced - motion= "trigger"] {
              display: flex;
              }

            [data-gl-scroll="base"],
            [data-gl-scroll="connect"],
            [data-gl-scroll="join"],
            [data-gl-scroll="tail"] {
              height: 0vh !important;
              }
            }

            /* .gl-fallback removes elements when GPU acceleration is disabled */
            .gl-fallback .hero_main_sticky {
              position: relative;
            height: auto !important;
            padding-bottom: 10vh;
            }

            .gl-fallback [data-gl-container] {
              background - image: linear-gradient(180deg, #ffdcc9, hsl(262.64deg 100% 95.96%));
            }

            .gl-fallback [data-gl-fb-hide] {
              display: none;
            }

            .gl-fallback .hero_main_contain {
              position: relative;
            }`}
          </style>
        </div>
        <div data-padding-bottom="none" data-padding-top="none" className="hero_main_contain u-container">
          <div className="hero_main_sticky">
            <div className="hero_main_inner u-vflex-center-center u-gap-small">
              <div className="hero_main_title_wrap u-vflex-center-center u-gap-small">
                <h1 className="hero_main_title u-text-h1">The AI your <br />marketing deserves</h1>
                <div className="hero_main_text_wrap">
                  <p className="hero_main_text u-text-main">Elevate your team, your brand, and your impact with AI that's built for marketing.</p>
                </div>
              </div>
              <div className="flex justify-center wrap">
                <a href="https://app.jasper.ai/auth/signup" aria-label="Start Free Trial" className="button secondary">Start Free Trial</a>
                <a href="https://www.jasper.ai/?ref=seesaw#" aria-label="Get a demo" data-wf--get-a-demo-button-purple--variant="base" className="button request-demo-button w-button">Get A Demo</a>
              </div>
            </div>
          </div>
        </div>
        <div data-gl-fb-hide="" data-gl-wrapper="" className="gl-wrapper">
          <div data-gl-reduced-motion="trigger" className="gl-prm-trigger">
            <div data-button-style="primary" className="btn_main_wrap u-btn-style">
              <div className="g_clickable_wrap u-cover-absolute-5 u-radius-inherit-3 u-zindex-3-3">
                <a target="" href="https://www.jasper.ai/?ref=seesaw#" className="g_clickable_link u-cover-absolute-5 u-radius-inherit-3 u-display-block-3 w-inline-block">
                  <span className="g_clickable_text u-sr-only-3">Connect Pathways</span>
                </a>
                <button type="button" className="g_clickable_btn u-cover-absolute-5 u-radius-inherit-3 u-display-none-3">
                  <span className="g_clickable_text u-sr-only-3">Connect Pathways</span>
                </button>
              </div>
              <div data-gl-reduced-motion="text" aria-hidden="true" className="btn_main_layout u-gap-xsmall-3 u-hflex-center-center-3 u-position-relative-3">
                <div className="btn_main_text">Connect Pathways</div>
              </div>
            </div>
          </div>
          <div data-gl-loader="" className="gl-loader gl-fb" style={{ opacity: 0, visibility: 'hidden' }}></div>
          <div className="gl-canvas w-embed">
            <canvas data-gl-canvas="" data-engine="three.js" width="1920" height="934" style={{ width: '1920px', height: '934px' }}></canvas>
          </div>
        </div>
        <div data-gl-fb-hide="" data-gl-scroll="base" className="gl-scroll base u-display-none"></div>
        <div data-gl-fb-hide="" data-gl-scroll="connect" className="gl-scroll connect u-display-none"></div>
        <div data-gl-fb-hide="" data-gl-scroll="join" className="gl-scroll join"></div>
        <div data-gl-fb-hide="" data-gl-scroll="tail" className="gl-scroll tail u-display-none"></div>
      </section>
      <div style={{ height: '1000px' }}></div>
    </>
  );
}
