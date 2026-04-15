import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Presentation, 
  Lightbulb, 
  Target, 
  Cpu, 
  Users, 
  TrendingUp, 
  Award,
  Zap,
  MessageSquare,
  Mail,
  Phone,
  Globe,
  Plus,
  Trash2,
  CheckCircle2,
  Sparkles,
  Megaphone,
  Eye,
  Info,
  Star,
  Trophy,
  Medal,
  User,
  Layout,
  ArrowRight,
  Circle,
  Quote,
  Compass,
  Rocket,
  ShieldCheck,
  FileText,
  Lock
} from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  type: 'title' | 'content' | 'split' | 'impact' | 'interactive';
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [questions, setQuestions] = useState<string[]>([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [activeTip, setActiveTip] = useState<number | null>(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState<number | null>(null);

  const speakers = useMemo(() => [
    {
      name: "Puan Norfazirah Binti Kusin",
      role: "Pegawai Unit Penyelidikan, Inovasi dan Pengkomersialan (KUPIK)",
      achievement: "Pakar Strategi Inovasi",
      desc: "Bahagian 1: Strategi & Penjurian. Merangkumi kaedah penjurian, etika pemakaian, dan teknik menjawab soalan juri dengan berkesan.",
      icon: <Star className="text-brand-highlight" />,
      projects: [
        {
          title: "SAVENT Eco-Friendly Coaster",
          awards: [
            "TVET Applied Innovation Grant Scheme (T-AiGS) 2025 - RM 30,000.00",
            "TVET Applied Commercialization Grant Scheme (T-AcGS) 2026 - RM 56,000.00",
            "GOLD Medal - World Sustainable Development Goals (WSDG) 2025",
            "SILVER Medal - Borneo International Innovation Creativity (BIIC) 2025"
          ],
          icon: <Sparkles className="text-brand-highlight w-6 h-6" />
        },
        {
          title: "COMAT Sustainable Placemat",
          awards: [
            "Gold Medal - The Innovation Week (INNOW) 2023",
            "Silver Medal - International Innovation Festival (INNOFEST) 2024"
          ],
          icon: <CheckCircle2 className="text-brand-accent w-6 h-6" />
        },
        {
          title: "Lemongrass Powder & Pitaya Peels Wonder",
          awards: [
            "Gold Medal - Malaysia Technology Expo (MTE) 2012",
            "Silver Medal - iCOMPEX 2014",
            "Silver Medal - Innovation Development (iDEA) 2023"
          ],
          icon: <Lightbulb className="text-amber-500 w-6 h-6" />
        },
        {
          title: "Persidangan & Penyelidikan",
          awards: [
            "Editor's Pick Award - ICRTH 2022 & BorNCe 2023 (Sarawak Laksa)",
            "Pengarah Program - 3rd Borneo National Conference (BORNCE) 2023"
          ],
          icon: <Presentation className="text-emerald-500 w-6 h-6" />
        },
        {
          title: "Juri Inovasi & Penilai",
          awards: [
            "Juri: ICIIC 2025, JiiCAS 2024, Smart Innovation 2024",
            "Penilai: SKPDT 2024, SPSH 2025, ICO-ASNITECH 2025",
            "Juri Business Pitching @PNICC'25"
          ],
          icon: <Users className="text-blue-500 w-6 h-6" />
        }
      ]
    },
    {
      name: "Muhammad Faris Bin Hamdan",
      role: "Pensyarah Bidang Electrical & Electronic Engineering",
      achievement: "Pakar Teknikal & Kejuruteraan",
      desc: "Bahagian 3: Teknikal & Hardware. Kepakaran dalam integrasi sistem hardware dan pembangunan prototaip teknikal yang berfungsi.",
      icon: <Cpu className="text-brand-accent" />,
      projects: [
        {
          title: "A Novel of Aedes Larvae Detector",
          awards: [
            "Best Award & Gold UTeMeX 2014",
            "Gold Medal Research Invention Innovation & Design (RIID 2014)",
            "Bronze Invention & Innovation Awards (MTE 2015)",
            "Silver iCompEx'15 Politeknik Sultan Abdul Halim"
          ],
          icon: <Zap className="text-brand-highlight w-6 h-6" />
        },
        {
          title: "Warehouse Automation Management System",
          awards: [
            "Project Industri Terbaik EIPEX 2023",
            "Gold Award EIPEX 2023"
          ],
          icon: <Layout className="text-brand-accent w-6 h-6" />
        },
        {
          title: "Vehicle Heatstroke Avoidance System",
          awards: [
            "Gold Medal Melaka International Intellectual Exposition (MIIEX 2015)",
            "Silver Award UTeM Research and Innovation Expo 2015"
          ],
          icon: <Target className="text-red-500 w-6 h-6" />
        },
        {
          title: "Medical Robot (MEDROBS) & Robotic Prosthetic Hand",
          awards: [
            "EIPEX 2024 Politeknik Mukah (MEDROBS)",
            "Special Award Capstone Project Exhibitions 2014 UTeM (Prosthetic Hand)"
          ],
          icon: <Cpu className="text-emerald-500 w-6 h-6" />
        }
      ]
    },
    {
      name: "Muhammad Abdul Haq Bin Aziz",
      role: "Pegawai e-Pembelajaran | Trainer Master AI Studio",
      achievement: "Pakar Transformasi Digital",
      desc: "Bahagian 2: Kandungan & AI. Fokus kepada pembangunan content presentation, reka bentuk poster inovasi, dan penggunaan AI Studio.",
      icon: <Zap className="text-emerald-600" />,
      projects: [
        {
          title: "SAVENT Eco-Friendly Coaster",
          awards: [
            "TVET Applied Innovation Grant Scheme (T-AiGS) 2025 - RM 30,000.00",
            "TVET Applied Commercialization Grant Scheme (T-AcGS) 2026 - RM 56,000.00",
            "GOLD Medal - World Sustainable Development Goals (WSDG) 2025",
            "SILVER Medal - Borneo International Innovation Creativity (BIIC) 2025"
          ],
          icon: <Sparkles className="text-brand-highlight w-6 h-6" />
        }
      ]
    }
  ], []);

  const addQuestion = () => {
    if (newQuestion.trim()) {
      setQuestions([...questions, newQuestion.trim()]);
      setNewQuestion('');
    }
  };

  const removeQuestion = (index: number) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const slides: Slide[] = useMemo(() => [
    {
      id: 1,
      title: "Sesi Perkongsian Inovasi Beaufort",
      subtitle: "Pemantapan Projek & Strategi Pembentangan Berimpak",
      type: 'title',
      content: (
        <div className="relative flex flex-col items-center justify-center text-center space-y-10 py-12 overflow-hidden rounded-[60px]">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://picsum.photos/seed/abstract-digital-circuit/1920/1080?blur=1" 
              alt="Innovation Background" 
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-white/90" />
          </div>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-brand-primary rounded-2xl flex items-center justify-center shadow-xl rotate-3 relative z-10"
          >
            <Presentation className="text-brand-highlight w-10 h-10" />
          </motion.div>
          
          <div className="space-y-4 relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-brand-accent font-bold tracking-[0.2em] uppercase text-base"
            >
              RISDA Beaufort x Inovasi
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-8xl font-black text-brand-primary leading-tight tracking-tighter"
            >
              DARI IDEA KE <span className="text-brand-highlight">IMPAK</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-slate-500 text-xl font-medium max-w-2xl mx-auto"
            >
              Sesi pemantapan projek inovasi dan teknik penyampaian yang berkesan untuk warga RISDA Beaufort.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4 text-slate-400 font-bold text-sm uppercase tracking-widest"
          >
            <span>15 April 2026</span>
            <div className="w-1.5 h-1.5 bg-brand-highlight rounded-full" />
            <span>Daerah Beaufort</span>
          </motion.div>
        </div>
      )
    },
    {
      id: 2,
      title: "Panel Inovasi Beaufort",
      type: 'content',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {speakers.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h4 className="text-xs font-black uppercase tracking-widest text-brand-accent mb-2">{item.achievement}</h4>
              <h3 className="text-4xl font-bold text-brand-primary mb-4 leading-tight">{item.name}</h3>
              <div className="h-[2px] w-10 bg-brand-highlight/30 mb-6" />
              <p className="text-slate-600 text-xl font-bold mb-3">{item.role}</p>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">{item.desc}</p>
              
              <button 
                onClick={() => setSelectedSpeaker(i)}
                className="mt-auto flex items-center gap-2 text-brand-accent font-bold text-sm hover:gap-4 transition-all group"
              >
                Lihat Pencapaian <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      id: 11,
      title: "Metodologi Inovasi",
      type: 'split',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full py-6">
          <div className="space-y-8">
            <div className="p-10 bg-white rounded-[40px] shadow-sm border border-slate-100 relative group">
              <h4 className="text-3xl font-bold text-brand-primary mb-4 flex items-center gap-4">
                <Lightbulb className="text-brand-highlight w-8 h-8" /> Design Thinking
              </h4>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                Jangan bina inovasi berdasarkan andaian. Turun ke padang, dengar keluhan pekebun, dan bina prototaip yang benar-benar diperlukan.
              </p>
            </div>
            <div className="p-10 bg-white rounded-[40px] shadow-sm border border-slate-100 relative group">
              <h4 className="text-3xl font-bold text-brand-primary mb-4 flex items-center gap-4">
                <TrendingUp className="text-brand-accent w-8 h-8" /> Agile Mindset
              </h4>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                Inovasi tidak perlu sempurna pada hari pertama. Bina, uji, dan tambah baik secara berterusan melalui maklum balas pantas.
              </p>
            </div>
          </div>
          <div className="space-y-10">
            <h3 className="text-6xl md:text-7xl font-black leading-tight text-brand-primary tracking-tighter">
              INOVASI <br />
              <span className="text-brand-accent">BERTERUSAN</span>
            </h3>
            <p className="text-slate-500 text-2xl font-medium leading-relaxed">
              Setiap projek mempunyai potensi besar. Kuncinya adalah bagaimana kita mengolah cerita kejayaan tersebut.
            </p>
            <div className="space-y-4">
              {["Kenali Audiens", "Fokus Penyelesaian", "Bukti Kejayaan"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 font-bold text-brand-primary text-xl">
                  <ArrowRight className="text-brand-accent w-6 h-6" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Kriteria Projek Berimpak",
      type: 'content',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6">
          <div className="space-y-8">
            <p className="text-slate-500 text-2xl font-medium">Empat tonggak utama penilaian inovasi:</p>
            <div className="space-y-4">
              {[
                { label: "Penyelesaian Masalah", desc: "Adakah ia menyelesaikan masalah kritikal?" },
                { label: "Kebolehan Skala", desc: "Boleh ke projek ini diguna pakai di tempat lain?" },
                { label: "Kelestarian", desc: "Adakah ia mudah diselenggara jangka panjang?" },
                { label: "Kecekapan Kos", desc: "Adakah kos pelaksanaan berbaloi dengan hasil?" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-[32px] border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center border border-brand-accent/20">
                    <CheckCircle2 className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-primary text-xl">{item.label}</p>
                    <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-brand-primary p-12 rounded-[48px] text-white relative overflow-hidden flex flex-col justify-center shadow-xl">
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-brand-accent/10 rounded-full blur-3xl" />
            <h4 className="text-3xl font-bold mb-10 text-brand-highlight uppercase tracking-widest">Formula Impak</h4>
            <div className="space-y-10">
              {[
                { num: "01", text: "Data yang ", highlight: "Sahih" },
                { num: "02", text: "Pelaksanaan yang ", highlight: "Tangkas" },
                { num: "03", text: "Impak yang ", highlight: "Boleh Diukur" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-8">
                  <div className="text-6xl font-black text-white/10">{item.num}</div>
                  <p className="text-2xl font-medium">
                    {item.text} <span className="text-brand-accent font-bold">{item.highlight}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Tips dari Meja Juri",
      type: 'content',
      content: (
        <div className="space-y-8 pt-6">
          <p className="text-slate-500 text-2xl font-medium">6 Elemen Kritikal untuk Memenangi Hati Juri:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                title: "Kaedah Penjurian",
                desc: "Fahami kriteria pemarkahan. Juri menilai impak, keaslian, dan praktikaliti. Jangan abaikan aspek dokumentasi.",
                icon: <Target className="w-6 h-6" />
              },
              {
                id: 2,
                title: "Etika Pemakaian",
                desc: "First impression adalah kunci. Berpakaian kemas, profesional, dan seragam jika berkumpulan. Imej korporat sangat membantu.",
                icon: <Users className="w-6 h-6" />
              },
              {
                id: 3,
                title: "Kaedah Menjawab",
                desc: "Jawab dengan tenang dan berfakta. Jika tidak tahu, akui dan berikan cadangan penambahbaikan. Elakkan berdebat dengan juri.",
                icon: <MessageSquare className="w-6 h-6" />
              },
              {
                id: 4,
                title: "X-Factor & USP",
                desc: "Apa yang membezakan produk anda? Kenapa juri perlu pilih anda berbanding 100 peserta lain?",
                icon: <Sparkles className="w-6 h-6" />
              },
              {
                id: 5,
                title: "Potensi Komersial",
                desc: "Adakah ia boleh dijual? Siapa pembelinya? Juri mahu melihat inovasi yang boleh pergi jauh ke pasaran.",
                icon: <TrendingUp className="w-6 h-6" />
              },
              {
                id: 6,
                title: "Bukti & Data",
                desc: "Tunjukkan testimoni, data ujian makmal, atau bukti keberkesanan. Fakta lebih kuat daripada kata-kata.",
                icon: <CheckCircle2 className="w-6 h-6" />
              }
            ].map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: item.id * 0.05 }}
                className="p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm hover:border-brand-accent/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-accent group-hover:text-white transition-colors">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h4 className="font-bold text-brand-primary mb-3 text-2xl">{item.title}</h4>
                <p className="text-base text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Bahagian 2: Kandungan & AI",
      type: 'split',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full py-6">
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h3 className="text-6xl md:text-7xl font-black text-brand-primary leading-tight tracking-tighter">
                Penyampaian <br /> <span className="text-brand-accent">Berimpak Tinggi</span>
              </h3>
              <p className="text-2xl text-slate-500 leading-relaxed font-medium">
                Bagaimana membina naratif yang memikat hati juri dan audiens menggunakan teknik penceritaan moden.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: "The Hook", desc: "Tarik perhatian dalam 30 saat pertama dengan masalah realiti." },
                { title: "The Story", desc: "Bina perjalanan inovasi dari idea ke penyelesaian." },
                { title: "The Impact", desc: "Tunjukkan data dan bukti keberkesanan yang nyata." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white rounded-[32px] border border-slate-100 flex items-center gap-8 shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-brand-primary text-white flex items-center justify-center font-black shrink-0 text-xl">
                    0{i+1}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-primary text-2xl">{item.title}</h4>
                    <p className="text-lg text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-brand-accent/10 rounded-[40px] blur-2xl -z-10 rotate-3" />
            <div className="p-12 bg-brand-primary rounded-[48px] text-white shadow-2xl space-y-10 relative overflow-hidden">
              <img 
                src="https://picsum.photos/seed/presentation-stage/800/600?grayscale" 
                alt="Innovation Pitch Stage" 
                className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
              <Quote className="w-16 h-16 text-brand-highlight opacity-50 relative z-10" />
              <p className="text-3xl font-medium leading-relaxed italic relative z-10">
                "Juri tidak hanya menilai produk anda, mereka menilai sejauh mana anda memahami masalah yang anda selesaikan."
              </p>
              <div className="h-px w-20 bg-brand-highlight/30 relative z-10" />
              <div className="relative z-10">
                <p className="font-black text-brand-highlight uppercase tracking-widest text-sm">Fokus Utama</p>
                <p className="text-2xl font-bold">Struktur & Aliran Persembahan</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Reka Bentuk Poster Inovasi",
      type: 'content',
      content: (
        <div className="space-y-10 pt-6">
          <p className="text-slate-500 text-2xl font-medium">Poster adalah 'wajah' pertama inovasi anda. Pastikan ia profesional dan jelas.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                {
                  title: "Hierarki Visual",
                  desc: "Gunakan saiz font yang berbeza untuk membezakan tajuk dan kandungan.",
                  icon: <Layout className="w-6 h-6 text-brand-accent" />
                },
                {
                  title: "Infografik > Teks",
                  desc: "Gunakan carta dan ikon untuk menerangkan data teknikal anda.",
                  icon: <Eye className="w-6 h-6 text-brand-highlight" />
                },
                {
                  title: "Kualiti Gambar",
                  desc: "Pastikan gambar prototaip litar anda adalah berkualiti tinggi.",
                  icon: <Sparkles className="w-6 h-6 text-emerald-500" />
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-primary">{item.title}</h4>
                    <p className="text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="relative group rounded-[40px] overflow-hidden shadow-2xl border-4 border-brand-primary/20">
              <img 
                src="https://picsum.photos/seed/technical-poster-electronics-circuit/800/1000" 
                alt="Electronics Poster Design" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/70 to-transparent flex flex-col justify-end p-12">
                <div className="bg-brand-highlight text-brand-primary px-6 py-2 rounded-full w-fit font-black text-sm mb-6 uppercase tracking-widest shadow-xl">
                  Visual Poster
                </div>
                <h4 className="text-white text-6xl font-black tracking-tighter leading-none mb-6 drop-shadow-2xl">POSTER <br/> INOVASI</h4>
                <p className="text-white font-black leading-tight text-lg drop-shadow-lg">Pastikan data teknikal litar anda mudah difahami oleh juri.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 10,
      title: "Digital: AI Studio",
      type: 'split',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full py-6">
          <div className="bg-slate-900 p-12 rounded-[48px] text-white shadow-2xl relative overflow-hidden group">
            <img 
              src="https://picsum.photos/seed/ai-circuit-tech/800/800?blur=1" 
              alt="AI Technology" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-slate-900/60" />
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity relative z-10">
              <Zap className="w-48 h-48" />
            </div>
            <div className="relative z-10">
              <h4 className="text-brand-highlight font-black uppercase tracking-widest text-sm mb-8">Masa Depan Inovasi</h4>
              <h3 className="text-5xl font-bold mb-10 leading-tight">Gunakan <span className="text-brand-accent">AI Studio</span> untuk Prototaip Pantas</h3>
              <ul className="space-y-8">
                {[
                  "Penjanaan Idea & Brainstorming",
                  "Pembangunan Kod & Aplikasi",
                  "Analisis Data Inovasi",
                  "Penyediaan Skrip Pembentangan"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-6 text-2xl font-medium">
                    <div className="w-3 h-3 rounded-full bg-brand-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-6xl font-black text-brand-primary leading-tight tracking-tighter">
                Inovasi <br /> <span className="text-brand-highlight">Tanpa Sempadan</span>
              </h3>
              <p className="text-2xl text-slate-500 font-medium leading-relaxed">
                Teknologi AI bukan pengganti kreativiti, tetapi pemangkin untuk merealisasikan idea dengan lebih pantas dan efisien.
              </p>
            </div>
            <div className="p-10 bg-brand-surface rounded-[40px] border border-brand-accent/10 flex items-start gap-8">
              <div className="p-6 bg-white rounded-3xl shadow-sm shrink-0">
                <Rocket className="w-10 h-10 text-brand-accent" />
              </div>
              <div>
                <h4 className="font-bold text-brand-primary text-2xl mb-2">Langkah Seterusnya</h4>
                <p className="text-slate-500 text-lg font-medium">Eksplorasi AI Studio untuk memantapkan lagi kualiti output projek inovasi anda.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 9,
      title: "Bahagian 3: Teknikal & Hardware",
      type: 'content',
      content: (
        <div className="space-y-10 pt-6">
          <p className="text-slate-500 text-2xl font-medium">Kekuatan teknikal adalah bukti nyata bahawa inovasi anda berfungsi.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 bg-white rounded-[40px] border border-slate-100 shadow-sm space-y-8 relative overflow-hidden group">
              <div className="absolute inset-0 z-0 opacity-10 flex flex-wrap gap-2 p-4">
                {["arduino", "sensor", "microchip", "pcb"].map(seed => (
                  <img 
                    key={seed}
                    src={`https://picsum.photos/seed/tech-${seed}/200/200`} 
                    alt="Tech Part" 
                    className="w-1/2 h-1/2 object-cover rounded-xl grayscale"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-8 shadow-inner">
                  <Cpu className="w-10 h-10" />
                </div>
                <h4 className="text-4xl font-black text-brand-primary mb-4 tracking-tighter">INTEGRASI <br/> HARDWARE</h4>
                <p className="text-xl text-slate-500 leading-relaxed font-bold mb-8">
                  Pemilihan sensor, mikrokontroler (Arduino/ESP32), dan komponen elektronik yang tepat untuk prototaip anda.
                </p>
                <ul className="space-y-4">
                  {["Sensor & Aktuator", "Litar & PCB Design", "Firmware & IoT Cloud"].map((t, i) => (
                    <li key={i} className="flex items-center gap-4 text-brand-primary font-black text-xl">
                      <div className="w-3 h-3 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(var(--brand-accent),0.5)]" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-brand-primary relative group min-h-[500px]">
              <img 
                src="https://picsum.photos/seed/pcb-circuit-board-electronics/1000/1000" 
                alt="Main Circuit Board" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/50 to-transparent flex flex-col justify-end p-12">
                <div className="bg-brand-highlight text-brand-primary px-6 py-2 rounded-full w-fit font-black text-sm mb-8 uppercase tracking-[0.4em] shadow-2xl">
                  Demo Teknikal
                </div>
                <h4 className="text-white text-7xl font-black tracking-tighter leading-[0.8] mb-8 drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]">
                  PROTOTAIP <br /> <span className="text-brand-highlight">BERFUNGSI</span>
                </h4>
                <p className="text-white text-xl font-black leading-tight max-w-md drop-shadow-2xl">
                  Reliability & Scalability adalah kunci kejayaan teknikal dalam inovasi RISDA Beaufort.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 12,
      title: "Sesi Maklum Balas",
      type: 'interactive',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6 h-full relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full -z-10 opacity-10">
            <img 
              src="https://picsum.photos/seed/electronics-lab-circuit/800/1200" 
              alt="Electronics Lab" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-10 relative z-10">
            <h3 className="text-6xl font-black text-brand-primary tracking-tighter">Mari Bincangkan <br /> <span className="text-brand-accent">Projek Anda</span></h3>
            <p className="text-slate-500 text-2xl font-medium">Gunakan ruang ini untuk mencatat idea, komen, atau tips khusus untuk projek inovasi anda.</p>
            <div className="p-10 bg-brand-surface rounded-[40px] border border-brand-primary/10 space-y-8 shadow-sm">
              <h4 className="font-bold text-brand-primary flex items-center gap-4 uppercase tracking-widest text-sm">
                <Sparkles className="text-brand-highlight w-6 h-6" /> Fokus Utama:
              </h4>
              <ul className="space-y-6 text-slate-600 font-bold text-xl">
                <li className="flex items-center gap-4"><Circle className="w-3 h-3 fill-brand-accent text-brand-accent" /> Kejelasan Penyampaian</li>
                <li className="flex items-center gap-4"><Circle className="w-3 h-3 fill-brand-accent text-brand-accent" /> Kekuatan Visual</li>
                <li className="flex items-center gap-4"><Circle className="w-3 h-3 fill-brand-accent text-brand-accent" /> Justifikasi Impak</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col h-full max-h-[600px]">
            <div className="p-10 bg-white rounded-[48px] border border-slate-100 shadow-xl flex-1 flex flex-col overflow-hidden">
              <h4 className="font-bold mb-8 flex items-center gap-4 text-brand-primary uppercase tracking-widest text-sm">
                <MessageSquare className="text-brand-accent w-6 h-6" /> Nota Projek
              </h4>
              <div className="flex-1 overflow-y-auto space-y-4 mb-8 custom-scrollbar pr-4">
                {questions.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 text-slate-200">
                    <Plus className="w-16 h-16 mb-6 opacity-20" />
                    <p className="text-lg italic font-bold text-slate-400">Sedia untuk mencatat...</p>
                  </div>
                ) : (
                  questions.map((q, i) => (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      key={i} 
                      className="p-6 bg-slate-50 rounded-3xl text-slate-700 flex justify-between items-start group hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-slate-100"
                    >
                      <span className="leading-relaxed font-medium text-lg">{q}</span>
                      <button 
                        onClick={() => removeQuestion(i)}
                        className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all ml-6"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </motion.div>
                  ))
                )}
              </div>
              <div className="flex gap-4">
                <input 
                  type="text" 
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addQuestion()}
                  placeholder="Taip nota di sini..."
                  className="flex-1 px-8 py-6 bg-slate-50 rounded-3xl text-xl focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all border border-slate-100"
                />
                <button 
                  onClick={addQuestion}
                  className="w-16 h-16 bg-brand-primary text-white rounded-3xl flex items-center justify-center hover:bg-brand-accent transition-all shadow-lg"
                >
                  <Plus className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 14,
      title: "Perlindungan Inovasi (MYIPO)",
      type: 'content',
      content: (
        <div className="space-y-10 pt-6">
          <div className="flex items-center gap-6 p-8 bg-brand-primary/5 rounded-[40px] border border-brand-primary/10">
            <div className="w-20 h-20 rounded-3xl bg-brand-primary flex items-center justify-center text-brand-highlight shadow-xl shrink-0">
              <ShieldCheck className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-4xl font-black text-brand-primary tracking-tighter">HARTA INTELEK (IP)</h3>
              <p className="text-xl text-slate-500 font-medium leading-tight">Pastikan inovasi anda dilindungi secara sah melalui MYIPO sebelum dikomersialkan.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "PATEN (Patent)",
                desc: "Melindungi ciptaan baru, proses teknikal, atau produk. Tempoh perlindungan sehingga 20 tahun.",
                icon: <Award className="w-8 h-8" />,
                color: "bg-amber-500"
              },
              {
                title: "CAP DAGANGAN (Trademark)",
                desc: "Melindungi logo, nama jenama, atau slogan unik yang membezakan produk anda di pasaran.",
                icon: <Lock className="w-8 h-8" />,
                color: "bg-blue-500"
              },
              {
                title: "HAK CIPTA (Copyright)",
                desc: "Melindungi karya sastera, seni, muzik, dan perisian (software) secara automatik.",
                icon: <FileText className="w-8 h-8" />,
                color: "bg-emerald-500"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${item.color} opacity-5 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform`} />
                <div className={`w-16 h-16 rounded-2xl ${item.color} text-white flex items-center justify-center mb-8 shadow-lg`}>
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black text-brand-primary mb-4 tracking-tight">{item.title}</h4>
                <p className="text-slate-500 text-lg leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="p-8 bg-brand-highlight/10 rounded-[32px] border border-brand-highlight/20 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Info className="text-brand-primary w-6 h-6" />
              <p className="text-brand-primary font-bold text-lg italic">"Inovasi yang hebat bermula dengan perlindungan yang kuat."</p>
            </div>
            <div className="text-brand-primary font-black uppercase tracking-widest text-sm">Sumber: MYIPO Malaysia</div>
          </div>
        </div>
      )
    },
    {
      id: 13,
      title: "Penutup",
      type: 'impact',
      content: (
        <div className="flex flex-col items-center justify-center text-center space-y-16 h-full py-16">
          <div className="space-y-6">
            <h3 className="text-7xl md:text-9xl font-black text-brand-primary tracking-tighter">TERIMA KASIH</h3>
            <p className="text-3xl text-slate-500 font-medium tracking-tight">Semoga sesi ini memberi inspirasi untuk projek inovasi anda.</p>
          </div>
        </div>
      )
    }
  ], [questions, newQuestion, activeTip]);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
      setActiveTip(null);
    }
  }, [currentSlide, slides.length]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
      setActiveTip(null);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slide = slides[currentSlide];

  return (
    <div className="relative h-screen w-full bg-white flex overflow-hidden text-slate-900">
      {/* Side Navigation */}
      <nav className="w-20 bg-slate-50 border-r border-slate-100 flex flex-col items-center py-10 z-30">
        <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white font-bold shadow-lg mb-12">B</div>
        <div className="flex-1 flex flex-col gap-5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentSlide ? 1 : -1);
                setCurrentSlide(i);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                currentSlide === i 
                ? 'bg-brand-accent h-6 shadow-sm' 
                : 'bg-slate-200 hover:bg-slate-400'
              }`}
              title={`Slaid ${i + 1}`}
            />
          ))}
        </div>
        <div className="mt-auto flex flex-col items-center gap-6">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-white hover:border-brand-accent disabled:opacity-20 transition-all group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:text-brand-accent" />
          </button>
          
          <div className="relative group flex flex-col items-center">
            {currentSlide < slides.length - 1 && (
              <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-40 p-3 bg-brand-primary text-white rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-50">
                <p className="text-[8px] font-black uppercase tracking-widest text-brand-highlight mb-1">Seterusnya</p>
                <p className="text-[10px] font-bold leading-tight">{slides[currentSlide + 1].title}</p>
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-brand-primary" />
              </div>
            )}
            <button 
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center hover:bg-brand-accent disabled:opacity-20 transition-all"
            >
              <ChevronRight className="w-5 h-5 group-hover:scale-110" />
            </button>
            {currentSlide < slides.length - 1 && (
              <span className="text-[8px] font-black uppercase tracking-widest text-slate-400 mt-2">Next</span>
            )}
          </div>
        </div>
      </nav>

      <div className="flex-1 flex flex-col relative">
        {/* Header */}
        <header className="px-12 py-8 flex justify-between items-center z-20">
          <div className="flex items-center space-x-4">
            <span className="font-black tracking-tighter text-2xl text-brand-primary uppercase">Inovasi <span className="text-brand-accent">Beaufort</span></span>
          </div>
          <div className="flex items-center space-x-8 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
            <span className="hidden lg:inline">{slide.title}</span>
            <div className="h-4 w-[1px] bg-slate-200 hidden lg:inline" />
            <span className="text-brand-accent">{currentSlide + 1} / {slides.length}</span>
          </div>
        </header>

        {/* Main Content - Scrollable */}
        <main className="flex-1 relative px-12 md:px-24 py-4 overflow-y-auto custom-scrollbar">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={{
                enter: (direction: number) => ({
                  y: direction > 0 ? 20 : -20,
                  opacity: 0
                }),
                center: {
                  y: 0,
                  opacity: 1
                },
                exit: (direction: number) => ({
                  y: direction < 0 ? 20 : -20,
                  opacity: 0
                })
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: "easeOut"
              }}
              className="min-h-full flex flex-col"
            >
              {slide.type !== 'title' && slide.type !== 'impact' && (
                <div className="mb-8">
                  <motion.h1 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl font-black tracking-tighter uppercase text-brand-primary"
                  >
                    {slide.title}
                  </motion.h1>
                  <div className="h-2 w-20 bg-brand-highlight mt-4 rounded-full" />
                </div>
              )}
              <div className="flex-1 pb-20">
                {slide.content}
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="px-12 py-8 flex justify-between items-center z-20">
          <div className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">
            © 2026 Innovation Beaufort
          </div>
        </footer>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.1);
        }
      `}} />

      {/* Achievement Modal */}
      <AnimatePresence>
        {selectedSpeaker !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpeaker(null)}
              className="absolute inset-0 bg-brand-primary/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-[48px] shadow-2xl overflow-hidden flex flex-col max-h-full"
            >
              <div className="p-8 md:p-12 border-b border-slate-100 flex justify-between items-center shrink-0">
                <div>
                  <h4 className="text-brand-accent font-black uppercase tracking-widest text-xs mb-2">Pencapaian Inovasi</h4>
                  <h3 className="text-3xl md:text-4xl font-black text-brand-primary tracking-tighter">{speakers[selectedSpeaker].name}</h3>
                </div>
                <button 
                  onClick={() => setSelectedSpeaker(null)}
                  className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all group"
                >
                  <Plus className="w-6 h-6 rotate-45 group-hover:rotate-[135deg] transition-transform" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {speakers[selectedSpeaker].projects.map((project, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-8 bg-slate-50 rounded-[32px] border border-slate-100"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-white rounded-2xl shadow-sm">{project.icon}</div>
                        <h4 className="text-xl font-bold text-brand-primary leading-tight">{project.title}</h4>
                      </div>
                      <ul className="space-y-3">
                        {project.awards.map((award, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-3 text-base text-slate-500 font-medium">
                            <Award className="w-4 h-4 text-brand-highlight flex-shrink-0 mt-1" />
                            {award}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="p-8 bg-brand-surface border-t border-slate-100 flex justify-center shrink-0">
                <button 
                  onClick={() => setSelectedSpeaker(null)}
                  className="px-8 py-4 bg-brand-primary text-white rounded-2xl font-bold hover:bg-brand-accent transition-all shadow-lg"
                >
                  Tutup Paparan
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
