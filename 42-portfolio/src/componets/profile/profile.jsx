import "./profile.css"
export function Profile() {
  return (
    <header className="profile">
      <div className="profile-svg">
      <svg id="lines" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 85.04 400.5">
        <defs>
          <linearGradient id="linear-gradient" x1="0" y1="0" x2="42.52" y2="400.5" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#09687a"/><stop offset="1" stop-color="#169d97"/></linearGradient>
          <pattern id="img1" patternUnits="userSpaceOnUse" width="116" height="116">
            <image href="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ" x="-20" y="-20" width="116" height="116" />
          </pattern>
        </defs>
        <g fill="url(#linear-gradient)" styles="stroke-miterlimit:10;stroke-width:1.62px;">
        <path d="m42.52.81C19.52.81.81,19.52.81,42.53s18.16,41.15,40.68,41.7v716.74h2.07V84.23c22.52-.55,40.67-19.04,40.67-41.7S65.52.81,42.52.81Zm0,81.36c-21.86,0-39.64-17.78-39.64-39.64S20.66,2.88,42.52,2.88s39.64,17.79,39.64,39.65-17.78,39.64-39.64,39.64Z" fill="#fff" stroke="url(#linear-gradient)" stroke-miterlimit="10" stroke-width="1.62"/>
        </g>
        <g  fill="url(#img1)" styles="stroke-miterlimit:10;stroke-width:1.62px;">
        <path d="m82.16,42.53c0,21.86-17.78,39.64-39.64,39.64S2.88,64.39,2.88,42.53,20.66,2.88,42.52,2.88s39.64,17.79,39.64,39.65Z"/>
        </g>
      </svg>
      </div>
      <div className="profile-info">
        <h1 className="profile-name">Hi, I'm John Doe</h1>
        <div className="profile-score">
        <div className="score-svg">
          <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 41.47 29.08">
            <defs>
              <linearGradient id="linear-gradient" x1=".02" y1="21.51" x2="27.12" y2="11.64" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#09687a"/><stop offset="1" stop-color="#169d97"/>
              </linearGradient>
           </defs>
              <g fill="url(#linear-gradient)">
              <path d="m0,21.46c0-.14,0-.24,0-.34,0-1.85,0-3.7,0-5.55,0-.21.06-.36.21-.5C5.17,10.11,10.13,5.15,15.09.19c.09-.09.24-.18.36-.18C17.88,0,20.31,0,22.74,0c.03,0,.06,0,.15.02-5.07,5.08-10.11,10.14-15.2,15.24h15.2v13.83h-7.6v-7.62H0Z"/>
              </g>
              <g fill="url(#linear-gradient)">
               <path d="m26.19,7.67V.02h15.26c0,.09.01.2.02.3,0,2.35,0,4.7,0,7.05,0,.2-.06.34-.2.48-2.42,2.41-4.83,4.82-7.25,7.22-.15.15-.21.29-.21.5,0,2.31,0,4.62,0,6.94,0,.09,0,.19,0,.38,2.57-2.56,5.08-5.06,7.63-7.6v7.59h-15.26v-.29c0-2.34,0-4.68,0-7.02,0-.2.06-.34.2-.48,2.42-2.41,4.82-4.82,7.24-7.23.14-.14.2-.28.2-.48,0-2.33,0-4.66,0-7V.1c-2.52,2.51-5.04,5.01-7.62,7.57Z"/>
              </g>
          </svg>
        </div>
        <p>score or core</p>
        </div>
      </div>
    </header>
  )
}