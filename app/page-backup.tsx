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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  MapPin, Phone, Mail, Clock, Wifi, Car, Coffee, UtensilsCrossed, Bed, Star, 
  Menu, ChevronRight, Calendar, Users, Zap, Info, Train, Navigation, Check,
  ArrowRight, Heart, Award, Camera, Briefcase, PartyPopper, Sun, Moon,
  Thermometer, Droplets, Wind, Shield, Sparkles, Gift
} from "lucide-react";

// Premium Hotel Krone Website
// Option 3: Premium (€7,500 level)
// Features: Stunning design, full booking system, restaurant reservations,
// event management, gallery, SEO optimized, conversion focused

export default function HotelKronePremium() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      {/* Premium Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className={`font-serif text-3xl font-bold transition-colors ${
            scrolled ? "text-[#78350f]" : "text-white"
          }`}>
            Hotel Krone
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {[
              { id: "zimmer", label: "Zimmer" },
              { id: "restaurant", label: "Restaurant" },
              { id: "tagungen", label: "Tagungen" },
              { id: "wellness", label: "Wellness" },
              { id: "anfahrt", label: "Anfahrt" },
              { id: "kontakt", label: "Kontakt" },
            ].map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className={`text-sm font-medium tracking-wide uppercase transition-all hover:opacity-70 ${
                  scrolled ? "text-stone-700" : "text-white/90"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button 
              variant="outline" 
              className={`rounded-full px-6 transition-all ${
                scrolled 
                  ? "border-[#78350f] text-[#78350f] hover:bg-[#78350f] hover:text-white" 
                  : "border-white text-white hover:bg-white hover:text-[#78350f]"
              }`}
              asChild
            >
              <a href="tel:+4962015050">
                <Phone className="w-4 h-4 mr-2" />
                +49 6201 505 0
              </a>
            </Button>
            <Button 
              className="bg-[#78350f] hover:bg-[#5d2809] text-white rounded-full px-6"
              asChild
            >
              <a href="#buchung">
                <Calendar className="w-4 h-4 mr-2" />
                Jetzt buchen
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
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
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-medium text-stone-700 hover:text-[#78350f] transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <Separator className="my-4" />
                <Button className="w-full bg-[#78350f] hover:bg-[#5d2809] rounded-full" asChild>
                  <a href="tel:+4962015050">
                    <Phone className="w-5 h-5 mr-2" />
                    +49 6201 505 0
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      {/* HERO SECTION - Stunning Full-Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hotel/hero-2.jpg"
            alt="Hotel Krone Großsachsen"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-1.5 text-sm tracking-wider">
            SEIT 1892 • FAMILIENGEFÜHRT
          </Badge>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight leading-none">
            Hotel Krone
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-4 text-white/90 max-w-3xl mx-auto">
            Ihr Zuhause an der Bergstraße
          </p>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Gemütliche Zimmer • Regionale Küche • Herzliche Gastfreundschaft
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-[#78350f] hover:bg-white/90 rounded-full px-8 py-6 text-lg font-medium" asChild>
              <a href="#buchung">
                <Calendar className="w-5 h-5 mr-2" />
                Zimmer buchen
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-medium" asChild>
              <a href="#restaurant">
                <UtensilsCrossed className="w-5 h-5 mr-2" />
                Tisch reservieren
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span>4.8/5 Google Bewertungen</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>Direkt buchen = Günstigster Preis</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <span>Kostenlose Stornierung</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-10 h-10 text-white/60 rotate-90" />
        </div>
      </section>

      {/* VALUE PROPOSITION BAR */}
      <section className="bg-[#78350f] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Wifi, label: "Highspeed WLAN", sub: "Kostenlos" },
              { icon: Car, label: "80 Parkplätze", sub: "Inklusive" },
              { icon: Zap, label: "2 E-Ladestationen", sub: "Verfügbar" },
              { icon: Coffee, label: "Frühstücksbuffet", sub: "Reichhaltig" },
            ].map((feature) => (
              <div key={feature.label} className="flex flex-col items-center">
                <feature.icon className="w-8 h-8 mb-2 text-white/80" />
                <span className="font-semibold text-sm">{feature.label}</span>
                <span className="text-xs text-white/60">{feature.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROOMS SECTION - Premium Showcase */}
      <section id="zimmer" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-[#78350f] border-[#78350f]">Unterkunft</Badge>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-stone-900 mb-6">
              Ihr Zuhause auf Zeit
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Alle unsere Zimmer sind gemütlich und freundlich gestaltet. 
              Genießen Sie modernen Komfort in historischem Ambiente.
            </p>
          </div>

          {/* Room Cards - Premium Layout */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Einzelzimmer */}
            <Card className="overflow-hidden group border-0 shadow-2xl">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="/images/hotel/room-02.jpg"
                  alt="Einzelzimmer Hotel Krone"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <Badge className="bg-white/20 text-white border-white/30 mb-3">
                    Für 1 Person
                  </Badge>
                  <h3 className="font-serif text-3xl font-bold mb-2">Einzelzimmer</h3>
                  <p className="text-white/80 text-sm">Gemütlich & funktionell</p>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-4xl font-bold text-[#78350f]">70 €</div>
                    <div className="text-stone-500 text-sm">pro Nacht inkl. Frühstück</div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Verfügbar
                  </Badge>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Eigener Bad/Dusche/WC",
                    "Flatscreen TV",
                    "Kostenloses WLAN",
                    "Schreibtisch",
                    "Direktwahltelefon"
                  ].map((amenity) => (
                    <li key={amenity} className="flex items-center text-stone-600">
                      <Check className="w-5 h-5 mr-3 text-[#78350f]" />
                      {amenity}
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-amber-800 flex items-start">
                    <Info className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                    Kostenfreie Stornierung bis 18:00 am Anreisetag bei Direktbuchung
                  </p>
                </div>
                <Button className="w-full bg-[#78350f] hover:bg-[#5d2809] rounded-full py-6 text-lg" asChild>
                  <a href="#buchung">
                    Jetzt anfragen
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Doppelzimmer */}
            <Card className="overflow-hidden group border-0 shadow-2xl ring-2 ring-[#78350f]">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src="/images/hotel/room-04.jpg"
                  alt="Doppelzimmer Hotel Krone"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#78350f] text-white">Beliebt</Badge>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <Badge className="bg-white/20 text-white border-white/30 mb-3">
                    Für 2 Personen
                  </Badge>
                  <h3 className="font-serif text-3xl font-bold mb-2">Doppelzimmer</h3>
                  <p className="text-white/80 text-sm">Geräumig & komfortabel</p>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-4xl font-bold text-[#78350f]">90 €</div>
                    <div className="text-stone-500 text-sm">pro Nacht inkl. Frühstück</div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Verfügbar
                  </Badge>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Eigener Bad/Dusche/WC",
                    "Kingsize-Bett oder Twin",
                    "Flatscreen TV",
                    "Kostenloses WLAN",
                    "Sitzecke",
                    "Minibar"
                  ].map((amenity) => (
                    <li key={amenity} className="flex items-center text-stone-600">
                      <Check className="w-5 h-5 mr-3 text-[#78350f]" />
                      {amenity}
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-amber-800 flex items-start">
                    <Gift className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                    Direkt buchen und 10% sparen!
                  </p>
                </div>
                <Button className="w-full bg-[#78350f] hover:bg-[#5d2809] rounded-full py-6 text-lg" asChild>
                  <a href="#buchung">
                    Jetzt anfragen
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Room Gallery */}
          <div className="bg-stone-50 rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-center mb-8">Zimmer-Impressionen</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 3, 5, 6, 1, 3].map((num, idx) => (
                <div key={idx} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
                  <Image
                    src={`/images/hotel/room-0${num}.jpg`}
                    alt={`Zimmeransicht ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESTAURANT SECTION - Premium Digital Menu */}
      <section id="restaurant" className="py-24 lg:py-32 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4 text-[#78350f] border-[#78350f]">Gastronomie</Badge>
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-stone-900 mb-6">
                Genussmomente
              </h2>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                Regionale Küche trifft auf moderne Interpretation. Unser Küchenchef 
                verwöhnt Sie mit saisonalen Spezialitäten aus der Region.
              </p>

              {/* Opening Hours - Premium Card */}
              <Card className="mb-8 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-[#78350f]" />
                    <h4 className="font-semibold text-lg">Öffnungszeiten</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-stone-100">
                      <span className="font-medium text-red-600">Montag & Dienstag</span>
                      <span className="text-red-600 font-medium">Ruhetag</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-stone-100">
                      <span className="text-stone-700">Mittwoch & Donnerstag</span>
                      <span className="text-stone-600">17:30 - 22:00 Uhr</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-stone-700">Freitag - Sonntag</span>
                      <span className="text-stone-600">11:30 - 14:30 & 17:30 - 22:00 Uhr</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: UtensilsCrossed, title: "Regionale Küche", desc: "Saisonal & frisch" },
                  { icon: Wine, title: "Weinkarte", desc: "Regionale Weine" },
                  { icon: PartyPopper, title: "Events", desc: "Weinabende & mehr" },
                  { icon: Gift, title: "Raummiete", desc: "Kostenlos bei Veranstaltungen" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#78350f]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#78350f]" />
                    </div>
                    <div>
                      <div className="font-semibold text-stone-900">{item.title}</div>
                      <div className="text-sm text-stone-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#78350f] hover:bg-[#5d2809] rounded-full px-8" asChild>
                  <a href="#tischreservierung">
                    <Calendar className="w-5 h-5 mr-2" />
                    Tisch reservieren
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 border-[#78350f] text-[#78350f] hover:bg-[#78350f] hover:text-white" asChild>
                  <a href="#speisekarte">
                    <UtensilsCrossed className="w-5 h-5 mr-2" />
                    Speisekarte ansehen
                  </a>
                </Button>
              </div>
            </div>

            {/* Restaurant Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-56 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hotel/restaurant-1.jpg"
                    alt="Restaurant"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-72 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hotel/food-1.jpg"
                    alt="Speisen"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-72 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hotel/restaurant-2.jpg"
                    alt="Restaurant"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-56 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hotel/restaurant-3.jpg"
                    alt="Restaurant"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continue with more sections... */}
      
    </div>
  );
}

// Wine icon component
function Wine({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 22h8" />
      <path d="M7 10h10" />
      <path d="M12 15v7" />
      <path d="M12 10a5 5 0 0 1 5-5 3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3 5 5 0 0 1 5 5z" />
    </svg>
  );
}
