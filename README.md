[hanko_kadoma.html](https://github.com/user-attachments/files/28908112/hanko_kadoma.html)
# hanko<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>はんこ門真 古川橋店｜門真市の印鑑・印刷専門店</title>
<meta name="description" content="門真市の印鑑・印刷専門店「はんこ門真 古川橋店」。個人印鑑・法人印鑑・ゴム印・名刺印刷・開業サポートまでワンストップ対応。古川橋駅徒歩6分。最短即日渡し。門真市・守口市・寝屋川市・大東市の皆様へ。">
<meta name="keywords" content="門真市 印鑑,門真市 はんこ,門真市 ゴム印,門真市 名刺印刷,法人印鑑 門真,開業印鑑 門真">
<style>
:root{
  --red:#b91c1c;--red-dark:#991b1b;--red-light:#fef2f2;
  --navy:#1e3a5f;--gold:#b5922a;
  --bg:#faf8f5;--white:#fff;--text:#2c2c2c;--sub:#666;
  --border:#e5ddd0;--light:#f5f0e8;
  --radius:6px;--shadow:0 2px 12px rgba(0,0,0,.1);
}
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{font-family:'Hiragino Kaku Gothic ProN','Yu Gothic','Meiryo',sans-serif;color:var(--text);background:var(--bg);font-size:15px;line-height:1.7;}
a{color:inherit;text-decoration:none;}

/* ── TOP BAR ── */
.topbar{background:var(--navy);color:rgba(255,255,255,.8);font-size:.75rem;text-align:center;padding:5px 16px;letter-spacing:.06em;}

/* ── HEADER ── */
header{background:#fff;border-bottom:2px solid var(--border);position:sticky;top:0;z-index:200;box-shadow:0 2px 8px rgba(0,0,0,.08);}
.hd-inner{max-width:1100px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;padding:10px 20px;gap:12px;}
.hd-logo{display:flex;align-items:center;gap:10px;}
.logo-mark{background:var(--red);color:#fff;font-size:.65rem;font-weight:700;width:46px;height:46px;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:4px;line-height:1.2;letter-spacing:.04em;flex-shrink:0;}
.logo-mark b{font-size:1rem;}
.logo-text h1{font-size:1.2rem;font-weight:700;color:var(--text);line-height:1;}
.logo-text small{font-size:.75rem;color:var(--sub);}
.hd-info{display:flex;align-items:center;gap:20px;}
.hd-hours{font-size:.78rem;color:var(--sub);line-height:1.5;}
.hd-hours span{display:block;}
.hd-tel-wrap{text-align:right;}
.hd-tel-label{font-size:.7rem;color:var(--sub);display:flex;align-items:center;gap:4px;}
.hd-tel{font-size:1.6rem;font-weight:700;color:var(--red);letter-spacing:.02em;line-height:1.1;}
.hd-tel-sub{font-size:.65rem;color:var(--sub);}

/* ── NAV ── */
nav{background:var(--red);}
.nav-inner{max-width:1100px;margin:0 auto;display:flex;overflow-x:auto;}
.nav-inner a{color:rgba(255,255,255,.9);padding:11px 14px;font-size:.78rem;white-space:nowrap;letter-spacing:.04em;transition:background .15s;}
.nav-inner a:hover{background:rgba(255,255,255,.15);}
.hamburger{display:none;background:none;border:none;cursor:pointer;padding:8px;flex-shrink:0;}
.hamburger span{display:block;width:22px;height:2px;background:var(--text);margin:4px 0;transition:.3s;}

/* ── PAGE SWITCHER ── */
.page{display:none;}
.page.active{display:block;}

/* ── HERO ── */
.hero{background:linear-gradient(120deg,#1a1a1a 0%,#2d1a1a 50%,#1a2d1a 100%);min-height:520px;display:flex;align-items:center;position:relative;overflow:hidden;}
.hero-bg{position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.015'%3E%3Ccircle cx='40' cy='40' r='30'/%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3Ccircle cx='40' cy='40' r='10'/%3E%3C/g%3E%3C/svg%3E") repeat;opacity:.4;}
.hero-overlay{position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.75) 0%,rgba(0,0,0,.3) 60%,transparent 100%);}
.hero-inner{max-width:1100px;margin:0 auto;padding:60px 24px;position:relative;z-index:1;display:grid;grid-template-columns:1fr 340px;gap:40px;align-items:center;width:100%;}
.hero-catch{font-size:clamp(2rem,5vw,3rem);font-weight:700;color:#fff;line-height:1.3;margin-bottom:16px;font-family:'Hiragino Mincho ProN','Yu Mincho',serif;}
.hero-catch span{color:#e8c97a;}
.hero-sub-catch{font-size:1.05rem;color:rgba(255,255,255,.9);margin-bottom:12px;font-weight:700;}
.hero-desc{font-size:.88rem;color:rgba(255,255,255,.75);line-height:1.8;margin-bottom:28px;}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;}
.btn-red{background:var(--red);color:#fff;padding:16px 24px;border-radius:var(--radius);font-size:.9rem;font-weight:700;display:inline-flex;align-items:center;gap:8px;transition:background .2s,transform .2s;box-shadow:0 4px 14px rgba(185,28,28,.45);}
.btn-red:hover{background:var(--red-dark);transform:translateY(-2px);}
.btn-red-outline{background:rgba(255,255,255,.1);color:#fff;border:2px solid rgba(255,255,255,.6);padding:14px 22px;border-radius:var(--radius);font-size:.9rem;font-weight:700;display:inline-flex;align-items:center;gap:8px;transition:all .2s;}
.btn-red-outline:hover{background:rgba(255,255,255,.2);}
.hero-card{background:rgba(255,255,255,.92);border-radius:10px;padding:24px;box-shadow:0 8px 24px rgba(0,0,0,.25);}
.hcard-tel-label{font-size:.72rem;color:var(--sub);margin-bottom:4px;}
.hcard-tel{font-size:1.8rem;font-weight:700;color:var(--red);letter-spacing:.02em;}
.hcard-tel a{color:var(--red);}
.hcard-hours{font-size:.75rem;color:var(--sub);margin-bottom:14px;}
.hcard-divider{border:none;border-top:1px solid var(--border);margin:14px 0;}
.hcard-pts{list-style:none;display:flex;flex-direction:column;gap:7px;}
.hcard-pts li{font-size:.82rem;color:var(--text);display:flex;align-items:center;gap:7px;}
.hcard-pts li::before{content:'✓';color:var(--red);font-weight:700;}

/* ── SECTION BASE ── */
section{padding:64px 20px;}
.sec-inner{max-width:1100px;margin:0 auto;}
.sec-hdg{text-align:center;margin-bottom:44px;}
.sec-hdg .label{font-size:.75rem;color:var(--sub);letter-spacing:.12em;margin-bottom:8px;}
.sec-hdg h2{font-size:clamp(1.3rem,3vw,1.75rem);font-weight:700;color:var(--text);position:relative;display:inline-block;padding-bottom:14px;}
.sec-hdg h2::after{content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:40px;height:2px;background:var(--red);}
.sec-hdg h2 .deco{display:block;width:60px;height:1px;background:var(--border);margin:0 auto 0;}
.divider-line{display:flex;align-items:center;gap:12px;justify-content:center;margin-bottom:8px;}
.divider-line::before,.divider-line::after{content:'';flex:1;max-width:60px;height:1px;background:var(--red);}

/* ── REASONS ── */
.reasons{background:#fff;}
.reasons-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}
.reason-card{text-align:center;padding:24px 16px;}
.reason-icon{width:64px;height:64px;border:2px solid var(--red);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:1.6rem;}
.reason-card h3{font-size:.9rem;font-weight:700;color:var(--text);margin-bottom:8px;line-height:1.4;}
.reason-card p{font-size:.78rem;color:var(--sub);line-height:1.7;}

/* ── SERVICES GRID ── */
.services{background:var(--bg);}
.srv-grid{display:grid;grid-template-columns:1fr 1fr;gap:3px;background:var(--border);}
.srv-card{background:#fff;display:flex;gap:16px;padding:20px;cursor:pointer;transition:background .15s;}
.srv-card:hover{background:#fdf5f5;}
.srv-img{width:120px;height:100px;flex-shrink:0;background:#e8e0d0;border-radius:4px;overflow:hidden;display:flex;align-items:center;justify-content:center;font-size:2.8rem;}
.srv-body h3{font-size:.95rem;font-weight:700;color:var(--text);margin-bottom:6px;line-height:1.3;}
.srv-body p{font-size:.78rem;color:var(--sub);line-height:1.7;}
.srv-more{display:inline-flex;align-items:center;gap:4px;color:var(--red);font-size:.75rem;font-weight:700;margin-top:8px;}
.srv-featured{background:var(--red-light);border:1px solid #fca5a5;border-radius:8px;padding:20px;margin-top:3px;display:flex;gap:20px;align-items:center;cursor:pointer;transition:background .15s;}
.srv-featured:hover{background:#fee2e2;}
.srv-feat-badge{background:var(--red);color:#fff;font-size:.68rem;font-weight:700;padding:3px 8px;border-radius:20px;letter-spacing:.06em;white-space:nowrap;}
.srv-feat-img{width:100px;height:80px;flex-shrink:0;background:#fca5a5;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:2.4rem;}
.srv-feat-body h3{font-size:1rem;font-weight:700;color:var(--text);margin-bottom:6px;}
.srv-feat-body p{font-size:.8rem;color:var(--sub);line-height:1.7;}

/* ── WORKS + VOICE ── */
.social-proof{background:#fff;}
.sp-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start;}
.sp-left h3,.sp-right h3{font-size:1rem;font-weight:700;text-align:center;margin-bottom:20px;display:flex;align-items:center;justify-content:center;gap:8px;color:var(--text);}
.sp-left h3::before{content:'🔴';}
.sp-right h3::before{content:'💬';}
.works-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
.work-card{border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;}
.work-img{height:90px;background:#e8e0d0;display:flex;align-items:center;justify-content:center;font-size:2.4rem;}
.work-body{padding:10px 12px;}
.work-body h4{font-size:.82rem;font-weight:700;color:var(--text);margin-bottom:4px;}
.work-body p{font-size:.72rem;color:var(--sub);line-height:1.6;}
.voice-list{display:flex;flex-direction:column;gap:14px;}
.voice-card{background:var(--bg);border-radius:8px;padding:16px 18px;position:relative;}
.voice-card::before{content:'"';font-size:2.5rem;color:var(--red);line-height:.8;position:absolute;top:8px;left:14px;font-family:serif;}
.voice-text{font-size:.85rem;color:var(--text);line-height:1.8;padding-left:24px;margin-bottom:8px;font-weight:500;}
.voice-name{font-size:.75rem;color:var(--sub);text-align:right;}

/* ── FAQ ── */
.faq{background:var(--bg);}
.faq-list{max-width:760px;margin:0 auto;display:flex;flex-direction:column;gap:0;border:1px solid var(--border);border-radius:8px;overflow:hidden;}
.faq-item{border-bottom:1px solid var(--border);}
.faq-item:last-child{border-bottom:none;}
.faq-q{display:flex;align-items:flex-start;gap:12px;padding:16px 20px;cursor:pointer;transition:background .15s;}
.faq-q:hover{background:var(--light);}
.faq-q-icon{background:var(--red);color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;flex-shrink:0;margin-top:1px;}
.faq-q-text{flex:1;font-size:.9rem;font-weight:700;}
.faq-toggle{color:var(--sub);font-size:.9rem;transition:transform .2s;flex-shrink:0;}
.faq-toggle.open{transform:rotate(180deg);}
.faq-a{display:none;padding:0 20px 16px 54px;}
.faq-a.open{display:block;}
.faq-a p{font-size:.85rem;color:var(--sub);line-height:1.8;}

/* ── ACCESS ── */
.access-section{background:#fff;}
.access-grid{display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:start;}
.access-info{display:flex;flex-direction:column;gap:14px;}
.access-row{display:flex;gap:14px;align-items:flex-start;}
.access-icon{width:36px;height:36px;background:var(--red);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.9rem;flex-shrink:0;color:#fff;}
.access-detail h4{font-size:.78rem;font-weight:700;color:var(--sub);margin-bottom:3px;}
.access-detail p{font-size:.88rem;color:var(--text);line-height:1.7;}
.access-walk{background:var(--light);border-radius:6px;padding:14px 16px;margin-top:4px;}
.access-walk h4{font-size:.78rem;font-weight:700;margin-bottom:8px;color:var(--text);}
.access-walk ol{list-style:none;counter-reset:walk;display:flex;flex-direction:column;gap:5px;}
.access-walk li{font-size:.78rem;color:var(--sub);display:flex;gap:8px;align-items:flex-start;}
.access-walk li::before{counter-increment:walk;content:counter(walk);background:var(--red);color:#fff;width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.65rem;font-weight:700;flex-shrink:0;margin-top:1px;}
.access-car{background:var(--red-light);border-radius:6px;padding:12px 16px;margin-top:8px;display:flex;gap:10px;align-items:flex-start;}
.access-car-icon{font-size:1.2rem;flex-shrink:0;}
.access-car p{font-size:.78rem;color:var(--sub);line-height:1.6;}
.map-box{border-radius:8px;overflow:hidden;border:1px solid var(--border);}
.map-placeholder-new{height:260px;background:linear-gradient(135deg,#e8f0fe,#dce8fa);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;color:#555;font-size:.85rem;}
.btn-map{background:var(--red);color:#fff;padding:14px 20px;display:flex;align-items:center;justify-content:center;gap:8px;font-size:.88rem;font-weight:700;width:100%;}

/* ── STICKY CTA BAR ── */
.cta-bar{background:#fff;border-top:2px solid var(--border);position:sticky;bottom:0;z-index:100;padding:12px 20px;display:flex;align-items:center;justify-content:space-between;gap:12px;box-shadow:0 -4px 16px rgba(0,0,0,.1);}
.cta-bar-left{font-size:.82rem;color:var(--sub);}
.cta-bar-left strong{color:var(--text);font-size:.9rem;display:block;}
.cta-bar-right{display:flex;gap:10px;flex-shrink:0;}
.cta-tel-btn{background:var(--red);color:#fff;padding:12px 20px;border-radius:var(--radius);font-size:.9rem;font-weight:700;display:flex;align-items:center;gap:6px;white-space:nowrap;}
.cta-form-btn{background:#fff;color:var(--red);border:2px solid var(--red);padding:10px 18px;border-radius:var(--radius);font-size:.82rem;font-weight:700;display:flex;align-items:center;gap:6px;white-space:nowrap;cursor:pointer;}

/* ── FOOTER ── */
footer{background:#1a1a1a;color:rgba(255,255,255,.6);padding:32px 20px 20px;}
.footer-inner{max-width:1100px;margin:0 auto;}
.footer-top{display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:32px;margin-bottom:24px;}
.footer-brand h3{color:#fff;font-size:1rem;margin-bottom:8px;}
.footer-brand p{font-size:.78rem;line-height:1.8;}
.footer-links h4{color:rgba(255,255,255,.4);font-size:.7rem;letter-spacing:.12em;margin-bottom:10px;}
.footer-links ul{list-style:none;display:flex;flex-direction:column;gap:6px;}
.footer-links a{font-size:.8rem;color:rgba(255,255,255,.5);transition:color .15s;}
.footer-links a:hover{color:#fff;}
.footer-bottom{border-top:1px solid rgba(255,255,255,.1);padding-top:16px;text-align:center;font-size:.72rem;}

/* ── INNER PAGES ── */
.page-hero-sm{background:linear-gradient(135deg,var(--navy),#122840);padding:48px 20px 40px;text-align:center;}
.page-hero-sm h1{color:#fff;font-size:clamp(1.4rem,3vw,1.9rem);margin-bottom:8px;}
.page-hero-sm p{color:rgba(255,255,255,.7);font-size:.88rem;}
.breadcrumb{background:var(--light);padding:10px 20px;font-size:.78rem;color:var(--sub);}
.breadcrumb a{color:var(--navy);}
.page-body{max-width:900px;margin:0 auto;padding:48px 20px 64px;}
.page-body h2{font-size:1.15rem;color:var(--navy);border-left:4px solid var(--red);padding-left:12px;margin:32px 0 14px;}
.page-body p{font-size:.9rem;color:var(--text);line-height:1.9;margin-bottom:12px;}
.item-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;margin:16px 0;}
.item-card{background:var(--light);border:1px solid var(--border);border-radius:8px;padding:18px;text-align:center;}
.item-card .ic{font-size:1.8rem;margin-bottom:8px;}
.item-card h3{font-size:.88rem;font-weight:700;color:var(--navy);margin-bottom:6px;}
.item-card p{font-size:.78rem;color:var(--sub);line-height:1.6;}
.contact-form{background:var(--light);border:1px solid var(--border);border-radius:8px;padding:28px;}
.form-row{margin-bottom:16px;}
.form-row label{display:block;font-size:.84rem;font-weight:700;color:var(--text);margin-bottom:5px;}
.req{color:var(--red);font-size:.72rem;margin-left:4px;}
.form-row input,.form-row textarea,.form-row select{width:100%;padding:11px 13px;border:1px solid var(--border);border-radius:4px;font-size:.9rem;background:#fff;font-family:inherit;}
.form-row textarea{height:110px;resize:vertical;}

/* ── RESPONSIVE ── */
@media(max-width:768px){
  .hd-inner{flex-wrap:wrap;padding:10px 14px;}
  .hd-info{flex-direction:column;align-items:flex-end;gap:4px;}
  .hero-inner{grid-template-columns:1fr;}
  .hero-card{display:none;}
  .reasons-grid{grid-template-columns:1fr 1fr;}
  .srv-grid{grid-template-columns:1fr;}
  .sp-grid{grid-template-columns:1fr;}
  .access-grid{grid-template-columns:1fr;}
  .footer-top{grid-template-columns:1fr;}
  .cta-bar-left{display:none;}
}
</style>
</head>
<body>

<div class="topbar">はんこ・印刷のことならお任せください！</div>

<!-- HEADER -->
<header>
  <div class="hd-inner">
    <div class="hd-logo">
      <div class="logo-mark"><span>はんこ</span><b>ひろば</b></div>
      <div class="logo-text">
        <h1>はんこ門真</h1>
        <small>古川橋店</small>
      </div>
    </div>
    <div class="hd-info">
      <div class="hd-hours">
        <span>🕐 営業時間　9:00〜19:00</span>
        <span>📅 定休日　日曜・祝日</span>
      </div>
      <div class="hd-tel-wrap">
        <div class="hd-tel-label">📞</div>
        <div class="hd-tel"><a href="tel:0669048131">06-6904-8131</a></div>
        <div class="hd-tel-sub">タップで電話がかかります</div>
      </div>
    </div>
  </div>
</header>

<!-- NAV -->
<nav>
  <div class="nav-inner">
    <a href="#" onclick="showPage('home')">ホーム</a>
    <a href="#" onclick="showPage('kojin')">個人印鑑</a>
    <a href="#" onclick="showPage('hojin')">法人印鑑</a>
    <a href="#" onclick="showPage('gomu')">ゴム印</a>
    <a href="#" onclick="showPage('print')">印刷</a>
    <a href="#" onclick="showPage('kaigyo')">開業サポート</a>
    <a href="#" onclick="showPage('kisetu')">季節の印刷物</a>
    <a href="#" onclick="showPage('faq')">FAQ</a>
    <a href="#" onclick="showPage('access')">店舗案内</a>
    <a href="#" onclick="showPage('contact')">お問い合わせ</a>
  </div>
</nav>

<!-- ===== HOME ===== -->
<div id="page-home" class="page active">

<!-- HERO -->
<div class="hero">
  <div class="hero-bg"></div>
  <div class="hero-overlay"></div>
  <div class="hero-inner">
    <div>
      <p class="hero-sub-catch">門真・守口で愛されて〇年。</p>
      <h2 class="hero-catch">お急ぎの印鑑・名刺印刷、<br>対面で丁寧に<span>お作りします。</span></h2>
      <p class="hero-desc">「ネット注文は難しくて不安…」「明日までに実印が必要」<br>そんな方もご安心ください。古川橋駅から徒歩6分、<br>地域密着の専門店だからできる【最短即日渡し】と<br>【ワンストップ対応】で、あなたの「困った」を解決します。</p>
      <div class="hero-btns">
        <a href="tel:0669048131" class="btn-red">📞 お急ぎの方はお電話ください：06-6904-8131</a>
        <a href="#" onclick="showPage('contact')" class="btn-red-outline">✉️ ネットからのお問い合わせ・見積依頼 ›</a>
      </div>
    </div>
    <div class="hero-card">
      <div class="hcard-tel-label">📞 お電話でのご相談</div>
      <div class="hcard-tel"><a href="tel:0669048131">06-6904-8131</a></div>
      <div class="hcard-hours">営業 9:00〜19:00｜日祝休</div>
      <hr class="hcard-divider">
      <ul class="hcard-pts">
        <li>電話1本でご相談できます</li>
        <li>見積もり無料・押しつけなし</li>
        <li>最短即日渡し対応</li>
        <li>来店歓迎・事前予約不要</li>
      </ul>
    </div>
  </div>
</div>

<!-- REASONS -->
<section class="reasons">
  <div class="sec-inner">
    <div class="sec-hdg">
      <p class="label">ネット通販とはここが違う！</p>
      <div class="divider-line"><h2>地元の皆様に選ばれる理由</h2></div>
    </div>
    <div class="reasons-grid">
      <div class="reason-card">
        <div class="reason-icon">🤝</div>
        <h3>対面相談で安心</h3>
        <p>印鑑のサイズや書体、名刺のデザインまで、プロがその場でご提案。</p>
      </div>
      <div class="reason-card">
        <div class="reason-icon">⚡</div>
        <h3>最短即日スピード対応</h3>
        <p>急な実印登録や、切らしてしまった名刺もまずはご相談ください。</p>
      </div>
      <div class="reason-card">
        <div class="reason-icon">🚀</div>
        <h3>開業準備をワンストップ支援</h3>
        <p>法人印、ゴム印、名刺、封筒、伝票まで一括で揃います。</p>
      </div>
      <div class="reason-card">
        <div class="reason-icon">💛</div>
        <h3>地域密着の丁寧なアフターフォロー</h3>
        <p>門真市周辺から法人様の大量注文の納品相談も承ります。</p>
      </div>
    </div>
  </div>
</section>

<!-- SERVICES -->
<section class="services">
  <div class="sec-inner">
    <div class="sec-hdg">
      <div class="divider-line"><h2>目的から探す取扱商品・サービス</h2></div>
    </div>
    <div class="srv-grid">
      <div class="srv-card" onclick="showPage('kojin')">
        <div class="srv-img">🔴</div>
        <div class="srv-body">
          <h3>個人印鑑<br>（実印・銀行印）</h3>
          <p>実印・銀行印・認印など、各種印鑑を豊富にご用意。手彫り・機械彫り・各種素材から選べます。</p>
          <span class="srv-more">詳しく見る ›</span>
        </div>
      </div>
      <div class="srv-card" onclick="showPage('hojin')">
        <div class="srv-img">🏢</div>
        <div class="srv-body">
          <h3>法人印鑑<br>（会社設立セット）</h3>
          <p>代表者印・銀行印・角印のセットがお得。会社設立に必要な印鑑をまとめてご用意します。</p>
          <span class="srv-more">詳しく見る ›</span>
        </div>
      </div>
      <div class="srv-card" onclick="showPage('gomu')">
        <div class="srv-img">🔷</div>
        <div class="srv-body">
          <h3>ゴム印・スタンプ</h3>
          <p>住所印・氏名印・社印・日付印・回転登録など、ビジネスに便利な各種スタンプが揃います。</p>
          <span class="srv-more">詳しく見る ›</span>
        </div>
      </div>
      <div class="srv-card" onclick="showPage('print')">
        <div class="srv-img">🖨️</div>
        <div class="srv-body">
          <h3>名刺・封筒・伝票印刷</h3>
          <p>名刺・封筒・伝票・チラシなど、ビジネスに必要な印刷物を高品質・短納期でお届けします。</p>
          <span class="srv-more">詳しく見る ›</span>
        </div>
      </div>
    </div>
    <div class="srv-featured" onclick="showPage('kaigyo')">
      <span class="srv-feat-badge">おすすめ</span>
      <div class="srv-feat-img">🚀</div>
      <div class="srv-feat-body">
        <h3>独立・開業まるごとサポートプラン</h3>
        <p>印鑑・名刺・封筒・伝票・ゴム印など、開業に必要なものをまとめてサポート。はじめての方も安心してご相談ください。</p>
        <span class="srv-more">詳しくはこちら ›</span>
      </div>
    </div>
  </div>
</section>

<!-- SOCIAL PROOF -->
<section class="social-proof">
  <div class="sec-inner">
    <div class="sec-hdg">
      <div class="divider-line"><h2>地元の企業様・近隣の皆様からの嬉しい声</h2></div>
    </div>
    <div class="sp-grid">
      <div class="sp-left">
        <h3>制作事例</h3>
        <div class="works-grid">
          <div class="work-card">
            <div class="work-img">🔴</div>
            <div class="work-body">
              <h4>個人実印（即日対応）</h4>
              <p>急ぎの実印登録でご来店。その日のうちにお渡しできました。</p>
            </div>
          </div>
          <div class="work-card">
            <div class="work-img">💼</div>
            <div class="work-body">
              <h4>名刺デザイン・印刷</h4>
              <p>ロゴからデザインをご提案。両面カラー印刷で印象的に。</p>
            </div>
          </div>
          <div class="work-card">
            <div class="work-img">🏢</div>
            <div class="work-body">
              <h4>法人印鑑セット</h4>
              <p>代表者印・角印・銀行印の会社設立セットをご用意。</p>
            </div>
          </div>
          <div class="work-card">
            <div class="work-img">✉️</div>
            <div class="work-body">
              <h4>封筒・伝票印刷</h4>
              <p>ロゴ入り封筒や伝票を作成。業務に合わせてご提案。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="sp-right">
        <h3>お客様の声</h3>
        <div class="voice-list">
          <div class="voice-card">
            <p class="voice-text">急に実印が必要になり、即日対応してもらえて本当に助かりました</p>
            <p class="voice-name">（門真市・T様）急ぎで実印が必要になり、ダメもとで伺ったのですが、その日のうちに作っていただきました。対応も丁寧で安心してお願いできました。</p>
          </div>
          <div class="voice-card">
            <p class="voice-text">開業時の印鑑と名刺、封筒をまとめてお願いしました。何度も足を運ばずに済んで楽でした</p>
            <p class="voice-name">（守口市・店舗経営O様）初めての開業で分からないことが多かったので、必要なものを全部まとめてサポートしてもらえて本当に助かりました。仕上がりも大満足です。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="faq">
  <div class="sec-inner">
    <div class="sec-hdg">
      <div class="divider-line"><h2>よくあるご質問</h2></div>
    </div>
    <div class="faq-list">
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">
          <span class="faq-q-icon">Q</span>
          <span class="faq-q-text">印鑑は最短どれくらいでできますか？</span>
          <span class="faq-toggle">∨</span>
        </div>
        <div class="faq-a"><p>素材や混雑状況によりますが、個人認印や一部の実印・名刺印刷などは最短即日でのお渡しが可能です。まずはお気軽にお電話で納期をご確認ください。</p></div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">
          <span class="faq-q-icon">Q</span>
          <span class="faq-q-text">実印登録に必要な書類について教えてください。</span>
          <span class="faq-toggle">∨</span>
        </div>
        <div class="faq-a"><p>印鑑登録には本人確認書類（運転免許証・マイナンバーカードなど）が必要です。詳しくはお住まいの市区町村の窓口にご確認ください。店頭でもご相談を承ります。</p></div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">
          <span class="faq-q-icon">Q</span>
          <span class="faq-q-text">法人印鑑セットには何が含まれますか？</span>
          <span class="faq-toggle">∨</span>
        </div>
        <div class="faq-a"><p>代表者印（丸印）・角印・銀行印の3点が基本セットです。ご用途に合わせてゴム印や名刺とまとめてご注文いただく開業セットもご用意しています。</p></div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">
          <span class="faq-q-icon">Q</span>
          <span class="faq-q-text">デザインの相談もできますか？</span>
          <span class="faq-toggle">∨</span>
        </div>
        <div class="faq-a"><p>はい。名刺・封筒・チラシのデザインもお任せください。お持ちのロゴデータを持ち込んでいただくことも可能です。まずはご相談ください。</p></div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">
          <span class="faq-q-icon">Q</span>
          <span class="faq-q-text">見積もりは無料ですか？</span>
          <span class="faq-toggle">∨</span>
        </div>
        <div class="faq-a"><p>はい、見積もりは無料です。電話・来店・フォームどちらからでもお気軽にご相談ください。</p></div>
      </div>
      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">
          <span class="faq-q-icon">Q</span>
          <span class="faq-q-text">駐車場はありますか？</span>
          <span class="faq-toggle">∨</span>
        </div>
        <div class="faq-a"><p>店舗前にコインパーキングがございます（提携駐車場はございません）。お車でのご来店も歓迎です。</p></div>
      </div>
    </div>
    <div style="text-align:center;margin-top:24px;"><a href="#" onclick="showPage('faq')" class="btn-red">すべてのFAQを見る</a></div>
  </div>
</section>

<!-- ACCESS -->
<section class="access-section">
  <div class="sec-inner">
    <div class="sec-hdg">
      <div class="divider-line"><h2>はんこ門真 古川橋店へのアクセス</h2></div>
    </div>
    <div class="access-grid">
      <div class="access-info">
        <div class="access-row">
          <div class="access-icon">📍</div>
          <div class="access-detail">
            <h4>住所</h4>
            <p>〒571-0039 大阪府門真市速見町9-1<br>ツインコートヒラタ1F</p>
          </div>
        </div>
        <div class="access-row">
          <div class="access-icon">🚃</div>
          <div class="access-detail">
            <h4>アクセス</h4>
            <p>京阪本線「古川橋駅」から徒歩6分</p>
          </div>
        </div>
        <div class="access-walk">
          <h4>🚶 徒歩ルートのご案内</h4>
          <ol>
            <li>古川橋駅の改札を出て、南口へ</li>
            <li>南口を出たら、右へ進みます</li>
            <li>府道158号線（旧国道）に沿って直進します</li>
            <li>「速見町」交差点を右折します</li>
            <li>まっすぐ進むと右手に「ツインコートヒラタ」があります（1Fが当店です）</li>
          </ol>
        </div>
        <div class="access-car">
          <div class="access-car-icon">🚗</div>
          <p><strong>お車でお越しの方へ</strong><br>店舗前にコインパーキングがございます。（提携駐車場はございません）</p>
        </div>
      </div>
      <div class="map-box">
        <div class="map-placeholder-new">
          <div style="font-size:2.5rem;">📍</div>
          <div style="font-weight:700;color:#333;">はんこ門真 古川橋店</div>
          <div>〒571-0039 大阪府門真市速見町9-1</div>
          <div style="color:#666;font-size:.78rem;">4.8 ★★★★★ 23件のクチコミ</div>
        </div>
        <a href="https://maps.google.com/?q=大阪府門真市速見町9-1" target="_blank" class="btn-map">📍 Googleマップで開く（ナビを開始）</a>
      </div>
    </div>
  </div>
</section>

</div><!-- /page-home -->

<!-- ===== KOJIN ===== -->
<div id="page-kojin" class="page">
  <div class="page-hero-sm"><h1>🔴 個人印鑑</h1><p>実印・銀行印・認印 — 一生ものの印鑑を専門店で</p></div>
  <div class="breadcrumb"><a href="#" onclick="showPage('home')">ホーム</a> › 個人印鑑</div>
  <div class="page-body">
    <p>印鑑は人生の節目に必要な大切なものです。はんこ門真では素材・書体・サイズを店頭でご覧いただきながら、最適な一本をご提案します。</p>
    <h2>取り扱い印鑑の種類</h2>
    <div class="item-grid">
      <div class="item-card"><div class="ic">📋</div><h3>実印</h3><p>不動産・車購入など重要な手続きに。役所に登録する大切な印鑑です。</p></div>
      <div class="item-card"><div class="ic">🏦</div><h3>銀行印</h3><p>口座開設・取引に使用。実印と分けることでセキュリティが高まります。</p></div>
      <div class="item-card"><div class="ic">✅</div><h3>認印</h3><p>日常の受け取り・確認に便利。お手頃な価格からご用意。</p></div>
    </div>
    <h2>豊富な素材・書体</h2>
    <p>チタン・黒水牛・柘・象牙など様々な素材から選べます。書体は篆書・印相体・隷書などご要望に応じてお選びください。</p>
    <div style="text-align:center;margin-top:28px;"><a href="#" onclick="showPage('contact')" class="btn-red">無料相談・見積もりはこちら</a></div>
  </div>
</div>

<!-- ===== HOJIN ===== -->
<div id="page-hojin" class="page">
  <div class="page-hero-sm"><h1>🏢 法人印鑑</h1><p>代表者印・角印・銀行印 — 開業・法人設立をサポート</p></div>
  <div class="breadcrumb"><a href="#" onclick="showPage('home')">ホーム</a> › 法人印鑑</div>
  <div class="page-body">
    <p>会社設立・開業時に必要な法人印鑑を一式まとめてご依頼いただけます。</p>
    <h2>法人印鑑セットの内容</h2>
    <div class="item-grid">
      <div class="item-card"><div class="ic">🔵</div><h3>代表者印（丸印）</h3><p>法務局への登記に必須。会社の顔となる最重要印鑑です。</p></div>
      <div class="item-card"><div class="ic">🟦</div><h3>角印</h3><p>請求書・見積書・契約書など日常業務に広く使用します。</p></div>
      <div class="item-card"><div class="ic">🏦</div><h3>法人銀行印</h3><p>法人口座の開設・決済に必要。代表者印と分けることを推奨します。</p></div>
    </div>
    <div style="text-align:center;margin-top:28px;"><a href="#" onclick="showPage('contact')" class="btn-red">法人セットの見積もりを依頼</a></div>
  </div>
</div>

<!-- ===== GOMU ===== -->
<div id="page-gomu" class="page">
  <div class="page-hero-sm"><h1>🔷 ゴム印・スタンプ</h1><p>業務効率アップの定番アイテム</p></div>
  <div class="breadcrumb"><a href="#" onclick="showPage('home')">ホーム</a> › ゴム印・スタンプ</div>
  <div class="page-body">
    <p>毎日の業務で活躍するゴム印・スタンプ。住所や社名を繰り返し押す手間を省き、業務効率を大幅に改善します。</p>
    <div class="item-grid">
      <div class="item-card"><div class="ic">📮</div><h3>住所印</h3><p>封筒・はがきへの住所記入に。個人・法人どちらも対応。</p></div>
      <div class="item-card"><div class="ic">🏷️</div><h3>社名スタンプ</h3><p>請求書・伝票などへの社名捺印に便利です。</p></div>
      <div class="item-card"><div class="ic">📅</div><h3>日付印・番号印</h3><p>書類管理に欠かせない日付・連番スタンプ。</p></div>
      <div class="item-card"><div class="ic">🔄</div><h3>インク補充・修正</h3><p>シャチハタのインク補充や既存ゴム印の修正も承ります。</p></div>
    </div>
    <div style="text-align:center;margin-top:28px;"><a href="#" onclick="showPage('contact')" class="btn-red">ゴム印のご相談はこちら</a></div>
  </div>
</div>

<!-- ===== PRINT ===== -->
<div id="page-print" class="page">
  <div class="page-hero-sm"><h1>🖨️ 印刷サービス</h1><p>名刺・封筒・チラシ・伝票 — 少部数から対応</p></div>
  <div class="breadcrumb"><a href="#" onclick="showPage('home')">ホーム</a> › 印刷サービス</div>
  <div class="page-body">
    <p>名刺から大判チラシまで、ビジネスに必要な印刷物をまとめてお任せください。</p>
    <div class="item-grid">
      <div class="item-card"><div class="ic">💼</div><h3>名刺</h3><p>個人・法人名刺を100枚〜。デザインテンプレートもご用意。</p></div>
      <div class="item-card"><div class="ic">✉️</div><h3>封筒</h3><p>長3・角2など各サイズ対応。社名・住所の印刷も。</p></div>
      <div class="item-card"><div class="ic">📄</div><h3>伝票・帳票</h3><p>複写伝票・請求書・領収書などオリジナル帳票を制作。</p></div>
      <div class="item-card"><div class="ic">📢</div><h3>チラシ・フライヤー</h3><p>A4・B5などお好みのサイズでご注文いただけます。</p></div>
    </div>
    <div style="text-align:center;margin-top:28px;"><a href="#" onclick="showPage('contact')" class="btn-red">印刷の見積もりを依頼する</a></div>
  </div>
</div>

<!-- ===== KAIGYO ===== -->
<div id="page-kaigyo" class="page">
  <div class="page-hero-sm"><h1>🚀 開業サポート</h1><p>開業に必要なものを一店舗でまとめてご依頼いただけます</p></div>
  <div class="breadcrumb"><a href="#" onclick="showPage('home')">ホーム</a> › 開業サポート</div>
  <div class="page-body">
    <p>「何を揃えればいいかわからない」という方も安心。開業経験豊富なスタッフが必要なものをリストアップし、まとめてご対応します。</p>
    <div class="item-grid">
      <div class="item-card"><div class="ic">🔵</div><h3>法人印鑑3点セット</h3><p>代表者印・角印・銀行印。法務局登記前にご準備を。</p></div>
      <div class="item-card"><div class="ic">💼</div><h3>名刺</h3><p>開業日に間に合うよう早めのご注文をおすすめします。</p></div>
      <div class="item-card"><div class="ic">✉️</div><h3>封筒・レターヘッド</h3><p>社名・住所入り封筒で信頼感をアップ。</p></div>
      <div class="item-card"><div class="ic">📮</div><h3>住所ゴム印</h3><p>日常業務で毎日活躍するゴム印は必需品です。</p></div>
    </div>
    <div style="text-align:center;margin-top:28px;"><a href="#" onclick="showPage('contact')" class="btn-red">開業準備の無料相談はこちら</a></div>
  </div>
</div>

<!-- ===== KISETU ===== -->
<div id="page-kisetu" class="page">
  <div class="page-hero-sm"><h1>🍂 季節の印刷物</h1><p>年賀状・暑中見舞い・挨拶状を毎年丁寧に</p></div>
  <div class="breadcrumb"><a href="#" onclick="showPage('home')">ホーム</a> › 季節の印刷物</div>
  <div class="page-body">
    <div class="item-grid">
      <div class="item-card"><div class="ic">🎍</div><h3>年賀状</h3><p>個人・法人向け年賀状印刷。デザインのご相談も承ります。</p></div>
      <div class="item-card"><div class="ic">🌻</div><h3>暑中見舞い</h3><p>夏のご挨拶に。涼しげなデザインをご提案します。</p></div>
      <div class="item-card"><div class="ic">❄️</div><h3>寒中見舞い</h3><p>年賀状の代わりや喪中のご挨拶に。</p></div>
      <div class="item-card"><div class="ic">📬</div><h3>各種挨拶状</h3><p>移転・開店・改訂挨拶など各種ご対応。</p></div>
    </div>
    <div style="text-align:center;margin-top:28px;"><a href="#" onclick="showPage('contact')" class="btn-red">季節の印刷物を相談する</a></div>
  </div>
</div>

<!-- ===== FAQ PAGE ===== -->
<div id="page-faq" class="page">
  <div class="page-hero-sm"><h1>❓ よくあるご質問</h1><p>お客様からよくいただくご質問をまとめました</p></div>
  <div class="breadcrumb"><a href="#" onclick="showPage('home')">ホーム</a> › よくあるご質問</div>
  <div class="page-body">
    <div class="faq-list">
      <div class="faq-item"><div class="faq-q" onclick="toggleFaq(this)"><span class="faq-q-icon">Q</span><span class="faq-q-text">印鑑は最短どれくらいでできますか？</span><span class="faq-toggle">∨</span></div><div class="faq-a"><p>素材や混雑状況によりますが、個人認印や一部の実印・名刺印刷などは最短即日でのお渡しが可能です。</p></div></div>
      <div class="faq-item"><div class="faq-q" onclick="toggleFaq(this)"><span class="faq-q-icon">Q</span><span class="faq-q-text">実印登録に必要な書類について教えてください。</span><span class="faq-toggle">∨</span></div><div class="faq-a"><p>印鑑登録には本人確認書類（運転免許証・マイナンバーカードなど）が必要です。詳しくは店頭でご相談ください。</p></div></div>
      <div class="faq-item"><div class="faq-q" onclick="toggleFaq(this)"><span class="faq-q-icon">Q</span><span class="faq-q-text">法人印鑑セットには何が含まれますか？</span><span class="faq-toggle">∨</span></div><div class="faq-a"><p>代表者印・角印・銀行印の3点が基本セットです。開業セットとしてゴム印や名刺と合わせてお得にご注文いただけます。</p></div></div>
      <div class="faq-item"><div class="faq-q" onclick="toggleFaq(this)"><span class="faq-q-icon">Q</span><span class="faq-q-text">デザインの相談もできますか？</span><span class="faq-toggle">∨</span></div><div class="faq-a"><p>はい。名刺・封筒・チラシのデザインもお任せください。ロゴデータの持ち込みも可能です。</p></div></div>
      <div class="faq-item"><div class="faq-q" onclick="toggleFaq(this)"><span class="faq-q-icon">Q</span><span class="faq-q-text">見積もりは無料ですか？</span><span class="faq-toggle">∨</span></div><div class="faq-a"><p>はい、見積もりは無料です。電話・来店・フォームどちらからでもお気軽にご相談ください。</p></div></div>
      <div class="faq-item"><div class="faq-q" onclick="toggleFaq(this)"><span class="faq-q-icon">Q</span><span class="faq-q-text">駐車場はありますか？</span><span class="faq-toggle">∨</span></div><div class="faq-a"><p>店舗前にコインパーキングがございます（提携駐車場はございません）。</p></div></div>
      <div class="faq-item"><div class="faq-q" onclick="toggleFaq(this)"><span class="faq-q-icon">Q</span><span class="faq-q-text">古くなった印鑑・ゴム印の修理もできますか？</span><span class="faq-toggle">∨</span></div><div class="faq-a"><p>シャチハタのインク補充や、ゴム印の修正・作り直しにも対応しております。商品をお持ち込みください。</p></div></div>
    </div>
  </div>
</div>

<!-- ===== ACCESS PAGE ===== -->
<div id="page-access" class="page">
  <div class="page-hero-sm"><h1>📍 店舗案内・アクセス</h1><p>お気軽にご来店ください</p></div>
  <div class="breadcrumb"><a href="#" onclick="showPage('home')">ホーム</a> › 店舗案内・アクセス</div>
  <div class="page-body">
    <div class="access-grid">
      <div class="access-info">
        <div class="access-row"><div class="access-icon">📍</div><div class="access-detail"><h4>住所</h4><p>〒571-0039 大阪府門真市速見町9-1 ツインコートヒラタ1F</p></div></div>
        <div class="access-row"><div class="access-icon">📞</div><div class="access-detail"><h4>電話番号</h4><p><a href="tel:0669048131" style="color:var(--red);font-weight:700;">06-6904-8131</a></p></div></div>
        <div class="access-row"><div class="access-icon">🕐</div><div class="access-detail"><h4>営業時間</h4><p>月〜土 9:00〜19:00｜日曜・祝日定休</p></div></div>
        <div class="access-row"><div class="access-icon">🚃</div><div class="access-detail"><h4>アクセス</h4><p>京阪本線「古川橋駅」から徒歩6分</p></div></div>
        <div class="access-walk">
          <h4>🚶 徒歩ルートのご案内</h4>
          <ol>
            <li>古川橋駅の改札を出て、南口へ</li>
            <li>南口を出たら、右へ進みます</li>
            <li>府道158号線（旧国道）に沿って直進します</li>
            <li>「速見町」交差点を右折します</li>
            <li>まっすぐ進むと右手に「ツインコートヒラタ」（1Fが当店）</li>
          </ol>
        </div>
        <div class="access-car"><div class="access-car-icon">🚗</div><p><strong>お車でお越しの方：</strong>店舗前にコインパーキングがございます（提携駐車場はございません）</p></div>
      </div>
      <div class="map-box">
        <div class="map-placeholder-new"><div style="font-size:2.5rem;">📍</div><div style="font-weight:700;color:#333;">はんこ門真 古川橋店</div><div>〒571-0039 大阪府門真市速見町9-1</div></div>
        <a href="https://maps.google.com/?q=大阪府門真市速見町9-1" target="_blank" class="btn-map">📍 Googleマップで開く（ナビを開始）</a>
      </div>
    </div>
  </div>
</div>

<!-- ===== CONTACT ===== -->
<div id="page-contact" class="page">
  <div class="page-hero-sm"><h1>📩 お問い合わせ</h1><p>ご相談・見積もり依頼・ご注文はこちらから</p></div>
  <div class="breadcrumb"><a href="#" onclick="showPage('home')">ホーム</a> › お問い合わせ</div>
  <div class="page-body">
    <p style="text-align:center;margin-bottom:24px;">お電話（<a href="tel:0669048131" style="color:var(--red);font-weight:700;">06-6904-8131</a>）またはフォームにてお気軽にお問い合わせください。</p>
    <div class="contact-form">
      <div class="form-row"><label>お名前<span class="req">※必須</span></label><input type="text" placeholder="例：山田 太郎"></div>
      <div class="form-row"><label>会社名・屋号（法人の場合）</label><input type="text" placeholder="例：株式会社〇〇"></div>
      <div class="form-row"><label>電話番号<span class="req">※必須</span></label><input type="tel" placeholder="例：06-1234-5678"></div>
      <div class="form-row"><label>メールアドレス</label><input type="email" placeholder="例：info@example.com"></div>
      <div class="form-row"><label>お問い合わせ種別<span class="req">※必須</span></label>
        <select><option value="">選択してください</option><option>個人印鑑について</option><option>法人印鑑について</option><option>ゴム印・スタンプについて</option><option>印刷サービスについて</option><option>開業サポートについて</option><option>季節の印刷物について</option><option>見積もり依頼</option><option>その他</option></select>
      </div>
      <div class="form-row"><label>ご相談内容<span class="req">※必須</span></label><textarea placeholder="ご希望の商品・数量・納期などをお聞かせください。"></textarea></div>
      <div style="text-align:center;"><button class="btn-red" style="border:none;cursor:pointer;">送信する</button></div>
    </div>
  </div>
</div>

<!-- FOOTER -->
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <h3>はんこ門真 古川橋店</h3>
        <p>〒571-0039 大阪府門真市速見町9-1 ツインコートヒラタ1F<br>TEL: 06-6904-8131｜営業 月〜土 9:00〜19:00</p>
      </div>
      <div class="footer-links">
        <h4>サービス</h4>
        <ul>
          <li><a href="#" onclick="showPage('kojin')">個人印鑑</a></li>
          <li><a href="#" onclick="showPage('hojin')">法人印鑑</a></li>
          <li><a href="#" onclick="showPage('gomu')">ゴム印・スタンプ</a></li>
          <li><a href="#" onclick="showPage('print')">印刷サービス</a></li>
          <li><a href="#" onclick="showPage('kaigyo')">開業サポート</a></li>
          <li><a href="#" onclick="showPage('kisetu')">季節の印刷物</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>ご案内</h4>
        <ul>
          <li><a href="#" onclick="showPage('faq')">よくあるご質問</a></li>
          <li><a href="#" onclick="showPage('access')">店舗案内・アクセス</a></li>
          <li><a href="#" onclick="showPage('contact')">お問い合わせ</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">© 2025 はんこ門真 古川橋店 All Rights Reserved.　門真市 印鑑 / 門真市 名刺印刷 / 法人印鑑 門真</div>
  </div>
</footer>

<!-- STICKY CTA BAR -->
<div class="cta-bar">
  <div class="cta-bar-left">
    <strong>ご相談・お見積りはお気軽にどうぞ！</strong>
    お電話・来店・フォームどちらでも歓迎
  </div>
  <div class="cta-bar-right">
    <a href="tel:0669048131" class="cta-tel-btn">📞 06-6904-8131</a>
    <button class="cta-form-btn" onclick="showPage('contact')">✉️ お問い合わせ・見積依頼はこちら</button>
  </div>
</div>

<script>
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  var el=document.getElementById('page-'+id);
  if(el){el.classList.add('active');window.scrollTo(0,0);}
}
function toggleFaq(el){
  var a=el.nextElementSibling;
  var t=el.querySelector('.faq-toggle');
  var open=a.classList.contains('open');
  // close all
  document.querySelectorAll('.faq-a').forEach(x=>x.classList.remove('open'));
  document.querySelectorAll('.faq-toggle').forEach(x=>x.classList.remove('open'));
  if(!open){a.classList.add('open');t.classList.add('open');}
}
</script>
</body>
</html>
