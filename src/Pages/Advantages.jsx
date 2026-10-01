import React, { useState } from 'react'
import img from '../assets/Rectangle 57.png'
import img2 from '../assets/Rectangle 57 (1).png'
import img3 from '../assets/Rectangle 57 (2).png'
import img4 from '../assets/Rectangle 57 (3).png'
import img5 from '../assets/Rectangle 57 (4).png'
import img6 from '../assets/Rectangle 57 (5).png'
import img7 from '../assets/Rectangle 57 (6).png'
import img8 from '../assets/Rectangle 57 (7).png'
import bgForm from '../assets/Rectangle 54.png'
import flag from '../assets/flag.svg'

function Advantages() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim() !== '' && phone.trim() !== '' && email.trim() !== '') {
      setMessage('Данные отправлены успешно!')
      setMessageType('success')
    } else {
      setMessage('Заполните все ечейки полностю')
      setMessageType('error')
    }
  }

  const cardData = [
    {
      img: img,
      title: 'ЛУЧШИЕ ХАРАКТЕРИСТИКИ В КЛАССЕ',
      desc: 'Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей',
    },
    {
      img: img2,
      title: 'ВЫСОКАЯ НАДЕЖНОСТЬ ОБОРУДОВАНИЯ',
      desc: 'Высокое качество тренажеров - это визитная карточка TRUE. Кроме того, TRUE предоставляет до 5 лет полной гарантии на кардио тренажеры.',
    },
    {
      img: img3,
      title: 'НИЗКАЯ СТОИМОСТЬ ВЛАДЕНИЯ',
      desc: 'Тренажеры способны выдерживать серьезную эксплуатационную нагрузку, сохраняя минимальные затраты на сервис, что обеспечивает минимальную стоимость владения',
    },
    {
      img: img4,
      title: 'КАЧЕСТВЕННЫЙ И ОПЕРАТИВНЫЙ СЕРВИС',
      desc: 'Оборудование должно работать бесперебойно, поэтому мы уделяем особое внимание наличию всех необходимых запчастей и высокой срочности технического реагирования',
    },
    {
      img: img5,
      title: 'ЦЕНЫ НИЖЕ, ЧЕМ У АНАЛОГОВ',
      desc: 'Стоимость тренажеров вас приятно удивит. Несмотря на то, что мы полностью превосходим конкурентов, наши цены ниже',
    },
    {
      img: img6,
      title: 'СОВЕРШЕННАЯ ПРОИЗВОДИТЕЛЬНОСТЬ',
      desc: 'Тренажеры TRUE обеспечивают непревзойденный уровень тренировок, для достижения самых высоких результатов.',
    },
    {
      img: img7,
      title: 'АБСОЛЮТНЫЕ ЛИДЕРЫ ПО КОЛИЧЕСТВУ ИННОВАЦИЙ',
      desc: 'Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей',
    },
    {
      img: img8,
      title: 'МАКСИМАЛЬНОЕ УДОБСТВО И ФУНКЦИОНАЛЬНОСТЬ',
      desc: 'Компания TRUE продумывает все технические нюансы и делает тренажеры максимально удобными и функциональными',
    },
  ]

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* Section 1: Cyan Top Header Banner */}
      <section className="bg-[#00A0E9] py-12 px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-3">
          <p className="text-[#FCEE21] font-bold text-xs md:text-sm uppercase tracking-wider">
            НАШИ ПРЕИМУЩЕСТВА
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-extrabold uppercase tracking-wide">
            ПРЕИМУЩЕСТВА TRUE FITNESS
          </h1>
          <h3 className="text-white text-xs md:text-sm font-bold uppercase tracking-wider max-w-4xl mx-auto leading-relaxed opacity-95">
            БЛАГОДАРЯ КОТОРЫМ МЫ ЯВЛЯЕМСЯ МИРОВЫМ ЛИДЕРОМ В ПРОИЗВОДСТВЕ ФИТНЕС-ОБОРУДОВАНИЯ
          </h3>
        </div>
      </section>

      {/* Section 2: 8 Cards Grid (4 Columns) */}
      <section className="max-w-[1240px] mx-auto py-14 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {cardData.map((card, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-full aspect-[4/3] overflow-hidden mb-4 bg-gray-100">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h2 className="text-[#00A0E9] font-bold text-sm md:text-base uppercase tracking-wide mb-3 leading-snug min-h-[44px] flex items-center justify-center">
                {card.title}
              </h2>
              <p className="text-[#444444] text-xs md:text-sm font-normal leading-relaxed max-w-[280px]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: TOP 5 Banner Section */}
      <section className="max-w-[1240px] mx-auto px-4 py-8">
        <div className="relative border-t border-[#00A0E9]/30">
          <div className="flex justify-center -mt-4 mb-6">
            <span className="bg-[#00A0E9] text-white font-bold text-sm uppercase tracking-wider px-8 py-1.5">
              TOP 5
            </span>
          </div>
          <p className="text-[#333333] font-extrabold text-base md:text-xl text-center uppercase tracking-wide max-w-4xl mx-auto pb-4">
            БРЕНД TRUE FITNESS ВХОДИТ В ТОП 5 КРУПНЕЙШИХ ПРОИЗВОДИТЕЛЕЙ ФИТНЕС ОБОРУДОВАНИЯ
          </p>
          <div className="border-b border-[#00A0E9]/30 mt-4"></div>
        </div>
      </section>

      {/* Section 4: Lead Form Section (With Rectangle 54.png Background) */}
      <section
        className="relative bg-cover bg-center py-16 px-4 mt-6"
        style={{ backgroundImage: `url(${bgForm})` }}
      >
        {/* Dark Translucent Container Overlay */}
        <div className="relative z-10 max-w-5xl mx-auto bg-black/65 backdrop-blur-xs p-8 md:p-12 text-center text-white border border-white/10 shadow-2xl">
          
          <p className="text-[#FCEE21] font-bold text-xs uppercase tracking-wider mb-2">
            TRUE FITNESS
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-wide leading-tight mb-3 text-white">
            ПОЛУЧИТЕ{' '}
            <span className="text-[#00A0E9]">ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ</span>{' '}
            НА ТРЕНАЖЕРЫ{' '}
            <span className="text-[#00A0E9]">TRUE FITNESS</span>
          </h2>

          <p className="text-[#FCEE21] font-bold text-xs md:text-sm tracking-wider uppercase mb-8">
            МЫ БУДЕМ РАДЫ ПРОКОНСУЛЬТИРОВАТЬ ВАС И ПОМОЧЬ С ПОДБОРОМ ОБОРУДОВАНИЯ
          </p>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-4">
            {/* 4 Inputs / Buttons in Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <input
                  type="text"
                  placeholder="ИМЯ"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#E5E5E5] text-black font-bold placeholder:text-black placeholder:font-bold px-4 py-3 text-xs outline-none focus:bg-white transition"
                />
              </div>

              <div className="relative flex items-center bg-[#E5E5E5]">
                <div className="absolute left-3 flex items-center pointer-events-none">
                  <img src={flag} alt="UZ Flag" className="w-5 h-3.5 object-cover" />
                  <span className="text-black font-bold text-xs ml-1.5">+998</span>
                </div>
                <input
                  type="text"
                  placeholder="(99)-999-99-99"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-transparent text-black font-bold placeholder:text-black placeholder:font-bold pl-20 pr-3 py-3 text-xs outline-none"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="E-MAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#E5E5E5] text-black font-bold placeholder:text-black placeholder:font-bold px-4 py-3 text-xs outline-none focus:bg-white transition"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-[#00A0E9] hover:bg-[#008CCB] active:scale-[0.98] text-white font-extrabold text-xs md:text-sm uppercase tracking-wider py-3 px-6 transition duration-200 cursor-pointer text-center"
                >
                  ОТПРАВИТЬ
                </button>
              </div>
            </div>

            {/* Validation Feedback Message */}
            {message && (
              <div
                className={`text-xs md:text-sm font-bold uppercase tracking-wider p-3 my-2 text-center transition-all ${
                  messageType === 'success'
                    ? 'bg-[#00A0E9] text-white'
                    : 'bg-red-600 text-white'
                }`}
              >
                {message}
              </div>
            )}

            <p className="text-[10px] md:text-xs text-white/80 font-normal uppercase tracking-wider max-w-3xl mx-auto pt-2 leading-relaxed">
              «НАЖИМАЯ НА КНОПКУ, ВЫ ДАЕТЕ СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ И СОГЛАШАЕТЕСЬ C ПОЛИТИКОЙ КОНФИДЕНЦИАЛЬНОСТИ»
            </p>
          </form>
        </div>

        {/* Dark overlay over background image */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
      </section>

    </div>
  )
}

export default Advantages