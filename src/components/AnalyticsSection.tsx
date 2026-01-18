import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

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

function AnalyticsSection() {
  return (
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
  );
}

export default AnalyticsSection;
