import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  serverOnline: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

function Navigation({ serverOnline, isMenuOpen, setIsMenuOpen, scrollToSection }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-primary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center glow-box">
              <span className="text-2xl font-bold font-heading">P</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-heading glow-text">PRP CRMP</span>
              <div className="flex items-center space-x-2 mt-0.5">
                <div className={`w-2 h-2 rounded-full ${serverOnline ? 'bg-green-500' : 'bg-red-500'} ${serverOnline ? 'animate-pulse-glow' : ''}`}></div>
                <span className="text-xs text-muted-foreground">
                  {serverOnline ? 'CRMP первый сервер онлайн' : 'CRMP первый сервер оффлайн'}
                </span>
              </div>
            </div>
          </div>

          <button 
            className="lg:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={28} />
          </button>

          <div className="hidden lg:flex items-center space-x-8">
            {['Главная', 'Возможности', 'Аналитика', 'Кейсы', 'Блог', 'Контакты'].map((item, idx) => (
              <button
                key={item}
                onClick={() => scrollToSection(['home', 'features', 'analytics', 'cases', 'blog', 'contacts'][idx])}
                className="text-sm font-medium hover:text-primary transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <Button className="bg-gradient-to-r from-primary via-secondary to-accent glow-box font-heading font-semibold">
              Попробовать
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-3 animate-fade-in">
            {['Главная', 'Возможности', 'Аналитика', 'Кейсы', 'Блог', 'Контакты'].map((item, idx) => (
              <button
                key={item}
                onClick={() => scrollToSection(['home', 'features', 'analytics', 'cases', 'blog', 'contacts'][idx])}
                className="block w-full text-left py-2 hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
