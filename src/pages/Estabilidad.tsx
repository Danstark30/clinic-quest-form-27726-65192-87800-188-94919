import { ArrowLeft, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Estabilidad = () => {
  const uptimeData = [
    { time: '00:00', uptime: 99.9 },
    { time: '04:00', uptime: 99.8 },
    { time: '08:00', uptime: 100 },
    { time: '12:00', uptime: 99.9 },
    { time: '16:00', uptime: 100 },
    { time: '20:00', uptime: 99.9 },
    { time: '24:00', uptime: 100 },
  ];

  const performanceData = [
    { time: '00:00', responseTime: 120 },
    { time: '04:00', responseTime: 110 },
    { time: '08:00', responseTime: 150 },
    { time: '12:00', responseTime: 180 },
    { time: '16:00', responseTime: 160 },
    { time: '20:00', responseTime: 130 },
    { time: '24:00', responseTime: 115 },
  ];

  const services = [
    { name: 'API Principal', status: 'Operativo', uptime: '99.99%', icon: CheckCircle, color: 'text-chart-4' },
    { name: 'Base de Datos', status: 'Operativo', uptime: '99.95%', icon: CheckCircle, color: 'text-chart-4' },
    { name: 'Servicio de Analytics', status: 'Degradado', uptime: '98.50%', icon: AlertTriangle, color: 'text-chart-5' },
    { name: 'Sistema de Reportes', status: 'Operativo', uptime: '99.98%', icon: CheckCircle, color: 'text-chart-4' },
  ];

  const incidents = [
    { id: 1, titulo: 'Latencia elevada en API', severidad: 'Media', fecha: '2024-01-10 14:30', resuelto: true },
    { id: 2, titulo: 'Caída parcial de servicio analytics', severidad: 'Alta', fecha: '2024-01-09 09:15', resuelto: true },
    { id: 3, titulo: 'Mantenimiento programado', severidad: 'Baja', fecha: '2024-01-08 02:00', resuelto: true },
  ];

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
            <h1 className="text-3xl font-bold text-foreground">Estabilidad de Servicios</h1>
            <p className="text-muted-foreground">Monitoreo en tiempo real y métricas de disponibilidad</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Uptime Global</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-chart-4">99.97%</div>
                <p className="text-xs text-muted-foreground mt-1">Últimos 30 días</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Tiempo de Respuesta</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-secondary">142ms</div>
                <p className="text-xs text-muted-foreground mt-1">Promedio actual</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Incidentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">0</div>
                <p className="text-xs text-muted-foreground mt-1">Activos ahora</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Disponibilidad (24h)</CardTitle>
                <CardDescription>Porcentaje de uptime por hora</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={uptimeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis domain={[99, 100]} />
                    <Tooltip />
                    <Area type="monotone" dataKey="uptime" stroke="hsl(var(--chart-4))" fill="hsl(var(--chart-4))" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tiempo de Respuesta</CardTitle>
                <CardDescription>Latencia promedio en milisegundos</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="responseTime" stroke="hsl(var(--primary))" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Estado de Servicios</CardTitle>
              <CardDescription>Monitoreo en tiempo real de todos los sistemas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div key={service.name} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Icon className={`h-5 w-5 ${service.color}`} />
                        <div>
                          <p className="font-medium text-foreground">{service.name}</p>
                          <p className="text-sm text-muted-foreground">Uptime: {service.uptime}</p>
                        </div>
                      </div>
                      <Badge variant={service.status === 'Operativo' ? 'default' : 'secondary'}>
                        {service.status}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Historial de Incidentes</CardTitle>
              <CardDescription>Últimos eventos registrados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {incidents.map((incident) => (
                  <div key={incident.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-chart-4" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{incident.titulo}</p>
                        <p className="text-xs text-muted-foreground">{incident.fecha}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{incident.severidad}</Badge>
                      <Badge variant="secondary">Resuelto</Badge>
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

export default Estabilidad;
