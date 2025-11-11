import { ShoppingCart, Ticket, Activity, BookOpen } from 'lucide-react';
import DashboardCard from '@/components/DashboardCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const cards = [
    {
      title: 'Adquirir Nuevo Producto',
      description: 'Impulsa la innovación de tu organización. Cada nuevo producto es una oportunidad para transformar datos en decisiones estratégicas.',
      icon: ShoppingCart,
      to: '/nuevo-producto',
      gradient: 'bg-gradient-to-r from-primary to-primary/80'
    },
    {
      title: 'Gestión de Tickets',
      description: 'Mantén el control total. La excelencia en el servicio comienza con una gestión transparente y eficiente de cada solicitud.',
      icon: Ticket,
      to: '/tickets',
      gradient: 'bg-gradient-to-r from-secondary to-secondary/80'
    },
    {
      title: 'Estabilidad de Servicios',
      description: 'La confiabilidad es nuestra promesa. Monitorea la salud de tus servicios y garantiza una experiencia sin interrupciones.',
      icon: Activity,
      to: '/estabilidad',
      gradient: 'bg-gradient-to-r from-accent to-accent/80'
    },
    {
      title: 'Documentación Indigo',
      description: 'El conocimiento es poder. Accede a toda la sabiduría de Indigo y maximiza el potencial de cada herramienta.',
      icon: BookOpen,
      to: '/documentacion',
      gradient: 'bg-gradient-to-r from-chart-4 to-chart-4/80'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Bienvenido al Portal Indigo
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tu centro de control para gestionar productos, servicios y recursos de manera eficiente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <DashboardCard {...card} />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
