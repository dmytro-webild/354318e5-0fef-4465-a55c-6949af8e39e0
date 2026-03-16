"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Zap, Heart, CreditCard, Mail } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="largeSmallSizeMediumTitles"
      background="noise"
      cardStyle="gradient-mesh"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "home" },
            { name: "Chi Siamo", id: "about" },
            { name: "Campi", id: "features" },
            { name: "Tariffe", id: "pricing" },
            { name: "Prenotazioni", id: "contact" }
          ]}
          brandName="B Padel"
          bottomLeftText="Centro Padel Indoor"
          bottomRightText="Prenota Ora"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitTestimonial
          title="Il Tuo Nuovo Spazio Padel"
          description="B Padel è il centro padel indoor più moderno della zona. Con 3 campi professionali, illuminazione LED, e una comunità di giocatori appassionati, è il luogo perfetto per giocare, imparare e divertirsi."
          background={{ variant: "noise" }}
          testimonials={[
            {
              name: "Marco Rossi",              handle: "@marco_padel",              testimonial: "Migliore centro padel della città! Campi impeccabili e staff fantastico.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-young-man-with-shiny-smile_158595-3430.jpg",              imageAlt: "Marco Rossi"
            },
            {
              name: "Giulia Ferraro",              handle: "@giulia_sports",              testimonial: "Ambiente accogliente e partite sempre interessanti. Perfetto!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-outdoor-portrait-handsome-african-man-with-afro-haircut-holding-hands-headphones-while-listening-music-being-excited-sitting-park_176420-19805.jpg",              imageAlt: "Giulia Ferraro"
            },
            {
              name: "Luca Benedetti",              handle: "@luca_padel",              testimonial: "Campi di qualità superiore e prenotazione facilissima online.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/fit-male-afro-american-jogger-with-bushy-hairstyle-warming-up-his-muscles-before-running-man-athlete-black-sportswear-stretching-legs-with-stretch-exercise-wooden-pier-with-white-earphones_176420-19877.jpg",              imageAlt: "Luca Benedetti"
            },
            {
              name: "Sofia Neri",              handle: "@sofia_games",              testimonial: "Il padel non è mai stato così accessibile e divertente!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/bearded-man-brown-suit-wearing-glasses-looking-confused-smiling-pointing-back-with-thumbs_141793-111671.jpg",              imageAlt: "Sofia Neri"
            }
          ]}
          testimonialRotationInterval={5000}
          useInvertedBackground={false}
          tag="Centro Padel Indoor"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[
            { text: "Prenota Ora", href: "#contact" },
            { text: "Scopri di Più", href: "#features" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/female-tennis-player-green-court-grass_72229-355.jpg"
          imageAlt="Padel Court"
          mediaAnimation="blur-reveal"
          imagePosition="right"
          fixedMediaHeight={true}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Chi Siamo"
          description="B Padel è stato fondato con la missione di portare il padel di qualità a tutti. I nostri tre campi indoor sono equipaggiati con i migliori materiali e manutenuti al massimo livello. Che tu sia un principiante o un giocatore esperto, troverai qui l'ambiente ideale per giocare e farti amici che condividono la tua passione."
          tag="La Nostra Missione"
          tagIcon={Heart}
          tagAnimation="opacity"
          buttons={[
            { text: "Contattaci", href: "#contact" }
          ]}
          buttonAnimation="opacity"
          imageSrc="http://img.b2bpic.net/free-photo/man-woman-workout_329181-14093.jpg"
          imageAlt="B Padel Facility"
          useInvertedBackground={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="I Nostri 3 Campi Professionali"
          description="Ogni campo è stato progettato secondo gli standard internazionali di padel. Perfetti per partite competitive, lezioni, o semplicemente divertirsi con gli amici."
          tag="Strutture"
          tagIcon={Zap}
          tagAnimation="slide-up"
          features={[
            {
              title: "Campo 1 - Professiionale",              description: "Campo regolamentare con illuminazione LED di ultima generazione. Ideale per tornei e partite competitive.",              imageSrc: "http://img.b2bpic.net/free-photo/athlete-starting-line-stadium_23-2149399589.jpg",              imageAlt: "Campo 1"
            },
            {
              title: "Campo 2 - Premium",              description: "Spazio versatile perfetto per corsi di gruppo e partite amichevoli. Accesso a servizi premium e bar.",              imageSrc: "http://img.b2bpic.net/free-photo/person-getting-ready-play-paddle-tennis-inside_23-2149444556.jpg",              imageAlt: "Campo 2"
            },
            {
              title: "Campo 3 - Training",              description: "Ideale per lezioni individuali e allenamenti specifici. Dotato di attrezzature per l'analisi delle prestazioni.",              imageSrc: "http://img.b2bpic.net/free-photo/active-young-people-playing-squash_329181-13290.jpg",              imageAlt: "Campo 3"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "Visualizza le Tariffe", href: "#pricing" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardNine
          title="Tariffe e Piani di Prenotazione"
          description="Scegli il piano più adatto alle tue esigenze. Prezzi trasparenti senza costi nascosti."
          tag="Prezzi Competitivi"
          tagIcon={CreditCard}
          tagAnimation="opacity"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="opacity"
          plans={[
            {
              id: "singola",              title: "Prenotazione Singola",              price: "€35",              period: "per ora",              features: [
                "1 ora di gioco",                "Campo disponibile",                "Accesso ai servizi base",                "Parcheggio gratuito"
              ],
              button: { text: "Prenota Ora", href: "#contact" }
            },
            {
              id: "abbonamento",              title: "Abbonamento Mensile",              price: "€250",              period: "al mese",              features: [
                "8 ore di gioco",                "Prenotazione prioritaria",                "Accesso a tutti i servizi",                "Sconto bar -20%",                "Community events"
              ],
              button: { text: "Iscriviti Ora", href: "#contact" }
            },
            {
              id: "annuale",              title: "Abbonamento Annuale",              price: "€2.500",              period: "all'anno",              features: [
                "Accesso illimitato",                "Prenotazione garantita",                "Esclusivi workshop",                "Personal coach incluso",                "Sconto bar -30%",                "Guest pass illimitati"
              ],
              button: { text: "Diventa Membro", href: "#contact" }
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="B Padel mi ha cambiato il modo di vivere lo sport. I campi sono perfetti, lo staff è cordialissimo e ho trovato una vera comunità di appassionati. Consigliatissimo!"
          rating={5}
          author="Marco Rossi"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/portrait-happy-young-man-with-shiny-smile_158595-3430.jpg", alt: "Marco Rossi" },
            { src: "http://img.b2bpic.net/free-photo/close-up-outdoor-portrait-handsome-african-man-with-afro-haircut-holding-hands-headphones-while-listening-music-being-excited-sitting-park_176420-19805.jpg", alt: "Giulia Ferraro" },
            { src: "http://img.b2bpic.net/free-photo/fit-male-afro-american-jogger-with-bushy-hairstyle-warming-up-his-muscles-before-running-man-athlete-black-sportswear-stretching-legs-with-stretch-exercise-wooden-pier-with-white-earphones_176420-19877.jpg", alt: "Luca Benedetti" },
            { src: "http://img.b2bpic.net/free-photo/bearded-man-brown-suit-wearing-glasses-looking-confused-smiling-pointing-back-with-thumbs_141793-111671.jpg", alt: "Sofia Neri" }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Contattaci"
          title="Prenota il Tuo Spazio"
          description="Compila il modulo per prenotare il tuo campo. Riceverai una conferma via email entro poche ore."
          tagIcon={Mail}
          tagAnimation="opacity"
          background={{ variant: "animated-grid" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/side-view-woman-looking-out-window_23-2149622868.jpg"
          imageAlt="Contact"
          mediaAnimation="blur-reveal"
          mediaPosition="right"
          inputPlaceholder="Inserisci la tua email"
          buttonText="Ricevi Disponibilità"
          termsText="Accettando acconsenti alla ricezione di comunicazioni su disponibilità e offerte esclusive."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="B Padel"
          columns={[
            {
              items: [
                { label: "Home", href: "#home" },
                { label: "Chi Siamo", href: "#about" },
                { label: "Campi", href: "#features" },
                { label: "Tariffe", href: "#pricing" }
              ]
            },
            {
              items: [
                { label: "Prenotazioni", href: "#contact" },
                { label: "FAQ", href: "#" },
                { label: "Contatti", href: "#contact" },
                { label: "Blog", href: "#" }
              ]
            },
            {
              items: [
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Twitter", href: "https://twitter.com" },
                { label: "LinkedIn", href: "https://linkedin.com" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Termini di Servizio", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Info Legali", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}