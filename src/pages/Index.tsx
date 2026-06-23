import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const SCHOOL_IMG = 'https://cdn.poehali.dev/projects/2e77b451-0858-454e-8047-dc39ac1ac2ab/bucket/37895d08-d136-4c54-bfe9-7173e1a60cbf.png';

const NAV = [
  { id: 'about', label: 'О школе' },
  { id: 'schedule', label: 'Расписание' },
  { id: 'news', label: 'Новости' },
  { id: 'teachers', label: 'Учителя' },
  { id: 'contacts', label: 'Контакты' },
];

const CLASSES = ['5А', '5Б', '6А', '7А', '8Б', '9А', '10А', '11А'];
const DAYS = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];

type Lesson = { time: string; subject: string; room: string };

const SCHEDULE: Record<string, Record<string, Lesson[]>> = {
  '5А': {
    Понедельник: [
      { time: '08:30', subject: 'Русский язык', room: '201' },
      { time: '09:25', subject: 'Математика', room: '305' },
      { time: '10:30', subject: 'Литература', room: '201' },
      { time: '11:25', subject: 'Биология', room: '110' },
      { time: '12:20', subject: 'Физкультура', room: 'Спортзал' },
    ],
    Вторник: [
      { time: '08:30', subject: 'Английский язык', room: '208' },
      { time: '09:25', subject: 'Математика', room: '305' },
      { time: '10:30', subject: 'История', room: '212' },
      { time: '11:25', subject: 'География', room: '107' },
    ],
    Среда: [
      { time: '08:30', subject: 'Математика', room: '305' },
      { time: '09:25', subject: 'Русский язык', room: '201' },
      { time: '10:30', subject: 'ИЗО', room: '115' },
      { time: '11:25', subject: 'Технология', room: '003' },
      { time: '12:20', subject: 'Музыка', room: '118' },
    ],
    Четверг: [
      { time: '08:30', subject: 'Литература', room: '201' },
      { time: '09:25', subject: 'Английский язык', room: '208' },
      { time: '10:30', subject: 'Математика', room: '305' },
      { time: '11:25', subject: 'Физкультура', room: 'Спортзал' },
    ],
    Пятница: [
      { time: '08:30', subject: 'Биология', room: '110' },
      { time: '09:25', subject: 'Русский язык', room: '201' },
      { time: '10:30', subject: 'История', room: '212' },
      { time: '11:25', subject: 'Классный час', room: '201' },
    ],
  },
};

function buildScheduleFor(cls: string) {
  if (SCHEDULE[cls]) return SCHEDULE[cls];
  return SCHEDULE['5А'];
}

const NEWS = [
  {
    date: '1 сентября 2025',
    title: 'Торжественная линейка ко Дню знаний',
    text: 'Поздравляем учеников, родителей и педагогов с началом нового учебного года! Линейка состоится в 9:00 на школьном дворе.',
    icon: 'GraduationCap',
  },
  {
    date: '15 сентября 2025',
    title: 'Открытие предметных олимпиад',
    text: 'Стартует школьный этап Всероссийской олимпиады школьников по математике, физике и русскому языку.',
    icon: 'Trophy',
  },
  {
    date: '20 сентября 2025',
    title: 'Общешкольное родительское собрание',
    text: 'Приглашаем родителей на собрание, посвящённое организации учебного процесса и внеурочной деятельности.',
    icon: 'Users',
  },
];

