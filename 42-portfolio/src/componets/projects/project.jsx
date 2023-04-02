
export function Project({project, bonus, distinct, group, descr, learn}) {
  return (
    <section className="project">
     <svg class="projects" display="block" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 595.28 76.08">
            <defs>
                <linearGradient id="linear-grad" x1="10%" y1="0%" x2="55%" y2="0%" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stop-color="#09687a"/>
                    <stop offset="100%" stop-color="#169d97"/>
                </linearGradient>
            </defs>
            <g class="project-block">
                <text transform-origin="177.51 35.85" text-anchor="end" transform="scale(0.9) translate(177.51 35.85)" fill="#09687a" font-family="Raleway-ExtraBold, Raleway" font-size="16" font-weight="700"><tspan x="0" y="0">{project}</tspan></text>
                <text transform="translate(228.91 36.63)" font-family="Commissioner-Regular, Commissioner"><tspan font-size="12" x="0" y="0">{descr}</tspan><tspan font-size="10" x="0" y="20">{learn}</tspan></text>
                <line x1="201.82" y1="78.25" x2="201.82" y2=".81" fill="#fff" stroke="url(#linear-grad)" stroke-linecap="square" stroke-width="1.62"/>
                <line x1="203.89" y1=".81" x2="203.89" y2="78.25" fill="#fff" stroke="url(#linear-grad)" stroke-linecap="square" stroke-width="1.62"/>
                <path d="m205.03,30.21v4.33h-4.36v-4.33h4.36m1.62-1.62h-7.61v7.58h7.61v-7.58h0Z" fill="#0f7c84"/>
            </g>
            <g class="bonus" display={bonus}>
                <polygon points="171.67 46.62 173.48 50.28 177.51 50.87 174.59 53.71 175.28 57.73 171.67 55.83 168.06 57.73 168.75 53.71 165.83 50.87 169.87 50.28 171.67 46.62" fill="url(#linear-grad)"/>
            </g>
            <g class="distinction" display={distinct}>
                <path d="m156.55,54.11c.13-.14.25-.27.37-.4.25-.28.31-.59.16-.93-.07-.16-.14-.32-.24-.46-.09-.14-.09-.25-.02-.39.07-.14.13-.28.19-.43.25-.69-.06-1.37-.76-1.6-.2-.06-.4-.13-.6-.14-.68-.02-1.37-.02-2.06-.03-.2,0-.4,0-.6-.02-.23-.03-.34-.19-.28-.42.04-.14.1-.28.16-.42.23-.53.48-1.05.7-1.58.3-.74.23-1.47-.14-2.17-.18-.35-.43-.45-.85-.38-.37.06-.58.25-.66.62-.03.14-.04.28-.04.42-.01.81-.31,1.47-.99,1.94-1.08.77-1.99,1.69-2.54,2.93-.1.23-.28.4-.53.48-.27.08-.31.14-.31.41,0,.67,0,1.35,0,2.02,0,1.13,0,2.27.02,3.4,0,.29.09.39.37.42.64.07,1.29.13,1.93.2,1.42.17,2.85.2,4.28.12.32-.02.64-.05.96-.09.53-.08.85-.38.95-.91.03-.15.03-.31.07-.46.04-.12.09-.26.18-.34.66-.57.74-1.03.28-1.78,0,0,0-.01,0-.01Zm-11.78.19c0,.93,0,1.87,0,2.8,0,.27.09.36.36.36.54,0,1.09,0,1.63,0,.32,0,.4-.08.4-.4,0-1.85,0-3.69,0-5.54,0-.3-.09-.38-.38-.38-.54,0-1.09,0-1.63,0-.29,0-.38.09-.38.38,0,.93,0,1.85,0,2.78Z" fill="url(#linear-grad)"/>
                <path d="m144.77,54.3c0-.93,0-1.85,0-2.78,0-.29.09-.38.38-.38.54,0,1.09,0,1.63,0,.3,0,.38.09.38.38,0,1.85,0,3.69,0,5.54,0,.32-.08.4-.4.4-.54,0-1.09,0-1.63,0-.27,0-.36-.09-.36-.36,0-.93,0-1.87,0-2.8Z" fill="url(#linear-grad)"/>
            </g>
            <g class="group" display={group}>
                <path d="m124.56,58.15c-1.8,0-3.61,0-5.41,0-.12,0-.12,0-.13-.12,0-.12-.02-.24-.02-.35,0-.15,0-.29.02-.44.07-.78.32-1.5.74-2.15.24-.37.52-.71.86-1,.36-.3.74-.56,1.18-.74.31-.13.62-.23.95-.29.28-.05.56-.08.85-.08.67,0,1.34,0,2,0,.66,0,1.28.15,1.88.43.74.35,1.34.88,1.81,1.54.32.44.54.93.68,1.46.12.46.18.92.16,1.39,0,.1,0,.19,0,.29,0,.04-.02.05-.06.05-.08,0-.17,0-.25,0-1.75,0-3.51,0-5.26,0Z" fill="url(#linear-grad)"/>
                <path d="m124.61,47.02c.71.03,1.33.28,1.84.78.38.37.64.81.77,1.33.08.34.11.68.07,1.02-.08.64-.34,1.2-.78,1.66-.41.42-.91.68-1.48.79-.66.12-1.28,0-1.85-.36-.7-.43-1.12-1.05-1.29-1.85-.11-.52-.07-1.04.12-1.54.27-.71.75-1.24,1.44-1.57.37-.17.76-.26,1.16-.25Z" fill="url(#linear-grad)"/>
                <path d="m128.26,53.42c.27-.21.56-.37.87-.49.46-.18.93-.28,1.42-.27.55,0,1.1,0,1.65,0,.67,0,1.29.16,1.88.48.61.33,1.09.81,1.45,1.41.27.45.42.93.49,1.44.04.27.04.55.01.83,0,.03-.01.05-.05.05-1.81,0-3.62,0-5.44,0-.09,0-.09,0-.11-.09-.14-.91-.5-1.71-1.1-2.41-.31-.36-.66-.67-1.07-.91,0,0-.01-.01-.02-.02Z" fill="url(#linear-grad)"/>
                <path d="m131.38,47.8c1.29-.01,2.32,1.07,2.31,2.3-.02,1.3-1.07,2.27-2.29,2.27-1.26,0-2.3-1.01-2.3-2.31,0-1.28,1.12-2.27,2.28-2.25Z" fill="url(#linear-grad)"/>
            </g>
        </svg>
    </section>
  )
}

export function Cursus({finished, fview, started, sview}) {
  return (
    <section className="cursus">
     <svg display="block" transform="translate(-1.5 0)" id="cursus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.28 115.63">
            <g>
                <path d="m212.5,1.5v.46h-17.77v-.46h17.77m1.5-1.5h-20.77v3.46h20.77V0h0Z" fill="#0f7c84"/>
                <text display={fview} text_anchor="middle" transform="translate(152.09 27.26)" fill="#09687a" font-family="Commissioner-Bold, Commissioner" font-size="13" font-weight="700"><tspan x="0" y="0">{finished}</tspan></text>
                <text display={sview} text_anchor="middle" transform="translate(115.11 98.62)" fill="#09687a" font-family="Commissioner-Bold, Commissioner" font-size="13" font-weight="700"><tspan x="0" y="0">{started}</tspan></text>
                <path d="m212.5,113.67v.46h-17.77v-.46h17.77m1.5-1.5h-20.77v3.46h20.77V0h0Z" fill="#0f7c84"/>
            </g>
        </svg>
    </section>
  )
}