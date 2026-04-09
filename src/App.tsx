import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { a } from 'motion/react-client';

const FadeUp = ({ children, delay = 0, className = "", ...props }: { children: React.ReactNode, delay?: number, className?: string, [key: string]: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const techTabs = [
    {
      title: "Inteligencia Artificial",
      category: "IA / ML / CV",
      heading: "Tutoría y Evaluación Automática",
      desc: "IA Generativa para tutoría educativa, Machine Learning y Visión Computacional para evaluación automática y métricas objetivas de la técnica quirúrgica."
    },
    {
      title: "Procesamiento 3D",
      category: "DICOM a 3D",
      heading: "Modelos Específicos del Paciente",
      desc: "Transformación de datos de CT/MRI en modelos interactivos específicos de cada paciente para una planificación precisa."
    },
    {
      title: "Realidad Extendida",
      category: "AR / XR",
      heading: "Integración Nativa",
      desc: "Integración nativa con Meta Quest 3, y desarrollo en Unity con modelado 3D (Technical Art) para inmersión total."
    },
    {
      title: "Arquitectura Cloud",
      category: "Web-based",
      heading: "Infraestructura Escalable",
      desc: "Garantizamos que la Fase 1 funcione en cualquier navegador, eliminando la barrera de entrada y democratizando el acceso."
    }
  ];

  return (
    <div className="min-h-screen selection:bg-accent selection:text-navy">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-5 bg-navy/80 backdrop-blur-md border-b border-border-subtle">
        <a href="#" className="flex items-center gap-3 font-syne font-extrabold text-lg tracking-widest text-white">
          <img src="/img/logo-removebg-preview.png" alt="Airstark Logo" className="w-8 h-8 rounded-full border border-white/20" />
          AIRSTARk
        </a>
        <ul className="hidden md:flex gap-10">
          {['Inicio', 'Nosotros', 'Solución', 'Producto', 'Equipo'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-sm text-slate-400 hover:text-white transition-colors tracking-wide">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <a href="#cta" className="hidden md:inline-block bg-white text-navy font-syne font-bold text-xs tracking-wider px-6 py-2.5 rounded-md hover:opacity-90 transition-opacity">
            SOLICITAR DEMO
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-16 overflow-hidden">

        <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto relative z-10">
          <div>
            <FadeUp>
              <div className="flex items-center gap-3 font-syne text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-6">
                <span className="w-6 h-px bg-accent" />
                Startup Deep-Tech | Hecho en Chiclayo, Perú
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-wide text-white mb-8">
                DEL AULA AL QUIRÓFANO:<br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>CIRUGÍA SIN MIEDO.</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-6">
                Somos el ecosistema quirúrgico inteligente que democratiza el entrenamiento médico en Perú, integrando IA, Realidad Aumentada y Gemelos Digitales.
              </p>
              <p className="text-accent font-syne font-medium italic mb-10">
                "Practica en el mundo virtual, salva vidas en el mundo real."
              </p>
            </FadeUp>
            <FadeUp delay={0.3} className="flex flex-wrap gap-4">
              <a href="#cta" className="bg-white text-navy font-syne font-bold text-sm tracking-wider px-8 py-3.5 rounded-md hover:opacity-90 transition-all hover:-translate-y-0.5">
                SOLICITAR DEMO
              </a>
              <a href="#nosotros" className="bg-transparent text-white border border-border-subtle font-syne font-bold text-sm tracking-wider px-8 py-3.5 rounded-md hover:border-white/30 transition-all">
                VER DECK DE INVERSIÓN
              </a>
            </FadeUp>
          </div>

          <FadeUp delay={0.2} className="relative flex justify-center items-center mt-12 md:mt-0">
            <div className="relative rounded-2xl overflow-hidden border border-border-subtle shadow-[0_0_80px_rgba(74,158,255,0.08)] bg-navy-mid aspect-square w-full max-w-md flex items-center justify-center">
              <img src="/img/realidadaumentada.jpg" alt="Virtual Reality Surgery" className="w-full h-full object-cover opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-navy-mid border border-border-subtle rounded-xl p-5 z-20">
              <div className="font-display text-4xl text-accent">70%</div>
              <div className="text-xs text-slate-400 mt-1">Eventos adversos evitables</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-navy-mid border border-border-subtle rounded-xl p-5 z-20">
              <div className="font-display text-4xl text-accent">+ 6 MLL</div>
              <div className="text-xs text-slate-400 mt-1">Cirugias Anuales en el Perú</div>
            </div>
            
          </FadeUp>
        </div>
      </section>

      {/* BRAND STRIP */}
      <div className="bg-navy-mid border-y border-border-subtle py-6 overflow-hidden">
        <div className="flex gap-16 w-max animate-marquee">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {['Universidad Señor de Sipán', 'Universidad Nacional Pedro Ruiz Gallo', 'Hospital Regional Lambayeque', 'Universidad Señor de Sipán', 'Universidad Nacional Pedro Ruiz Gallo', 'Hospital Regional Lambayeque'].map((brand, j) => (
                <span key={j} className="font-syne text-xs font-bold tracking-[0.15em] text-slate-400 uppercase flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {brand}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ABOUT & PROBLEM */}
      <section id="nosotros" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div className="relative aspect-[4/5] bg-gradient-to-br from-navy-light to-navy-mid rounded-2xl border border-border-subtle overflow-hidden flex items-center justify-center">
              <img src="/img/cirugiarea.png" alt="Medical Training" className="w-full h-full object-cover" />
              <div className="absolute -right-6 top-10 bg-navy-mid border border-border-subtle rounded-xl p-5 backdrop-blur-md">
                <div className="font-display text-3xl text-accent">15,000</div>
                <div className="text-xs text-slate-400 mt-1">Déficit de especialistas</div>
              </div>
            </div>
          </FadeUp>
          <div>
            <FadeUp>
              <div className="font-syne text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-accent mb-4">Sobre Nosotros</div>
              <h2 className="font-display text-4xl md:text-5xl leading-[0.95] mb-6">TRANSFORMAMOS EL APRENDIZAJE MÉDICO</h2>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="font-syne text-[0.68rem] font-bold tracking-widest uppercase px-4 py-1.5 border border-accent/30 bg-accent-dim text-accent rounded-full">MedTech</span>
                <span className="font-syne text-[0.68rem] font-bold tracking-widest uppercase px-4 py-1.5 border border-border-subtle text-slate-200 rounded-full">EdTech</span>
                <span className="font-syne text-[0.68rem] font-bold tracking-widest uppercase px-4 py-1.5 border border-border-subtle text-slate-200 rounded-full">XR</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed font-light mb-8">
                Somos una startup deep-tech nacida en Chiclayo, enfocada en cerrar la brecha tecnológica y educativa en el sector salud. Acompañamos al médico en su ruta de excelencia: desde la formación universitaria hasta la práctica en el quirófano de alta complejidad.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h3 className="font-syne font-bold text-lg mb-4 text-white">El Problema del Mercado</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-400 font-light"><strong className="text-white font-medium">Error Irreversible:</strong> 14.6% de pacientes en Perú presentan complicaciones postoperatorias (102,200 casos/año).</p>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-400 font-light"><strong className="text-white font-medium">Centralización:</strong> 64% de los programas y tecnología están en Lima, dejando a regiones sin acceso.</p>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-400 font-light"><strong className="text-white font-medium">Barrera Tecnológica:</strong> Simuladores globales cuestan entre $50k y $150k, inaccesibles para el 80% de hospitales en LatAm.</p>
                </li>
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SERVICES / PRODUCT */}
      <section id="solución" className="py-24 px-6 md:px-16 bg-navy-mid border-y border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="font-syne text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-accent mb-4">La Solución</div>
              <h2 className="font-display text-4xl md:text-5xl">EL ECOSISTEMA AIRSTARK</h2>
              <p className="text-slate-400 text-sm mt-4 max-w-xl font-light">
                Un modelo híbrido low-cost con metodología "Aviation-Grade". Los cirujanos generan memoria muscular y planificación visual antes de la primera incisión.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" id="producto">
            {[
              { phase: "Fase 1", title: "Fundamentos", desc: "Plataforma Web. Exploración anatómica 3D, casos clínicos dinámicos y una IA tutora para pregrado.", link: "Ver MVP Educativo Web", url: "https://airstark.vercel.app/" },
              { phase: "Fase 2", title: "Destreza", desc: "Simulación XR. Entrenamiento inmersivo con gafas de realidad mixta en un entorno seguro.", link: "Ver MVP en Meta Quest 3", url: "https://mvp.airstark.com", videoUrl: "https://www.youtube.com/embed/_3spXKFtuH4" },
              { phase: "Fase 3", title: "Estrategia", desc: "Planificación Preoperatoria. Gemelos Digitales 3D a partir de tomografías/resonancias.", link: "Conocer Más", url: "https://mvp.airstark.com" },
              { phase: "Fase 4", title: "Acción", desc: "Navegación Intraoperatoria AR. Superposición del gemelo digital sobre el paciente real en quirófano.", link: "Conocer Más", url: "https://mvp.airstark.com" }
            ].map((service, i) => (
              <FadeUp key={i} delay={i * 0.1} className="group relative bg-card border border-border-subtle rounded-2xl p-8 hover:-translate-y-2 hover:bg-accent-dim hover:border-accent/30 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="font-syne text-xs font-bold text-accent mb-2">{service.phase}</div>
                <h3 className="font-syne font-bold text-lg text-white mb-4">{service.title}</h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed mb-8">{service.desc}</p>
                {service.videoUrl ? (
                  <button onClick={() => { setVideoUrl(service.videoUrl); setIsModalOpen(true); }} className="inline-flex items-center gap-2 font-syne text-xs font-bold tracking-widest uppercase text-accent group-hover:gap-3 transition-all bg-transparent border-none cursor-pointer">
                    {service.link} <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <a href={service.url || "#"} className="inline-flex items-center gap-2 font-syne text-xs font-bold tracking-widest uppercase text-accent group-hover:gap-3 transition-all">
                    {service.link} <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* POSSIBILITIES / TECHNOLOGY */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <FadeUp className="mb-16">
          <div className="font-syne text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-accent mb-4">Tecnología</div>
          <h2 className="font-display text-4xl md:text-5xl max-w-2xl leading-[0.95]">EL STACK TECNOLÓGICO QUE HACE POSIBLE LA MAGIA</h2>
        </FadeUp>

        <div className="grid lg:grid-cols-[250px_1fr_1fr] gap-12 items-start">
          <FadeUp className="flex flex-col gap-2">
            {techTabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`text-left font-syne text-xs font-bold tracking-widest uppercase py-3 px-4 border-l-2 transition-all ${activeTab === i ? 'border-accent text-white bg-card' : 'border-transparent text-slate-500 hover:text-white hover:border-slate-700'
                  }`}
              >
                {tab.title}
              </button>
            ))}
          </FadeUp>

          <FadeUp delay={0.1} className="aspect-[4/3] bg-gradient-to-br from-[#0a1628] to-navy-mid rounded-2xl border border-border-subtle overflow-hidden flex items-center justify-center">
            <img src={`/img/operacion.png`} alt={techTabs[activeTab].title} className="w-full h-full object-cover opacity-50 mix-blend-luminosity" />
          </FadeUp>

          <FadeUp delay={0.2} className="pt-4">
            <div className="font-syne text-[0.65rem] font-bold tracking-[0.15em] uppercase text-accent mb-4">
              Tecnología — {techTabs[activeTab].category}
            </div>
            <h3 className="font-syne font-bold text-xl mb-4 text-white">
              {techTabs[activeTab].heading}
            </h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed mb-8">
              {techTabs[activeTab].desc}
            </p>
            <a href="#" className="inline-flex items-center gap-2 font-syne text-xs font-bold tracking-widest uppercase text-accent hover:gap-3 transition-all">
              Saber Más <ArrowRight className="w-4 h-4" />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* DASHBOARD & ROADMAP */}
      <section className="py-24 px-6 md:px-16 bg-navy-mid border-y border-border-subtle">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <FadeUp>
            <div className="font-syne text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-accent mb-4">Dashboard Ejecutivo</div>
            <h2 className="font-display text-4xl md:text-5xl mb-8">ETAPA ACTUAL</h2>

            <div className="bg-card border border-border-subtle rounded-2xl p-8 space-y-8">
              <div>
                <div className="text-xs text-slate-400 mb-1">Fase de la Startup</div>
                <div className="font-syne font-bold text-lg text-white">Pre-semilla / Validación Temprana</div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-accent font-syne font-bold text-sm mb-3">
                  <CheckCircle2 className="w-4 h-4" /> QUÉ YA HEMOS LOGRADO
                </div>
                <ul className="space-y-2 text-sm text-slate-300 font-light">
                  <li>• MVP funcional de visualización 3D en Meta Quest 3.</li>
                  <li>• Plataforma web educativa (Fase 1) desarrollada y funcional.</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 text-white font-syne font-bold text-sm mb-3">
                  <span className="text-lg">⚙️</span> QUÉ ESTAMOS CONSTRUYENDO
                </div>
                <p className="text-sm text-slate-300 font-light">
                  Desarrollo de Gemelos Digitales interactivos para planificación prequirúrgica personalizada.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-white font-syne font-bold text-sm mb-3">
                  <span className="text-lg">🔬</span> VALIDACIÓN EN PROCESO
                </div>
                <p className="text-sm text-slate-300 font-light">
                  Conversaciones avanzadas para pilotos institucionales con la Universidad Señor de Sipán y validación clínica.
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="font-syne text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-accent mb-4">Visión 2025-2028</div>
            <h2 className="font-display text-4xl md:text-5xl mb-8">ROADMAP ESTRATÉGICO</h2>

            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-subtle before:to-transparent">
              {[
                { phase: "Fase 1: Inicio", date: "Q1-Q2 2026", desc: "Lanzamiento MVP Web. Formalización MOU. Primer piloto Quest 3 y dataset DICOM (50 casos)." },
                { phase: "Fase 2: Validación", date: "Q3-Q4 2026", desc: "Piloto con 30 residentes. Pruebas de gemelos digitales en casos reales y publicación de paper." },
                { phase: "Fase 3: Escalamiento", date: "2026", desc: "Piloto AR intraoperatoria. Postulación a Startup Perú G7+ y CONCYTEC." },
                { phase: "Fase 4: Expansión", date: "2027-2028", desc: "Escalamiento a Trujillo, Piura, Cajamarca. Certificación CMP y Serie A." }
              ].map((item, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border-subtle bg-navy-mid text-accent shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_var(--color-navy)] z-10">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card border border-border-subtle p-5 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-syne font-bold text-sm text-white">{item.phase}</h4>
                      <span className="text-xs font-syne text-accent">{item.date}</span>
                    </div>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* TEAM */}
      <section id="equipo" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <FadeUp className="text-center mb-16">
          <div className="font-syne text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-accent mb-4">El Talento</div>
          <h2 className="font-display text-4xl md:text-5xl">EQUIPO AIRSTARK</h2>
          <p className="text-slate-400 text-sm mt-4 max-w-xl mx-auto font-light">
            El talento multidisciplinario detrás de la innovación tecnológica y médica.
          </p>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { name: "Christopher Bardales", role: "CEO | Visionario & Estratega | Developer Digital Twins y Web + RA", img: "/img/christopherb.png" },
            { name: "Sting", role: "CTO | XR Engineer & 3D Tech Artist | Vision Computer", img: "/img/sting.jpeg" },
            { name: "Dr. José Ríos", role: "CMO Clínico | Cirugia General y Laparoscopia | Teacher Medical USS", img: "/img/rios.jpeg" },
            { name: "María", role: "COO | Ing. Empresarial y Sistemas | Emprendedora ", img: "/img/maria.png" },
            { name: "Dr. Andri", role: "Especialista en Patología Médica | IA Scientist | Digital & Computational Pathology", img: "/img/andric.jpeg" },
            { name: "William Carrasco", role: "Especialista Deep-Tech | Ing. de Sistemas | IA / IAX / ML / DL / VC", img: "/img/1.png" },
            { name: "Alejandro", role: "Ing. de Sistemas | Backend & Infraestructura | SRE ", img: "/img/alejandro.jpeg" },

          ].map((member, i) => (
            <FadeUp key={i} delay={i * 0.1} className="group text-center">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-border-subtle mb-4 bg-navy-mid">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 mix-blend-luminosity group-hover:mix-blend-normal" />
              </div>
              <h3 className="font-syne font-bold text-sm text-white mb-1">{member.name}</h3>
              <p className="text-xs text-accent font-light">{member.role}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="px-6 md:px-16 pb-24">
        <FadeUp className="relative bg-gradient-to-br from-navy-light to-[#0a1628] border border-border-subtle rounded-[2rem] p-10 md:p-20 overflow-hidden grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(74,158,255,0.12)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-6xl leading-[0.9] mb-6">ÚNETE A LA REVOLUCIÓN<br />MEDTECH</h2>
            <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed mb-8">
              Sé parte del futuro de la cirugía en Latinoamérica. Entrena hoy, salva vidas mañana.
            </p>
          </div>

          <div className="relative z-10 flex flex-col gap-4 items-start md:items-end">
            <a href="#" className="w-full md:w-auto text-center bg-white text-navy font-syne font-bold text-sm tracking-wider px-8 py-4 rounded-md hover:opacity-90 transition-all hover:-translate-y-0.5">
              AGENDAR REUNIÓN (INVERSORES)
            </a>
            <a href="#" className="w-full md:w-auto text-center bg-transparent text-white border border-border-subtle font-syne font-bold text-sm tracking-wider px-8 py-4 rounded-md hover:border-white/30 transition-all">
              SOLICITAR PILOTO INSTITUCIONAL
            </a>
            <p className="text-xs text-slate-400 mt-2 text-center md:text-right w-full md:w-auto">
              Estudiantes/Médicos: <a href="#" className="text-accent hover:underline">Unirse a la Lista de Espera</a>
            </p>
          </div>
        </FadeUp>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border-subtle pt-16 pb-8 px-6 md:px-16 bg-navy">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 font-syne font-extrabold text-lg tracking-widest text-white mb-4">
              <img src="/img/logo-removebg-preview.png" alt="Airstark Logo" className="w-8 h-8 rounded-full border border-white/20" />
              AIRSTARK
            </div>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              El ecosistema quirúrgico inteligente que democratiza el entrenamiento médico en Latinoamérica.
            </p>
          </div>

          <div>
            <div className="font-syne text-[0.68rem] font-bold tracking-[0.12em] uppercase text-slate-200 mb-6">Enlaces Rápidos</div>
            <div className="flex flex-col gap-3">
              {['Inicio', 'Nosotros', 'Solución', 'Producto', 'Equipo'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-xs text-slate-400 hover:text-white transition-colors font-light">{link}</a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-syne text-[0.68rem] font-bold tracking-[0.12em] uppercase text-slate-200 mb-6">Legal</div>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors font-light">Privacidad</a>
              <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors font-light">Términos de Servicio</a>
            </div>
          </div>

          <div>
            <div className="font-syne text-[0.68rem] font-bold tracking-[0.12em] uppercase text-slate-200 mb-6">Contacto</div>
            <div className="text-xs text-slate-400 font-light space-y-4">
              <div>
                <strong className="text-slate-200 font-medium block text-[0.68rem] tracking-wider uppercase mb-1">Email</strong>
                air.stark11@gmail.com
              </div>
              <div>
                <strong className="text-slate-200 font-medium block text-[0.68rem] tracking-wider uppercase mb-1">Ubicación</strong>
                Chiclayo, Perú
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-border-subtle pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[0.7rem] text-slate-500 font-light">© 2026 Airstark. Todos los derechos reservados.</span>
        </div>
      </footer>

      {/* VIDEO MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-navy-mid border border-border-subtle rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-syne font-bold text-lg text-white">MVP en Meta Quest 3</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-white hover:text-accent text-2xl">&times;</button>
            </div>
            <div className="aspect-video">
              <iframe src={videoUrl} className="w-full h-full rounded-lg" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
