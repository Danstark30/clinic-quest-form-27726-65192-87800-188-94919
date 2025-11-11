import { useState } from 'react';
import { ArrowLeft, Send, Bot, User, FileText, Download, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Documentacion = () => {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: '¡Hola! Soy el asistente de Indigo Academics. ¿En qué puedo ayudarte hoy?', isUser: false }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, 
      { text: input, isUser: true },
      { text: 'Gracias por tu consulta. Estoy procesando tu solicitud sobre ' + input, isUser: false }
    ]);
    setInput('');
  };

  const categories = [
    { name: 'Guías de Inicio', count: 12, icon: FileText },
    { name: 'API Reference', count: 45, icon: FileText },
    { name: 'Tutoriales', count: 28, icon: FileText },
    { name: 'Casos de Uso', count: 18, icon: FileText },
  ];

  const resources = [
    { title: 'Manual de Usuario Indigo Analytics', size: '2.4 MB', type: 'PDF' },
    { title: 'Guía de Implementación Cloud', size: '1.8 MB', type: 'PDF' },
    { title: 'Mejores Prácticas de Seguridad', size: '3.1 MB', type: 'PDF' },
    { title: 'API Documentation v2.0', size: '1.2 MB', type: 'PDF' },
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
            <h1 className="text-3xl font-bold text-foreground">Indigo Academics</h1>
            <p className="text-muted-foreground">Centro de documentación y recursos</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Search className="h-5 w-5 text-muted-foreground" />
                    <Input placeholder="Buscar en la documentación..." />
                  </div>
                </CardHeader>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <Icon className="h-8 w-8 text-primary" />
                            <h3 className="font-semibold text-foreground">{category.name}</h3>
                            <Badge variant="secondary">{category.count} artículos</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recursos Descargables</CardTitle>
                  <CardDescription>Guías y documentación en formato PDF</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {resources.map((resource) => (
                      <div key={resource.title} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-sm font-medium text-foreground">{resource.title}</p>
                            <p className="text-xs text-muted-foreground">{resource.type} • {resource.size}</p>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="h-[600px] flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bot className="h-5 w-5 text-primary" />
                    <span>Asistente Virtual</span>
                  </CardTitle>
                  <CardDescription>Pregunta lo que necesites</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col p-0">
                  <ScrollArea className="flex-1 px-4">
                    <div className="space-y-4 py-4">
                      {messages.map((message, index) => (
                        <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                          <div className={`flex items-start space-x-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                            <div className={`p-2 rounded-full ${message.isUser ? 'bg-primary' : 'bg-secondary'}`}>
                              {message.isUser ? <User className="h-4 w-4 text-primary-foreground" /> : <Bot className="h-4 w-4 text-secondary-foreground" />}
                            </div>
                            <div className={`p-3 rounded-lg ${message.isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                              <p className="text-sm">{message.text}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                  <div className="p-4 border-t">
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Escribe tu pregunta..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      />
                      <Button onClick={handleSend}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Documentacion;
