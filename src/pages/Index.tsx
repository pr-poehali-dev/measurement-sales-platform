import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const productCategories = [
  { id: 'all', name: 'Все приборы', icon: 'Layers' },
  { id: 'multimeter', name: 'Мультиметры', icon: 'Gauge' },
  { id: 'manometer', name: 'Манометры', icon: 'CircleGauge' },
  { id: 'oscilloscope', name: 'Осциллографы', icon: 'Activity' },
  { id: 'thermometer', name: 'Термометры', icon: 'Thermometer' },
];

const products = [
  {
    id: 1,
    name: 'Мультиметр DT-830B',
    category: 'multimeter',
    price: '1 250 ₽',
    description: 'Цифровой мультиметр для измерения напряжения, тока и сопротивления',
    specs: ['Точность ±0.5%', 'LCD дисплей', 'Авто-выключение'],
    image: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/b2cd46f3-b239-4b5c-b0f0-bbb4c04d12a5.jpg',
    inStock: true,
  },
  {
    id: 2,
    name: 'Манометр МП-100',
    category: 'manometer',
    price: '2 800 ₽',
    description: 'Манометр технический для измерения давления газов и жидкостей',
    specs: ['Диапазон 0-10 бар', 'Класс точности 1.5', 'Диаметр 100 мм'],
    image: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/6b89cfaa-d9cc-4132-a601-d05ac20c268f.jpg',
    inStock: true,
  },
  {
    id: 3,
    name: 'Осциллограф DSO-2250',
    category: 'oscilloscope',
    price: '45 500 ₽',
    description: 'Цифровой осциллограф с двумя каналами для анализа сигналов',
    specs: ['Полоса 250 МГц', '2 канала', 'Память 4 Мб'],
    image: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/f1284047-3a52-40ee-9dce-8687f2df9391.jpg',
    inStock: true,
  },
  {
    id: 4,
    name: 'Термометр ТЦ-100',
    category: 'thermometer',
    price: '890 ₽',
    description: 'Цифровой термометр с выносным датчиком',
    specs: ['Диапазон -50...+200°C', 'LCD дисплей', 'Водонепроницаемый датчик'],
    image: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/b2cd46f3-b239-4b5c-b0f0-bbb4c04d12a5.jpg',
    inStock: false,
  },
  {
    id: 5,
    name: 'Мультиметр UT61E',
    category: 'multimeter',
    price: '3 200 ₽',
    description: 'Профессиональный цифровой мультиметр с автоматическим выбором диапазона',
    specs: ['True RMS', 'RS-232 интерфейс', 'Память на 80 значений'],
    image: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/b2cd46f3-b239-4b5c-b0f0-bbb4c04d12a5.jpg',
    inStock: true,
  },
  {
    id: 6,
    name: 'Манометр электроконтактный ДМ-2005',
    category: 'manometer',
    price: '5 600 ₽',
    description: 'Электроконтактный манометр для систем автоматического управления',
    specs: ['Диапазон 0-16 бар', 'Контакты 220В 1А', 'Класс точности 1.0'],
    image: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/6b89cfaa-d9cc-4132-a601-d05ac20c268f.jpg',
    inStock: true,
  },
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Gauge" size={32} className="text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">ИзмериТех</h1>
                <p className="text-xs text-muted-foreground">Измерительное оборудование</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:flex gap-2">
              <Icon name="ShoppingCart" size={18} />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Профессиональное оборудование
            </Badge>
            <h2 className="text-5xl font-bold mb-6 text-foreground">
              Измерительные приборы <br />
              <span className="text-primary">для профессионалов</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Широкий ассортимент средств измерений и вспомогательного оборудования. 
              Гарантия качества, техническая поддержка, быстрая доставка.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Icon name="ShoppingBag" size={20} />
                Перейти в каталог
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Phone" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Каталог оборудования</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите категорию приборов и найдите подходящее оборудование
            </p>
          </div>

          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Поиск по названию или описанию..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {productCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="gap-2"
              >
                <Icon name={category.icon as any} size={18} />
                {category.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-56 bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center p-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                  {!product.inStock && (
                    <Badge className="absolute top-4 right-4 bg-destructive">
                      Нет в наличии
                    </Badge>
                  )}
                  {product.inStock && (
                    <Badge className="absolute top-4 right-4 bg-green-500">
                      В наличии
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{spec}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-3xl font-bold text-primary">{product.price}</div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button className="flex-1 gap-2" disabled={!product.inStock}>
                    <Icon name="ShoppingCart" size={18} />
                    В корзину
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Heart" size={18} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Icon name="SearchX" size={64} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Ничего не найдено</h3>
              <p className="text-muted-foreground">Попробуйте изменить категорию или поисковый запрос</p>
            </div>
          )}
        </div>
      </section>

      <section id="about" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4">О нас</Badge>
              <h2 className="text-4xl font-bold mb-6">15 лет на рынке измерительного оборудования</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                ИзмериТех — надежный поставщик измерительных приборов и вспомогательного оборудования 
                для промышленных предприятий, лабораторий и сервисных центров.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Сертифицированное оборудование</h3>
                    <p className="text-muted-foreground">Все приборы проходят поверку и имеют сертификаты соответствия</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Headphones" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Техническая поддержка</h3>
                    <p className="text-muted-foreground">Консультации специалистов и помощь в выборе оборудования</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Truck" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Быстрая доставка</h3>
                    <p className="text-muted-foreground">Отправка заказов по всей России в течение 1-2 рабочих дней</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">лет на рынке</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">наименований</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">3000+</div>
                <div className="text-muted-foreground">клиентов</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">поддержка</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексное обслуживание измерительного оборудования
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Icon name="ClipboardCheck" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Поверка приборов</h3>
              <p className="text-muted-foreground">
                Поверка и калибровка измерительных приборов в аккредитованной лаборатории
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Wrench" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ремонт и обслуживание</h3>
              <p className="text-muted-foreground">
                Качественный ремонт и техническое обслуживание любой сложности
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Icon name="GraduationCap" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Обучение персонала</h3>
              <p className="text-muted-foreground">
                Проведение обучающих семинаров по работе с измерительным оборудованием
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-lg text-muted-foreground">
                Свяжитесь с нами удобным способом
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">Наши контакты</h3>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium mb-1">Адрес</div>
                      <div className="text-muted-foreground">г. Москва, ул. Измерительная, д. 15</div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium mb-1">Телефон</div>
                      <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium mb-1">Email</div>
                      <div className="text-muted-foreground">info@izmeriteh.ru</div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Icon name="Clock" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium mb-1">Режим работы</div>
                      <div className="text-muted-foreground">Пн-Пт: 9:00 - 18:00<br />Сб-Вс: выходной</div>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-6">Напишите нам</h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" />
                  </div>
                  <div>
                    <Input placeholder="Тема обращения" />
                  </div>
                  <Button className="w-full gap-2">
                    <Icon name="Send" size={18} />
                    Отправить сообщение
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Icon name="Gauge" size={28} />
              <div>
                <div className="font-bold">ИзмериТех</div>
                <div className="text-sm opacity-80">Измерительное оборудование</div>
              </div>
            </div>
            <div className="text-sm opacity-80 text-center md:text-right">
              © 2024 ИзмериТех. Все права защищены.<br />
              Профессиональное измерительное оборудование
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
