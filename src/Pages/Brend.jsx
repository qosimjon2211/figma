import React, { useState } from 'react'
import brandBg from '../assets/291c6b0faca943b20edb5876b72170f14fe7f972.jpg'
import ctaBg from '../assets/f975eaf401adaa542a1f182428cc51b0abf9658f.jpg'
import flag from '../assets/flag.svg'
import product1 from '../assets/dc50051ebd696e66ca5c6fcc3fc6e993bb7c01f0.png'
import product2 from '../assets/a4387700b517acb1fdb00f6039392e83b35cc776.png'
import product3 from '../assets/2f190d6a287f2874a7dd688cc98635b81c2255a7.png'
import product4 from '../assets/52177a354575d62ab9e99bfa6ced39f4150c6910.png'
import product5 from '../assets/309e2fa5fb093e6d5ee909c2613761e46fc01e05.png'
import product6 from '../assets/a4387700b517acb1fdb00f6039392e83b35cc776.png'

const innovations = [
  { id: 'pulsade', title: 'Тренажер лестница TRUE PULSAIDE', image: product1 },
  { id: 'rampet', title: 'Функциональный тренинг с композитной рампает', image: product2 },
  { id: 'stretch', title: 'Рамы для стрейтчинга TRUE STRETCH', image: product3 },
  { id: 'traverse', title: 'Латеральный тренажер TRUE TRAVERSE', image: product4 },
  { id: 'alpine', title: 'Беговая дорожка TRUE ALPINE RUNNER', image: product5 },
  { id: 'spectrum', title: 'Эллиптический тренажер TRUE SPECTRUM', image: product6 },
]

