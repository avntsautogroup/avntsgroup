import React, { useState } from 'react';

const GHL_WEBHOOK = 'https://services.leadconnectorhq.com/hooks/dpEhUNA24tzTJXmQ2EBH/webhook-trigger/lFwNcdh8m73nk7G4n7AI';
const SHEETS_WEBHOOK = 'https://script.google.com/macros/s/AKfycbzlN1LezMPwnkOJgCB90vSxLtH02GvtkQAKU4Fr--4UAJgtA-Hxecx3fNdBG5MpBKdq/exec';

const PHONE_DISPLAY = '(437) 494-6376';
const PHONE_TEL = '+14374946376';

const MAKES = [
  '/lovable-uploads/conveyor/BMW.png',
  '/lovable-uploads/conveyor/Mercedes-Benz-Logo.png',
  '/lovable-uploads/conveyor/ferrari.png',
  '/lovable-uploads/conveyor/Porsche-Logo.png',
  '/lovable-uploads/conveyor/toyota.png',
  '/lovable-uploads/conveyor/hyundai.png',
  '/lovable-uploads/conveyor/kia-logo-png-transparent.png',
];

const css = `
.mx-page{background:#060607;color:#f5f5f4;font-family:'Outfit',sans-serif;min-height:100vh;overflow-x:hidden;position:relative}
.mx-glow{position:absolute;inset:0;pointer-events:none;overflow:hidden}
.mx-glow::before{content:"";position:absolute;top:-240px;left:50%;transform:translateX(-50%);width:950px;height:540px;border-radius:50%;background:radial-gradient(ellipse at center,rgba(210,215,225,.16),rgba(210,215,225,.04) 55%,transparent 75%)}
.mx-glow::after{content:"";position:absolute;bottom:-300px;right:-220px;width:720px;height:620px;border-radius:50%;background:radial-gradient(ellipse at center,rgba(210,215,225,.06),transparent 70%)}
.mx-wrap{position:relative;max-width:720px;margin:0 auto;padding:60px 20px 90px}
.mx-logo{display:block;width:110px;height:110px;margin:0 auto;object-fit:contain;filter:drop-shadow(0 6px 30px rgba(220,225,235,.25))}
.mx-tag{text-align:center;color:#a8a8a5;font-size:11px;letter-spacing:.42em;text-transform:uppercase;margin-top:10px}
.mx-h1{font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;text-align:center;line-height:1.04;font-size:clamp(44px,9vw,68px);margin-top:30px;background:linear-gradient(180deg,#ffffff 25%,#d7dae0 65%,#9ba0aa);-webkit-background-clip:text;background-clip:text;color:transparent}
.mx-sub{text-align:center;color:#a8a8a5;font-size:clamp(15px,2.6vw,18px);margin-top:14px;line-height:1.6}
.mx-chips{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:22px}
.mx-chip{border:1px solid rgba(220,224,232,.28);color:#dfe2e7;border-radius:999px;padding:8px 16px;font-size:13px;background:rgba(220,224,232,.05)}
.mx-chip b{color:#4be08d;font-weight:600}
.mx-makes{margin-top:34px;overflow:hidden;position:relative;-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}
.mx-makes-label{text-align:center;font-size:10px;letter-spacing:.34em;text-transform:uppercase;color:#77777c;margin-bottom:16px}
.mx-track{display:flex;align-items:center;gap:56px;width:max-content;animation:mxscroll 26s linear infinite}
.mx-track img{height:34px;width:auto;object-fit:contain;filter:grayscale(1) brightness(4.5) contrast(.75);opacity:.6}
@keyframes mxscroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.mx-cta-row{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:40px}
@media (max-width:560px){.mx-cta-row{grid-template-columns:1fr}}
.mx-cta{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;border-radius:20px;padding:24px 16px;text-decoration:none;transition:transform .15s ease}
.mx-cta:active{transform:scale(.975)}
.mx-cta .lbl{font-size:12px;font-weight:600;letter-spacing:.22em;text-transform:uppercase}
.mx-cta .big{font-size:clamp(23px,5.2vw,29px);font-weight:800;letter-spacing:.02em}
.mx-cta.call{background:linear-gradient(135deg,#34d17b 0%,#4be08d 45%,#1fa85f 100%);background-size:200% 200%;color:#04130a;box-shadow:0 14px 48px rgba(52,209,123,.3);animation:mxshine 5s ease-in-out infinite}
.mx-cta.call .lbl{color:#0c3520}
.mx-cta.text{background:#101013;color:#f5f5f4;border:1.5px solid rgba(220,224,232,.5)}
.mx-cta.text .lbl{color:#c9ccd2}
@keyframes mxshine{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
.mx-cta-note{text-align:center;color:#8b8b88;font-size:13px;margin-top:14px}
.mx-cta-note b{color:#d7d7d4;font-weight:600}
.mx-or{display:flex;align-items:center;gap:16px;color:#5d5d5b;font-size:11px;letter-spacing:.34em;text-transform:uppercase;margin:44px 0 26px}
.mx-or::before,.mx-or::after{content:"";flex:1;height:1px;background:linear-gradient(90deg,transparent,#2f2f33)}
.mx-or::after{background:linear-gradient(90deg,#2f2f33,transparent)}
.mx-card{position:relative;background:linear-gradient(180deg,#131315,#0d0d0f);border:1px solid #28282c;border-radius:26px;padding:40px 32px 34px;box-shadow:0 30px 80px rgba(0,0,0,.55)}
.mx-card::before{content:"";position:absolute;inset:0 0 auto 0;height:2px;border-radius:26px 26px 0 0;background:linear-gradient(90deg,transparent,#4be08d,transparent)}
@media (max-width:560px){.mx-card{padding:30px 20px 26px}}
.mx-card h2{font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;font-size:clamp(30px,6vw,40px);text-align:center;color:#fff}
.mx-card .p{text-align:center;color:#a8a8a5;font-size:15px;margin:8px 0 28px}
.mx-field{margin-bottom:16px}
.mx-field label{display:block;font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:#9fa2a8;margin:0 0 8px 4px}
.mx-field input,.mx-field textarea{width:100%;background:#09090a;border:1.5px solid #2c2c31;border-radius:14px;color:#f5f5f4;padding:18px 18px;font-size:17px;font-family:'Outfit',sans-serif;outline:none;transition:border .2s,box-shadow .2s}
.mx-field input:focus,.mx-field textarea:focus{border-color:#3ecf7f;box-shadow:0 0 0 4px rgba(62,207,127,.14)}
.mx-field input::placeholder,.mx-field textarea::placeholder{color:#55555a}
.mx-field textarea{min-height:110px;resize:vertical}
.mx-field.err input,.mx-field.err textarea{border-color:#e5484d}
.mx-btn{width:100%;margin-top:10px;background:linear-gradient(135deg,#34d17b,#4be08d 55%,#1fa85f);color:#04130a;font-family:'Outfit',sans-serif;font-weight:800;letter-spacing:.16em;font-size:16px;border:none;border-radius:14px;padding:20px;cursor:pointer;text-transform:uppercase;box-shadow:0 14px 40px rgba(52,209,123,.28);transition:transform .15s}
.mx-btn:active{transform:scale(.985)}
.mx-btn:disabled{opacity:.6}
.mx-fine{margin-top:14px;text-align:center;color:#6c6c6a;font-size:13px}
.mx-success{text-align:center;padding:44px 8px}
.mx-success .ok{width:72px;height:72px;border-radius:50%;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;font-size:32px;color:#4be08d;border:1.5px solid #4be08d;background:rgba(75,224,141,.08);box-shadow:0 0 50px rgba(75,224,141,.2)}
.mx-success h3{font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;font-size:36px;color:#fff}
.mx-success p{color:#a8a8a5;font-size:16px;margin-top:10px;line-height:1.6}
.mx-proof{margin-top:52px;display:flex;justify-content:center;align-items:stretch;text-align:center}
.mx-stat{flex:1;max-width:170px;padding:6px 10px;position:relative}
.mx-stat + .mx-stat::before{content:"";position:absolute;left:0;top:12%;bottom:12%;width:1px;background:linear-gradient(180deg,transparent,#3a3a40,transparent)}
.mx-stat .n{font-family:'Cormorant Garamond',Georgia,serif;font-size:clamp(26px,5vw,34px);font-weight:700;line-height:1;display:flex;align-items:center;justify-content:center;gap:5px;height:40px;background:linear-gradient(180deg,#fff,#b9bdc6);-webkit-background-clip:text;background-clip:text;color:transparent}
.mx-stat .n svg{width:17px;height:17px;fill:#dfe2e8;flex-shrink:0;margin-top:-2px}
.mx-stat .l{font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;font-weight:500;font-size:16px;color:#b9b5ac;margin-top:7px;line-height:1.25}
.mx-foot{margin-top:56px;border:1px solid #212125;border-radius:24px;background:linear-gradient(180deg,#0e0e10,#0a0a0c);padding:34px 24px 30px;text-align:center;position:relative;overflow:hidden}
.mx-foot img{width:54px;height:54px;object-fit:contain;opacity:.95}
.mx-foot .addr{font-family:'Cormorant Garamond',Georgia,serif;font-size:clamp(20px,4vw,26px);color:#eef0f4;margin-top:12px}
.mx-foot .city{color:#8f8f94;font-size:14px;letter-spacing:.14em;text-transform:uppercase;margin-top:4px}
.mx-foot .row{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:22px}
.mx-fbtn{display:inline-flex;align-items:center;gap:8px;text-decoration:none;font-weight:600;font-size:14px;padding:13px 22px;border-radius:999px;transition:transform .15s}
.mx-fbtn:active{transform:scale(.97)}
.mx-fbtn.map{background:linear-gradient(135deg,#34d17b,#4be08d 55%,#1fa85f);color:#04130a}
.mx-fbtn.ph{border:1.5px solid rgba(220,224,232,.45);color:#eef0f4;background:#101013}
.mx-fbtn svg{width:16px;height:16px}
`;

