export function Footer() {
  return (
    <footer className="relative bg-[#0B0F14] text-slate-300 pt-20 pb-10 border-t border-white/10">
      {/* subtle top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* BRAND */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/images/logo.png"
                alt="SJ Hari Painting Logo"
                className="w-14 h-14 object-contain"
              />
              <div>
                <h2 className="text-2xl font-black tracking-tight text-white">
                  SJ Hari Painting
                </h2>
                <p className="text-sm uppercase tracking-widest text-primary font-bold">
                  Professional Services
                </p>
              </div>
            </div>

            <p className="max-w-md text-slate-400 leading-relaxed font-medium">
              Trusted{" "}
              <span className="text-white">
                Painting & Building Maintenance
              </span>
              service provider based in{" "}
              <strong>Ammandivilai, Kanyakumari District</strong>, delivering
              premium finishes, safety-first execution, and on-time completion
              across <strong>Tamil Nadu</strong>.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-black uppercase tracking-wider mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-slate-400 font-medium">
              <li className="text-white font-semibold">Sooriya Kumar T</li>
              <li>
                <a
                  href="tel:+919626344778"
                  className="hover:text-primary transition"
                >
                  +91 96263 44778
                </a>
              </li>
              <li>
                <a
                  href="tel:+919677899278"
                  className="hover:text-primary transition"
                >
                  +91 96778 99278
                </a>
              </li>
              <li>
                <a
                  href="mailto:sjharipainting@gmail.com"
                  className="hover:text-primary transition"
                >
                  sjharipainting@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white font-black uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="space-y-2 text-slate-400 font-medium">
              <li>Residential & Commercial Painting</li>
              <li>Spray & Texture Painting</li>
              <li>Spider / Rope Access Work</li>
              <li>Powder Coating</li>
              <li>Glass Cleaning & Maintenance</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 uppercase tracking-widest font-semibold">
          <p>
            © {new Date().getFullYear()} SJ Hari Painting. All Rights Reserved.
          </p>
          <p>Serving Ammandivilai · Kanyakumari · Tamil Nadu</p>
        </div>
      </div>
    </footer>
  );
}
