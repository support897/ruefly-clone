const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.esm-CxLYoJgV.js","assets/index.esm-CAuVNLIj.js","assets/index.esm-D3jWT_Ms.js","assets/index.esm-C_u8w6MT.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();const J="modulepreload",Z=function(e){return"./"+e},U={},v=function(t,a,n){let o=Promise.resolve();if(a&&a.length>0){let d=function(c){return Promise.all(c.map(m=>Promise.resolve(m).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),b=u?.nonce||u?.getAttribute("nonce");o=d(a.map(c=>{if(c=Z(c),c in U)return;U[c]=!0;const m=c.endsWith(".css"),y=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${y}`))return;const p=document.createElement("link");if(p.rel=m?"stylesheet":J,m||(p.as="script"),p.crossOrigin="",p.href=c,b&&p.setAttribute("nonce",b),document.head.appendChild(p),m)return new Promise((g,f)=>{p.addEventListener("load",g),p.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(d){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=d,window.dispatchEvent(u),!u.defaultPrevented)throw d}return o.then(d=>{for(const u of d||[])u.status==="rejected"&&s(u.reason);return t().catch(s)})},k={apiKey:"AIzaSyAEHWy6MLAwnVY7WH7ezUDb_jIOU8FW7Ug",authDomain:"ilse-socials-test.firebaseapp.com",projectId:"ilse-socials-test",appId:"1:938191091775:web:3cd08df29bb4f3eb7ba08a",storageBucket:"ilse-socials-test.firebasestorage.app",messagingSenderId:"938191091775"},j=!!(k.apiKey&&k.projectId&&k.appId);let P=null;async function M(){return j?(P||(P=v(async()=>{const{initializeApp:e}=await import("./index.esm-CxLYoJgV.js");return{initializeApp:e}},__vite__mapDeps([0,1])).then(({initializeApp:e})=>e(k))),P):null}let I=null;async function w(){const e=await M();return e?(I||(I=v(async()=>{const{getAuth:t}=await import("./index.esm-D3jWT_Ms.js");return{getAuth:t}},__vite__mapDeps([2,1])).then(({getAuth:t})=>t(e))),I):null}let T=null;async function x(){const e=await M();return e?(T||(T=v(async()=>{const{getFirestore:t}=await import("./index.esm-C_u8w6MT.js");return{getFirestore:t}},__vite__mapDeps([3,1])).then(({getFirestore:t})=>t(e))),T):null}async function F(){return v(()=>import("./index.esm-C_u8w6MT.js"),__vite__mapDeps([3,1]))}async function Q(e){const t=await w();if(!t)return()=>{};const{onAuthStateChanged:a}=await v(async()=>{const{onAuthStateChanged:n}=await import("./index.esm-D3jWT_Ms.js");return{onAuthStateChanged:n}},__vite__mapDeps([2,1]));return a(t,n=>{e&&e(n)})}async function X(){const e=await w();if(!e)return null;const{isSignInWithEmailLink:t,signInWithEmailLink:a}=await v(async()=>{const{isSignInWithEmailLink:s,signInWithEmailLink:d}=await import("./index.esm-D3jWT_Ms.js");return{isSignInWithEmailLink:s,signInWithEmailLink:d}},__vite__mapDeps([2,1]));if(!t(e,window.location.href))return null;let n=null;try{n=localStorage.getItem("fb_link_email")}catch{}if(n||(n=window.prompt("Your email, to finish signing in")),!n)return null;const o=await a(e,n,window.location.href);try{localStorage.removeItem("fb_link_email")}catch{}return o.user}async function ee(e,t){const a=await w();if(!a)throw new Error("accounts-off");const{signInWithEmailAndPassword:n}=await v(async()=>{const{signInWithEmailAndPassword:s}=await import("./index.esm-D3jWT_Ms.js");return{signInWithEmailAndPassword:s}},__vite__mapDeps([2,1]));return(await n(a,e,t)).user}async function te(e){const t=await w();if(!t)throw new Error("accounts-off");const{sendPasswordResetEmail:a}=await v(async()=>{const{sendPasswordResetEmail:n}=await import("./index.esm-D3jWT_Ms.js");return{sendPasswordResetEmail:n}},__vite__mapDeps([2,1]));return await a(t,e),!0}async function ne(){const e=await w();if(!e)throw new Error("accounts-off");const{GoogleAuthProvider:t,signInWithPopup:a}=await v(async()=>{const{GoogleAuthProvider:o,signInWithPopup:s}=await import("./index.esm-D3jWT_Ms.js");return{GoogleAuthProvider:o,signInWithPopup:s}},__vite__mapDeps([2,1]));return(await a(e,new t)).user}async function ie(){const e=await w();if(!e)throw new Error("accounts-off");const{OAuthProvider:t,signInWithPopup:a}=await v(async()=>{const{OAuthProvider:o,signInWithPopup:s}=await import("./index.esm-D3jWT_Ms.js");return{OAuthProvider:o,signInWithPopup:s}},__vite__mapDeps([2,1]));return(await a(e,new t("apple.com"))).user}async function V(){const e=await w();if(!e)return;const{signOut:t}=await v(async()=>{const{signOut:a}=await import("./index.esm-D3jWT_Ms.js");return{signOut:a}},__vite__mapDeps([2,1]));await t(e)}const S={activationText:"first post scheduled",cast:[{id:"camila",name:"Camila"},{id:"helen",name:"Helen"}]},D=document.getElementById("ownerRoot"),L=document.getElementById("whoLine"),r=e=>typeof e=="number"&&isFinite(e)?e:0,l=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),ae={AUD:"A$",USD:"$",EUR:"€",GBP:"£"},C=(e,t)=>(ae[t]||(t?t+" ":"A$"))+(r(e)/100).toFixed(2);function G(e){const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),a=(t.getUTCDay()+6)%7;t.setUTCDate(t.getUTCDate()-a+3);const n=new Date(Date.UTC(t.getUTCFullYear(),0,4)),o=(n.getUTCDay()+6)%7;n.setUTCDate(n.getUTCDate()-o+3);const s=1+Math.round((t-n)/(7*864e5));return`${t.getUTCFullYear()}-W${String(s).padStart(2,"0")}`}const q=()=>G(new Date);function se(e){if(!e)return!1;const t=new Date(e);return!isNaN(t)&&G(t)===q()}function H(e){L.textContent="",D.innerHTML=`
  <section class="card" id="doorBox">
    <h2 style="margin-top:0">Sign in</h2>
    <p class="hint">This page is for the owner only. Everyone else gets a plain no.</p>
    ${e?`<p class="hint">${l(e)}</p>`:""}
    <label>Email<input id="doorEmail" type="email" autocomplete="email" placeholder="you@example.com"></label>
    <label>Password<input id="doorPassword" type="password" autocomplete="current-password" placeholder="Your password"></label>
    <p><button class="act" id="doorPwSignIn">Sign in</button>
       <button class="ghost" id="doorReset">Forgot password? Email me a reset link</button></p>
    <p><button class="ghost" id="doorGoogle">Continue with Google</button>
       <button class="ghost" id="doorApple">Continue with Apple</button></p>
    <p class="msg" id="doorMsg" role="alert"></p>
  </section>`;const t=n=>{document.getElementById("doorMsg").textContent=n||""},a=()=>({email:document.getElementById("doorEmail").value.trim(),pw:document.getElementById("doorPassword").value||""});document.getElementById("doorPwSignIn").addEventListener("click",async()=>{const{email:n,pw:o}=a();if(!n){t("Type your email first.");return}if(!o){t("Type your password first.");return}try{await ee(n,o)}catch(s){const d=s&&s.code||"";d.includes("wrong-password")||d.includes("user-not-found")||d.includes("invalid-credential")?t("Email or password did not match."):d.includes("too-many-requests")?t("Too many tries. Wait a little and try again."):t("Sign in did not finish.")}}),document.getElementById("doorReset").addEventListener("click",async()=>{const{email:n}=a();if(!n){t("Type your email first.");return}try{await te(n),t("Reset link sent. Check your email to pick a new password.")}catch{t("That did not send. Check the email and try again.")}}),document.getElementById("doorGoogle").addEventListener("click",async()=>{try{await ne()}catch{t("Google sign in did not finish.")}}),document.getElementById("doorApple").addEventListener("click",async()=>{try{await ie()}catch{t("Apple sign in did not finish.")}})}function N(e){L.textContent=e||"",D.innerHTML=`
  <section class="card" id="deniedBox">
    <h2 style="margin-top:0">Not available</h2>
    <p class="hint">This page is not available for this account.</p>
    <p><button class="ghost" id="deniedOut">Sign out</button></p>
  </section>`,document.getElementById("deniedOut").addEventListener("click",()=>{V().catch(()=>{})})}async function oe(){const e=await x();if(!e)return!1;const{doc:t,getDoc:a}=await F();try{return await a(t(e,"_owner","aggregates","people","main")),!0}catch{return!1}}async function re(){const e=await x(),{doc:t,getDoc:a}=await F(),n=async(...g)=>{try{const f=await a(t(e,...g));return f.exists()?f.data()||{}:{}}catch{return{}}},[o,s,d,u,b,c,m,y,p]=await Promise.all([n("_owner","aggregates","people","main"),n("_owner","aggregates","money","main"),n("_owner","aggregates","money","feed"),n("_owner","aggregates","reviews","main"),n("_owner","aggregates","outreach","main"),n("_owner","aggregates","community","main"),n("_owner","aggregates","avatars","main"),n("_owner","aggregates","app","main"),n("_owner","aggregates","overview","main")]);return{people:o,moneyDoc:s,feed:d,reviews:u,outreach:b,community:c,avatars:m,appDoc:y,overview:p}}function de(e){const t={},a=[];for(const n of e||[]){if(!(n.disclosure==="y"&&n.aiLabel==="y"&&n.metadataZero==="y")){a.push(n);continue}const s=String(n.presenterId||"");if(!s)continue;const d=t[s]||{id:s,name:n.presenterName||s,views:0,viewsWeek:0,sales:0,amountCents:0,currency:n.currency||"AUD",unverified:0};d.views+=r(n.views),se(n.date)&&(d.viewsWeek+=r(n.views)),typeof n.salesCount=="number"?(d.sales+=n.salesCount,d.amountCents+=r(n.salesAmountCents)):d.unverified+=1,t[s]=d}return{byId:t,held:a}}function ce(e,t){L.textContent=t||"";const a=e.people||{},n=a.weekly&&typeof a.weekly=="object"?a.weekly:{},o=Object.keys(n).sort().map(i=>({week:i,count:r(n[i])})),s=r(a.total)||r((e.overview||{}).signups),d=r(n[q()]),u=r(a.activatedWithin7d),b=s>0?Math.round(u/s*100):0,c=e.moneyDoc||{},m=r(c.cancelsPending)+r(c.cancelsEnded),y=Array.isArray((e.feed||{}).events)?e.feed.events:[],p=Array.isArray(c.cancelReasons)?c.cancelReasons:[],g=e.reviews||{},f=Array.isArray(g.inbox)?g.inbox:[],R=e.outreach||{},$=Array.isArray(R.campaigns)?R.campaigns:[],O=Array.isArray((e.community||{}).groups)?e.community.groups:[],{byId:W,held:_}=de((e.avatars||{}).pieces),E=e.appDoc||{},B=Array.isArray(E.postsByBrand)?E.postsByBrand:[],Y=S.cast.map(i=>{const h=W[i.id]||{views:0,viewsWeek:0,sales:0,amountCents:0,currency:"AUD"};return`<tr><td>${l(i.name)}</td><td>${h.views}</td><td>${h.viewsWeek}</td><td>${h.sales}</td><td>${C(h.amountCents,h.currency)}</td></tr>`}).join(""),z=_.length?`<p class="hint">${_.length} piece${_.length===1?"":"s"} held back: missing a trust rail (disclosure, AI label or metadata-zero), so ${_.length===1?"it is":"they are"} not in the counts above.</p>`:"",K=S.cast.some(i=>(W[i.id]||{}).unverified)?'<p class="hint">Some pieces carry sales marked "could not verify" (the payment record does not name the piece). Those are never counted as sales.</p>':"";D.innerHTML=`
  <section id="dashBox">
    <div class="layout">
      <nav class="side" id="dashNav">
        <button data-sec="overview" class="on">Overview</button>
        <button data-sec="people">People</button>
        <button data-sec="money">Money</button>
        <button data-sec="reviews">Reviews</button>
        <button data-sec="outreach">Outreach</button>
        <button data-sec="community">Community</button>
        <button data-sec="avatars">Avatars</button>
        <button data-sec="app">Posts &amp; brands</button>
      </nav>
      <div>
        <div class="card" data-panel="overview">
          <h2 style="margin-top:0">This week, at a glance</h2>
          <div class="grid">
            <div><div class="num" id="ovJoined">${d}</div><div class="lbl">joined this week (${s} all time)</div></div>
            <div><div class="num" id="ovMoney">${r(c.paying)}</div><div class="lbl">paying</div></div>
            <div><div class="num" id="ovLeaving">${m}</div><div class="lbl">leaving (pending + ended)</div></div>
          </div>
          <h3>Weeks so far</h3>
          <table id="ovWeeks"><thead><tr><th>Week</th><th>Joined</th></tr></thead><tbody>
            ${o.map(i=>`<tr><td>${l(i.week)}</td><td>${i.count}</td></tr>`).join("")}
          </tbody></table>
          ${o.length?"":'<p class="hint">No weeks yet. The numbers read zero until real people arrive.</p>'}
        </div>

        <div class="card" data-panel="people" hidden>
          <h2 style="margin-top:0">People</h2>
          <div class="grid">
            <div><div class="num" id="pplTotal">${s}</div><div class="lbl">signups, all time</div></div>
            <div><div class="num" id="pplWeek">${d}</div><div class="lbl">new this week</div></div>
            <div><div class="num" id="pplAct">${u} <span class="unit">of ${s} (${b}%)</span></div><div class="lbl">did the core action within 7 days</div></div>
            <div><div class="num" id="pplBack">${r(a.returning7d)}</div><div class="lbl">came back in days 2 to 7</div></div>
          </div>
          <p class="hint">Ruefly's core action: ${l(S.activationText)}. Activation counts signups who did it within 7 days of joining.</p>
        </div>

        <div class="card" data-panel="money" hidden>
          <h2 style="margin-top:0">Money</h2>
          <div class="grid">
            <div><div class="num" id="monPaying">${r(c.paying)}</div><div class="lbl">paying</div></div>
            <div><div class="num" id="monPending">${r(c.cancelsPending)}</div><div class="lbl">cancels pending (still in their paid time)</div></div>
            <div><div class="num" id="monEnded">${r(c.cancelsEnded)}</div><div class="lbl">cancels ended</div></div>
            <div><div class="num" id="monFailed">${r(c.failedPayments)}</div><div class="lbl">failed payments</div></div>
          </div>
          <h3>Monthly estimate</h3>
          <p><span class="num" id="monMrr">${C(c.mrrEstimateCents,c.mrrCurrency||"AUD")}</span> <span class="tag">ESTIMATE</span></p>
          <p class="hint">An estimate for steering only. The payment provider is the accounting truth.</p>
          <h3>Why people left (one line each)</h3>
          <table id="monReasons"><thead><tr><th>Week</th><th>Reason</th></tr></thead><tbody>
            ${p.map(i=>`<tr><td>${l(i.week||"")}</td><td>${l(i.text||"")}</td></tr>`).join("")}
          </tbody></table>
          ${p.length?"":'<p class="hint">No cancels recorded yet.</p>'}
          <h3>Subscription feed</h3>
          <p class="hint">Every subscription and payment event for Ruefly lands here, in this dashboard only (pattern R7). The feed's source is the payment setup: Apple and Google billing in the apps, Stripe on the web, one subscription brain over both.</p>
          <div id="subFeed">
            ${y.length?y.map(i=>`
              <div class="feed-item">
                <span class="when">${l(String(i.at||"").slice(0,10))}</span>
                ${l(i.kind||"event")} · ${l(i.plan||"")} · ${l(i.status||"")}
                ${typeof i.amountCents=="number"?` · ${C(i.amountCents,i.currency||"AUD")}`:""}
                ${i.provider?` · via ${l(i.provider)}`:""}
                ${i.cancelReason?`<div class="hint">Cancel reason: ${l(i.cancelReason)}</div>`:""}
              </div>`).join(""):'<p class="hint">No subscription events yet. Payments are not live in this app yet. The feed reads empty until the first real event.</p>'}
          </div>
        </div>

        <div class="card" data-panel="reviews" hidden>
          <h2 style="margin-top:0">Reviews</h2>
          <div class="grid">
            <div><div class="num" id="revCount">${r(g.count)}</div><div class="lbl">reviews, all stores</div></div>
            <div><div class="num" id="revUnreplied">${r(g.unreplied)}</div><div class="lbl">waiting for a reply</div></div>
            <div><div class="num" id="revStrangers">${r(g.strangerReplies)}</div><div class="lbl">notes from people you do not know</div></div>
          </div>
          <h3>Inbox</h3>
          ${f.length?f.map(i=>`
            <div class="feed-item">
              <span class="when">${l(i.date||"")}</span>
              <strong>${l(i.rating!=null?`${i.rating} stars`:"")}</strong> ${l(i.title||"")}
              <div>${l(i.body||"")}</div>
              <div class="hint">${l(i.author||"")} · ${l(i.platform||"")}${i.replied?" · replied":""}</div>
            </div>`).join(""):'<p class="hint">No reviews yet. Store feeds land here when connected; until then the inbox reads empty. Never filled in by hand-waving.</p>'}
        </div>

        <div class="card" data-panel="outreach" hidden>
          <h2 style="margin-top:0">Cold email</h2>
          ${$.length?`
          <div class="grid">
            <div><div class="num">${$.length}</div><div class="lbl">campaigns</div></div>
            <div><div class="num">${$.reduce((i,h)=>i+r(h.sent),0)}</div><div class="lbl">sent</div></div>
            <div><div class="num">${$.reduce((i,h)=>i+r(h.replies),0)}</div><div class="lbl">replies</div></div>
          </div>
          <table><thead><tr><th>Campaign</th><th>Status</th><th>Sent</th><th>Replies</th></tr></thead><tbody>
            ${$.map(i=>`<tr><td>${l(i.name||"")}</td><td>${l(i.status||"")}</td><td>${r(i.sent)}</td><td>${r(i.replies)}</td></tr>`).join("")}
          </tbody></table>`:'<p class="hint">Not running yet. This area opens when outreach starts for Ruefly.</p>'}
        </div>

        <div class="card" data-panel="community" hidden>
          <h2 style="margin-top:0">Facebook groups</h2>
          <table id="grpTable"><thead><tr><th>Group</th><th>Members</th><th>Growth this week</th><th>Posts</th><th>Source</th></tr></thead><tbody>
            ${O.map(i=>`<tr><td>${l(i.name||"")}</td><td>${r(i.members)}</td><td>${r(i.members)-r(i.membersLastWeek)}</td><td>${r(i.postsThisWeek)}</td><td>${l(i.source||"manual")}</td></tr>`).join("")}
          </tbody></table>
          ${O.length?"":'<p class="hint">No groups tracked yet.</p>'}
        </div>

        <div class="card" data-panel="avatars" hidden>
          <h2 style="margin-top:0">Avatars</h2>
          <p class="hint">Ruefly's own presenters only. Views and sales roll up from the per-piece feed; a sale counts only when the payment record names the piece.</p>
          <table id="avTable"><thead><tr><th>Avatar</th><th>Views</th><th>Views this week</th><th>Sales</th><th>Sales amount</th></tr></thead><tbody>
            ${Y}
          </tbody></table>
          ${z}
          ${K}
        </div>

        <div class="card" data-panel="app" hidden>
          <h2 style="margin-top:0">Posts &amp; brands</h2>
          <div class="grid">
            <div><div class="num">${r(E.brands)}</div><div class="lbl">client brands</div></div>
            <div><div class="num">${r(E.postsScheduled)}</div><div class="lbl">posts scheduled</div></div>
            <div><div class="num">${r(E.postsSent)}</div><div class="lbl">posts sent</div></div>
          </div>
          <h3>Per client brand</h3>
          ${B.length?`
          <table><thead><tr><th>Brand</th><th>Scheduled</th><th>Sent</th></tr></thead><tbody>
            ${B.map(i=>`<tr><td>${l(i.brand||"")}</td><td>${r(i.scheduled)}</td><td>${r(i.sent)}</td></tr>`).join("")}
          </tbody></table>`:'<p class="hint">No brand counts yet. This panel reads aggregate counts only.</p>'}
        </div>
      </div>
    </div>
    <p><button class="ghost" id="dashOut">Sign out</button></p>
  </section>`,document.getElementById("dashNav").addEventListener("click",i=>{const h=i.target.closest("button[data-sec]");h&&(document.querySelectorAll("#dashNav button").forEach(A=>A.classList.toggle("on",A===h)),document.querySelectorAll("[data-panel]").forEach(A=>{A.hidden=A.getAttribute("data-panel")!==h.getAttribute("data-sec")}))}),document.getElementById("dashOut").addEventListener("click",()=>{V().catch(()=>{})})}H(j?"":"Accounts are off in this build, so the door cannot open here.");X().catch(()=>{});Q(async e=>{if(!e){H();return}if(e.isAnonymous){N(e.email||"");return}if(!await oe()){N(e.email||"");return}const a=await re();ce(a,e.email||"")}).catch(()=>{});
