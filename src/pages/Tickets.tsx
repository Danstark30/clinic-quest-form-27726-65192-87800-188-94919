import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Tickets = () => {
  const metricsData = [
    { name: 'Ene', abiertos: 45, cerrados: 38 },
    { name: 'Feb', abiertos: 52, cerrados: 47 },
    { name: 'Mar', abiertos: 48, cerrados: 51 },
    { name: 'Abr', abiertos: 61, cerrados: 55 },
    { name: 'May', abiertos: 55, cerrados: 58 },
  ];

  const priorityData = [
    { name: 'Alta', value: 15, color: '#EF4444' },
    { name: 'Media', value: 32, color: '#F59E0B' },
    { name: 'Baja', value: 23, color: '#10B981' },
  ];

  const recentTickets = [
    { id: 'TK-1234', titulo: 'Error en dashboard de analytics', prioridad: 'Alta', estado: 'Abierto', fecha: '2024-01-10' },
    { id: 'TK-1235', titulo: 'Solicitud de acceso nuevo usuario', prioridad: 'Media', estado: 'En Progreso', fecha: '2024-01-09' },
    { id: 'TK-1236', titulo: 'Actualización de documentación', prioridad: 'Baja', estado: 'Cerrado', fecha: '2024-01-08' },
    { id: 'TK-1237', titulo: 'Integración con API externa', prioridad: 'Alta', estado: 'Abierto', fecha: '2024-01-07' },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Alta': return 'destructive';
      case 'Media': return 'default';
      case 'Baja': return 'secondary';
      default: return 'default';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" />
          <span>Volver al inicio</span>
        </Link>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Gestión de Tickets</h1>
            <p className="text-muted-foreground">Dashboard de seguimiento y métricas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Tickets Abiertos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">24</div>
                <p className="text-xs text-muted-foreground mt-1">+3 desde ayer</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Tiempo Promedio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-secondary">2.5h</div>
                <p className="text-xs text-muted-foreground mt-1">Tiempo de resolución</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Satisfacción</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-chart-4">94%</div>
                <p className="text-xs text-muted-foreground mt-1">Rating promedio</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Tickets por Mes</CardTitle>
                <CardDescription>Comparación de tickets abiertos vs cerrados</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={metricsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="abiertos" fill="hsl(var(--primary))" />
                    <Bar dataKey="cerrados" fill="hsl(var(--secondary))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Distribución por Prioridad</CardTitle>
                <CardDescription>Tickets actuales por nivel de urgencia</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={priorityData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {priorityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Tickets Recientes</CardTitle>
              <CardDescription>
                <div className="flex items-center space-x-2 mt-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Buscar tickets..." className="max-w-sm" />
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTickets.map((ticket) => (
                  <div key={ticket.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-foreground">{ticket.id}</span>
                        <Badge variant={getPriorityColor(ticket.prioridad)}>{ticket.prioridad}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{ticket.titulo}</p>
                    </div>
                    <div className="text-right space-y-1">
                      <Badge variant="outline">{ticket.estado}</Badge>
                      <p className="text-xs text-muted-foreground">{ticket.fecha}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tickets;
