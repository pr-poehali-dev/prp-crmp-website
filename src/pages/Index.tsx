import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const revenueData = [
  { month: 'Янв', value: 4200, growth: 12 },
  { month: 'Фев', value: 5100, growth: 21 },
  { month: 'Мар', value: 6800, growth: 33 },
  { month: 'Апр', value: 8200, growth: 21 },
  { month: 'Май', value: 9500, growth: 16 },
  { month: 'Июн', value: 12100, growth: 27 }
];

const analyticsData = [
  { name: 'Активные клиенты', value: 2847 },
  { name: 'Новые лиды', value: 1254 },
  { name: 'Закрытые сделки', value: 892 },
  { name: 'В работе', value: 1955 }
];

const pieData = [
  { name: 'Новые', value: 35, color: '#00d9ff' },
  { name: 'В работе', value: 45, color: '#9b87f5' },
  { name: 'Закрыты', value: 20, color: '#ff00aa' }
];

const casesData = [
  {
    id: 1,
    company: 'TechCorp Solutions',
    result: '+340% конверсии',
    description: 'Автоматизация воронки продаж и интеграция с маркетинговыми каналами',
    metrics: { leads: '+450%', sales: '+340%', time: '-65%' }
  },
  {
    id: 2,
    company: 'Digital Agency PRO',
    result: '+280% выручки',
    description: 'Внедрение аналитической системы и прогнозирования продаж',
    metrics: { leads: '+320%', sales: '+280%', time: '-58%' }
  },
  {
    id: 3,
    company: 'E-commerce Giant',
    result: '-70% времени на обработку',
    description: 'Автоматизация обработки заказов и клиентского сервиса',
    metrics: { leads: '+210%', sales: '+190%', time: '-70%' }
  }
];

const blogPosts = [
  {
    id: 1,
    title: 'Как ИИ меняет CRM-системы в 2026 году',
    date: '15 января 2026',
    category: 'Инновации',
    excerpt: 'Искусственный интеллект революционизирует способы взаимодействия с клиентами...'
  },
  {
    id: 2,
    title: 'Топ-10 метрик для B2B продаж',
    date: '12 января 2026',
    category: 'Аналитика',
    excerpt: 'Разбираем ключевые показатели эффективности для отдела продаж...'
  },
  {
    id: 3,
    title: 'Автоматизация маркетинга: практическое руководство',
    date: '08 января 2026',
    category: 'Маркетинг',
    excerpt: 'Пошаговая инструкция по настройке автоматических воронок...'
  }
];

