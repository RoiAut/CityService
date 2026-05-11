import React, { useEffect } from 'react';
import { reviews } from './data/reviews';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const third = Math.floor(reviews.length / 3);
  const track1Reviews = [...reviews.slice(0, third), ...reviews.slice(0, third)];
  const track2Reviews = [...reviews.slice(third, third * 2), ...reviews.slice(third, third * 2)];
  const track3Reviews = [...reviews.slice(third * 2), ...reviews.slice(third * 2)];

  const avatarColors = [
    ['#8D6E63', '#fff'], ['#6D4C41', '#fff'], ['#A1887F', '#fff'],
    ['#5D4037', '#fff'], ['#D7CCC8', '#3E2723'], ['#EFEBE9', '#3E2723'],
    ['#795548', '#fff'], ['#3E2723', '#fff'], ['#F5F0EB', '#3E2723'],
    ['#FFB300', '#fff']
  ];

  const renderReviewCard = (r: any, idx: number) => {
    const initials = r.name.split(' ').map((n: string) => n[0]).join('');
    const colorIndex = r.name.length % avatarColors.length;
    const color = avatarColors[colorIndex];
    const stars = '★'.repeat(r.stars) + '☆'.repeat(5 - r.stars);
    return (
      <div className="review-card" key={idx}>
        <div className="review-header">
          <div className="review-avatar" style={{ background: color[0], color: color[1] }}>{initials}</div>
          <div>
            <div className="review-name">{r.name}</div>
            <div className="review-date">{r.date}</div>
          </div>
        </div>
        <div className="review-stars">{stars}</div>
        <p className="review-text">{r.text}</p>
      </div>
    );
  };

  return (
    <>
      <nav>
        <a href="#" className="nav-logo">City<span>Service</span></a>
        <ul className="nav-links">
          <li><a href="#services">Услуги</a></li>
          <li><a href="#why">О нас</a></li>
          <li><a href="#reviews">Отзывы</a></li>
          <li><a href="#contacts">Контакты</a></li>
        </ul>
        <a href="tel:+73519280014" className="nav-phone">📞 Позвонить</a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-bg"></div>
        <div className="hero-badge">Автосервис в Магнитогорске</div>
        <h1>CITY<span className="accent">SERVICE</span></h1>
        <p className="hero-sub">Ремонт &middot; Мойка &middot; Техобслуживание</p>
        <div className="hero-cta">
          <a href="tel:+73519280014" className="btn-primary">Записаться на ремонт</a>
          <a href="#services" className="btn-outline">Наши услуги</a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-num">7+</div>
            <div className="hero-stat-label">Лет на рынке</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">5000+</div>
            <div className="hero-stat-label">Довольных клиентов</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">98%</div>
            <div className="hero-stat-label">Положительных отзывов</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">15</div>
            <div className="hero-stat-label">Минут — время ответа</div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-header reveal">
          <div>
            <div className="section-label">Что мы делаем</div>
            <h2 className="section-title">НАШИ УСЛУГИ</h2>
          </div>
          <p className="section-desc">Полный спектр работ по ремонту и обслуживанию автомобилей. Быстро, качественно и за приятную стоимость.</p>
        </div>
        <div className="services-grid reveal">
          <div className="service-card">
            <div className="service-num">01</div>
            <div className="service-icon">🔧</div>
            <div className="service-name">Слесарный ремонт</div>
            <p className="service-desc">Диагностика и устранение неисправностей двигателя, трансмиссии, ходовой части. Работаем с любыми марками авто.</p>
          </div>
          <div className="service-card">
            <div className="service-num">02</div>
            <div className="service-icon">🛞</div>
            <div className="service-name">Ходовая часть</div>
            <p className="service-desc">Замена и ремонт подвески, амортизаторов, рулевых наконечников, шаровых опор, ступичных подшипников.</p>
          </div>
          <div className="service-card">
            <div className="service-num">03</div>
            <div className="service-icon">🔩</div>
            <div className="service-name">Тормозная система</div>
            <p className="service-desc">Замена колодок, дисков, барабанов. Прокачка и ремонт тормозных цилиндров. Диагностика АБС.</p>
          </div>
          <div className="service-card">
            <div className="service-num">04</div>
            <div className="service-icon">⚡</div>
            <div className="service-name">Электрика</div>
            <p className="service-desc">Диагностика и ремонт электрооборудования, проводки, аккумуляторов, генераторов и стартеров.</p>
          </div>
          <div className="service-card">
            <div className="service-num">05</div>
            <div className="service-icon">🚿</div>
            <div className="service-name">Автомойка</div>
            <p className="service-desc">Качественная мойка кузова, мойка двигателя, чистка салона. Ваш автомобиль выйдет как новый.</p>
          </div>
          <div className="service-card">
            <div className="service-num">06</div>
            <div className="service-icon">🔄</div>
            <div className="service-name">ТО и замена масел</div>
            <p className="service-desc">Регламентное техническое обслуживание, замена масла и фильтров, проверка всех систем автомобиля.</p>
          </div>
        </div>
      </section>

      <section className="why" id="why">
        <div className="why-left reveal">
          <div className="section-label">Почему выбирают нас</div>
          <h2 className="section-title">МЫ ДЕЛАЕМ РАБОТУ НА СОВЕСТЬ</h2>
          <p className="section-desc" style={{ marginBottom: '32px' }}>Мы не только отремонтируем ваш автомобиль, но и вымоем его — и всё это за приятную стоимость. Наша цель — чтобы вы возвращались снова.</p>
          <a href="https://vk.com/cityservice74" target="_blank" rel="noreferrer" className="btn-primary">Мы ВКонтакте</a>
        </div>
        <div className="why-right reveal">
          <div className="why-card">
            <div className="why-icon">💰</div>
            <div className="why-title">Приятные цены</div>
            <p className="why-text">Честная стоимость без скрытых доплат. Смета согласовывается до начала работ.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">⏱️</div>
            <div className="why-title">Быстрый ответ</div>
            <p className="why-text">Отвечаем на вопросы в течение 15 минут. Пишите в ВК или звоните.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">🏆</div>
            <div className="why-title">Опытные мастера</div>
            <p className="why-text">Профессионалы с многолетним стажем. Работаем с любыми марками и моделями.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">✅</div>
            <div className="why-title">Гарантия качества</div>
            <p className="why-text">Даём гарантию на все выполненные работы. Ваш результат — наша репутация.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">🚗</div>
            <div className="why-title">Ремонт + мойка</div>
            <p className="why-text">Забираете автомобиль отремонтированным и чистым. Комплексный подход.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">📍</div>
            <div className="why-title">Удобное расположение</div>
            <p className="why-text">Находимся в районе СУПНР на ул. Комсомольская 122/1а. Легко добраться.</p>
          </div>
        </div>
      </section>

      <section className="reviews" id="reviews">
        <div className="reviews-header reveal">
          <div className="section-label">Что о нас говорят</div>
          <h2 className="section-title">ОТЗЫВЫ КЛИЕНТОВ</h2>
        </div>

        <div className="reviews-track-wrap">
          <div className="reviews-track" id="track1">
            {track1Reviews.map(renderReviewCard)}
          </div>
          <div className="reviews-track reviews-track-2" id="track2">
            {track2Reviews.map(renderReviewCard)}
          </div>
          <div className="reviews-track" id="track3" style={{ marginTop: '20px' }}>
            {track3Reviews.map(renderReviewCard)}
          </div>
        </div>
      </section>

      <section className="contacts" id="contacts">
        <div className="reveal">
          <div className="section-label">Как нас найти</div>
          <h2 className="section-title">КОНТАКТЫ</h2>
        </div>
        <div className="contacts-grid reveal">
          <div className="contact-block">
            <div>
              <div className="contact-label">Телефоны</div>
              <a href="tel:+73519280014" className="phone-btn">📞 8 (3519) 28-00-14</a>
              <a href="tel:+79048049050" className="phone-btn">📱 8 (904) 804-90-50</a>
              <a href="https://vk.com/cityservice74" target="_blank" rel="noreferrer" className="vk-btn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm2.99 14.18h-1.68c-.63 0-.83-.5-1.96-1.62-.98-.94-1.4-.67-1.4.27v1.33c0 .28-.09.45-1.02.45-1.5 0-3.16-.92-4.33-2.61-1.76-2.45-2.24-4.31-2.24-4.67 0-.17.07-.33.28-.33h1.68c.22 0 .3.1.38.32.41 1.17 1.1 2.2 1.38 2.2.1 0 .15-.05.15-.32V9.73c-.04-.74-.44-.8-.44-.8a.37.37 0 01.3-.4h2.65c.19 0 .26.1.26.32v2.35c0 .19.09.26.14.26.1 0 .19-.07.38-.26.59-.66 1.01-1.66 1.01-1.66a.41.41 0 01.38-.23h1.68c.5 0 .61.25.5.5-.2.46-.84 1.4-1.23 1.94-.16.22-.22.33 0 .58.16.19.69.65 1.05 1.05.65.71 1.14 1.32 1.28 1.73.13.4-.09.6-.5.6z"/>
                </svg>
                Написать ВКонтакте
              </a>
            </div>

            <div>
              <div className="contact-label" style={{ marginBottom: '14px' }}>Адрес</div>
              <div className="contact-item">
                <div className="contact-icon-wrap">📍</div>
                <div>
                  <div className="contact-label">Магнитогорск</div>
                  <span className="contact-value" style={{ cursor: 'default' }}>ул. Комсомольская, 122/1а</span>
                  <span style={{ fontSize: '12px', color: 'var(--silver)', marginTop: '4px', display: 'block' }}>В районе СУПНР</span>
                </div>
              </div>
            </div>

            <div className="map-frame">
              <div className="map-address-display">📍 ул. Комсомольская, 122/1а, Магнитогорск</div>
              <a href="https://yandex.ru/maps/-/CDhXQKRs" target="_blank" rel="noreferrer">Открыть на Яндекс.Картах</a>
              <a href="https://2gis.ru/magnitogorsk/search/Комсомольская%20122%2F1а" target="_blank" rel="noreferrer" style={{ background: '#1B7E3E' }}>Открыть в 2GIS</a>
            </div>
          </div>

          <div>
            <div className="contact-label" style={{ marginBottom: '20px' }}>Время работы</div>
            <div className="schedule-grid">
              <div className="schedule-item">
                <div className="schedule-day">Пн — Пт</div>
                <div className="schedule-time">9:00 — 19:00</div>
              </div>
              <div className="schedule-item">
                <div className="schedule-day">Суббота</div>
                <div className="schedule-time">10:00 — 18:00</div>
              </div>
              <div className="schedule-item closed" style={{ gridColumn: 'span 2' }}>
                <div className="schedule-day">Воскресенье</div>
                <div className="schedule-time">Выходной</div>
              </div>
            </div>

            <div style={{ marginTop: '40px', background: 'var(--mid)', padding: '28px', borderRadius: '4px', borderLeft: '3px solid var(--red)' }}>
              <div style={{ fontSize: '13px', color: 'var(--silver)', lineHeight: 1.8 }}>
                💬 <strong style={{ color: 'var(--text-main)' }}>Напишите нам ВКонтакте</strong> — отвечаем в течение <strong style={{ color: 'var(--red)' }}>15 минут</strong>.<br/><br/>
                Не можете приехать прямо сейчас? Позвоните или напишите — мы запишем вас на удобное время и предварительно оценим стоимость ремонта.
              </div>
            </div>

            <div style={{ marginTop: '20px', padding: '20px', background: 'rgba(141, 110, 99, 0.1)', borderRadius: '4px', border: '1px solid rgba(141, 110, 99, 0.3)' }}>
              <div style={{ fontSize: '13px', color: 'var(--brown-dark)', fontWeight: 600, marginBottom: '6px' }}>🎁 Комплексное предложение</div>
              <div style={{ fontSize: '12px', color: 'var(--silver)', lineHeight: 1.6 }}>При любом ремонте — мойка автомобиля в подарок. Забирайте машину чистой!</div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <div>
            <a href="#" className="footer-logo">City<span>Service</span></a>
            <div className="footer-tagline">Автосервис в Магнитогорске &middot; ул. Комсомольская 122/1а</div>
          </div>
          <div className="footer-contacts">
            <a href="tel:+73519280014">📞 8 (3519) 28-00-14</a>
            <a href="tel:+79048049050">📱 8 (904) 804-90-50</a>
            <a href="https://vk.com/cityservice74" target="_blank" rel="noreferrer">💙 ВКонтакте: cityservice74</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2024 CityService. Магнитогорск, ул. Комсомольская 122/1а</div>
          <div className="footer-copy">ПН-ПТ 9:00–19:00 &middot; СБ 10:00–18:00 &middot; ВС выходной</div>
        </div>
      </footer>
    </>
  );
}
