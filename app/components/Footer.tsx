import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-adventure-orange rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3M9 21h6" />
                </svg>
              </div>
              <span className="font-montserrat text-xl font-bold">Wanderlust</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Exploración con Confianza. Tu agencia de viajes para descubrir el Perú y el mundo.
            </p>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-sm mb-4">Destinos</h4>
            <ul className="space-y-2">
              <li><Link href="/tours/valle-sagrado" className="text-sm text-white/60 hover:text-white transition-colors">Cusco</Link></li>
              <li><Link href="/tours/machu-picchu-vip" className="text-sm text-white/60 hover:text-white transition-colors">Machu Picchu</Link></li>
              <li><Link href="/tours/amazonia-explorer" className="text-sm text-white/60 hover:text-white transition-colors">Amazonía</Link></li>
              <li><Link href="/tours/andes-downhill" className="text-sm text-white/60 hover:text-white transition-colors">Aventura</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-sm mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-sm text-white/60 hover:text-white transition-colors">Blog</Link></li>
              <li><span className="text-sm text-white/60">Sobre nosotros</span></li>
              <li><span className="text-sm text-white/60">Términos y condiciones</span></li>
              <li><span className="text-sm text-white/60">Política de privacidad</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-sm mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-sm text-white/60">info@wanderlust.pe</li>
              <li className="text-sm text-white/60">+51 84 123 456</li>
              <li className="text-sm text-white/60">Cusco, Perú</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <span className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all cursor-pointer text-xs font-medium">FB</span>
              <span className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all cursor-pointer text-xs font-medium">IG</span>
              <span className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all cursor-pointer text-xs font-medium">YT</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© 2026 Wanderlust Travel. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <span className="text-xs text-white/30">Visa</span>
            <span className="text-xs text-white/30">Mastercard</span>
            <span className="text-xs text-white/30">Amex</span>
            <span className="text-xs text-white/30">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
