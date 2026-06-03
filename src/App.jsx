"use client";

import { useState, useEffect } from "react";
import {
  Brain,
  CloudSun,
  Satellite,
  Map,
  Bell,
  Bot,
  Sprout,
  LineChart,
  TrendingUp,
  Shield,
  ChevronRight,
  Menu,
  X,
  Database,
  Cpu,
  Globe,
  Eye,
  AlertTriangle,
  Radar,
  ArrowRight,
  Sparkles,
  Gauge,
  CloudRain,
  Wheat,
  Laptop,
  Zap,

} from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// Importar imágenes desde assets
import logo from "./assets/logo.webp";
import imagen1 from "./assets/imagen1.webp";
import imagen2 from "./assets/imagen2.webp";
import imagen3 from "./assets/imagen3.webp";
import imagen5 from "./assets/imagen5.webp";
import imagen6 from "./assets/imagen6.webp";
import imagen7 from "./assets/imagen7.webp";
import image1 from "./assets/image1.webp";

function SplashScreen({ onComplete }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-emerald-900 via-slate-900 to-emerald-800 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-6"
        >
          <img src={logo} alt="Agronautas" className="w-24 h-24 sm:w-32 sm:h-32 mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter"
        >
          AGRONAUTAS
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-24 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-slate-300 mt-4 text-sm sm:text-base"
        >
          Inteligencia de Riesgo Productivo
        </motion.p>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="mt-8 inline-block"
        >
          <div className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  );
}
export default function AgronautasLanding() {
  const [showSplash, setShowSplash] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroAnimateKey, setHeroAnimateKey] = useState(0);
  const [insuranceCarouselIndex, setInsuranceCarouselIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger animaciones del hero cuando la splash termina
  useEffect(() => {
    if (!showSplash) {
      // Pequeño delay para asegurar que el DOM se actualice
      const timer = setTimeout(() => {
        setHeroAnimateKey(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  const navItems = ["Risk Engine", "Soluciones", "Data", "Insurtech", "Roadmap"];
  // Agrega este componente de Splash Screen

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>
  {!showSplash && (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navbar Mejorada */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <img src={logo} alt="Agronautas" className="h-8 sm:h-10 w-auto" />
              <span className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent">
                AGRONAUTAS
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-slate-600 hover:text-emerald-600 font-medium transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
                </a>
              ))}
              <button className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-5 py-2 rounded-full font-medium hover:shadow-lg transition-all">
                Demo
              </button>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              {mobileMenuOpen ? <X className="text-slate-800" /> : <Menu className="text-slate-800" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -30, scaleY: 0.8 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -30, scaleY: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-[60px] sm:top-[72px] left-4 right-4 z-40 bg-gradient-to-b from-white to-slate-50 rounded-2xl shadow-2xl md:hidden border border-slate-100/50 overflow-hidden origin-top"
            >
              <div className="flex flex-col p-6 gap-2">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    className="text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 py-3 px-4 font-semibold flex items-center justify-between group rounded-lg transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item}</span>
                    <ChevronRight size={18} className="text-emerald-500 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                ))}
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navItems.length * 0.05 + 0.1, duration: 0.3 }}
                  className="mt-4 pt-4 border-t border-slate-200"
                >
               
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section - Fixed Background con parallax */}
      <section className="relative w-full min-h-screen overflow-hidden">
        <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${imagen1})`,
      backgroundAttachment: "fixed", // Esto hace que la imagen quede QUIETA
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
    <div className="absolute inset-0 bg-grid-pattern opacity-20" />
  </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <motion.div
            key={heroAnimateKey}
            style={{ opacity, scale }}
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge responsive */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 backdrop-blur-sm mb-6 sm:mb-8"
              >
                <Sparkles size={14} className="text-emerald-400 sm:w-4 sm:h-4" />
                <span className="text-emerald-400 font-medium text-xs sm:text-sm tracking-wide">
                  AGRONAUTA RISK ENGINE
                </span>
              </motion.div>

              {/* Título responsive */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white tracking-tighter leading-[1.1] sm:leading-[0.9]"
              >
                REDUCCIÓN DE
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                  INCERTIDUMBRE
                </span>
              </motion.h1>

              {/* Descripción responsive */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 mt-4 sm:mt-6 md:mt-8 max-w-3xl mx-auto px-4"
              >
                Inteligencia de Riesgo Productivo para Corrientes. Monitorea tus cultivos de yerba mate, 
                té, tabaco y arroz con tecnología satelital de precisión.
              </motion.p>

              {/* Botones responsive */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-12 px-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all shadow-2xl shadow-emerald-500/30 flex items-center justify-center gap-2 group"
                >
                  Explorar Plataforma
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/30 hover:bg-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all backdrop-blur-sm"
                >
                  Ver Risk Engine
                </motion.button>
              </motion.div>

              {/* Stats responsive */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-3xl mx-auto mt-12 sm:mt-20 pt-8 sm:pt-10 border-t border-white/20 px-4"
              >
                {[
                  { label: "Municipios Monitoreados", value: "79", color: "emerald" },
                  { label: "Hectáreas", value: "1.2M", color: "cyan" },
                  { label: "Cobertura Regional", value: "100%", color: "emerald" },
                  { label: "Precisión", value: "96%", color: "cyan" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + i * 0.1 }}
                    className="text-center"
                  >
                    <p className={`text-2xl sm:text-3xl md:text-4xl font-bold text-${stat.color}-400`}>
                      {stat.value}
                    </p>
                    <p className="text-slate-300 text-xs sm:text-sm mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-5 sm:bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Risk Engine Section */}
      <section className="relative py-16 sm:py-24 bg-white" id="risk-engine">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-emerald-600 font-bold tracking-wider uppercase text-xs sm:text-sm bg-emerald-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full inline-block">
                Core Technology
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mt-4">
                Agronautas
                <br />
                <span className="text-emerald-600">Risk Engine</span>
              </h2>
              <p className="text-slate-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-4 px-4">
                Motor de análisis territorial, climático y productivo especializado en los cultivos de Corrientes.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: Database, title: "Datos de Corrientes", desc: "Satélites, clima local, suelos y datos históricos regionales", stat: "15+ fuentes" },
                { icon: Brain, title: "IA Regional", desc: "Modelos predictivos entrenados en cultivos de Corrientes", stat: "96% precisión" },
                { icon: Zap, title: "Monitoreo Diario", desc: "Alertas en tiempo real de amenazas climáticas regionales", stat: "Actualización diaria" },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex-shrink-0">
                      <feature.icon className="text-emerald-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-800">{feature.title}</h3>
                      <p className="text-slate-500 text-sm sm:text-base mt-1">{feature.desc}</p>
                      <div className="mt-2 sm:mt-3 inline-flex items-center gap-1 text-emerald-600 text-xs sm:text-sm font-medium">
                        <span>{feature.stat}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {[
                { icon: Satellite, title: "Satellite API", desc: "NDVI, EVI, Biomasa, Vigor del cultivo" },
                { icon: CloudSun, title: "Climate API", desc: "Heladas, sequías, anegamientos, vientos fuertes" },
                { icon: Map, title: "Territorial Risk API", desc: "Riesgo climático para cada lote" },
                { icon: TrendingUp, title: "Yield API", desc: "Predicción de cosecha de yerba, té, tabaco y arroz" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: -5 }}
                  className="group bg-slate-50 p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-3 sm:gap-5">
                    <div className="p-2 sm:p-3 bg-emerald-100 rounded-lg sm:rounded-xl text-emerald-600 flex-shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800 text-sm sm:text-base">{item.title}</h4>
                      <p className="text-slate-500 text-xs sm:text-sm">{item.desc}</p>
                    </div>
                    <ChevronRight size={16} className="text-slate-400 group-hover:translate-x-1 transition" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Área 1 - Data Company con parallax */}
      <section className="relative w-full" id="data">
        <div className="relative min-h-[40vh] sm:min-h-[50vh] w-full flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${imagen2})`,
              backgroundAttachment: "fixed",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
          <div className="relative z-10 text-center px-4 py-16 sm:py-20 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-cyan-400 font-bold tracking-wider uppercase text-xs sm:text-sm">Área 1</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mt-3 sm:mt-4">Data Company</h2>
              <p className="text-slate-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-3 sm:mt-4 px-4">
                APIs especializadas para productores de yerba mate, té, tabaco y arroz de Corrientes
              </p>
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 bg-white py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[
                { icon: CloudRain, title: "Climate API", gradient: "from-blue-500 to-cyan-500", metrics: ["Heladas", "Anegamientos", "Sequías", "Vientos"] },
                { icon: Satellite, title: "Satellite API", gradient: "from-emerald-500 to-teal-500", metrics: ["NDVI", "Vigor", "Humedad", "Cobertura"] },
                { icon: Wheat, title: "Yield API", gradient: "from-amber-500 to-orange-500", metrics: ["Rendimiento", "Cosecha", "Calidad", "Ciclo"] },
                { icon: Map, title: "Territorial Risk API", gradient: "from-purple-500 to-pink-500", metrics: ["Riesgo Lote", "Histórico", "Pronóstico"] },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-slate-100"
                >
                  <div className={`h-1 sm:h-2 bg-gradient-to-r ${item.gradient}`} />
                  <div className="p-4 sm:p-6">
                    <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${item.gradient} w-fit mb-3 sm:mb-4`}>
                      <item.icon size={20} className="text-white sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-800">{item.title}</h3>
                    <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                      {item.metrics.map((m) => (
                        <span key={m} className="text-[10px] sm:text-xs bg-slate-100 text-slate-600 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full">
                          {m}
                        </span>
                      ))}
                    </div>
                    <button className="mt-4 sm:mt-6 text-emerald-600 font-medium text-sm sm:text-base flex items-center gap-1 group">
                      Explorar API
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Área 2 - SaaS Vertical Agro */}
      <section className="relative w-full" id="soluciones">
        <div className="relative min-h-[40vh] sm:min-h-[50vh] w-full flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${imagen3})`,
              backgroundAttachment: "fixed",
              filter: "blur(2px)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-black/60" />
          <div className="relative z-10 text-center px-4 py-16 sm:py-20 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-emerald-400 font-bold tracking-wider uppercase text-xs sm:text-sm">Área 2</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mt-3 sm:mt-4">SaaS Vertical Agro</h2>
              <p className="text-slate-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-3 sm:mt-4 px-4">
                Plataforma para productores de Corrientes: monitoreo satelital, alertas tempranas y asesor IA agronómico
              </p>
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 bg-white py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white"
              >
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <Eye className="text-emerald-400" size={20} />
                      <span className="text-emerald-400 font-bold text-sm">Módulo 1</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold">Monitoreo de Campos</h3>
                    <p className="text-slate-300 mt-2 text-sm sm:text-base">Seguimiento satelital de todos tus lotes en tiempo real</p>
                  </div>
                  <img 
                    src={image1} 
                    alt="Dashboard preview" 
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl object-cover shadow-xl" 
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
                  {["NDVI", "EVI", "Biomasa", "Estrés Hídrico"].map((item) => (
                    <div key={item} className="bg-white/10 rounded-lg sm:rounded-xl p-2 sm:p-3 backdrop-blur-sm">
                      <p className="text-xs sm:text-sm font-medium">{item}</p>
                      <p className="text-xl sm:text-2xl font-bold">0.78</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white"
              >
                <Bell className="mb-3 sm:mb-4" size={28} />
                <h3 className="text-xl sm:text-2xl font-bold">Centro de Alertas</h3>
                <p className="text-white/80 mt-2 text-sm sm:text-base">Alertas tempranas personalizadas</p>
                <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                      {["Alerta: Helada esperada", "Riesgo de anegamiento", "Sequía crítica"].map((alert, i) => (
                    <div key={i} className="bg-white/20 rounded-lg p-2 sm:p-3 backdrop-blur-sm">
                      <p className="font-medium text-sm sm:text-base">{alert}</p>
                      <p className="text-xs text-white/70">Hace 2 minutos</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Bot className="text-emerald-600" size={24} />
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 sm:px-3 rounded-full">Módulo 3</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800">Asesor IA Agronómico</h3>
                <p className="text-slate-500 mt-2 text-sm sm:text-base">Especializado en yerba mate, té, tabaco y arroz</p>
                <div className="mt-4 sm:mt-6 bg-slate-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <p className="text-slate-600 italic text-sm sm:text-base">"Mi yerba está con estrés hídrico, ¿qué hago?"</p>
                  <div className="mt-2 sm:mt-3 flex items-center gap-2 text-emerald-600">
                    <Sparkles size={14} />
                    <span className="text-xs sm:text-sm font-medium">Aumentar riego y aplicar fungicida preventivo</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-white shadow-xl"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Sprout size={24} />
                  <span className="text-xs font-bold bg-white/20 px-2 py-1 sm:px-3 rounded-full">Módulo 5</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Recomendador de Cultivos</h3>
                <p className="text-white/80 mt-2 text-sm sm:text-base">Optimiza rentabilidad para cultivos de Corrientes</p>
                <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
                  <span className="bg-white/20 rounded-full px-2 py-1 sm:px-3 text-xs sm:text-sm">Yerba Mate</span>
                  <span className="bg-white/20 rounded-full px-2 py-1 sm:px-3 text-xs sm:text-sm">Té</span>
                  <span className="bg-white/20 rounded-full px-2 py-1 sm:px-3 text-xs sm:text-sm">Tabaco</span>
                  <span className="bg-white/20 rounded-full px-2 py-1 sm:px-3 text-xs sm:text-sm">Arroz</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Área 3 - Commodities Intelligence */}
      <section className="py-16 sm:py-20 md:py-24 bg-slate-50" id="commodities">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-600 font-bold tracking-wider uppercase text-xs sm:text-sm bg-amber-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                Área 3
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-4">Commodities Intelligence</h2>
              <p className="text-slate-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-3 sm:mt-4 px-4">
                Proyecciones de cosecha de Corrientes y alertas de precio en mercados internacionales
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: LineChart, title: "Proyección Yerba", value: "187K tn", change: "+3.2%", color: "emerald" },
              { icon: TrendingUp, title: "Exportación Regional", value: "$850M", change: "+12%", color: "blue" },
              { icon: AlertTriangle, title: "Riesgo Climático", value: "Moderado", change: "Heladas posibles", color: "orange" },
              { icon: Globe, title: "Precio Int'l Yerba", value: "USD 1.85/kg", change: "+1.8%", color: "purple" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-100"
              >
                <item.icon size={24} className={`text-${item.color}-500`} />
                <p className="text-slate-500 text-xs sm:text-sm mt-3 sm:mt-4">{item.title}</p>
                <p className="text-2xl sm:text-3xl font-bold text-slate-800">{item.value}</p>
                <span className="text-emerald-600 text-xs sm:text-sm font-medium">
                  {item.change}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Área 6 - Insurtech */}
      <section className="relative w-full" id="insurtech">
        <div className="relative min-h-[40vh] sm:min-h-[50vh] w-full flex items-center justify-center overflow-hidden">
          {/* Carrusel de imágenes */}
          <div className="absolute inset-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={insuranceCarouselIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${[imagen5, imagen6, imagen7][insuranceCarouselIndex]})`,
                    backgroundAttachment: "fixed",
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
          
          {/* Controles del carrusel */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setInsuranceCarouselIndex(idx)}
                className={`transition-all ${
                  insuranceCarouselIndex === idx
                    ? "bg-emerald-500 w-8 sm:w-10"
                    : "bg-white/40 hover:bg-white/60 w-2 sm:w-3"
                } h-2 sm:h-3 rounded-full`}
              />
            ))}
          </div>

          {/* Botones de navegación */}
          <button
            onClick={() => setInsuranceCarouselIndex((prev) => (prev === 0 ? 2 : prev - 1))}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-2 sm:p-3 rounded-full text-white transition-all"
          >
            <ChevronRight size={20} className="rotate-180" />
          </button>
          <button
            onClick={() => setInsuranceCarouselIndex((prev) => (prev === 2 ? 0 : prev + 1))}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-2 sm:p-3 rounded-full text-white transition-all"
          >
            <ChevronRight size={20} />
          </button>

          <div className="relative z-10 text-center px-4 py-16 sm:py-20 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-400 font-bold tracking-wider uppercase text-xs sm:text-sm">Área 6</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mt-3 sm:mt-4">Insurtech</h2>
              <p className="text-slate-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-3 sm:mt-4 px-4">
                Seguros diseñados para heladas, anegamientos y sequías de Corrientes
              </p>
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 bg-white py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: Shield, title: "Pricing Engine", desc: "Primas justas según riesgo real de tu lote", metrics: ["Precisión 96%", "Actualización diaria"] },
                { icon: Radar, title: "Seguros Paramétricos", desc: "Activación automática por umbrales climáticos", metrics: ["Heladas", "Anegamientos", "Sequías"] },
                { icon: Eye, title: "Detección de Daños", desc: "Verificación satelital de siniestros", metrics: ["Menos fraudes", "Liquidación 7 días"] },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-slate-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-slate-200"
                >
                  <item.icon size={28} className="text-blue-600 mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800">{item.title}</h3>
                  <p className="text-slate-500 mt-2 text-xs sm:text-sm">{item.desc}</p>
                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                    {item.metrics.map((m) => (
                      <span key={m} className="text-[10px] sm:text-xs bg-blue-100 text-blue-700 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full">
                        {m}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 sm:mt-12 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">Reducción de Incertidumbre</h3>
                  <p className="text-white/80 text-sm sm:text-base mt-1">Para productores de Corrientes y el sector agropecuario regional</p>
                </div>
                <button className="bg-white text-emerald-700 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold flex items-center gap-2 hover:shadow-xl transition text-sm sm:text-base">
                  Agendar Demo
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadmap - Timeline */}
      <section className="py-16 sm:py-20 md:py-24 bg-slate-50" id="roadmap">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-emerald-600 font-bold tracking-wider uppercase text-xs sm:text-sm bg-emerald-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                Hoja de Ruta
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-4">Orden de Ejecución</h2>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute left-4 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-emerald-500 via-emerald-400 to-transparent" />
            <div className="space-y-8 sm:space-y-12">
              {[
                { fase: "Fase 1", title: "Risk Engine", desc: "Construcción del motor de análisis territorial", icon: Cpu, bgColor: "bg-emerald-500", badgeBg: "bg-emerald-100", badgeText: "text-emerald-700", date: "Q1 2025" },
                { fase: "Fase 2", title: "SaaS Agro", desc: "Plataforma para productores y alertas tempranas", icon: Laptop, bgColor: "bg-blue-500", badgeBg: "bg-blue-100", badgeText: "text-blue-700", date: "Q2 2025" },
                { fase: "Fase 3", title: "Climate Score", desc: "Scores de riesgo climático y productivo", icon: Gauge, bgColor: "bg-amber-500", badgeBg: "bg-amber-100", badgeText: "text-amber-700", date: "Q3 2025" },
                { fase: "Fase 4", title: "Commodities Intelligence", desc: "Predicción de producción y señales de mercado", icon: TrendingUp, bgColor: "bg-purple-500", badgeBg: "bg-purple-100", badgeText: "text-purple-700", date: "Q4 2025" },
                { fase: "Fase 5", title: "Insurtech", desc: "Seguros paramétricos y detección de siniestros", icon: Shield, bgColor: "bg-red-500", badgeBg: "bg-red-100", badgeText: "text-red-700", date: "Q1 2026" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 pl-10 sm:pl-14 md:pl-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-2 ${item.badgeBg} ${item.badgeText}`}>
                      {item.fase}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800">{item.title}</h3>
                    <p className="text-slate-500 text-sm sm:text-base mt-1">{item.desc}</p>
                  </div>
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${item.bgColor} flex items-center justify-center shadow-lg`}>
                      <item.icon size={18} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="text-slate-400 font-mono text-xs sm:text-sm">{item.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Agronautas" className="h-10 sm:h-12 w-auto" />
              <span className="text-xl sm:text-2xl font-bold">AGRONAUTAS</span>
            </div>
            <p className="text-slate-400 text-center text-sm sm:text-base">
              Inteligencia Productiva para Corrientes, Argentina
            </p>
            <div className="flex gap-3 sm:gap-4">
              <button className="p-2 bg-slate-800 rounded-full hover:bg-emerald-600 transition">
                <Brain size={18} />
              </button>
              <button className="p-2 bg-slate-800 rounded-full hover:bg-emerald-600 transition">
                <Globe size={18} />
              </button>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-slate-500 text-xs sm:text-sm">
            © 2026 Agronautas - Especialistas en Corrientes
          </div>
        </div>
      </footer>
    </div>
  )}
    </>
  );
  
}

