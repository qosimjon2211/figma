import React, { useState } from 'react'

function Products() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [visibleCount, setVisibleCount] = useState(6)

  const categories = [
    { key: 'all', label: 'ВСЕ' },
    { key: 'cardio', label: 'КАРДИО' },
    { key: 'strength', label: 'СИЛОВЫЕ' },
    { key: 'functional', label: 'ФУНКЦИОНАЛЬНЫЕ' },
    { key: 'accessories', label: 'АКСЕССУАРЫ' },
  ]

  const categoryIcons = {
    cardio: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" d="M12 7v5l3 3" />
      </svg>
    ),
    strength: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" d="M8 4h2l2 16h4l2-16h2" />
        <path strokeLinecap="round" d="M3 8h4l2 4" />
        <path strokeLinecap="round" d="M17 8h4l-2 4" />
      </svg>
    ),
    functional: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" d="M12 3v18M3 12h18" />
        <circle cx="12" cy="12" r="8" />
      </svg>
    ),
    accessories: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <circle cx="12" cy="8" r="4" />
        <path strokeLinecap="round" d="M8 14c-2 1-4 2-4 5v2h16v-2c0-3-2-4-4-5" />
      </svg>
    ),
  }

  const allProducts = [
    {
      title: 'БЕГОВАЯ ДОРОЖКА TRUE 800',
      desc: 'Профессиональная беговая дорожка с мощным двигателем 4.0 л.с., системой амортизации и интуитивным управлением.',
      category: 'cardio',
      specs: '4.0 л.с. | 22 км/ч | 0-15° наклон',
      color: '#00A0E9',
    },
    {
      title: 'ЭЛЛИПТИЧЕСКИЙ ТРЕНАЖЕР TRUE E90',
      desc: 'Эллиптический тренажер с плавным ходом, 25 уровнями нагрузки и встроенными программами тренировок.',
      category: 'cardio',
      specs: '25 уровней | 20 кг маховик | Wi-Fi',
      color: '#0284c7',
    },
    {
      title: 'ВЕЛОТРЕНАЖЕР TRUE C700',
      desc: 'Коммерческий велотренажер с магнитной системой нагрузки, эргономичным сиденьем и сенсорным дисплеем.',
      category: 'cardio',
      specs: 'Магнитный | 32 программы | ЖК 10"',
      color: '#0369a1',
    },
    {
      title: 'СТЕППЕР TRUE S300',
      desc: 'Компактный степпер с независимым ходом педалей и 20 уровнями сопротивления для интенсивных кардиотренировок.',
      category: 'cardio',
      specs: 'Независимый ход | 20 ур. | Датчики пульса',
      color: '#0e7490',
    },
    {
      title: 'МНОГОФУНКЦИОНАЛЬНЫЙ ТРЕНАЖЕР TRUE X1',
      desc: 'Универсальная станция для силовых тренировок с блоками для рук, ног, спины и груди.',
      category: 'strength',
      specs: '2 блока | 80 кг вес | 5 станций',
      color: '#dc2626',
    },
    {
      title: 'СКАМЬЯ TRUE B200',
      desc: 'Регулируемая скамья для жима с 7 положениями спинки, усиленной рамой и мягким валиком.',
      category: 'strength',
      specs: '7 положений | 300 кг нагрузка | Сталь',
      color: '#b91c1c',
    },
    {
      title: 'ГАНТЕЛИ TRUE DURA 5-25 кг',
      desc: 'Набор разборных гантелей с прорезиненным покрытием и хромированными грифами.',
      category: 'accessories',
      specs: '5-25 кг | Резина | Хром',
      color: '#7c3aed',
    },
    {
      title: 'ФУНКЦИОНАЛЬНАЯ РАМА TRUE RACK',
      desc: 'Прочная функциональная рама для кроссфит-тренировок с возможностью крепления дополнительного оборудования.',
      category: 'functional',
      specs: '2.2 м высота | 500 кг нагрузка | Турник',
      color: '#059669',
    },
  ]

  const filtered =
    activeCategory === 'all'
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory)

  const displayed = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  return (
    <div className="bg-white min-h-screen font-sans">

      {/* HERO SECTION */}
      <section className="relative bg-[#00A0E9] overflow-hidden">
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 py-14 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left space-y-4">
              <p className="text-[#FCEE21] font-bold text-xs uppercase tracking-widest">
                TRUE FITNESS
              </p>
              <h1 className="text-white text-3xl md:text-5xl font-extrabold uppercase tracking-wide leading-tight">
                НАШЕ ОБОРУДОВАНИЕ
              </h1>
              <p className="text-white/90 text-sm md:text-base max-w-lg leading-relaxed">
                Профессиональные тренажеры для коммерческих и домашних фитнес-центров.
                Высокое качество, надежность и инновации.
              </p>
              <a
                href="#catalog"
                className="inline-block bg-[#FCEE21] text-[#00A0E9] font-extrabold text-xs uppercase tracking-wider px-8 py-3 hover:bg-white transition-colors"
              >
                СМОТРЕТЬ КАТАЛОГ
              </a>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-[500px] aspect-square flex items-center justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  {/* Decorative circles */}
                  <div className="absolute inset-0 rounded-full border-8 border-white/20 animate-pulse" />
                  <div className="absolute inset-4 rounded-full border-4 border-white/30" />
                  <div className="absolute inset-8 rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
                      <circle cx="12" cy="12" r="9" />
                      <path strokeLinecap="round" d="M12 7v5l3 3" />
                      <path strokeLinecap="round" d="M8 4h2l2 16h4l2-16h2" />
                      <path strokeLinecap="round" d="M3 8h4l2 4" />
                      <path strokeLinecap="round" d="M17 8h4l-2 4" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      <section id="catalog" className="max-w-[1240px] mx-auto px-4 pt-10 pb-4">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveCategory(cat.key)
                setVisibleCount(6)
              }}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-[#00A0E9] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="max-w-[1240px] mx-auto px-4 py-8">
        {displayed.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-sm uppercase tracking-wider">
              НЕТ ТОВАРОВ В ЭТОЙ КАТЕГОРИИ
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayed.map((product, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 hover:border-[#00A0E9] transition-all duration-300 flex flex-col"
              >
                {/* Icon Placeholder */}
                <div
                  className="aspect-[4/3] flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundColor: product.color + '15' }}
                >
                  <div
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: product.color + '30' }}
                  >
                    <div
                      className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: product.color }}
                    >
                      {categoryIcons[product.category] || (
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" d="M12 3v18M3 12h18" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-[#00A0E9] font-bold text-sm uppercase tracking-wide mb-2 leading-snug">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3 flex-1">
                    {product.desc}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                      {product.specs}
                    </span>
                    <button className="bg-[#00A0E9] hover:bg-[#008CCB] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2 transition-colors cursor-pointer active:scale-95">
                      ПОДРОБНЕЕ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Show More Button */}
        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="bg-white border-2 border-[#00A0E9] text-[#00A0E9] hover:bg-[#00A0E9] hover:text-white font-bold text-xs uppercase tracking-wider px-10 py-3 transition-colors duration-200 cursor-pointer"
            >
              ПОКАЗАТЬ ЕЩЁ
            </button>
          </div>
        )}
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="bg-[#00A0E9] mt-6">
        <div className="max-w-[1240px] mx-auto px-4 py-12 md:py-14 text-center">
          <h2 className="text-white text-xl md:text-3xl font-extrabold uppercase tracking-wide mb-3">
            НУЖНА КОНСУЛЬТАЦИЯ?
          </h2>
          <p className="text-white/80 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed mb-6">
            Свяжитесь с нами — мы поможем подобрать оборудование под ваш проект
            и предоставим индивидуальное коммерческое предложение.
          </p>
          <a
            href="/contract"
            className="inline-block bg-[#FCEE21] text-[#00A0E9] font-extrabold text-xs uppercase tracking-wider px-8 py-3 hover:bg-white transition-colors"
          >
            СВЯЗАТЬСЯ С НАМИ
          </a>
        </div>
      </section>

    </div>
  )
}

export default Products