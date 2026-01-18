import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onlinePlayers: number;
}

function HeroSection({ onlinePlayers }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight">
            <span className="glow-text">PRP CRMP</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Россия на ладони
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Огромная карта России, родная атмосфера как в 2021 году, порядок на дорогах и высокий уровень RolePlay. 
            Стань частью легендарного сообщества!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent glow-box text-lg font-heading font-semibold px-8 py-6">
              <Icon name="Gamepad2" size={20} className="mr-2" />
              Начать играть
            </Button>
            <Button size="lg" variant="outline" className="glow-border text-lg font-heading font-semibold px-8 py-6">
              <Icon name="Youtube" size={20} className="mr-2" />
              Трейлер сервера
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16">
            [
              { value: `${onlinePlayers}/6`, label: 'Онлайн игроков' },
              { value: '24/7', label: 'Сервер работает' },
              { value: '156', label: 'Активных бизнесов' },
              { value: '99.9%', label: 'Uptime' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
