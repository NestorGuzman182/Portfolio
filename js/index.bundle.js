(()=>{var e={126:(e,t,c)=>{"use strict";var l=c(179);document.getElementById("play-game").addEventListener("click",(function(){Swal.fire("Hello World!")})),async function(){let e=document.getElementById("skills-render");console.log(l.n);for(const t of l.n)e.innerHTML+=`\n                    <div class="container__skill">\n                        ${t.img}\n                        <p>${t.name}</p>\n                    </div>\n                    `}()},179:(e,t,c)=>{"use strict";c.d(t,{n:()=>l});const l=[{name:"HTML5",img:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"> <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>'},{name:"CSS3",img:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>'},{name:"JavaScript",img:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>'},{name:"Angular",img:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"/></svg>'},{name:"React",img:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>'},{name:"Vue",img:'<svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="m356.9 64.3h-76.9l-56 88.6-48-88.6h-176l224 383.7 224-383.7zm-301.2 32h53.8l114.5 198.2 114.4-198.2h53.8l-168.2 288.2z"/></svg>'},{name:"Git",img:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"/></svg>'},{name:"Ionic",img:'<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.89 122.89" style="enable-background:new 0 0 122.89 122.89" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd}</style><g><path class="st0" d="M61.44,33.47c-15.45,0-28,12.54-28,28c0,15.47,12.54,28.01,28,28.01c15.47,0,28.01-12.54,28.01-28.01 C89.44,46.01,76.9,33.48,61.44,33.47L61.44,33.47L61.44,33.47z M117.37,36.01l-0.54-1.17l-0.84,0.98c-2.09,2.37-4.74,4.2-7.7,5.3 l-0.84,0.3l0.33,0.84c2.54,6.11,3.85,12.68,3.85,19.28c0,27.73-22.49,50.24-50.23,50.24S11.18,89.27,11.18,61.53 s22.49-50.23,50.23-50.23c7.46,0,14.81,1.66,21.55,4.86l0.78,0.37l0.33-0.84c1.25-2.89,3.21-5.45,5.68-7.42l0.99-0.84l-1.13-0.59 C80.97,2.35,71.34,0,61.58,0c-0.03,0-0.1,0-0.16,0C27.51,0,0,27.51,0,61.44s27.53,61.44,61.44,61.44 c33.94,0,61.44-27.51,61.44-61.44c0-8.8-1.88-17.51-5.54-25.5L117.37,36.01L117.37,36.01z M114.4,23.19 c0-7.04-5.7-12.75-12.75-12.75c-7.04,0-12.75,5.71-12.75,12.75c0,7.06,5.71,12.77,12.75,12.77 C108.71,35.96,114.4,30.24,114.4,23.19L114.4,23.19z"/></g></svg>'},{name:"React Native",img:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>'},{name:"Flutter",img:'<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 317" style="enable-background:new 0 0 256 317" xml:space="preserve"><style type="text/css"></style><g><polygon class="st0" points="157.67,0 0,157.67 48.8,206.47 255.27,0"/><polygon class="st0" points="156.57,145.4 72.15,229.82 121.13,279.53 169.84,230.82 255.27,145.4"/><polygon class="st2" points="121.13,279.53 158.21,316.61 255.27,316.61 169.84,230.82"/><polygon class="st3" points="71.6,230.36 120.4,181.56 169.84,230.82 121.13,279.53"/><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-173.6875" y1="548.7979" x2="-172.968" y2="548.5386" gradientTransform="matrix(44.5891 0 0 -44.5901 7866.5254 24720.502)"><stop offset="0" style="stop-color:#000000"/><stop offset="1" style="stop-color:#000000;stop-opacity:0"/></linearGradient><polygon class="st1" points="121.13,279.53 161.69,266.07 165.72,234.94"/></g></svg>'},{name:"Node",img:'<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348 312"><path d="m127.999999 288.463771c-3.975155 0-7.6853-1.060043-11.130435-2.915115l-35.2463756-20.935818c-5.3002084-2.915114-2.650103-3.975156-1.0600426-4.505177 7.1552801-2.385091 8.4803317-2.915114 15.900623-7.15528.7950291-.53002 1.8550717-.265009 2.650103.265011l27.0310552 16.165632c1.060043.530021 2.385094.530021 3.180126 0l105.739129-61.21739c1.060043-.530023 1.590063-1.590063 1.590063-2.915115v-122.1697723c0-1.3250538-.53002-2.3850941-1.590063-2.9151143l-105.739129-60.9523818c-1.060043-.5300201-2.385094-.5300201-3.180126 0l-105.7391316 60.9523818c-1.0600403.5300202-1.5900605 1.8550717-1.5900605 2.9151143v122.1697723c0 1.060041.5300202 2.385092 1.5900605 2.915115l28.8861293 16.695652c15.6356117 7.950309 25.4409949-1.325052 25.4409949-10.600415v-120.579712c0-1.5900605 1.3250515-3.1801232 3.1801232-3.1801232h13.5155288c1.5900627 0 3.1801232 1.3250515 3.1801232 3.1801232v120.579712c0 20.935818-11.3954436 33.126293-31.2712211 33.126293-6.0952375 0-10.8654235 0-24.3809523-6.625258l-27.8260867-15.90062c-6.89026889-3.975157-11.1304347-11.395446-11.1304347-19.345758v-122.1697723c0-7.9503092 4.24016581-15.3706005 11.1304347-19.3457551l105.7391293-61.21739308c6.62526-3.71014336 15.635612-3.71014336 22.260872 0l105.739129 61.21739308c6.890269 3.9751546 11.130435 11.3954459 11.130435 19.3457551v122.1697723c0 7.950312-4.240166 15.370601-11.130435 19.345758l-105.739129 61.21739c-3.445137 1.590063-7.420291 2.385095-11.130437 2.385095zm32.596275-84.008283c-46.376813 0-55.917185-21.200829-55.917185-39.221533 0-1.590062 1.325052-3.180123 3.180123-3.180123h13.78054c1.590061 0 2.915112 1.06004 2.915112 2.650103 2.120083 14.045549 8.215323 20.935818 36.306419 20.935818 22.260871 0 31.801243-5.035197 31.801243-16.960663 0-6.890269-2.650103-11.925466-37.366461-15.370601-28.886127-2.915114-46.90683-9.275363-46.90683-32.331263 0-21.4658385 18.020703-34.1863359 48.231884-34.1863359 33.921324 0 50.616976 11.6604571 52.737059 37.1014499 0 .795031-.265011 1.590063-.795031 2.385094-.53002.53002-1.325052 1.06004-2.120083 1.06004h-13.780538c-1.325051 0-2.650103-1.06004-2.915114-2.385092-3.180123-14.575569-11.395446-19.345757-33.126293-19.345757-24.380954 0-27.296066 8.480332-27.296066 14.84058 0 7.685301 3.445134 10.070395 36.306418 14.310561 32.596273 4.240165 47.966873 10.335403 47.966873 33.126292-.265011 23.320912-19.345755 36.57143-53.00207 36.57143z"/></svg>'},{name:"Express",img:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1333.33 773.55" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M1333.33 753.49c-48.5 12.33-78.5.54-105.41-39.87L1036.5 448.79l-27.67-36.67L785.29 714.5c-25.54 36.38-52.33 52.2-100 39.33l286.25-384.25-266.5-347.09c45.83-8.91 77.5-4.38 105.62 36.67l198.54 268.13 200-266.67c25.62-36.38 53.17-50.2 99.17-36.8l-103.33 137-140 182.29c-16.67 20.83-14.38 35.09.96 55.2l267.33 355.18zM.34 363.16l23.41-115.17c63.75-227.92 325-322.63 505.17-181.8 105.29 82.83 131.46 200 126.25 331.25H61.67C52.76 633.69 222.8 776.27 439.58 703.53c76.04-25.54 120.83-85.09 143.25-159.58 11.38-37.33 30.2-43.17 65.29-32.5-17.91 93.17-58.33 171-143.75 219.71-127.62 72.91-309.8 49.33-405.62-52C41.66 620.36 18.08 545.87 7.5 466.2c-1.67-13.17-5-25.71-7.5-38.33.22-21.56.34-43.11.34-64.67v-.04zm62.41-15.83h536.33c-3.5-170.83-109.87-292.17-255.25-293.2-159.58-1.25-274.17 117.2-281.09 293.2h.01z" fill-rule="nonzero"/></svg>'},{name:"MongoDB",img:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 598.88 1333.33" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" style="height:80px"><g fill-rule="nonzero"><path d="M295.27 3.65l35.58 66.83c8 12.33 16.67 23.25 26.87 33.42 29.79 29.79 58.08 60.99 83.5 94.41 60.28 79.16 100.95 167.07 129.98 262.14 17.42 58.08 26.87 117.66 27.58 177.9 2.91 180.11-58.83 334.76-183.31 463.28-20.33 20.33-42.08 39.16-65.41 55.91-12.33 0-18.17-9.46-23.25-18.16-9.45-15.96-15.25-34.17-18.16-52.29-4.38-21.8-7.25-43.58-5.83-66.08v-10.16c-1-2.17-11.87-1002.07-7.54-1007.19v.01z"/><path d="M295.27 1.43c-1.46-2.91-2.91-.71-4.38.71.71 14.58-4.38 27.58-12.33 40-8.75 12.33-20.33 21.8-31.96 31.96-64.57 55.91-115.4 123.45-156.11 198.98C36.33 374.74 8.41 483.68.5 598.38c-3.62 41.37 13.09 187.36 26.13 229.48 35.58 111.82 99.49 205.52 182.27 286.84 20.33 19.58 42.08 37.74 64.58 55.2 6.54 0 7.25-5.83 8.74-10.17 2.85-9.28 5.06-18.76 6.54-28.34l14.58-108.9L295.26 1.43z"/><path d="M330.85 1201.77c1.46-16.67 9.46-30.5 18.17-44.29-8.75-3.62-15.25-10.83-20.33-18.87-4.38-7.25-8-15.96-10.83-23.96-10.17-30.5-12.33-62.5-15.25-93.66v-18.87c-3.62 2.91-4.38 27.58-4.38 31.25-2.03 32.85-6.54 65.8-13.08 98.05-2.17 13.08-3.62 26.12-11.67 37.74 0 1.46 0 2.91.71 5.09 13.08 38.5 16.67 77.7 18.87 117.66v14.58c0 17.41-.71 13.74 13.75 19.58 5.83 2.17 12.33 2.91 18.16 7.25 4.38 0 5.09-3.62 5.09-6.54l-2.17-23.96v-66.83c-.71-11.67 1.46-23.25 2.91-34.16l.05-.06z"/></g></svg>'}]},957:(e,t,c)=>{"use strict";c.p,c.p,c.p;let l="ENG",s=document.querySelectorAll(".toggle-cont"),n=document.querySelectorAll("[data-section]");s.forEach((e=>{let t=e.querySelector(".dark"),c=e.querySelector(".light"),s=!1;e.addEventListener("click",(e=>{console.log(e),s=!s,console.log(s),s?(t.classList.remove("active"),c.classList.add("active"),l=e.target.parentElement.dataset.language,console.log(l),o(l)):(t.classList.add("active"),c.classList.remove("active"),l=e.target.children[0].dataset.language,console.log(l),o(l))}))}));let o=async e=>{let t=await fetch(`./lang/${e}.json`);var c=await t.json();for(let e of n){let t=e.dataset.section;const l=e.dataset.value;t.includes("|")?(t=t.split("|"),e.innerText=c[t[0]][t[1]][l]):(console.log({section:t}),console.log({value:l}),e.innerText=c[t][l])}};(function(){const e=document.querySelectorAll(".container__typewriter p");let t,c=0,l=e[c],s=l.getAttribute("data-text"),n=0;function o(){n<s.length?(l.textContent+=s.charAt(n),n++):(clearInterval(t),l.classList.add("visible"),c++,c<e.length&&(l=e[c],s=l.getAttribute("data-text"),n=0,setTimeout((()=>{l.textContent="",l.classList.add("visible"),t=setInterval(o,100)}),1e3)))}return document.addEventListener("visibilitychange",(()=>{clearInterval(t)})),{start:function(){t=setInterval(o,100)}}})().start(),o(l)},722:()=>{const e=window.matchMedia("screen and (max-width: 786px");console.log(window.matchMedia("screen and (max-width: 786px"));const t=document.querySelector(".navbar"),c=document.querySelector("#btn-menu"),l=document.querySelector("#btn-menu-2");function s(e){e.matches?(c.addEventListener("click",n),l.addEventListener("click",o)):l.addEventListener("click",o)}function n(){t.classList.add("is-active"),c.style.display="none",l.style.display="block",console.log(t.classList)}function o(){t.classList.remove("is-active"),l.style.display="none",c.style.display="block"}e.addListener(s),s(e)}},t={};function c(l){var s=t[l];if(void 0!==s)return s.exports;var n=t[l]={exports:{}};return e[l](n,n.exports,c),n.exports}c.d=(e,t)=>{for(var l in t)c.o(t,l)&&!c.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var t=c.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var l=t.getElementsByTagName("script");if(l.length)for(var s=l.length-1;s>-1&&!e;)e=l[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e+"../"})(),c(126),c(957),c(722),c(179)})();