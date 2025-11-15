import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const weapons = [
    { name: 'AKM', type: 'Штурмовая винтовка', damage: 'Высокий', recoil: 'Средний', tip: 'Отлично подходит для средних дистанций. Контролируйте отдачу короткими очередями.' },
    { name: 'M4A1', type: 'Штурмовая винтовка', damage: 'Средний', recoil: 'Низкий', tip: 'Универсальное оружие. Модифицируйте под разные стили игры.' },
    { name: 'Vector', type: 'ПП', damage: 'Средний', recoil: 'Очень низкий', tip: 'Идеален для CQB. Высокая скорострельность компенсирует урон.' },
    { name: 'M700', type: 'Снайперская винтовка', damage: 'Очень высокий', recoil: 'Высокий', tip: 'Для дальних дистанций. Один выстрел - один враг.' }
  ];

  const maps = [
    { name: 'Завод', difficulty: 'Средняя', loot: 'Высокий', tip: 'Много укрытий. Проверяйте углы, играйте от звука.' },
    { name: 'Ферма', difficulty: 'Легкая', loot: 'Средний', tip: 'Открытые пространства. Используйте оптику и держите дистанцию.' },
    { name: 'Порт', difficulty: 'Высокая', loot: 'Очень высокий', tip: 'Сложная навигация. Изучите маршруты эвакуации заранее.' }
  ];

  const guides = [
    { title: 'Экономика для новичков', category: 'Базовое', content: 'Не берите дорогое снаряжение в первые рейды. Изучайте карты в оффлайн режиме.' },
    { title: 'Как выжить в первом рейде', category: 'Базовое', content: 'Двигайтесь медленно, слушайте звуки, не жадничайте - вовремя эвакуируйтесь.' },
    { title: 'Продвинутая тактика боя', category: 'Продвинутое', content: 'Используйте гранаты для контроля позиций. Перезаряжайтесь в укрытии.' },
    { title: 'Оптимальные сборки брони', category: 'Снаряжение', content: 'Баланс защиты и мобильности важнее максимальной брони.' }
  ];

  const tips = [
    { icon: 'Headphones', text: 'Звук - ваш главный союзник. Играйте в наушниках и слушайте шаги.' },
    { icon: 'Eye', text: 'Проверяйте углы методично. Большинство смертей - от невнимательности.' },
    { icon: 'Activity', text: 'Следите за выносливостью. Усталый оперативник = легкая мишень.' },
    { icon: 'Shield', text: 'Броня важна, но позиционирование важнее. Не полагайтесь только на защиту.' },
    { icon: 'Package', text: 'Знайте ценность лута. Не рискуйте жизнью ради дешевых предметов.' },
    { icon: 'Map', text: 'Изучите точки эвакуации на каждой карте. Планируйте маршрут заранее.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-tactical-dark via-tactical-darker to-black text-tactical-light">
      <nav className="border-b border-tactical-accent/20 bg-tactical-darker/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Crosshair" className="text-tactical-accent" size={32} />
              <h1 className="text-2xl font-bold tracking-tight">ABI TACTICAL</h1>
            </div>
            <div className="flex gap-6">
              {['home', 'guides', 'weapons', 'maps', 'tips'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-tactical-accent ${
                    activeSection === section ? 'text-tactical-accent' : 'text-tactical-light/70'
                  }`}
                >
                  {section === 'home' ? 'Главная' : section === 'guides' ? 'Гайды' : section === 'weapons' ? 'Оружие' : section === 'maps' ? 'Карты' : 'Советы'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <div className="container mx-auto px-4 py-12">
          <div className="mb-16 text-center animate-fade-in">
            <div className="inline-block mb-4">
              <Badge variant="outline" className="border-tactical-accent/50 text-tactical-accent">
                Tactical Guide Hub
              </Badge>
            </div>
            <h2 className="text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-tactical-accent to-tactical-warning bg-clip-text text-transparent">
              Arena Breakout: Infinite
            </h2>
            <p className="text-xl text-tactical-light/70 max-w-2xl mx-auto">
              Профессиональные гайды, советы и тактики для доминирования на поле боя
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { title: 'Гайды', icon: 'BookOpen', count: guides.length, desc: 'Подробные руководства', section: 'guides' },
              { title: 'Оружие', icon: 'Crosshair', count: weapons.length, desc: 'Обзоры и советы', section: 'weapons' },
              { title: 'Карты', icon: 'Map', count: maps.length, desc: 'Тактика локаций', section: 'maps' },
              { title: 'Советы', icon: 'Lightbulb', count: tips.length, desc: 'Полезные фишки', section: 'tips' }
            ].map((item, idx) => (
              <Card 
                key={item.title} 
                className="bg-tactical-darker/50 border-tactical-accent/20 hover:border-tactical-accent/40 transition-all cursor-pointer hover-scale"
                onClick={() => setActiveSection(item.section)}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader>
                  <Icon name={item.icon as any} className="text-tactical-accent mb-2" size={32} />
                  <CardTitle className="text-tactical-light">{item.title}</CardTitle>
                  <CardDescription className="text-tactical-light/60">{item.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-tactical-accent">{item.count}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-tactical-darker/50 border-tactical-warning/30">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Icon name="AlertTriangle" className="text-tactical-warning" size={24} />
                <CardTitle className="text-tactical-warning">Быстрые советы для выживания</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {tips.slice(0, 4).map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-tactical-dark/50">
                    <Icon name={tip.icon as any} className="text-tactical-accent mt-1 flex-shrink-0" size={20} />
                    <p className="text-sm text-tactical-light/80">{tip.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeSection === 'guides' && (
        <div className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-2 text-tactical-accent">Гайды</h2>
            <p className="text-tactical-light/70">Пошаговые руководства для игроков любого уровня</p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-tactical-darker border border-tactical-accent/20">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="basic">Базовое</TabsTrigger>
              <TabsTrigger value="advanced">Продвинутое</TabsTrigger>
              <TabsTrigger value="gear">Снаряжение</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {guides.map((guide, idx) => (
                  <Card key={idx} className="bg-tactical-darker/50 border-tactical-accent/20 hover:border-tactical-accent/40 transition-all hover-scale">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-tactical-light">{guide.title}</CardTitle>
                        <Badge variant="outline" className="border-tactical-accent/50 text-tactical-accent text-xs">
                          {guide.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-tactical-light/70">{guide.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {['basic', 'advanced', 'gear'].map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {guides
                    .filter((g) => g.category.toLowerCase() === (category === 'basic' ? 'базовое' : category === 'advanced' ? 'продвинутое' : 'снаряжение'))
                    .map((guide, idx) => (
                      <Card key={idx} className="bg-tactical-darker/50 border-tactical-accent/20">
                        <CardHeader>
                          <CardTitle className="text-tactical-light">{guide.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-tactical-light/70">{guide.content}</p>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      )}

      {activeSection === 'weapons' && (
        <div className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-2 text-tactical-accent">Оружие</h2>
            <p className="text-tactical-light/70">Характеристики и советы по использованию</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {weapons.map((weapon, idx) => (
              <Card key={idx} className="bg-tactical-darker/50 border-tactical-accent/20 hover:border-tactical-accent/40 transition-all hover-scale">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-tactical-light flex items-center gap-2">
                        <Icon name="Crosshair" className="text-tactical-accent" size={20} />
                        {weapon.name}
                      </CardTitle>
                      <CardDescription className="text-tactical-light/60 mt-1">{weapon.type}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <div className="text-xs text-tactical-light/60 mb-1">Урон</div>
                        <Badge variant={weapon.damage.includes('Высокий') ? 'default' : 'secondary'} className="bg-tactical-accent/20 text-tactical-accent border-0">
                          {weapon.damage}
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-tactical-light/60 mb-1">Отдача</div>
                        <Badge variant="outline" className="border-tactical-warning/50 text-tactical-warning">
                          {weapon.recoil}
                        </Badge>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-tactical-accent/10">
                      <div className="flex items-start gap-2">
                        <Icon name="Lightbulb" className="text-tactical-warning mt-1 flex-shrink-0" size={16} />
                        <p className="text-sm text-tactical-light/80">{weapon.tip}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'maps' && (
        <div className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-2 text-tactical-accent">Карты</h2>
            <p className="text-tactical-light/70">Тактические особенности локаций</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {maps.map((map, idx) => (
              <Card key={idx} className="bg-tactical-darker/50 border-tactical-accent/20 hover:border-tactical-accent/40 transition-all hover-scale">
                <CardHeader>
                  <CardTitle className="text-tactical-light flex items-center gap-2">
                    <Icon name="MapPin" className="text-tactical-accent" size={20} />
                    {map.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="text-xs text-tactical-light/60 mb-1">Сложность</div>
                        <Badge 
                          variant="outline" 
                          className={`${
                            map.difficulty === 'Легкая' 
                              ? 'border-green-500/50 text-green-400' 
                              : map.difficulty === 'Средняя'
                              ? 'border-yellow-500/50 text-yellow-400'
                              : 'border-red-500/50 text-red-400'
                          }`}
                        >
                          {map.difficulty}
                        </Badge>
                      </div>
                      <div>
                        <div className="text-xs text-tactical-light/60 mb-1">Лут</div>
                        <Badge variant="outline" className="border-tactical-accent/50 text-tactical-accent">
                          {map.loot}
                        </Badge>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-tactical-accent/10">
                      <div className="flex items-start gap-2">
                        <Icon name="Info" className="text-tactical-accent mt-1 flex-shrink-0" size={16} />
                        <p className="text-sm text-tactical-light/80">{map.tip}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'tips' && (
        <div className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-2 text-tactical-accent">Советы</h2>
            <p className="text-tactical-light/70">Полезные фишки для повышения эффективности</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, idx) => (
              <Card key={idx} className="bg-tactical-darker/50 border-tactical-accent/20 hover:border-tactical-accent/40 transition-all hover-scale">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 rounded-full bg-tactical-accent/10 border border-tactical-accent/20">
                      <Icon name={tip.icon as any} className="text-tactical-accent" size={32} />
                    </div>
                    <p className="text-tactical-light/90">{tip.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      <footer className="border-t border-tactical-accent/20 bg-tactical-darker/80 mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-tactical-light/60">
          <p className="text-sm">ABI TACTICAL • Гайды и советы по Arena Breakout: Infinite</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
