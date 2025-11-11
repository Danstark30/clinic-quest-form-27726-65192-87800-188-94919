import { Mail, Phone, HelpCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>soporte@indigo.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>+57 (1) 234-5678</span>
          </div>
          <div className="flex items-center space-x-2">
            <HelpCircle className="h-4 w-4" />
            <a href="#" className="hover:text-foreground transition-colors">
              Centro de Ayuda
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-muted-foreground">
          © 2024 Indigo. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
