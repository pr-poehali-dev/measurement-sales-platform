import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

type ListingType = 'product' | 'service';

interface Review {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

interface Listing {
  id: number;
  type: ListingType;
  title: string;
  price: string;
  category: string;
  location: string;
  seller: {
    name: string;
    avatar: string;
    rating: number;
    reviewsCount: number;
  };
  image: string;
  description: string;
  views: number;
  postedDate: string;
  reviews: Review[];
}

const listings: Listing[] = [
  {
    id: 1,
    type: 'product',
    title: 'Мультиметр Fluke 87V',
    price: '45 000 ₽',
    category: 'Мультиметры',
    location: 'Москва',
    seller: {
      name: 'Александр Петров',
      avatar: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/d212f008-1a24-46c6-8c15-4bd318613695.jpg',
      rating: 4.8,
      reviewsCount: 24,
    },
    image: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/b2cd46f3-b239-4b5c-b0f0-bbb4c04d12a5.jpg',
    description: 'Профессиональный мультиметр в отличном состоянии. Поверка действительна до 2025 года. В комплекте чехол и щупы.',
    views: 156,
    postedDate: '2 дня назад',
    reviews: [
      {
        id: 1,
        author: 'Иван Сидоров',
        avatar: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/d212f008-1a24-46c6-8c15-4bd318613695.jpg',
        rating: 5,
        date: '15.11.2024',
        text: 'Отличный прибор! Продавец быстро отправил, всё упаковано надёжно. Поверочное свидетельство в порядке.',
      },
      {
        id: 2,
        author: 'Мария Козлова',
        avatar: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/675fdc8f-affd-4854-8dfa-2f2aa8f7fe68.jpg',
        rating: 5,
        date: '10.11.2024',
        text: 'Покупали для лаборатории. Всё работает идеально, калибровка в норме.',
      },
    ],
  },
  {
    id: 2,
    type: 'service',
    title: 'Поверка манометров и термометров',
    price: 'от 500 ₽',
    category: 'Услуги поверки',
    location: 'Санкт-Петербург',
    seller: {
      name: 'Елена Смирнова',
      avatar: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/675fdc8f-affd-4854-8dfa-2f2aa8f7fe68.jpg',
      rating: 4.9,
      reviewsCount: 47,
    },
    image: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/6b89cfaa-d9cc-4132-a601-d05ac20c268f.jpg',
    description: 'Аккредитованная лаборатория. Поверка манометров, термометров, барометров. Выдача свидетельств Росаккредитации. Выезд на объект.',
    views: 342,
    postedDate: '1 неделю назад',
    reviews: [
      {
        id: 3,
        author: 'Дмитрий Волков',
        avatar: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/d212f008-1a24-46c6-8c15-4bd318613695.jpg',
        rating: 5,
        date: '12.11.2024',
        text: 'Быстро поверили все манометры на производстве. Документы оформили в день обращения. Рекомендую!',
      },
      {
        id: 4,
        author: 'Ольга Новикова',
        avatar: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/675fdc8f-affd-4854-8dfa-2f2aa8f7fe68.jpg',
        rating: 5,
        date: '08.11.2024',
        text: 'Профессиональный подход, адекватные цены. Работаем постоянно.',
      },
      {
        id: 5,
        author: 'Сергей Борисов',
        avatar: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/d212f008-1a24-46c6-8c15-4bd318613695.jpg',
        rating: 4,
        date: '01.11.2024',
        text: 'Хорошая лаборатория, но немного дороже конкурентов. Зато качество на высоте.',
      },
    ],
  },
  {
    id: 3,
    type: 'product',
    title: 'Осциллограф Tektronix TDS2024B',
    price: '95 000 ₽',
    category: 'Осциллографы',
    location: 'Екатеринбург',
    seller: {
      name: 'Виктор Игнатьев',
      avatar: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/d212f008-1a24-46c6-8c15-4bd318613695.jpg',
      rating: 4.7,
      reviewsCount: 18,
    },
    image: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/f1284047-3a52-40ee-9dce-8687f2df9391.jpg',
    description: 'Цифровой осциллограф 4 канала, 200 МГц. Состояние хорошее, использовался в учебной лаборатории. Торг.',
    views: 89,
    postedDate: '3 дня назад',
    reviews: [
      {
        id: 6,
        author: 'Анна Федорова',
        avatar: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/675fdc8f-affd-4854-8dfa-2f2aa8f7fe68.jpg',
        rating: 5,
        date: '14.11.2024',
        text: 'Прибор полностью соответствует описанию. Продавец помог с настройкой.',
      },
    ],
  },
  {
    id: 4,
    type: 'service',
    title: 'Калибровка весов и дозаторов',
    price: 'от 1 200 ₽',
    category: 'Услуги поверки',
    location: 'Казань',
    seller: {
      name: 'Татьяна Морозова',
      avatar: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/675fdc8f-affd-4854-8dfa-2f2aa8f7fe68.jpg',
      rating: 5.0,
      reviewsCount: 63,
    },
    image: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/6b89cfaa-d9cc-4132-a601-d05ac20c268f.jpg',
    description: 'Аттестованный специалист. Поверка и калибровка весов любого класса точности. Работаем с юридическими и физическими лицами.',
    views: 521,
    postedDate: '2 недели назад',
    reviews: [
      {
        id: 7,
        author: 'Игорь Кузнецов',
        avatar: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/d212f008-1a24-46c6-8c15-4bd318613695.jpg',
        rating: 5,
        date: '16.11.2024',
        text: 'Откалибровали все весы на складе. Работа выполнена качественно и в срок.',
      },
      {
        id: 8,
        author: 'Наталья Соколова',
        avatar: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/675fdc8f-affd-4854-8dfa-2f2aa8f7fe68.jpg',
        rating: 5,
        date: '09.11.2024',
        text: 'Профессионал своего дела! Всё понятно объяснила, дала рекомендации.',
      },
    ],
  },
  {
    id: 5,
    type: 'product',
    title: 'Манометр цифровой ДМ5002М',
    price: '8 500 ₽',
    category: 'Манометры',
    location: 'Новосибирск',
    seller: {
      name: 'Андрей Васильев',
      avatar: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/d212f008-1a24-46c6-8c15-4bd318613695.jpg',
      rating: 4.6,
      reviewsCount: 12,
    },
    image: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/6b89cfaa-d9cc-4132-a601-d05ac20c268f.jpg',
    description: 'Новый цифровой манометр класса точности 0.25. Диапазон измерений 0-100 бар. Гарантия 1 год.',
    views: 67,
    postedDate: '5 дней назад',
    reviews: [
      {
        id: 9,
        author: 'Павел Романов',
        avatar: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/d212f008-1a24-46c6-8c15-4bd318613695.jpg',
        rating: 4,
        date: '13.11.2024',
        text: 'Хороший манометр за свои деньги. Точность соответствует заявленной.',
      },
    ],
  },
  {
    id: 6,
    type: 'service',
    title: 'Поверка электросчётчиков',
    price: 'от 350 ₽',
    category: 'Услуги поверки',
    location: 'Москва',
    seller: {
      name: 'Михаил Лебедев',
      avatar: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/d212f008-1a24-46c6-8c15-4bd318613695.jpg',
      rating: 4.8,
      reviewsCount: 91,
    },
    image: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/b2cd46f3-b239-4b5c-b0f0-bbb4c04d12a5.jpg',
    description: 'Поверка электросчётчиков на дому и в лаборатории. Все виды счётчиков. Внесение данных в ФГИС "Аршин".',
    views: 678,
    postedDate: '1 месяц назад',
    reviews: [
      {
        id: 10,
        author: 'Светлана Попова',
        avatar: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/675fdc8f-affd-4854-8dfa-2f2aa8f7fe68.jpg',
        rating: 5,
        date: '17.11.2024',
        text: 'Приехал вовремя, поверил счётчик за 20 минут. Всё чётко!',
      },
      {
        id: 11,
        author: 'Владимир Орлов',
        avatar: 'https://cdn.poehali.dev/projects/8ab3713d-d41c-4052-8b9b-15cb6ebbb7a6/files/d212f008-1a24-46c6-8c15-4bd318613695.jpg',
        rating: 5,
        date: '05.11.2024',
        text: 'Отличный специалист! Рекомендую.',
      },
    ],
  },
];

const categories = ['Все категории', 'Мультиметры', 'Манометры', 'Осциллографы', 'Услуги поверки'];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Icon
          key={star}
          name="Star"
          size={14}
          className={star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
        />
      ))}
    </div>
  );
}