function Brend() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (name.trim() === '' || phone.trim() === '' || email.trim() === '') {
      setMessage('Заполните все поля')
      return
    }
    if (!isEmailValid) {
      setMessage('Введите корректный e-mail')
      return
    }
    setMessage('Заявка отправлена. Мы свяжемся с вами')
  }

  return (
    <>
    <section className="relative w-full overflow-hidden">
      <style>{`
        .brand-head {
          background: #009fe3;
        }
        .brand-label {
          display: inline-block;
          padding: 7px 16px;
          border: 1px solid rgba(255, 210, 0, 0.65);
          border-radius: 2px;
          color: #ffd200;
          font-size: clamp(11px, 1vw, 13px);
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .brand-title {
          margin: 20px 0 0;
          color: #ffffff;
          font-size: clamp(24px, 3.6vw, 58px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: 0.005em;
          text-transform: uppercase;
        }
        .brand-body {
          position: relative;
          padding: clamp(40px, 7vw, 110px) 0 clamp(60px, 8vw, 130px);
          background-color: #0b2a38;
        }
        .brand-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .brand-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
        }
        .brand-card-wrap {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 16px;
        }
        .brand-card {
          background: #ffffff;
          padding: clamp(28px, 4.5vw, 64px);
          box-shadow: 0 26px 60px rgba(5, 30, 42, 0.3);
        }
        .brand-card p {
          margin: 0;
          color: #414c54;
          font-size: clamp(15px, 1.15vw, 18px);
          line-height: 1.75;
        }
        .brand-card p + p {
          margin-top: 20px;
        }
        .brand-card .brand-lead {
          color: #009fe3;
          font-weight: 600;
        }
        .brand-card .brand-accent {
          color: #009fe3;
          font-weight: 700;
        }
        .brand-innov {
          background: #009fe3;
          padding: clamp(48px, 6vw, 92px) 0 clamp(56px, 7vw, 104px);
        }
        .brand-innov-title {
          margin: 0;
          color: #ffffff;
          font-size: clamp(26px, 3.2vw, 50px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }
        .brand-innov-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          column-gap: clamp(24px, 3vw, 48px);
          row-gap: clamp(32px, 4vw, 56px);
          margin-top: clamp(32px, 4vw, 60px);
        }
        .brand-innov-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .brand-innov-figure {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }
        .brand-innov-figure img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .brand-innov-name {
          margin: 20px 0 0;
          color: #ffffff;
          font-size: clamp(13px, 0.95vw, 16px);
          font-weight: 700;
          line-height: 1.45;
          text-transform: uppercase;
        }
        .brand-innov-line {
          width: 44px;
          height: 2px;
          margin-top: 14px;
          background: #ffd200;
        }
        .brand-cta {
          position: relative;
          width: 100%;
          padding: clamp(56px, 8vw, 120px) 0;
          background-color: #06212e;
          border-top: 6px solid #009fe3;
          border-bottom: 6px solid #009fe3;
          overflow: hidden;
        }
        .brand-cta-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .brand-cta-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
        }
        .brand-cta-overlay {
          position: absolute;
          inset: 0;
          background: rgba(4, 18, 26, 0.68);
        }
        .brand-cta-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          text-align: center;
        }
        .brand-cta-label {
          display: block;
          color: #ffd200;
          font-size: clamp(11px, 1vw, 13px);
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }
        .brand-cta-title {
          margin: 18px 0 0;
          color: #ffffff;
          font-size: clamp(26px, 4.2vw, 60px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: 0.01em;
          text-transform: uppercase;
        }
        .brand-cta-title span {
          color: #00b1f0;
        }
        .brand-cta-subtitle {
          margin: 22px auto 0;
          max-width: 720px;
          color: #ffd200;
          font-size: clamp(11px, 1.05vw, 15px);
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .brand-cta-form {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
          margin: 34px auto 0;
          max-width: 940px;
        }
        .brand-cta-field {
          position: relative;
          display: flex;
          align-items: center;
          height: 56px;
          background: #ffffff;
        }
        .brand-cta-field input {
          width: 100%;
          height: 100%;
          padding: 0 16px;
          background: transparent;
          border: 0;
          outline: none;
          color: #16222a;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .brand-cta-field input::placeholder {
          color: #16222a;
          opacity: 0.75;
        }
        .brand-cta-phone {
          padding-left: 58px !important;
        }
        .brand-cta-flag {
          position: absolute;
          left: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          pointer-events: none;
          font-size: 13px;
          font-weight: 700;
          color: #16222a;
        }
        .brand-cta-flag img {
          width: 22px;
          height: 15px;
          object-fit: cover;
          display: block;
        }
        .brand-cta-submit {
          height: 56px;
          background: #009fe3;
          border: 0;
          color: #ffffff;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        .brand-cta-submit:hover {
          background: #0088c4;
        }
        .brand-cta-status {
          margin: 18px 0 0;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .brand-cta-status--ok {
          color: #ffd200;
        }
        .brand-cta-status--error {
          color: #ff6b6b;
        }
        .brand-cta-note {
          margin: 22px auto 0;
          max-width: 760px;
          color: rgba(255, 255, 255, 0.75);
          font-size: 10px;
          line-height: 1.6;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        @media (max-width: 1023px) {
          .brand-cta-form {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 639px) {
          .brand-cta-form {
            grid-template-columns: minmax(0, 1fr);
          }
        }
        @media (max-width: 1023px) {
          .brand-innov-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 639px) {
          .brand-innov-grid {
            grid-template-columns: minmax(0, 1fr);
          }
          .brand-innov-figure {
            max-width: 420px;
          }
        }
        @media (max-width: 640px) {
          .brand-title br {
            display: none;
          }
        }
      `}</style>

      <header className="brand-head w-full">
        <div className="mx-auto w-full max-w-[1240px] px-5 py-14 text-center sm:py-16 md:py-24">
          <span className="brand-label">Нашем бренде</span>
          <h1 className="brand-title">
            True — совершенное
            <br className="hidden sm:block" />
            {' '}
            фитнес-оборудование
          </h1>
        </div>
      </header>

      <div className="brand-body">
        <div className="brand-bg" aria-hidden="true">
          <img src={brandBg} alt="" loading="lazy" decoding="async" />
        </div>

        <div className="brand-card-wrap">
          <article className="brand-card">
            <p className="brand-lead">
              TRUE — это бренд профессионального фитнес-оборудования, созданный
              для тех, кто ценит безупречную инженерию и настоящую надёжность.
            </p>
            <p>
              Мы объединяем многолетний опыт, собственные разработки и
              сотрудничество с ведущими производителями спортивного оборудования.
              Каждая единица техники проходит строгий контроль качества на всех
              этапах — от выбора материалов до финального тестирования перед
              отгрузкой. Мы работаем с тренажёрами для фитнес-клубов, спортивных
              залов и домашних тренировок, предлагая широкий ассортимент
              силового и кардио-оборудования в едином профессиональном стиле.
            </p>
            <p className="brand-accent">
              TRUE гарантирует безупречное качество, долговечность и полное
              соответствие мировым стандартам фитнес-индустрии.
            </p>
          </article>
        </div>
      </div>
    </section>

      <section className="brand-innov w-full">
        <div className="mx-auto w-full max-w-[1200px] px-5">
          <h2 className="brand-innov-title text-center">Наши инновации</h2>

          <div className="brand-innov-grid">
            {innovations.map((item) => (
              <article className="brand-innov-item" key={item.id}>
                <figure className="brand-innov-figure">
                  <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                </figure>
                <h3 className="brand-innov-name">{item.title}</h3>
                <span className="brand-innov-line" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-cta">
        <div className="brand-cta-bg" aria-hidden="true">
          <img src={ctaBg} alt="" loading="lazy" decoding="async" />
        </div>
        <div className="brand-cta-overlay" aria-hidden="true" />

        <div className="brand-cta-inner">
          <span className="brand-cta-label">TRUE FITNESS</span>

          <h2 className="brand-cta-title">
            Получите
            <br />
            <span>Эксклюзивное</span>
            <br />
            <span>предложение на</span>
            <br />
            тренажеры TRUE FITNESS
          </h2>

          <p className="brand-cta-subtitle">
            Мы будем рады проконсультировать вас и помочь с подбором оборудования
          </p>

          <form className="brand-cta-form" onSubmit={handleSubmit} noValidate>
            <div className="brand-cta-field">
              <input
                type="text"
                name="name"
                placeholder="ИМЯ"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-label="Имя"
              />
            </div>

            <div className="brand-cta-field">
              <span className="brand-cta-flag">
                <img src={flag} alt="" aria-hidden="true" />
                <span>+998</span>
              </span>
              <input
                className="brand-cta-phone"
                type="tel"
                name="phone"
                placeholder="+998 (99)-999-99-99"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                aria-label="Телефон"
              />
            </div>

            <div className="brand-cta-field">
              <input
                type="email"
                name="email"
                placeholder="E-MAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="E-mail"
              />
            </div>

            <button type="submit" className="brand-cta-submit">
              Отправить
            </button>
          </form>

          {message !== '' && (
            <p
              className={`brand-cta-status ${
                name.trim() !== '' && phone.trim() !== '' && email.trim() !== ''
                  ? 'brand-cta-status--ok'
                  : 'brand-cta-status--error'
              }`}
              role="status"
            >
              {message}
            </p>
          )}

          <p className="brand-cta-note">
            «Нажимая на кнопку, вы даете согласие на обработку персональных данных и
            соглашаетесь с политикой конфиденциальности»
          </p>
        </div>
      </section>
    </>
  )
}

export default Brend