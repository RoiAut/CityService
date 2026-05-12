import React, { useEffect, useRef, useState } from 'react';
import { reviews } from './data/reviews';

import { services } from './data/services';

export default function App() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

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

  const avatarColors = [
    ['#E63946', '#fff'], ['#121212', '#fff'], ['#333333', '#fff'],
    ['#FFD166', '#111'], ['#F4F4F4', '#111'], ['#AD001D', '#fff'],
    ['#222222', '#fff'], ['#1A1A1A', '#fff'], ['#FF4D5E', '#fff'],
    ['#0C0C0C', '#fff']
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
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-image-container">
                <img src={service.image} alt={service.name} className="service-img" />
              </div>
              <div className="service-content">
                <div className="service-num">{String(index + 1).padStart(2, '0')}</div>
                <div className="service-icon">{service.icon}</div>
                <div className="service-name">{service.name}</div>
                <p className="service-desc">{service.desc}</p>
              </div>
            </div>
          ))}
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
        <div className="reviews-header reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
          <div>
            <div className="section-label">Что о нас говорят</div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>ОТЗЫВЫ КЛИЕНТОВ</h2>
          </div>
        </div>

        <div className="reviews-track-wrap" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button onClick={scrollLeft} className="review-btn" aria-label="Предыдущие" style={{ flexShrink: 0, width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--card-bg)', border: '2px solid var(--border-color)', color: 'var(--text-main)', cursor: 'pointer', transition: 'all 0.2s', borderRadius: '0' }} onMouseOver={(e) => {e.currentTarget.style.borderColor = 'var(--brown)'; e.currentTarget.style.color = 'var(--brown)'}} onMouseOut={(e) => {e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-main)'}}>←</button>
          <div className="reviews-track" ref={trackRef} style={{ paddingBottom: '10px' }}>
            {reviews.map(renderReviewCard)}
          </div>
          <button onClick={scrollRight} className="review-btn" aria-label="Следующие" style={{ flexShrink: 0, width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--card-bg)', border: '2px solid var(--border-color)', color: 'var(--text-main)', cursor: 'pointer', transition: 'all 0.2s', borderRadius: '0' }} onMouseOver={(e) => {e.currentTarget.style.borderColor = 'var(--brown)'; e.currentTarget.style.color = 'var(--brown)'}} onMouseOut={(e) => {e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-main)'}}>→</button>
        </div>
      </section>

      <section className="contacts" id="contacts">
        <div className="reveal">
          <div className="section-label">Как нас найти</div>
          <h2 className="section-title">КОНТАКТЫ</h2>
        </div>
        <div className="contacts-grid reveal">
          <div className="contact-block">
            <div className="contact-item">
              <div className="contact-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <div className="contact-label">АДРЕС</div>
                <a href="https://yandex.ru/maps/org/sitiservis/10304816720/?ll=58.942508%2C53.423611&mode=search&sctx=ZAAAAAgBEAAaKAoSCXTQJRx6fU1AEaMeotEdtEpAEhIJY7ml1ZC44T8RGCKnr%2BdryD8iBgABAgMEBSgKOABAmqANSAFqAnJ1nQHNzMw9oAEAqAEAvQHTOCc2wgEGlaXa6MEDggIU0KHQuNGC0LjQodC10YDQstC40YGKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=58.942508%2C53.423611&sspn=0.070677%2C0.024341&text=%D0%A1%D0%B8%D1%82%D0%B8%D0%A1%D0%B5%D1%80%D0%B2%D0%B8%D1%81&z=14.97" target="_blank" rel="noreferrer" className="contact-value" style={{ lineHeight: 1.5, display: 'block', textDecoration: 'none' }}>ул. Комсомольская, 122/1а,<br/>Магнитогорск</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm2.99 14.18h-1.68c-.63 0-.83-.5-1.96-1.62-.98-.94-1.4-.67-1.4.27v1.33c0 .28-.09.45-1.02.45-1.5 0-3.16-.92-4.33-2.61-1.76-2.45-2.24-4.31-2.24-4.67 0-.17.07-.33.28-.33h1.68c.22 0 .3.1.38.32.41 1.17 1.1 2.2 1.38 2.2.1 0 .15-.05.15-.32V9.73c-.04-.74-.44-.8-.44-.8a.37.37 0 01.3-.4h2.65c.19 0 .26.1.26.32v2.35c0 .19.09.26.14.26.1 0 .19-.07.38-.26.59-.66 1.01-1.66 1.01-1.66a.41.41 0 01.38-.23h1.68c.5 0 .61.25.5.5-.2.46-.84 1.4-1.23 1.94-.16.22-.22.33 0 .58.16.19.69.65 1.05 1.05.65.71 1.14 1.32 1.28 1.73.13.4-.09.6-.5.6z"/>
                </svg>
              </div>
              <div>
                <div className="contact-label">ВКОНТАКТЕ</div>
                <a href="https://vk.com/cityservice74" className="contact-value" target="_blank" rel="noreferrer">vk.com/cityservice74</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <div className="contact-label">ТЕЛЕФОН</div>
                <a href="tel:+73519280014" className="contact-value" style={{ marginBottom: '8px' }}>+7 (3519) 28-00-14</a>
                <a href="tel:+79048049050" className="contact-value">+7 (904) 804-90-50</a>
              </div>
            </div>
          </div>

          <div>
            <div className="contact-label" style={{ marginBottom: '20px' }}>ВРЕМЯ РАБОТЫ</div>
            <div className="contact-item" style={{ marginBottom: '20px' }}>
              <div className="contact-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div>
                <div className="contact-label">ПОНЕДЕЛЬНИК – СУББОТА</div>
                <div className="contact-value" style={{ cursor: 'default', fontSize: '17px' }}>09:00 — 19:30</div>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon-wrap" style={{ background: 'transparent', borderColor: 'var(--border-color)', color: 'var(--silver)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
              </div>
              <div>
                <div className="contact-label" style={{ color: 'var(--silver)' }}>ВОСКРЕСЕНЬЕ</div>
                <div className="contact-value" style={{ color: 'var(--silver)', cursor: 'default', fontSize: '17px' }}>Выходной</div>
              </div>
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
          <div className="footer-copy">© 2026 CityService. Магнитогорск, ул. Комсомольская 122/1а</div>
          <div className="footer-copy">ПН-СБ 09:00–19:30 &middot; ВС выходной</div>
        </div>
      </footer>

      {showScrollTop && (
        <button 
          onClick={scrollToTop} 
          className="scroll-top-btn"
          aria-label="Наверх"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
        </button>
      )}
    </>
  );
}
