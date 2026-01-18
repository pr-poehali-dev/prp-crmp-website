import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AnalyticsSection from '@/components/AnalyticsSection';
import ContactSection from '@/components/ContactSection';

const reviewsData = [
  {
    id: 1,
    player: 'Александр_Соколов',
    rating: '⭐⭐⭐⭐⭐',
    description: 'Играю уже полгода - лучший CRMP сервер! Атмосфера, РП на высоте, адекватная администрация',
    metrics: { rp: '10/10', admin: '9/10', online: '10/10' }
  },
  {
    id: 2,
    player: 'Дмитрий_Волков',
    rating: '⭐⭐⭐⭐⭐',
    description: 'Огромная карта России, реалистичная экономика, все как в жизни. Рекомендую всем!',
    metrics: { rp: '10/10', admin: '10/10', online: '9/10' }
  },
  {
    id: 3,
    player: 'Мария_Петрова',
    rating: '⭐⭐⭐⭐⭐',
    description: 'Отличный сервер для серьезной игры. Порядок на дорогах, много фракций, развитая система',
    metrics: { rp: '9/10', admin: '10/10', online: '10/10' }
  }
];

const newsData = [
  {
    id: 1,
    title: 'Обновление 2.5: Новые локации и бизнесы',
    date: '15 января 2026',
    category: 'Обновления',
    excerpt: 'Добавлены новые районы Москвы, 15 видов бизнеса и улучшенная система недвижимости...'
  },
  {
    id: 2,
    title: 'Турнир фракций: Призовой фонд 500.000₽',
    date: '12 января 2026',
    category: 'События',
    excerpt: 'Стартует ежемесячный турнир между фракциями. Регистрация открыта!'
  },
  {
    id: 3,
    title: 'Гайд: Как начать играть на PRP CRMP',
    date: '08 января 2026',
    category: 'Гайды',
    excerpt: 'Подробное руководство для новичков - от регистрации до первых денег...'
  }
];

function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [onlinePlayers, setOnlinePlayers] = useState(6);
  const [serverOnline, setServerOnline] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    const updateOnline = () => {
      setOnlinePlayers(Math.floor(Math.random() * 6) + 1);
    };
    
    const interval = setInterval(updateOnline, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation 
        serverOnline={serverOnline}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      <HeroSection onlinePlayers={onlinePlayers} />

      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              <span className="glow-text">Возможности</span> сервера
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Всё для полного погружения в атмосферу криминальной России
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'Map',
                title: 'Огромная карта России',
                description: 'Москва, Питер, регионы - исследуйте масштабную карту с реалистичными локациями'
              },
              {
                icon: 'Users',
                title: '24 активных фракции',
                description: 'Полиция, мафия, банды, госструктуры - выбери свой путь в криминальном мире'
              },
              {
                icon: 'Building2',
                title: '156 видов бизнеса',
                description: 'От киоска до завода - создай бизнес-империю и зарабатывай миллионы'
              },
              {
                icon: 'Car',
                title: 'Порядок на дорогах',
                description: 'ПДД, штрафы, погони - реалистичная система дорожного движения'
              },
              {
                icon: 'Shield',
                title: 'Высокий уровень RP',
                description: 'Строгие правила РП, адекватная администрация, атмосфера как в 2021 году'
              },
              {
                icon: 'Sparkles',
                title: 'Уникальные системы',
                description: 'Мафиозные войны, наркотрафик, казино, тюрьма и многое другое'
              }
            ].map((feature, idx) => (
              <Card key={idx} className="glow-border bg-card/50 backdrop-blur hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                    <Icon name={feature.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl font-heading">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <AnalyticsSection />

      <section id="cases" className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Отзывы <span className="glow-text">игроков</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас игроки PRP CRMP
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {reviewsData.map((caseItem) => (
              <Card key={caseItem.id} className="glow-border bg-card/50 backdrop-blur hover:scale-[1.02] transition-transform duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-heading">{caseItem.player}</CardTitle>
                      <CardDescription className="text-base mt-2">{caseItem.description}</CardDescription>
                    </div>
                    <div className="text-2xl font-heading font-bold text-primary glow-text whitespace-nowrap">
                      {caseItem.rating}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 rounded-lg bg-muted/30">
                      <div className="text-2xl font-bold text-primary">{caseItem.metrics.rp}</div>
                      <div className="text-sm text-muted-foreground mt-1">Уровень RP</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/30">
                      <div className="text-2xl font-bold text-secondary">{caseItem.metrics.admin}</div>
                      <div className="text-sm text-muted-foreground mt-1">Администрация</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/30">
                      <div className="text-2xl font-bold text-accent">{caseItem.metrics.online}</div>
                      <div className="text-sm text-muted-foreground mt-1">Онлайн</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              <span className="glow-text">Новости</span> и обновления
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Следите за последними обновлениями и событиями сервера
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {newsData.map((post) => (
              <Card key={post.id} className="glow-border bg-card/50 backdrop-blur hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/20 text-primary">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl font-heading hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  <Button variant="link" className="mt-4 p-0 text-primary">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      <footer className="py-12 border-t border-primary/20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center glow-box">
                <span className="text-2xl font-bold font-heading">P</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-heading">PRP CRMP</span>
                <div className="flex items-center space-x-2 mt-0.5">
                  <div className={`w-2 h-2 rounded-full ${serverOnline ? 'bg-green-500' : 'bg-red-500'} ${serverOnline ? 'animate-pulse-glow' : ''}`}></div>
                  <span className="text-xs text-muted-foreground">
                    {serverOnline ? 'CRMP первый сервер онлайн' : 'CRMP первый сервер оффлайн'}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              {['Twitter', 'Linkedin', 'Github'].map((social) => (
                <button key={social} className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 transition-colors flex items-center justify-center">
                  <Icon name={social} size={20} />
                </button>
              ))}
            </div>

            <div className="text-sm text-muted-foreground">
              © 2026 PRP CRMP. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
