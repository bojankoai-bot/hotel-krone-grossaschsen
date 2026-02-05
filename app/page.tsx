"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Wifi, 
  Car, 
  Coffee,
  UtensilsCrossed,
  Bed,
  Star,
  Menu,
  ChevronRight,
  Calendar,
  Users,
  Zap,
  Info,
  Train,
  Navigation
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-serif text-2xl font-bold text-primary">
            Hotel Krone
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#zimmer" className="text-sm font-medium hover:text-primary transition-colors">Zimmer</a>
            <a href="#restaurant" className="text-sm font-medium hover:text-primary transition-colors">Restaurant</a>
            <a href="#anfahrt" className="text-sm font-medium hover:text-primary transition-colors">Anfahrt</a>
            <a href="#kontakt" className="text-sm font-medium hover:text-primary transition-colors">Kontakt</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <a href="tel:+4962015050">
                <Phone className="w-4 h-4 mr-2" />
                Anrufen
              </a>
            </Button>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <a href="mailto:info@krone-grosssachsen.de">
                <Mail className="w-4 h-4 mr-2" />
                Anfragen
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="font-serif text-left">Hotel Krone</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                <a href="#zimmer" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Zimmer</a>
                <a href="#restaurant" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Restaurant</a>
                <a href="#anfahrt" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Anfahrt</a>
                <a href="#kontakt" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Kontakt</a>
                <Separator className="my-4" />
                <Button className="bg-primary hover:bg-primary/90 w-full" asChild>
                  <a href="tel:+4962015050">
                    <Phone className="w-4 h-4 mr-2" />
                    +49 6201 505 0
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10" />
        <div className="absolute inset-0">
          <Image
            src="/images/hotel/hero-1.jpg"
            alt="Hotel Krone"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white backdrop-blur-sm border-white/30 hover:bg-white/30">
            Hotel Krone Sabine Grüber e.K.
          </Badge>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Hotel Krone
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl mx-auto font-light">
            Ihr Gastgeber in Großsachsen
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Gemütliche Zimmer, regionale Küche, herzliche Gastfreundschaft — seit Generationen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8" asChild>
              <a href="tel:+4962015050">
                <Phone className="w-5 h-5 mr-2" />
                Jetzt anrufen
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8" asChild>
              <a href="mailto:info@krone-grosssachsen.de">
                <Calendar className="w-5 h-5 mr-2" />
                Zimmer anfragen
              </a>
            </Button>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm">
            <Info className="w-4 h-4" />
            Direkt buchen ist am günstigsten!
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ChevronRight className="w-8 h-8 text-white rotate-90" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Wifi, label: "Kostenloses WLAN" },
              { icon: Car, label: "80 Parkplätze (kostenlos)" },
              { icon: Zap, label: "2 E-Ladestationen" },
              { icon: Coffee, label: "Frühstück inklusive" },
            ].map((feature) => (
              <div key={feature.label} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="zimmer" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Unterkunft</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Unsere Zimmer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Alle unsere Zimmer sind gemütlich und freundlich gestaltet. Sie müssen auf keinerlei modernen Komfort verzichten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Einzelzimmer",
                price: "70",
                image: "/images/hotel/hero-2.jpg",
                features: ["1 Person", "Eigener Bad/Dusche/WC", "TV & WLAN", "Frühstück inklusive"],
              },
              {
                title: "Doppelzimmer",
                price: "90",
                image: "/images/hotel/hero-3.jpg",
                features: ["2 Personen", "Eigener Bad/Dusche/WC", "TV & WLAN", "Frühstück inklusive"],
                popular: true,
              },
            ].map((room) => (
              <Card key={room.title} className={`overflow-hidden ${room.popular ? 'ring-2 ring-primary' : ''}`}>
                <div className="relative h-64">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover"
                  />
                  {room.popular && (
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      Beliebt
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-2xl font-bold">{room.title}</h3>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-primary">{room.price}€</span>
                      <span className="text-sm text-muted-foreground block">/Nacht inkl. Frühstück</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <Star className="w-4 h-4 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <p className="text-sm text-green-800">
                      <Info className="w-4 h-4 inline mr-1" />
                      Kostenfreie Stornierung bis 18:00 am Anreisetag bei Direktbuchung!
                    </p>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                    <a href="tel:+4962015050">
                      <Phone className="w-4 h-4 mr-2" />
                      Verfügbarkeit prüfen
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pool Notice */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 flex items-start gap-4">
              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 relative">
                <Image
                  src="/images/hotel/pool.jpg"
                  alt="Schwimmbad"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-amber-900 mb-1">Hinweis: Schwimmbad</h4>
                <p className="text-sm text-amber-800">
                  Unser Schwimmbad ist bis auf Weiteres aufgrund eines Wasserschadens geschlossen. 
                  Wir bitten um Ihr Verständnis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Section */}
      <section id="restaurant" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Gastronomie</Badge>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Unser Restaurant
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Genießen Sie regionale Küche in gemütlicher Atmosphäre. Ob für ein schnelles Mittagessen oder ein entspanntes Abendessen – wir freuen uns auf Ihren Besuch.
              </p>
              
              {/* Opening Hours */}
              <div className="bg-stone-50 rounded-xl p-6 mb-8">
                <h4 className="font-semibold mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Öffnungszeiten
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-red-600 font-medium">Montag & Dienstag</span>
                    <span className="text-red-600">Ruhetag</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mittwoch & Donnerstag</span>
                    <span>Abends warme Küche</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Freitag – Sonntag</span>
                    <span>Mittags & abends warme Küche</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Regionale & saisonale Küche",
                  "Keine Raummiete bei Veranstaltungen",
                  "Veranstaltungsbüro: Mo-Fr 09:00-15:00",
                  "Reservierung empfohlen",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <UtensilsCrossed className="w-5 h-5 mr-3 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <a href="tel:+4962015050">
                    <Phone className="w-5 h-5 mr-2" />
                    Tisch reservieren
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="mailto:info@krone-grosssachsen.de">
                    <Mail className="w-5 h-5 mr-2" />
                    Anfrage senden
                  </a>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/hotel/restaurant-1.jpg"
                    alt="Restaurant"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/images/hotel/food-1.jpg"
                    alt="Speisen"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/images/hotel/restaurant-2.jpg"
                    alt="Restaurant"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
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

      {/* Location/Anfahrt Section */}
      <section id="anfahrt" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Anfahrt</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              So finden Sie uns
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Zentral gelegen vor den Toren von Heidelberg, in unmittelbarer Nähe von Mannheim.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Address & Contact */}
            <div className="bg-white rounded-xl p-8">
              <h3 className="font-serif text-2xl font-bold mb-6">Hotel Krone</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Adresse</h4>
                    <p className="text-muted-foreground">Landstr. 9-11<br />69493 Hirschberg (Großsachsen)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefon</h4>
                    <p className="text-muted-foreground"><a href="tel:+4962015050" className="hover:text-primary">+49 6201 505 0</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">E-Mail</h4>
                    <p className="text-muted-foreground"><a href="mailto:info@krone-grosssachsen.de" className="hover:text-primary">info@krone-grosssachsen.de</a></p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Navigation className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Anreise mit dem Auto</h4>
                    <p className="text-muted-foreground text-sm">
                      Autobahn A5 Ausfahrt Hirschberg. Richtung Hirschberg-Großsachsen ca. 1 km bis zur T-Kreuzung. 
                      Links Richtung Weinheim auf die B3. Wir befinden sich am Ortseingang auf der linken Seite.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Train className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Anreise mit dem Zug</h4>
                    <p className="text-muted-foreground text-sm">
                      HBF Weinheim ca. 5km<br />
                      HBF Heidelberg ca. 10km<br />
                      HBF Mannheim ca. 20km<br />
                      HBF Frankfurt/Main ca. 60km
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-stone-200 rounded-xl h-full min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-stone-400 mx-auto mb-4" />
                <p className="text-stone-600 font-medium">Google Maps Integration</p>
                <p className="text-stone-500 text-sm mt-2">Landstr. 9-11, 69493 Hirschberg</p>
                <Button variant="outline" className="mt-4" asChild>
                  <a href="https://maps.google.com/?q=Landstraße+9-11+69493+Hirschberg" target="_blank" rel="noopener noreferrer">
                    <Navigation className="w-4 h-4 mr-2" />
                    In Google Maps öffnen
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Kontakt</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Wir freuen uns auf Sie
            </h2>
            <p className="text-lg text-muted-foreground">
              Haben Sie Fragen oder möchten Sie reservieren? Kontaktieren Sie uns — wir helfen Ihnen gerne weiter.
            </p>
          </div>

          <div className="bg-stone-50 rounded-xl p-8">
            <form className="space-y-6" action="mailto:info@krone-grosssachsen.de" method="post" encType="text/plain">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="vorname">Vorname *</Label>
                  <Input id="vorname" name="Vorname" placeholder="Max" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nachname">Nachname *</Label>
                  <Input id="nachname" name="Nachname" placeholder="Mustermann" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail *</Label>
                <Input id="email" name="Email" type="email" placeholder="max@beispiel.de" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefon">Telefon</Label>
                <Input id="telefon" name="Telefon" type="tel" placeholder="+49 123 456789" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="betreff">Betreff *</Label>
                <Input id="betreff" name="Betreff" placeholder="Zimmeranfrage, Tischreservierung..." required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nachricht">Nachricht *</Label>
                <Textarea id="nachricht" name="Nachricht" rows={5} placeholder="Ihre Nachricht an uns..." required />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                <Mail className="w-4 h-4 mr-2" />
                Nachricht senden
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t text-center">
              <p className="text-muted-foreground">
                Oder rufen Sie uns direkt an:
              </p>
              <a href="tel:+4962015050" className="text-2xl font-bold text-primary hover:underline mt-2 inline-block">
                +49 6201 505 0
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">Hotel Krone</h3>
              <p className="text-sm mb-4">
                Hotel Krone Sabine Grüber e.K.<br />
                Landstr. 9-11<br />
                69493 Hirschberg
              </p>
              <p className="text-sm">
                Tel: <a href="tel:+4962015050" className="hover:text-white">+49 6201 505 0</a><br />
                Fax: +49 6201 505 400<br />
                <a href="mailto:info@krone-grosssachsen.de" className="hover:text-white">info@krone-grosssachsen.de</a>
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Schnelllinks</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#zimmer" className="hover:text-white transition-colors">Zimmer</a></li>
                <li><a href="#restaurant" className="hover:text-white transition-colors">Restaurant</a></li>
                <li><a href="#anfahrt" className="hover:text-white transition-colors">Anfahrt</a></li>
                <li><a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Öffnungszeiten</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-red-400">Mo-Di: Ruhetag</li>
                <li>Mi-Do: Abends</li>
                <li>Fr-So: Mittags & Abends</li>
              </ul>
            </div>
          </div>
          <Separator className="bg-stone-800 mb-8" />
          <div className="text-sm text-center">
            © {new Date().getFullYear()} Hotel Krone Sabine Grüber e.K. — Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
}
