import React from "react";

export function SeoDashboardIllustration() {
  return (
    <div className="seo-dashboard-illustration" aria-hidden="true">

      <div className="seo-dashboard__glow" />


      <svg
        className="seo-dashboard__orbits"
        viewBox="0 0 500 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

        <ellipse
          cx="250"
          cy="145"
          rx="210"
          ry="105"
          stroke="rgba(255, 204, 0, 0.18)"
          strokeWidth="1.2"
          strokeDasharray="4 5"
          transform="rotate(-5 250 145)"
        />

        <ellipse
          cx="245"
          cy="140"
          rx="160"
          ry="78"
          stroke="rgba(255, 255, 255, 0.06)"
          strokeWidth="1"
        />

        <circle cx="58" cy="148" r="3.5" fill="#ffcc00" filter="drop-shadow(0 0 5px rgba(255,204,0,0.9))" />
        <circle cx="390" cy="62" r="3" fill="#ffcc00" filter="drop-shadow(0 0 4px rgba(255,204,0,0.8))" />
        <circle cx="355" cy="225" r="3" fill="#ffcc00" filter="drop-shadow(0 0 4px rgba(255,204,0,0.8))" />
        <circle cx="155" cy="248" r="2.5" fill="#ffcc00" filter="drop-shadow(0 0 4px rgba(255,204,0,0.8))" />
      </svg>


      <div className="seo-dashboard__browser">

        <div className="seo-dashboard__browser-header">
          <span className="seo-dashboard__dot" />
          <span className="seo-dashboard__dot" />
          <span className="seo-dashboard__dot" />
        </div>


        <div className="seo-dashboard__search-bar">
          <div className="seo-dashboard__search-left">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#ffffff"
                opacity="0.95"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#ffffff"
                opacity="0.85"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                fill="#ffffff"
                opacity="0.85"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                fill="#ffffff"
                opacity="0.95"
              />
            </svg>
            <span className="seo-dashboard__query">Best digital marketing agency</span>
          </div>
          <svg className="seo-dashboard__search-icon" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>


        <div className="seo-dashboard__results">

          <div className="seo-dashboard__result seo-dashboard__result--rank1">
            <div className="seo-dashboard__rank1-bar" />
            <div className="seo-dashboard__result-lines">
              <div className="seo-dashboard__line seo-dashboard__line--title-yellow" />
              <div className="seo-dashboard__line seo-dashboard__line--sub" />
              <div className="seo-dashboard__line seo-dashboard__line--text-long" />
              <div className="seo-dashboard__line seo-dashboard__line--text-short" />
            </div>
          </div>


          <div className="seo-dashboard__result seo-dashboard__result--regular">
            <div className="seo-dashboard__result-lines">
              <div className="seo-dashboard__line seo-dashboard__line--title-grey" />
              <div className="seo-dashboard__line seo-dashboard__line--text-long" />
              <div className="seo-dashboard__line seo-dashboard__line--text-mid" />
            </div>
          </div>
        </div>
      </div>


      <div className="seo-dashboard__card seo-dashboard__card--rankings">
        <div className="seo-dashboard__card-top">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ffcc00" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffcc00" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
        <div className="seo-dashboard__card-text">
          Higher
          <br />
          Rankings
        </div>
      </div>


      <div className="seo-dashboard__card seo-dashboard__card--traffic">
        <span className="seo-dashboard__card-title">Organic Traffic</span>
        <div className="seo-dashboard__chart-wrap">
          <div className="seo-dashboard__chart-bars">
            <span style={{ height: "25%" }} />
            <span style={{ height: "35%" }} />
            <span style={{ height: "48%" }} />
            <span style={{ height: "65%" }} />
            <span style={{ height: "85%" }} />
          </div>
          <svg
            className="seo-dashboard__chart-svg"
            viewBox="0 0 120 55"
            preserveAspectRatio="none"
          >
            <path
              d="M 5 48 C 30 45, 55 35, 85 24 S 105 14, 115 8"
              fill="none"
              stroke="#ffcc00"
              strokeWidth="2.5"
              filter="drop-shadow(0 0 5px rgba(255,204,0,0.7))"
            />
            <circle cx="115" cy="8" r="3.5" fill="#ffcc00" filter="drop-shadow(0 0 4px rgba(255,204,0,0.9))" />
          </svg>
        </div>
      </div>


      <div className="seo-dashboard__card seo-dashboard__card--more-traffic">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="seo-dashboard__card-icon">
          <rect x="3" y="12" width="4" height="9" rx="1" fill="#ffcc00" />
          <rect x="10" y="7" width="4" height="14" rx="1" fill="#ffcc00" />
          <rect x="17" y="3" width="4" height="18" rx="1" fill="#ffcc00" />
        </svg>
        <div className="seo-dashboard__card-text">
          More
          <br />
          Organic Traffic
        </div>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#ffcc00" strokeWidth="2.5">
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </div>


      <div className="seo-dashboard__card seo-dashboard__card--keywords">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffcc00"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="seo-dashboard__card-icon"
        >
          <circle cx="7.5" cy="15.5" r="4.5" />
          <path d="m11 12 7-7" />
          <path d="m16 7 2 2" />
          <path d="m19 4 2 2" />
        </svg>
        <div className="seo-dashboard__card-text">
          Relevant
          <br />
          Keywords
        </div>
      </div>
    </div>
  );
}
