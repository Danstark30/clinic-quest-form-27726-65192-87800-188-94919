import { useState } from 'react';
import { ArrowLeft, Save, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NuevoProducto = () => {
  const [formData, setFormData] = useState({
    nombreProducto: '',
    tipoServicio: '',
    departamento: '',
    justificacion: '',
    presupuesto: '',
    fechaRequerida: ''
  });

  const handleSaveDraft = () => {
    toast.success('Borrador guardado exitosamente');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Solicitud enviada correctamente', {
      description: 'Nuestro equipo la revisará en breve'
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" />
          <span>Volver al inicio</span>
        </Link>

        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">Adquirir Nuevo Producto Indigo</CardTitle>
            <CardDescription>
              Complete el formulario para solicitar un nuevo producto o servicio
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nombreProducto">Nombre del Producto *</Label>
                <Input
                  id="nombreProducto"
                  value={formData.nombreProducto}
                  onChange={(e) => setFormData({...formData, nombreProducto: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tipoServicio">Tipo de Servicio *</Label>
                <Select
                  value={formData.tipoServicio}
                  onValueChange={(value) => setFormData({...formData, tipoServicio: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione un tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="analytics">Analytics</SelectItem>
                    <SelectItem value="cloud">Cloud Services</SelectItem>
                    <SelectItem value="seguridad">Seguridad</SelectItem>
                    <SelectItem value="integracion">Integración</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="departamento">Departamento/Área Solicitante *</Label>
                <Input
                  id="departamento"
                  value={formData.departamento}
                  onChange={(e) => setFormData({...formData, departamento: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="justificacion">Justificación de Negocio *</Label>
                <Textarea
                  id="justificacion"
                  value={formData.justificacion}
                  onChange={(e) => setFormData({...formData, justificacion: e.target.value})}
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="presupuesto">Presupuesto Estimado (COP) *</Label>
                <Input
                  id="presupuesto"
                  type="number"
                  value={formData.presupuesto}
                  onChange={(e) => setFormData({...formData, presupuesto: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fechaRequerida">Fecha Requerida *</Label>
                <Input
                  id="fechaRequerida"
                  type="date"
                  value={formData.fechaRequerida}
                  onChange={(e) => setFormData({...formData, fechaRequerida: e.target.value})}
                  required
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="button" variant="outline" onClick={handleSaveDraft} className="flex-1">
                  <Save className="h-4 w-4 mr-2" />
                  Guardar Borrador
                </Button>
                <Button type="submit" className="flex-1">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Solicitud
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default NuevoProducto;