const TEACHERS = [
  { name: 'Градова Юлия Геннадьевна', role: 'Директор школы' },
  { name: 'Гагиева Оксана Эльбрусовна', role: 'Учитель' },
  { name: 'Гусева Татьяна Сергеевна', role: 'Учитель' },
  { name: 'Гущина Анна Федоровна', role: 'Учитель' },
  { name: 'Аляева Елена Борисовна', role: 'Учитель' },
  { name: 'Забелина Елена Михайловна', role: 'Учитель' },
  { name: 'Кобезская Евгения Владимировна', role: 'Учитель' },
  { name: 'Барышева Светлана Николаевна', role: 'Учитель' },
  { name: 'Кочкина Анна Викторовна', role: 'Учитель' },
  { name: 'Гожева Марина Борисовна', role: 'Учитель' },
  { name: 'Капитонова Дарья Эдуардовна', role: 'Учитель' },
  { name: 'Лесаева Виктория Алексеевна', role: 'Учитель' },
  { name: 'Баландина Любовь Игоревна', role: 'Учитель, советник директора по воспитанию' },
  { name: 'Коробков Владимир Александрович', role: 'Преподаватель-организатор ОБЗР' },
  { name: 'Костюков Федор Васильевич', role: 'Учитель' },
  { name: 'Кудрявцева Вера Васильевна', role: 'Учитель' },
  { name: 'Лебедева Елена Вадимовна', role: 'Учитель' },
  { name: 'Максимова Светлана Борисовна', role: 'Учитель, библиотекарь' },
  { name: 'Малышева Татьяна Анатольевна', role: 'Учитель' },
  { name: 'Мамаева Людмила Геннадьевна', role: 'Учитель' },
  { name: 'Надежкин Сергей Гаврилович', role: 'Учитель' },
  { name: 'Нелькина Анна Андреевна', role: 'Учитель' },
  { name: 'Рыжова Альбина Раисовна', role: 'Социальный педагог' },
  { name: 'Овчинникова Ольга Олеговна', role: 'Учитель' },
  { name: 'Слисаренко Ирина Александровна', role: 'Учитель' },
  { name: 'Спиридонова Лариса Ивановна', role: 'Учитель' },
  { name: 'Хромых Инна Леонардовна', role: 'Учитель' },
  { name: 'Чебанова Татьяна Сергеевна', role: 'Учитель' },
  { name: 'Морозова Светлана Викторовна', role: 'Учитель-логопед' },
  { name: 'Свинченко Ольга Викторовна', role: 'Учитель' },
  { name: 'Симакова Ирина Анатольевна', role: 'Учитель' },
  { name: 'Филатова Марина Сергеевна', role: 'Учитель' },
  { name: 'Чуваткина Татьяна Александровна', role: 'Учитель' },
  { name: 'Шевлягина Ирина Николаевна', role: 'Учитель' },
  { name: 'Шошина Ирина Александровна', role: 'Учитель' },
  { name: 'Яшкова Галина Алексеевна', role: 'Учитель' },
  { name: 'Ковшова Елена Сергеевна', role: 'Педагог-психолог' },
  { name: 'Кузина Татьяна Ивановна', role: 'Педагог-организатор' },
  { name: 'Поликарпова Лариса Львовна', role: 'Педагог-организатор' },
  { name: 'Рыжов Андрей Александрович', role: 'Учитель' },
];

const STATS = [
  { value: '1982', label: 'Год основания' },
  { value: '43', label: 'Года истории' },
  { value: '780+', label: 'Учеников' },
  { value: '39', label: 'Педагога' },
];

