"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { 
  MapPin, Phone, Mail, Clock, Wifi, Car, Coffee, UtensilsCrossed, Bed, Star, 
  Menu, ChevronRight, Calendar, Users, Zap, Info, Train, Navigation, Check,
  ArrowRight, Heart, Award, Camera, Briefcase, PartyPopper, Sun, Droplets,
  Shield, Sparkles, Gift, X, Map, ExternalLink, Castle, Trees, Mountain, Waves,
  Thermometer, CheckCircle2, AlertCircle
} from "lucide-react";

export default function HotelKronePremium() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);
  const [meetingOpen, setMeetingOpen] = useState(false);
  const [activeRoom, setActiveRoom] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      {/* NAVIGATION */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <Image src={scrolled ? "/logo.svg" : "/logo-white.svg"} alt="Hotel Krone" width={200} height={60} className="h-14 w-auto"/>
          </a>
          
          <div className="hidden lg:flex items-center gap-10">
            {["Zimmer", "Restaurant", "Tagungen", "Wellness", "Anfahrt", "Kontakt"].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium tracking-wide uppercase transition-all hover:opacity-70 ${scrolled ? "text-stone-700" : "text-white/90"}`}>
                {item}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" 
              className={`rounded-full px-6 ${scrolled ? "border-[#78350f] text-[#78350f] hover:bg-[#78350f] hover:text-white" : "border-white text-white hover:bg-white hover:text-[#78350f]"}`}
              asChild>
              <a href="tel:+4962015050"><Phone className="w-4 h-4 mr-2" />+49 6201 505 0</a>
            </Button>
            <Button onClick={() => setBookingOpen(true)} className="bg-[#78350f] hover:bg-[#5d2809] text-white rounded-full px-6">
              <Calendar className="w-4 h-4 mr-2" />Jetzt buchen
            </Button>
          </div>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className={scrolled ? "text-stone-700" : "text-white"}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-96">
              <SheetHeader>
                <SheetTitle className="font-serif text-2xl text-left">Hotel Krone</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-10">
                {["Zimmer", "Restaurant", "Tagungen", "Wellness", "Anfahrt", "Kontakt"].map((item) => (
                  <button key={item} onClick={() => {scrollToSection(item.toLowerCase()); setIsMenuOpen(false);}}
                    className="text-xl font-medium text-stone-700 hover:text-[#78350f] transition-colors text-left">
                    {item}
                  </button>
                ))}
                <Separator className="my-4" />
                <Button onClick={() => {setIsMenuOpen(false); setBookingOpen(true);}} className="w-full bg-[#78350f] hover:bg-[#5d2809] rounded-full">
                  <Calendar className="w-5 h-5 mr-2" />Jetzt buchen
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hotel/hero-2.jpg" alt="Hotel Krone" fill className="object-cover" priority quality={95}/>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm px-5 py-2 text-sm tracking-widest uppercase">Seit 1892 • Familiengeführt</Badge>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight leading-none">Hotel Krone</h1>
          <p className="text-2xl md:text-4xl font-light mb-6 text-white/95">Ihr Zuhause an der Bergstraße</p>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">Gemütliche Zimmer • Regionale Küche • Herzliche Gastfreundschaft seit Generationen</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" onClick={() => setBookingOpen(true)} className="bg-white text-[#78350f] hover:bg-white/90 rounded-full px-10 py-7 text-lg font-semibold shadow-2xl">
              <Calendar className="w-5 h-5 mr-2" />Zimmer buchen
            </Button>
            <Button size="lg" onClick={() => setReservationOpen(true)} variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-10 py-7 text-lg font-semibold">
              <UtensilsCrossed className="w-5 h-5 mr-2" />Tisch reservieren
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-10 text-sm">
            {[{icon: Star, text: "4.8/5 Google Bewertungen"}, {icon: Check, text: "Direkt buchen = Günstigster Preis"}, {icon: Shield, text: "Kostenlose Stornierung"}].map((item) => (
              <div key={item.text} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <item.icon className="w-5 h-5 text-yellow-400" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-10 h-10 text-white/60 rotate-90" />
        </div>
      </section>

      {/* VALUE BAR */}
      <section className="bg-[#78350f] text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{icon: Wifi, label: "Highspeed WLAN", sub: "Kostenlos"}, {icon: Car, label: "80 Parkplätze", sub: "Inklusive"}, {icon: Zap, label: "2 E-Ladestationen", sub: "Verfügbar"}, {icon: Coffee, label: "Frühstücksbuffet", sub: "Reichhaltig"}].map((f) => (
              <div key={f.label} className="flex flex-col items-center">
                <f.icon className="w-10 h-10 mb-3 text-white/90" />
                <span className="font-semibold text-base">{f.label}</span>
                <span className="text-sm text-white/70">{f.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section id="zimmer" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 text-[#78350f] border-[#78350f] px-4 py-1">Unterkunft</Badge>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-6">Ihr Zuhause auf Zeit</h2>
            <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed">Alle unsere Zimmer sind gemütlich und freundlich gestaltet. Genießen Sie modernen Komfort in historischem Ambiente.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mb-20">
            <Card className="overflow-hidden group border-0 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <div className="relative h-[450px] overflow-hidden">
                <Image src="/images/hotel/room-02.jpg" alt="Einzelzimmer" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <Badge className="bg-white/20 text-white border-white/30 mb-4 backdrop-blur-sm">Für 1 Person</Badge>
                  <h3 className="font-serif text-4xl font-bold mb-2">Einzelzimmer</h3>
                  <p className="text-white/90 text-lg">Gemütlich & funktionell eingerichtet</p>
                </div>
              </div>
              <CardContent className="p-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="text-5xl font-bold text-[#78350f]">70 €</div>
                    <div className="text-stone-500 mt-1">pro Nacht inkl. Frühstücksbuffet</div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 px-4 py-1">Verfügbar</Badge>
                </div>
                <ul className="space-y-4 mb-8">
                  {["Eigener Bad/Dusche/WC", "Flatscreen TV mit Sky", "Kostenloses Highspeed WLAN", "Schreibtisch & Direktwahltelefon", "Haartrockner & Kosmetikspiegel"].map((a) => (
                    <li key={a} className="flex items-center text-stone-700 text-lg"><Check className="w-5 h-5 mr-3 text-[#78350f]" />{a}</li>
                  ))}
                </ul>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
                  <p className="text-amber-900 flex items-start"><Info className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" /><span>Kostenfreie Stornierung bis 18:00 am Anreisetag bei Direktbuchung!</span></p>
                </div>
                <Button onClick={() => {setActiveRoom("einzel"); setBookingOpen(true);}} className="w-full bg-[#78350f] hover:bg-[#5d2809] rounded-full py-7 text-lg font-semibold">
                  Jetzt anfragen<ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group border-0 shadow-2xl ring-2 ring-[#78350f] hover:shadow-3xl transition-shadow duration-500">
              <div className="relative h-[450px] overflow-hidden">
                <Image src="/images/hotel/room-04.jpg" alt="Doppelzimmer" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-6 right-6"><Badge className="bg-[#78350f] text-white px-4 py-1.5 text-sm">Beliebt</Badge></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <Badge className="bg-white/20 text-white border-white/30 mb-4 backdrop-blur-sm">Für 2 Personen</Badge>
                  <h3 className="font-serif text-4xl font-bold mb-2">Doppelzimmer</h3>
                  <p className="text-white/90 text-lg">Geräumig & komfortabel</p>
                </div>
              </div>
              <CardContent className="p-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="text-5xl font-bold text-[#78350f]">90 €</div>
                    <div className="text-stone-500 mt-1">pro Nacht inkl. Frühstücksbuffet</div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 px-4 py-1">Verfügbar</Badge>
                </div>
                <ul className="space-y-4 mb-8">
                  {["Kingsize-Bett oder Twin-Betten", "Eigener Bad/Dusche/WC", "Flatscreen TV mit Sky", "Kostenloses Highspeed WLAN", "Gemütliche Sitzecke", "Minibar & Zimmersafe"].map((a) => (
                    <li key={a} className="flex items-center text-stone-700 text-lg"><Check className="w-5 h-5 mr-3 text-[#78350f]" />{a}</li>
                  ))}
                </ul>
                <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
                  <p className="text-green-900 flex items-start"><Gift className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" /><span className="font-semibold">Direkt buchen und 10% sparen!</span></p>
                </div>
                <Button onClick={() => {setActiveRoom("doppel"); setBookingOpen(true);}} className="w-full bg-[#78350f] hover:bg-[#5d2809] rounded-full py-7 text-lg font-semibold">
                  Jetzt anfragen<ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-stone-50 rounded-3xl p-10">
            <h3 className="font-serif text-3xl font-bold text-center mb-10">Zimmer-Impressionen</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {[1, 3, 5, 6, 2, 4].map((num, idx) => (
                <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
                  <Image src={`/images/hotel/room-0${num}.jpg`} alt={`Zimmer ${idx + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More sections would continue here */}
    </div>
  );
}