function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
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
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center glow-box">
                <span className="text-2xl font-bold font-heading">P</span>
              </div>
              <span className="text-2xl font-bold font-heading glow-text">PRP CRMP</span>
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
              <span className="glow-text">Будущее CRM</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                уже здесь
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Революционная платформа для управления отношениями с клиентами. 
              Искусственный интеллект, прогнозная аналитика и автоматизация нового уровня.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent glow-box text-lg font-heading font-semibold px-8 py-6">
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="glow-border text-lg font-heading font-semibold px-8 py-6">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16">
              {[
                { value: '50K+', label: 'Активных пользователей' },
                { value: '99.9%', label: 'Uptime' },
                { value: '24/7', label: 'Поддержка' },
                { value: '340%', label: 'Рост конверсий' }
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
              <span className="glow-text">Возможности</span> платформы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Все инструменты для эффективной работы с клиентами в одной системе
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'Brain',
                title: 'ИИ-ассистент',
                description: 'Умный помощник анализирует поведение клиентов и предлагает оптимальные действия'
              },
              {
                icon: 'TrendingUp',
                title: 'Прогнозная аналитика',
                description: 'Предсказывайте продажи и поведение клиентов с точностью до 95%'
              },
              {
                icon: 'Zap',
                title: 'Автоматизация',
                description: 'Автоматические воронки, рассылки и обработка лидов без участия человека'
              },
              {
                icon: 'Users',
                title: 'Управление командой',
                description: 'Распределение задач, контроль эффективности и мотивация сотрудников'
              },
              {
                icon: 'BarChart3',
                title: 'Дашборды реального времени',
                description: 'Визуализация всех ключевых метрик в режиме реального времени'
              },
              {
                icon: 'Webhook',
                title: 'Интеграции',
                description: 'Подключение к 500+ сервисам через готовые интеграции и API'
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
              Аналитика и <span className="glow-text">Дашборды</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный контроль над бизнес-процессами с интерактивными дашбордами
            </p>
          </div>

          <Tabs defaultValue="revenue" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="revenue">Выручка</TabsTrigger>
              <TabsTrigger value="metrics">Метрики</TabsTrigger>
              <TabsTrigger value="pipeline">Воронка</TabsTrigger>
              <TabsTrigger value="team">Команда</TabsTrigger>
            </TabsList>

            <TabsContent value="revenue" className="space-y-6">
              <Card className="glow-border">
                <CardHeader>
                  <CardTitle className="font-heading">Динамика выручки</CardTitle>
                  <CardDescription>Рост выручки по месяцам в 2026 году</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <AreaChart data={revenueData}>
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

            <TabsContent value="metrics" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="glow-border">
                  <CardHeader>
                    <CardTitle className="font-heading">Ключевые показатели</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={analyticsData}>
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
                    <CardTitle className="font-heading">Распределение сделок</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value}%`}
                          outerRadius={100}
                          fill="hsl(var(--primary))"
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
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

            <TabsContent value="pipeline" className="space-y-6">
              <Card className="glow-border">
                <CardHeader>
                  <CardTitle className="font-heading">Воронка продаж</CardTitle>
                  <CardDescription>Конверсия на каждом этапе</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { stage: 'Лиды', count: 1254, percent: 100, color: 'bg-primary' },
                      { stage: 'Квалификация', count: 892, percent: 71, color: 'bg-secondary' },
                      { stage: 'Предложение', count: 567, percent: 45, color: 'bg-accent' },
                      { stage: 'Закрыто', count: 342, percent: 27, color: 'bg-primary' }
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

            <TabsContent value="team" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: 'Алексей Иванов', role: 'Топ менеджер', sales: 142, target: 150, avatar: '👨‍💼' },
                  { name: 'Мария Петрова', role: 'Senior Sales', sales: 128, target: 130, avatar: '👩‍💼' },
                  { name: 'Дмитрий Сидоров', role: 'Sales Manager', sales: 95, target: 100, avatar: '👨‍💻' }
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
                        <span>Продажи</span>
                        <span className="font-bold text-primary">{member.sales}/{member.target}</span>
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
              Кейсы <span className="glow-text">наших клиентов</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты компаний, которые выбрали PRP CRMP
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {casesData.map((caseItem) => (
              <Card key={caseItem.id} className="glow-border bg-card/50 backdrop-blur hover:scale-[1.02] transition-transform duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-heading">{caseItem.company}</CardTitle>
                      <CardDescription className="text-base mt-2">{caseItem.description}</CardDescription>
                    </div>
                    <div className="text-3xl font-heading font-bold text-primary glow-text whitespace-nowrap">
                      {caseItem.result}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 rounded-lg bg-muted/30">
                      <div className="text-2xl font-bold text-primary">{caseItem.metrics.leads}</div>
                      <div className="text-sm text-muted-foreground mt-1">Лидов</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/30">
                      <div className="text-2xl font-bold text-secondary">{caseItem.metrics.sales}</div>
                      <div className="text-sm text-muted-foreground mt-1">Продаж</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/30">
                      <div className="text-2xl font-bold text-accent">{caseItem.metrics.time}</div>
                      <div className="text-sm text-muted-foreground mt-1">Времени</div>
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
              <span className="glow-text">Блог</span> и статьи
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Последние новости и полезные материалы о CRM и продажах
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
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
                    Читать далее
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
                <span className="glow-text">Свяжитесь</span> с нами
              </h2>
              <p className="text-xl text-muted-foreground">
                Готовы начать? Оставьте заявку и наш менеджер свяжется с вами
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
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>

                <div className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
                  <div className="text-center space-y-2">
                    <Icon name="Mail" size={24} className="mx-auto text-primary" />
                    <div className="text-sm font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">contact@prpcrmp.com</div>
                  </div>
                  <div className="text-center space-y-2">
                    <Icon name="Phone" size={24} className="mx-auto text-primary" />
                    <div className="text-sm font-medium">Телефон</div>
                    <div className="text-sm text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                  <div className="text-center space-y-2">
                    <Icon name="MapPin" size={24} className="mx-auto text-primary" />
                    <div className="text-sm font-medium">Офис</div>
                    <div className="text-sm text-muted-foreground">Москва, БЦ Технопарк</div>
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
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center glow-box">
                <span className="text-2xl font-bold font-heading">P</span>
              </div>
              <span className="text-xl font-bold font-heading">PRP CRMP</span>
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
