import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingCart, Ticket, Activity, BookOpen } from 'lucide-react';
import indigoLogo from '/Indigo.png';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src={indigoLogo} alt="Indigo" className="h-10 w-auto" />
            <span className="text-xl font-semibold text-foreground hidden sm:block">
              Portal de Gestión
            </span>
          </Link>
          
          <nav className="flex items-center space-x-1">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                isActive('/') 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              <Home className="h-4 w-4" />
              <span className="hidden md:inline">Inicio</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
