'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Comment fonctionnent les ateliers en direct ?',
    answer: 'Les ateliers sont diffusés en direct via notre plateforme. Vous pouvez interagir avec le chef, poser des questions et suivre pas à pas la préparation des recettes.',
  },
  {
    question: 'Puis-je accéder aux enregistrements des ateliers passés ?',
    answer: 'Oui, tous les ateliers sont enregistrés et disponibles en replay pour nos membres premium.',
  },
  {
    question: 'Quelle est la durée de l\'abonnement ?',
    answer: 'Nous proposons des abonnements mensuels ou annuels, avec la possibilité d\'annuler à tout moment.',
  },
  {
    question: 'Les recettes sont-elles adaptées aux débutants ?',
    answer: 'Nous proposons des recettes pour tous les niveaux, du débutant au chef confirmé, avec des explications détaillées.',
  },
  {
    question: 'Comment puis-je contacter le support ?',
    answer: 'Notre équipe support est disponible 7j/7 par chat ou email. Vous pouvez également nous contacter via le formulaire de contact.',
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Questions Fréquentes</h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}