export default function Index() {
  const [selectedType, setSelectedType] = useState<'all' | ListingType>('all');
  const [selectedCategory, setSelectedCategory] = useState('Все категории');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedReviews, setExpandedReviews] = useState<number[]>([]);

  const toggleReviews = (listingId: number) => {
    setExpandedReviews(prev =>
      prev.includes(listingId) 
        ? prev.filter(id => id !== listingId)
        : [...prev, listingId]
    );
  };

  const filteredListings = listings.filter(listing => {
    const matchesType = selectedType === 'all' || listing.type === selectedType;
    const matchesCategory = selectedCategory === 'Все категории' || listing.category === selectedCategory;
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Gauge" size={32} className="text-primary" />
              <div>
                <h1 className="text-xl font-bold text-primary">МетроМаркет</h1>
                <p className="text-xs text-muted-foreground">Метрология и поверка</p>
              </div>
            </div>
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  type="text"
                  placeholder="Поиск приборов и услуг..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-gray-50"
                />
              </div>
            </div>
            <Button className="gap-2">
              <Icon name="Plus" size={18} />
              Подать объявление
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-[280px_1fr] gap-6">
          <aside className="space-y-4">
            <Card className="p-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="Filter" size={18} />
                Фильтры
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Тип объявления</p>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <Checkbox 
                        checked={selectedType === 'all'} 
                        onCheckedChange={() => setSelectedType('all')}
                      />
                      <span className="text-sm">Все</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <Checkbox 
                        checked={selectedType === 'product'} 
                        onCheckedChange={() => setSelectedType('product')}
                      />
                      <span className="text-sm">Товары</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <Checkbox 
                        checked={selectedType === 'service'} 
                        onCheckedChange={() => setSelectedType('service')}
                      />
                      <span className="text-sm">Услуги</span>
                    </label>
                  </div>
                </div>

                <Separator />

                <div>
                  <p className="text-sm font-medium mb-2">Категория</p>
                  <div className="space-y-2">
                    {categories.map(cat => (
                      <label key={cat} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox 
                          checked={selectedCategory === cat} 
                          onCheckedChange={() => setSelectedCategory(cat)}
                        />
                        <span className="text-sm">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-primary/5 to-primary/10">
              <Icon name="ShieldCheck" size={32} className="text-primary mb-2" />
              <h3 className="font-semibold mb-1">Безопасная сделка</h3>
              <p className="text-xs text-muted-foreground">
                Проверяйте документы поверки и аккредитацию лабораторий
              </p>
            </Card>
          </aside>

          <main className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                {filteredListings.length} {filteredListings.length === 1 ? 'объявление' : 'объявлений'}
              </h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Icon name="SlidersHorizontal" size={16} className="mr-2" />
                  Сортировка
                </Button>
              </div>
            </div>

            {filteredListings.length === 0 && (
              <Card className="p-12 text-center">
                <Icon name="SearchX" size={64} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
                <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
              </Card>
            )}

            {filteredListings.map((listing) => (
              <Card key={listing.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-[200px_1fr] gap-4 p-4">
                  <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square md:aspect-auto">
                    <img 
                      src={listing.image} 
                      alt={listing.title}
                      className="w-full h-full object-cover"
                    />
                    {listing.type === 'service' && (
                      <Badge className="absolute top-2 left-2 bg-green-500">Услуга</Badge>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1 hover:text-primary cursor-pointer">
                            {listing.title}
                          </h3>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                            <span className="flex items-center gap-1">
                              <Icon name="MapPin" size={14} />
                              {listing.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Eye" size={14} />
                              {listing.views}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Clock" size={14} />
                              {listing.postedDate}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{listing.price}</div>
                          <Badge variant="outline" className="mt-1">{listing.category}</Badge>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {listing.description}
                      </p>

                      <div className="flex items-center gap-3 mb-3 pb-3 border-b">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={listing.seller.avatar} />
                          <AvatarFallback>{listing.seller.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{listing.seller.name}</div>
                          <div className="flex items-center gap-2">
                            <StarRating rating={listing.seller.rating} />
                            <span className="text-xs text-muted-foreground">
                              {listing.seller.rating} ({listing.seller.reviewsCount})
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="gap-2">
                            <Icon name="MessageCircle" size={16} />
                            Написать
                          </Button>
                          <Button size="sm" variant="outline" className="gap-2">
                            <Icon name="Phone" size={16} />
                            Позвонить
                          </Button>
                        </div>
                      </div>

                      <div>
                        <button
                          onClick={() => toggleReviews(listing.id)}
                          className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                        >
                          <Icon name="MessageSquare" size={16} />
                          Отзывы ({listing.reviews.length})
                          <Icon 
                            name={expandedReviews.includes(listing.id) ? "ChevronUp" : "ChevronDown"} 
                            size={16} 
                          />
                        </button>

                        {expandedReviews.includes(listing.id) && (
                          <div className="mt-3 space-y-3 pl-4 border-l-2 border-primary/20">
                            {listing.reviews.map((review) => (
                              <div key={review.id} className="bg-gray-50 rounded-lg p-3">
                                <div className="flex items-start gap-3">
                                  <Avatar className="w-8 h-8">
                                    <AvatarImage src={review.avatar} />
                                    <AvatarFallback>{review.author[0]}</AvatarFallback>
                                  </Avatar>
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                      <span className="font-medium text-sm">{review.author}</span>
                                      <span className="text-xs text-muted-foreground">{review.date}</span>
                                    </div>
                                    <StarRating rating={review.rating} />
                                    <p className="text-sm text-muted-foreground mt-2">{review.text}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