const MechanicalServiceForm: React.FC<{ serviceIdentifier?: string }> = ({
  serviceIdentifier = 'Mechanical Service',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const firstName = name.trim().split(/\s+/)[0] || '';
  const lastName = name.trim().split(/\s+/).slice(1).join(' ') || '';

  const validate = () => {
    const e: Record<string, boolean> = {};
    if (!name.trim()) e.name = true;
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) e.phone = true;
    if (email.trim() && !/^\S+@\S+\.\S+$/.test(email)) e.email = true;
    if (!reason.trim()) e.reason = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate() || isSubmitting) return;
    setIsSubmitting(true);

    const payload = {
      serviceIdentifier,
      source: typeof window !== 'undefined' ? window.location.href : 'avntsautogroup.com',
      firstName,
      lastName,
      phone: phone.trim(),
      email: email.trim(),
      issueDescription: reason.trim(),
      year: '',
      make: '',
      model: '',
      vin: '',
      selectedServices: [] as string[],
      appointmentDate: '',
      timePreference: '',
      needsTow: '',
      pickupAddress: '',
    };

    try {
      const params = new URLSearchParams();
      Object.entries(payload).forEach(([k, v]) =>
        params.append(k, Array.isArray(v) ? v.join(', ') : String(v)),
      );
      await fetch(GHL_WEBHOOK, { method: 'POST', body: params, mode: 'no-cors' });
    } catch (err) {
      console.error('GHL webhook error', err);
    }

    try {
      await fetch(SHEETS_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        mode: 'no-cors',
      });
    } catch (err) {
      console.error('Sheets webhook error', err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="mx-page">
      <style>{css}</style>
      <div className="mx-glow" />
      <div className="mx-wrap">
        <img className="mx-logo" src="/lovable-uploads/AVNTS-Silver-08.png" alt="AVNTS" />
        <div className="mx-tag">Dream it, Rent it, Own it.</div>

        <h1 className="mx-h1">
          Mechanical Service
          <br />
          &amp; Repairs
        </h1>
        <p className="mx-sub">
          Expert diagnostics and repairs for all makes and models.
          <br />
          From oil changes to full engine rebuilds.
        </p>

        <div className="mx-chips">
          <span className="mx-chip"><b>✓</b> All makes &amp; models</span>
          <span className="mx-chip"><b>✓</b> Certified technicians</span>
          <span className="mx-chip"><b>✓</b> Towing available</span>
        </div>

        <div className="mx-makes">
          <div className="mx-makes-label">We service every make</div>
          <div className="mx-track">
            {[...MAKES, ...MAKES].map((src, i) => (
              <img key={i} src={src} alt="" loading="lazy" />
            ))}
          </div>
        </div>

        <div className="mx-cta-row">
          <a className="mx-cta call" href={`tel:${PHONE_TEL}`}>
            <span className="lbl">📞 Call the shop</span>
            <span className="big">{PHONE_DISPLAY}</span>
          </a>
          <a className="mx-cta text" href={`sms:${PHONE_TEL}`}>
            <span className="lbl">💬 Text us</span>
            <span className="big">TEXT THE SHOP</span>
          </a>
        </div>
        <p className="mx-cta-note">
          Calls and texts go straight to our mechanical team. <b>Answered fast, 7 days a week.</b>
        </p>

        <div className="mx-or">or request a callback</div>

        <div className="mx-card">
          {isSubmitted ? (
            <div className="mx-success">
              <div className="ok">✓</div>
              <h3>Request Received</h3>
              <p>
                Thank you{firstName ? `, ${firstName}` : ''}! Our mechanical team will call you
                within the hour.
                <br />
                Need us right now? Tap the call button above.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h2>Request an Appointment</h2>
              <p className="p">Tell us what's going on and we'll call you back within the hour.</p>

              <div className={`mx-field${errors.name ? ' err' : ''}`}>
                <label>Name *</label>
                <input
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={`mx-field${errors.phone ? ' err' : ''}`}>
                <label>Phone *</label>
                <input
                  type="tel"
                  autoComplete="tel"
                  placeholder="(437) 555-0123"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className={`mx-field${errors.email ? ' err' : ''}`}>
                <label>Email (optional)</label>
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={`mx-field${errors.reason ? ' err' : ''}`}>
                <label>What's going on with the car? *</label>
                <textarea
                  placeholder="e.g. brakes squeaking, oil change, check engine light"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
              </div>

              <button className="mx-btn" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Request a Callback'}
              </button>
              <p className="mx-fine">No spam. No obligation. A real person calls you within the hour.</p>
            </form>
          )}
        </div>

        <div className="mx-proof">
          <div className="mx-stat">
            <div className="n">8+</div>
            <div className="l">Years in<br />Business</div>
          </div>
          <div className="mx-stat">
            <div className="n">2,000+</div>
            <div className="l">Vehicles<br />Serviced</div>
          </div>
          <div className="mx-stat">
            <div className="n">
              4.9
              <svg viewBox="0 0 24 24"><path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.3l7.1-.7z" /></svg>
            </div>
            <div className="l">Google<br />Rating</div>
          </div>
          <div className="mx-stat">
            <div className="n">GTA</div>
            <div className="l">Service<br />Coverage</div>
          </div>
        </div>

        <div className="mx-foot">
          <img src="/lovable-uploads/AVNTS-Silver-08.png" alt="AVNTS" />
          <div className="addr">7A Musgrave Street</div>
          <div className="city">Toronto, Ontario</div>
          <div className="row">
            <a
              className="mx-fbtn map"
              href="https://maps.app.goo.gl/3AaWLz8EKUpmXoje9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>
              Get Directions
            </a>
            <a className="mx-fbtn ph" href={`tel:${PHONE_TEL}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" /></svg>
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MechanicalServiceForm;
