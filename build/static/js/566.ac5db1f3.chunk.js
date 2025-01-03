"use strict";(self.webpackChunkwibe_test=self.webpackChunkwibe_test||[]).push([[566],{5566:(e,o,t)=>{t.r(o),t.d(o,{default:()=>w});var n=t(3229),l=t(9950),c=t(9139),a=t(5616),i=t(1678),r=t(4414);const s=(0,i.Ay)(n.P.div)`
  position: absolute;
  top: ${e=>e.click?"0":`-${e.theme.navHeight}`};
  transition: all 0.3s ease;
  z-index: 6;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    top: ${e=>e.click?"0":"calc(-50vh - 4rem)"};
  }
`,d=i.Ay.li`
  background-color: ${e=>`rgba(${e.theme.textRgba},0.7)`};
  color: ${e=>e.theme.body};
  width: 15rem;
  height: 2.5rem;
  border: none;
  outline: none;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${e=>e.theme.fontmd};
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  @media (max-width: 40em) {
    width: 10rem;
    height: 2rem;
  }
`,h=(0,i.Ay)(n.P.ul)`
  position: relative;
  height: ${e=>e.theme.navHeight};
  background-color: ${e=>e.theme.body};
  color: ${e=>e.theme.text};
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  width: 100%;
  padding: 0 10rem;

  @media (max-width: 40em) {
    flex-direction: column;
    padding: 2rem 0;
    height: 50vh;
  }
`,m=(0,i.Ay)(n.P.li)`
  text-transform: uppercase;
  color: ${e=>e.theme.text};

  @media (max-width: 40em) {
    padding: 0.5rem 0;
  }
`,g="https://ap-northeast-2gm0vtjvnj.auth.ap-northeast-2.amazoncognito.com",p="https://d19kcxe6thj51s.cloudfront.net",u="5eerhp5cdcpmr6vin34vfru026",w=()=>{const[e,o]=(0,l.useState)(!1),[t,n]=(0,l.useState)(!1),{scroll:i}=(0,c.g7)();(0,l.useEffect)((()=>{const e=new URLSearchParams(window.location.search).get("code");if(console.log("URL \ud30c\ub77c\ubbf8\ud130 \ud655\uc778 - \uc778\uc99d \ucf54\ub4dc:",e?"\uc874\uc7ac":"\uc5c6\uc74c"),e)w(e);else{const e=localStorage.getItem("accessToken");console.log("localStorage \ud1a0\ud070 \ud655\uc778:",e?"\uc874\uc7ac":"\uc5c6\uc74c"),e&&(n(!0),k())}}),[]);const w=async e=>{console.log("\ud1a0\ud070 \uad50\ud658 \uc2dc\uc791, \ucf54\ub4dc:",e);const o=`${g}/oauth2/token`,t=new URLSearchParams;t.append("grant_type","authorization_code"),t.append("code",e),t.append("redirect_uri",p),t.append("client_id",u),console.log("\uc694\uccad URL:",o),console.log("\uc694\uccad \ud30c\ub77c\ubbf8\ud130:",t.toString());try{const e=await fetch(o,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t});if(console.log("\uc751\ub2f5 \uc0c1\ud0dc:",e.status),e.ok){const o=await e.json();console.log("\ud1a0\ud070 \uc218\uc2e0 \uc131\uacf5"),console.log("\ud1a0\ud070 \uc815\ubcf4:",{accessToken:o.access_token?"\uc874\uc7ac":"\uc5c6\uc74c",idToken:o.id_token?"\uc874\uc7ac":"\uc5c6\uc74c",refreshToken:o.refresh_token?"\uc874\uc7ac":"\uc5c6\uc74c"}),o.access_token&&localStorage.setItem("accessToken",o.access_token),o.id_token&&localStorage.setItem("idToken",o.id_token),o.refresh_token&&localStorage.setItem("refreshToken",o.refresh_token),n(!0),k(),window.history.replaceState({},document.title,window.location.pathname)}else{const o=await e.json();console.error("\ud1a0\ud070 \uad50\ud658 \uc2e4\ud328:",o),n(!1),alert(`\ud1a0\ud070 \uad50\ud658 \uc2e4\ud328: ${o.error_description||o.error}`)}}catch(l){console.error("\ud1a0\ud070 \uad50\ud658 \uc911 \uc624\ub958:",l),n(!1),alert("\ud1a0\ud070 \uad50\ud658 \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.")}},k=()=>{let e=localStorage.getItem("userId");e?console.log("\uae30\uc874 userId \uc0ac\uc6a9:",e):(e=crypto.randomUUID(),localStorage.setItem("userId",e),console.log("\uc0c8\ub85c\uc6b4 userId \uc0dd\uc131 \ubc0f \uc800\uc7a5:",e))},y=t=>{const n=document.querySelector(t);o(!e),i.scrollTo(n,{offset:"-100",duration:"500",easing:[.25,0,.35,1]})};return(0,r.jsx)(s,{click:+e,initial:{y:"-100%"},animate:{y:0},transition:{duration:.5,delay:0},children:(0,r.jsxs)(h,{drag:"y",dragConstraints:{top:0,bottom:70},dragElastic:.05,dragSnapToOrigin:!0,children:[(0,r.jsx)(d,{onClick:()=>o(!e),children:(0,r.jsx)("span",{children:"MENU"})}),(0,r.jsx)(m,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>y("#home"),children:(0,r.jsx)(a.N_,{to:"/",children:"Home"})}),(0,r.jsx)(m,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>y(".about"),children:(0,r.jsx)(a.N_,{to:"/",children:"About"})}),(0,r.jsx)(m,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>y("#shop"),children:(0,r.jsx)(a.N_,{to:"/",children:"Shop"})}),t?(0,r.jsx)(m,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>{localStorage.removeItem("accessToken"),localStorage.removeItem("idToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("userId"),n(!1);const e=`${g}/logout?client_id=${u}&logout_uri=${encodeURIComponent(p)}`;window.location.href=e},children:(0,r.jsx)(a.N_,{to:"#",children:"Logout"})}):(0,r.jsx)(m,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:()=>{console.log("\ub85c\uadf8\uc778 \ubc84\ud2bc \ud074\ub9ad");const e=`${g}/login?client_id=${u}&redirect_uri=${encodeURIComponent(p)}&response_type=code&scope=email+openid`;console.log("\ub85c\uadf8\uc778 URL:",e),window.location.href=e},children:(0,r.jsx)(a.N_,{to:"#",onClick:e=>e.preventDefault(),children:"Login / Register"})}),(0,r.jsx)(m,{whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,y:0},onClick:e=>{e.preventDefault(),console.log("\ubd09\uc9c0\ub2c8 \ubc84\ud2bc \ud074\ub9ad\ub428");const o=localStorage.getItem("accessToken");console.log("\uc800\uc7a5\ub41c \uc561\uc138\uc2a4 \ud1a0\ud070:",o?"\uc874\uc7ac":"\uc5c6\uc74c"),o?(console.log("\uc778\uc99d\ub41c \uc0c1\ud0dc\ub85c \ubd09\uc9c0\ub2c8 \ud398\uc774\uc9c0 \uc811\uadfc"),window.location.href=`${p}/bongjini.html`):(console.log("\ubbf8\uc778\uc99d \uc0c1\ud0dc - \ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub85c \ub9ac\ub514\ub809\uc158"),alert("BonGenie\ub294 \ub85c\uadf8\uc778 \ud6c4 \uc0ac\uc6a9\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. LOGIN / REGISTER \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec \ub85c\uadf8\uc778 \ub610\ub294 \ud68c\uc6d0\uac00\uc785\uc744 \uc9c4\ud589\ud558\uc138\uc694."))},children:(0,r.jsx)(a.N_,{to:"#",children:"BONGGENIEv23"})})]})})}}}]);