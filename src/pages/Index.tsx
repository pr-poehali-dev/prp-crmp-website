import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const playerData = [
  { month: 'Янв', value: 1, growth: 0 },
  { month: 'Фев', value: 2, growth: 100 },
  { month: 'Мар', value: 3, growth: 50 },
  { month: 'Апр', value: 4, growth: 33 },
  { month: 'Май', value: 5, growth: 25 },
  { month: 'Июн', value: 6, growth: 20 }
];

const serverStats = [
  { name: 'Онлайн игроков', value: 6 },
  { name: 'Активных фракций', value: 24 },
  { name: 'Бизнесов', value: 156 },
  { name: 'Транспорта', value: 892 }
];

const factionData = [
  { name: 'Полиция', value: 25, color: '#00d9ff' },
  { name: 'Мафия', value: 30, color: '#9b87f5' },
  { name: 'Банды', value: 25, color: '#ff00aa' },
  { name: 'Гос. структуры', value: 20, color: '#00ff88' }
];

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

      <section id="analytics" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Статистика и <span className="glow-text">Аналитика</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полная статистика сервера и динамика роста онлайна
            </p>
          </div>

          <Tabs defaultValue="players" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="players">Онлайн</TabsTrigger>
              <TabsTrigger value="stats">Статистика</TabsTrigger>
              <TabsTrigger value="factions">Фракции</TabsTrigger>
              <TabsTrigger value="economy">Экономика</TabsTrigger>
            </TabsList>

            <TabsContent value="players" className="space-y-6">
              <Card className="glow-border">
                <CardHeader>
                  <CardTitle className="font-heading">Рост онлайна</CardTitle>
                  <CardDescription>Динамика роста игроков за последние 6 месяцев</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <AreaChart data={playerData}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--primary))',
                          borderRadius: '8px'
                        }} 
                      />
                      <Area type="monotone" dataKey="value" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorValue)" strokeWidth={3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="stats" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="glow-border">
                  <CardHeader>
                    <CardTitle className="font-heading">Ключевые показатели сервера</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={serverStats}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" angle={-45} textAnchor="end" height={100} />
                        <YAxis stroke="hsl(var(--muted-foreground))" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))', 
                            border: '1px solid hsl(var(--primary))',
                            borderRadius: '8px'
                          }} 
                        />
                        <Bar dataKey="value" fill="hsl(var(--secondary))" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="glow-border">
                  <CardHeader>
                    <CardTitle className="font-heading">Распределение по фракциям</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={factionData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value}%`}
                          outerRadius={100}
                          fill="hsl(var(--primary))"
                          dataKey="value"
                        >
                          {factionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="factions" className="space-y-6">
              <Card className="glow-border">
                <CardHeader>
                  <CardTitle className="font-heading">Активность фракций</CardTitle>
                  <CardDescription>Количество активных участников по фракциям</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { stage: 'Полиция LSPD/SFPD', count: 420, percent: 100, color: 'bg-primary' },
                      { stage: 'Мафия', count: 504, percent: 90, color: 'bg-secondary' },
                      { stage: 'Банды Grove/Ballas', count: 420, percent: 75, color: 'bg-accent' },
                      { stage: 'Гос. структуры', count: 336, percent: 60, color: 'bg-primary' }
                    ].map((item, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{item.stage}</span>
                          <span className="text-muted-foreground">{item.count} ({item.percent}%)</span>
                        </div>
                        <div className="h-3 bg-muted rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${item.color} transition-all duration-1000`}
                            style={{ width: `${item.percent}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="economy" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: '💵 Наличные', role: 'В обороте', sales: 142000000, target: 150000000, avatar: '💵' },
                  { name: '🏦 Банки', role: 'На счетах', sales: 890000000, target: 1000000000, avatar: '🏦' },
                  { name: '💎 Бизнесы', role: 'Оборот/сутки', sales: 45000000, target: 50000000, avatar: '💎' }
                ].map((member, idx) => (
                  <Card key={idx} className="glow-border">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
                          {member.avatar}
                        </div>
                        <div>
                          <CardTitle className="text-lg font-heading">{member.name}</CardTitle>
                          <CardDescription>{member.role}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>{member.role}</span>
                        <span className="font-bold text-primary">{(member.sales/1000000).toFixed(0)}М/{(member.target/1000000).toFixed(0)}М₽</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
                          style={{ width: `${(member.sales / member.target) * 100}%` }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

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

      <section id="contacts" className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                <span className="glow-text">Связь</span> с нами
              </h2>
              <p className="text-xl text-muted-foreground">
                Вопросы, предложения или нужна помощь? Мы всегда на связи!
              </p>
            </div>

            <Card className="glow-border bg-card/50 backdrop-blur">
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Имя</label>
                      <Input placeholder="Иван Иванов" className="glow-border" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="ivan@company.com" className="glow-border" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Компания</label>
                    <Input placeholder="Название вашей компании" className="glow-border" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о вашем проекте..." 
                      className="glow-border min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary via-secondary to-accent glow-box font-heading font-semibold text-lg py-6">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>

                <div className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
                  <div className="text-center space-y-2">
                    <Icon name="MessageSquare" size={24} className="mx-auto text-primary" />
                    <div className="text-sm font-medium">Discord</div>
                    <div className="text-sm text-muted-foreground">discord.gg/prpcrmp</div>
                  </div>
                  <div className="text-center space-y-2">
                    <Icon name="Send" size={24} className="mx-auto text-primary" />
                    <div className="text-sm font-medium">Telegram</div>
                    <div className="text-sm text-muted-foreground">@prpcrmp_official</div>
                  </div>
                  <div className="text-center space-y-2">
                    <Icon name="Users" size={24} className="mx-auto text-primary" />
                    <div className="text-sm font-medium">Форум</div>
                    <div className="text-sm text-muted-foreground">forum.prpcrmp.ru</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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