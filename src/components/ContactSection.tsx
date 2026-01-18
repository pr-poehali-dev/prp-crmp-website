import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

function ContactSection() {
  return (
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
  );
}

export default ContactSection;
