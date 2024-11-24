import { Book, Video, UserCog, LayoutDashboard } from 'lucide-react';

const features = [
  {
    title: 'Recettes Exclusives',
    description: 'Accédez à notre bibliothèque de recettes uniques, créées par des chefs étoilés.',
    icon: Book,
  },
  {
    title: 'Ateliers Live',
    description: 'Participez à des sessions interactives en direct avec nos chefs experts.',
    icon: Video,
  },
  {
    title: 'Recommandations',
    description: 'Recevez des suggestions personnalisées basées sur vos préférences.',
    icon: UserCog,
  },
  {
    title: 'Tableau de Bord',
    description: 'Suivez votre progression et organisez vos recettes favorites.',
    icon: LayoutDashboard,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Nos Fonctionnalités</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez tous les outils que nous mettons à votre disposition pour améliorer vos compétences culinaires.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}