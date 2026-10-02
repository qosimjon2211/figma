import React from "react";
import Rasm from '../assets/rasm.png'

function Contact() {
  return (
    <div className="w-full min-h-screen bg-white">

      <section className="w-full bg-[#08a9d9] text-center py-4">

        <p className="text-[#d9ef24] text-sm font-bold mb-3">
          КОНТАКТЫ
        </p>

        <h1 className="text-white text-3xl font-bold">
          ШОУ РУМ TRUE В ТАШКЕНТЕ
        </h1>

        <p className="text-white text-xl font-semibold mt-3">
          ПОСЕТИТЕ НАШ ВЫСТАВОЧНЫЙ ЗАЛ В ТАШКЕНТ СИТИ, BOULEVARD
        </p>

      </section>


      <section className="relative w-full px-28 py-9 bg-white">

        <button
          className="
            absolute
            left-16
            top-1/2
            -translate-y-1/2
            w-10
            h-10
            rounded-full
            bg-[#08a9d9]
            text-[#d9ef24]
            text-4xl
            font-bold
            flex
            items-center
            justify-center
          "
        >
          ‹
        </button>


        <div className="w-[1000px] h-[500px] mx-auto">
          <img
            src={Rasm}
            alt="True Gym"
            className="w-full h-full object-cover"
          />
        </div>


        <button
          className="
            absolute
            right-16
            top-1/2
            -translate-y-1/2
            w-10
            h-10
            rounded-full
            bg-[#08a9d9]
            text-[#d9ef24]
            text-4xl
            font-bold
            flex
            items-center
            justify-center
          "
        >
          ›
        </button>


        <div className="flex justify-center items-center gap-3 mt-5">

          <div className="w-4 h-4 rounded-full bg-[#fff000]"></div>

          <div className="w-4 h-4 rounded-full bg-[#d9d9d9]"></div>

          <div className="w-4 h-4 rounded-full bg-[#d9d9d9]"></div>

          <div className="w-4 h-4 rounded-full bg-[#d9d9d9]"></div>

          <div className="w-4 h-4 rounded-full bg-[#d9d9d9]"></div>

        </div>

      </section>


      <section className="w-full grid grid-cols-2">


        <div className="w-full h-[430px]">

          <iframe
            title="True Show Room Location"
            src="https://www.google.com/maps?q=Tashkent%20City%20Boulevard%20Furqat%202A%20Tashkent%20Uzbekistan&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>


        <div className="w-full h-[430px] bg-[#d9d9d9] px-20 py-20">

          <h2 className="text-[#08a9d9] text-2xl font-bold leading-tight">
            ОФИЦИАЛЬНЫЙ ДИСТРИБЬЮТЕР
            <br />
            В УЗБЕКИСТАНЕ - PROWELLNESS
          </h2>


          <div className="mt-8 text-lg text-black">

            <p>
              +998 (90)-606-66-66
            </p>

            <p className="text-[#08a9d9] mt-2">
              info@prowellness.uz
            </p>

            <p className="mt-5">
              Адрес: Ташкент Сити, Бульвар,
              <br />
              Ул. Фурката 2А
            </p>

          </div>


          <div className="mt-8 text-[#08a9d9] text-xl font-bold leading-tight">

            <p>
              ПН-СБ С 9:00-19:00
            </p>

            <p>
              ВС НЕ РАБОЧИЙ
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;