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
  Users
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
            <a href="#aktivitaeten" className="text-sm font-medium hover:text-primary transition-colors">Aktivitäten</a>
            <a href="#kontakt" className="text-sm font-medium hover:text-primary transition-colors">Kontakt</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Phone className="w-4 h-4 mr-2" />
              Anrufen
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <Calendar className="w-4 h-4 mr-2" />
              Jetzt buchen
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
                <a href="#aktivitaeten" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Aktivitäten</a>
                <a href="#kontakt" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Kontakt</a>
                <Separator className="my-4" />
                <Button className="bg-primary hover:bg-primary/90 w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Jetzt buchen
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80')" }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white backdrop-blur-sm border-white/30 hover:bg-white/30">
            Seit 1892 Ihr Gastgeber an der Bergstraße
          </Badge>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Hotel Krone
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
            Tradition trifft Moderne. Erleben Sie herzliche Gastfreundschaft in historischem Ambiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8">
              <Calendar className="w-5 h-5 mr-2" />
              Zimmer buchen
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
              <UtensilsCrossed className="w-5 h-5 mr-2" />
              Tisch reservieren
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ChevronRight className="w-8 h-8 text-white rotate-90" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Wifi, label: "Highspeed WLAN" },
              { icon: Car, label: "Kostenlose Parkplätze" },
              { icon: Coffee, label: "Frühstück inklusive" },
              { icon: MapPin, label: "Perfekte Lage" },
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
              Ihr Zuhause auf Zeit
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ob Geschäftsreise oder Urlaub – unsere komfortablen Zimmer bieten alles für einen erholsamen Aufenthalt.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Einzelzimmer",
                price: "89",
                image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
                features: ["1 Person", "18 m²", "Dusche/WC", "Flatscreen TV"],
              },
              {
                title: "Doppelzimmer",
                price: "129",
                image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
                features: ["2 Personen", "25 m²", "Dusche/WC", "Balkon"],
                popular: true,
              },
              {
                title: "Suite",
                price: "189",
                image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80",
                features: ["2-4 Personen", "45 m²", "Wohnbereich", "Whirlpool"],
              },
            ].map((room) => (
              <Card key={room.title} className={`overflow-hidden ${room.popular ? 'ring-2 ring-primary' : ''}`}>
                <div className="relative h-56">
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
                      <span className="text-2xl font-bold text-primary">{room.price}€</span>
                      <span className="text-sm text-muted-foreground">/Nacht</span>
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
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Verfügbarkeit prüfen
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Section */}
      <section id="restaurant" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Genuss</Badge>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Unser Restaurant
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Regionale Küche trifft auf moderne Interpretation. Unser Küchenchef verwöhnt Sie mit saisonalen Spezialitäten aus der Region und erlesenen Weinen.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Regionale & saisonale Küche",
                  "Wechselnde Tagesgerichte",
                  "Feiern & Events bis 80 Personen",
                  "Biergarten mit Bergblick",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <UtensilsCrossed className="w-5 h-5 mr-3 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      <Calendar className="w-5 h-5 mr-2" />
                      Tisch reservieren
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="font-serif">Tisch reservieren</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4 mt-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="date">Datum</Label>
                          <Input id="date" type="date" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time">Uhrzeit</Label>
                          <Input id="time" type="time" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guests">Anzahl Gäste</Label>
                        <Input id="guests" type="number" min="1" max="20" placeholder="2" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Max Mustermann" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input id="phone" type="tel" placeholder="+49 123 456789" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="notes">Besonderheiten</Label>
                        <Textarea id="notes" placeholder="Allergien, besondere Wünsche..." />
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        Reservierung anfragen
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
                <Button size="lg" variant="outline">
                  Speisekarte ansehen
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80"
                    alt="Restaurant"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
                    alt="Gericht"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&q=80"
                    alt="Biergarten"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80"
                    alt="Wein"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="aktivitaeten" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Entdecken</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Die Region erleben
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Weinheim und die Bergstraße bieten unzählige Möglichkeiten für unvergessliche Erlebnisse.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Schloss Weinheim",
                description: "Das markante Wahrzeichen der Stadt mit wunderschönem Schlosspark und Aussicht über die Rheinebene.",
                distance: "5 Min.",
                image: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=600&q=80",
              },
              {
                title: "Bergstraße",
                description: "Deutschlands älteste Ferienstraße mit malerischen Weinörfern, Burgen und Fachwerkhäusern.",
                distance: "Direkt",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
              },
              {
                title: "Wanderwege",
                description: "Über 100 km markierte Wanderwege durch die schöne Landschaft des Odenwalds.",
                distance: "Ab Hotel",
                image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
              },
            ].map((activity) => (
              <Card key={activity.title} className="overflow-hidden group cursor-pointer">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-foreground">
                    {activity.distance}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2">{activity.title}</h3>
                  <p className="text-muted-foreground text-sm">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Das sagen unsere Gäste</h2>
            <div className="flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg">4.8 von 5 auf Google</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Wunderbares Hotel mit herzlicher Gastfreundschaft. Das Restaurant ist eine Sensation – unbedingt reservieren!",
                author: "Maria K.",
                location: "München",
              },
              {
                text: "Perfekte Lage für Wanderungen an der Bergstraße. Zimmer sehr sauber und gemütlich. Komme wieder!",
                author: "Thomas S.",
                location: "Frankfurt",
              },
              {
                text: "Seit Jahren unsere erste Adresse in der Region. Familiär geführt, authentisch, wunderschön.",
                author: "Sabine M.",
                location: "Hamburg",
              },
            ].map((review, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4 italic">"{review.text}"</p>
                <div>
                  <p className="font-semibold">{review.author}</p>
                  <p className="text-sm opacity-75">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge variant="outline" className="mb-4">Kontakt</Badge>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Wir freuen uns auf Sie
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Haben Sie Fragen oder möchten Sie direkt buchen? Kontaktieren Sie uns – wir antworten innerhalb weniger Stunden.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Adresse</h4>
                    <p className="text-muted-foreground">Hauptstraße 42<br />68526 Großsachsen<br />Deutschland</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefon</h4>
                    <p className="text-muted-foreground">+49 6201 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">E-Mail</h4>
                    <p className="text-muted-foreground">info@hotel-krone-grossaschsen.de</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Rezeption</h4>
                    <p className="text-muted-foreground">Täglich 7:00 – 22:00 Uhr<br />Check-in ab 15:00 | Check-out bis 11:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 rounded-xl p-8">
              <h3 className="font-serif text-2xl font-bold mb-6">Nachricht senden</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="vorname">Vorname</Label>
                    <Input id="vorname" placeholder="Max" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nachname">Nachname</Label>
                    <Input id="nachname" placeholder="Mustermann" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-contact">E-Mail</Label>
                  <Input id="email-contact" type="email" placeholder="max@beispiel.de" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="betreff">Betreff</Label>
                  <Input id="betreff" placeholder="Zimmeranfrage..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nachricht">Nachricht</Label>
                  <Textarea id="nachricht" rows={4} placeholder="Ihre Nachricht..." />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Nachricht senden
                </Button>
              </form>
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
              <p className="text-sm">
                Tradition trifft Moderne. Ihr Gastgeber an der Bergstraße seit 1892.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Schnelllinks</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#zimmer" className="hover:text-white transition-colors">Zimmer</a></li>
                <li><a href="#restaurant" className="hover:text-white transition-colors">Restaurant</a></li>
                <li><a href="#aktivitaeten" className="hover:text-white transition-colors">Aktivitäten</a></li>
                <li><a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Folgen Sie uns</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-primary transition-colors">
                  FB
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-primary transition-colors">
                  IG
                </a>
              </div>
            </div>
          </div>
          <Separator className="bg-stone-800 mb-8" />
          <div className="text-sm text-center">
            © 2026 Hotel Krone. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
}