const Index = () => {
  const [activeClass, setActiveClass] = useState('5А');
  const [activeDay, setActiveDay] = useState('Понедельник');
  const [menuOpen, setMenuOpen] = useState(false);

  const schedule = buildScheduleFor(activeClass);
  const lessons = schedule[activeDay] || [];

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-20 px-4 mx-auto md:px-6">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 text-left">
            <div className="flex items-center justify-center w-12 h-12 rounded-full school-gradient shrink-0">
              <span className="text-lg font-bold text-white font-serif">12</span>
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="text-sm font-bold text-school-navy">МБОУ «Школа №12»</div>
              <div className="text-xs text-muted-foreground">город Саров</div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-4 py-2 text-sm font-medium transition-colors rounded-md text-school-navy hover:bg-secondary"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="items-center hidden gap-2 lg:flex">
            <Icon name="Phone" size={16} className="text-school-blue" />
            <span className="text-sm font-semibold text-school-navy">+7 (83130) 9-51-20</span>
          </div>

          <button className="lg:hidden text-school-navy" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={28} />
          </button>
        </div>

        {menuOpen && (
          <div className="border-t lg:hidden border-border bg-white animate-fade-up">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full px-6 py-3 text-left text-school-navy hover:bg-secondary"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden school-gradient">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${SCHOOL_IMG})` }}
        />
        <div className="relative container px-4 py-20 mx-auto md:px-6 md:py-28">
          <div className="max-w-3xl text-white animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-white/15 backdrop-blur">
              <Icon name="Sparkles" size={16} />
              С Днём знаний! 2025/2026 учебный год
            </div>
            <h1 className="mb-6 text-4xl font-black leading-tight text-balance font-serif md:text-6xl">
              Муниципальное бюджетное общеобразовательное учреждение «Школа №12»
            </h1>
            <p className="max-w-2xl mb-8 text-lg text-white/80 md:text-xl">
              Качественное образование, традиции и развитие каждого ученика с 1982 года.
              Город Саров.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollTo('schedule')}
                className="bg-white text-school-navy hover:bg-white/90"
              >
                <Icon name="CalendarDays" size={18} className="mr-2" />
                Расписание занятий
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo('contacts')}
                className="text-white bg-transparent border-white/40 hover:bg-white/10 hover:text-white"
              >
                Контакты
              </Button>
            </div>
          </div>
        </div>
        <div className="relative bg-school-red">
          <div className="container grid grid-cols-2 gap-4 px-4 py-6 mx-auto md:grid-cols-4 md:px-6">
            {STATS.map((s) => (
              <div key={s.label} className="text-center text-white">
                <div className="text-2xl font-black md:text-3xl font-serif">{s.value}</div>
                <div className="text-xs md:text-sm text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle icon="BookOpen" label="О школе" />
              <h2 className="mb-6 text-3xl font-bold text-school-navy font-serif md:text-4xl">
                История и миссия
              </h2>
              <p className="mb-4 text-muted-foreground">
                Школа №12 открыла свои двери 1 сентября 1982 года. За более чем четыре десятилетия
                мы выпустили тысячи учеников, многие из которых стали учёными, врачами, инженерами
                и педагогами.
              </p>
              <p className="mb-6 text-muted-foreground">
                Наша миссия — создать условия для всестороннего развития личности, воспитать
                ответственных и образованных граждан, способных к самостоятельному мышлению и
                непрерывному обучению.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: 'Award', title: 'Высокие результаты', text: 'Призёры олимпиад и конкурсов' },
                  { icon: 'Microscope', title: 'Современные классы', text: 'Оснащённые кабинеты' },
                  { icon: 'HeartHandshake', title: 'Опытные педагоги', text: 'Учителя высшей категории' },
                  { icon: 'Shield', title: 'Безопасность', text: 'Комфортная среда для детей' },
                ].map((f) => (
                  <div key={f.title} className="flex gap-3 p-4 rounded-lg bg-secondary">
                    <Icon name={f.icon} size={24} className="text-school-blue shrink-0" />
                    <div>
                      <div className="font-semibold text-school-navy">{f.title}</div>
                      <div className="text-sm text-muted-foreground">{f.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={SCHOOL_IMG}
                alt="Здание школы №12"
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="absolute p-5 text-white rounded-lg shadow-xl -bottom-6 -left-6 school-gradient sm:p-6">
                <div className="text-3xl font-black font-serif">1982</div>
                <div className="text-sm text-white/80">года основания</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-20 bg-secondary">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-10 text-center">
            <SectionTitle icon="CalendarDays" label="Расписание" center />
            <h2 className="text-3xl font-bold text-school-navy font-serif md:text-4xl">
              Интерактивное расписание занятий
            </h2>
            <p className="mt-3 text-muted-foreground">
              Выберите класс и день недели, чтобы посмотреть уроки
            </p>
          </div>

          <div className="max-w-4xl p-4 mx-auto bg-white shadow-xl rounded-2xl md:p-8">
            {/* Class selector */}
            <div className="mb-2 text-sm font-semibold text-school-navy">Класс:</div>
            <div className="flex flex-wrap gap-2 mb-6">
              {CLASSES.map((cls) => (
                <button
                  key={cls}
                  onClick={() => setActiveClass(cls)}
                  className={`px-4 py-2 text-sm font-bold rounded-lg transition-all ${
                    activeClass === cls
                      ? 'bg-school-navy text-white shadow-md'
                      : 'bg-secondary text-school-navy hover:bg-border'
                  }`}
                >
                  {cls}
                </button>
              ))}
            </div>

            {/* Day selector */}
            <div className="mb-2 text-sm font-semibold text-school-navy">День недели:</div>
            <div className="flex flex-wrap gap-2 mb-6">
              {DAYS.map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    activeDay === day
                      ? 'bg-school-red text-white shadow-md'
                      : 'bg-secondary text-school-navy hover:bg-border'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Lessons */}
            <div className="overflow-hidden border rounded-xl border-border">
              <div className="flex items-center justify-between px-5 py-3 text-white school-gradient">
                <span className="font-bold font-serif">{activeClass} класс</span>
                <span className="text-sm text-white/80">{activeDay}</span>
              </div>
              <div className="divide-y divide-border" key={`${activeClass}-${activeDay}`}>
                {lessons.map((lesson, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-secondary animate-fade-up"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <div className="flex items-center justify-center w-8 h-8 text-sm font-bold rounded-full bg-school-navy text-white shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-school-blue w-16 shrink-0">
                      <Icon name="Clock" size={14} />
                      {lesson.time}
                    </div>
                    <div className="flex-1 font-medium text-school-navy">{lesson.subject}</div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Icon name="DoorOpen" size={14} />
                      каб. {lesson.room}
                    </div>
                  </div>
                ))}
                {lessons.length === 0 && (
                  <div className="px-5 py-10 text-center text-muted-foreground">
                    Уроков нет
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="py-20 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-10 text-center">
            <SectionTitle icon="Newspaper" label="Новости" center />
            <h2 className="text-3xl font-bold text-school-navy font-serif md:text-4xl">
              Новости и события
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {NEWS.map((item) => (
              <article
                key={item.title}
                className="flex flex-col p-6 transition-all border rounded-xl border-border hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-secondary text-school-blue">
                  <Icon name={item.icon} size={24} />
                </div>
                <div className="mb-2 text-xs font-semibold tracking-wide uppercase text-school-red">
                  {item.date}
                </div>
                <h3 className="mb-3 text-lg font-bold text-school-navy font-serif">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section id="teachers" className="py-20 bg-secondary">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-10 text-center">
            <SectionTitle icon="Users" label="Педагоги" center />
            <h2 className="text-3xl font-bold text-school-navy font-serif md:text-4xl">
              Наши учителя
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEACHERS.map((t) => (
              <div
                key={t.name}
                className="flex items-center gap-4 p-6 transition-all bg-white border rounded-xl border-border hover:shadow-lg"
              >
                <div className="flex items-center justify-center w-16 h-16 text-xl font-bold text-white rounded-full school-gradient shrink-0 font-serif">
                  {t.name.split(' ')[0][0]}
                  {t.name.split(' ')[1][0]}
                </div>
                <div>
                  <div className="font-bold text-school-navy">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="mb-10 text-center">
            <SectionTitle icon="MapPin" label="Контакты" center />
            <h2 className="text-3xl font-bold text-school-navy font-serif md:text-4xl">
              Как с нами связаться
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              {[
                { icon: 'MapPin', label: 'Адрес', value: 'г. Саров, ул. Казамазова, д. 5' },
                { icon: 'Phone', label: 'Телефон', value: '(83130) 9-51-21' },
                { icon: 'Mail', label: 'Email', value: 's12_sar@mail.52gov.ru' },
                { icon: 'Globe', label: 'Сайт', value: 'школа12.саров.рф' },
                { icon: 'User', label: 'Директор', value: 'Градова Юлия Геннадьевна' },
                { icon: 'Clock', label: 'Часы приёма директора', value: 'Понедельник: 14:00–17:00\nПятница: 9:00–13:00' },
              ].map((c) => (
                <div key={c.label} className="flex gap-4 p-4 rounded-lg bg-secondary">
                  <div className="flex items-center justify-center w-11 h-11 rounded-lg school-gradient text-white shrink-0">
                    <Icon name={c.icon} size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="font-medium whitespace-pre-line text-school-navy">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="overflow-hidden border rounded-xl border-border min-h-[400px]">
              <iframe
                title="Карта"
                src="https://yandex.ru/map-widget/v1/?text=Саров%20улица%20Казамазова%205&z=16"
                width="100%"
                height="100%"
                className="min-h-[400px] border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-white school-gradient">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-white/15">
                <span className="font-bold text-white font-serif">12</span>
              </div>
              <div>
                <div className="font-bold">МБОУ «Школа №12»</div>
                <div className="text-sm text-white/70">город Саров, с 1982 года</div>
              </div>
            </div>
            <div className="text-sm text-white/70">
              © {new Date().getFullYear()} Все права защищены
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

function SectionTitle({ icon, label, center }: { icon: string; label: string; center?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 mb-4 text-sm font-semibold rounded-full bg-secondary text-school-blue ${
        center ? 'mx-auto' : ''
      }`}
    >
      <Icon name={icon} size={16} />
      {label}
    </div>
  );
}

export default Index;