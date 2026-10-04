import { useState } from "react";
import dom from "../assets/house.png"
import logo from "../assets/image5.png"

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    comment: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.city) {
      alert("Iltimos, barcha kerakli joylarni to'ldiring!");
      return;
    }

    setSent(true);
  };

  const scrollToForm = () => {
    document
      .getElementById("form")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-300">

      <div className="mx-auto w-full max-w-[920px] bg-white">

        {/* HEADER */}
        <header className="bg-[#D9D9D9]">

          <div className="flex items-center justify-between px-6 py-5 sm:px-10">

            {/* LOGO */}
            <div className="flex items-center gap-2">

              <div className="h-0 w-0 border-b-[18px] border-l-[30px] border-t-[18px] border-b-transparent border-t-transparent border-blue-500"></div>

            <img src={logo} alt="" />

            </div>

            {/* BUTTON */}
            <button
              onClick={scrollToForm}
              className="rounded bg-blue-500 px-5 py-3 text-[10px] font-bold text-white transition hover:bg-blue-600 active:scale-95"
            >
              ОСТАВИТЬ ЗАЯВКУ
            </button>

          </div>


          {/* NAV */}
          <nav className="border-t border-gray-300 bg-white">

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 px-4 py-3">

              <a
                href="#about"
                className="text-[10px] font-bold text-black hover:text-blue-500"
              >
                О КЛУБЕ
              </a>

              <a
                href="#concept"
                className="text-[10px] font-bold text-black hover:text-blue-500"
              >
                КОНЦЕПЦИЯ
              </a>

              <a
                href="#advantages"
                className="text-[10px] font-bold text-black hover:text-blue-500"
              >
                ПРЕИМУЩЕСТВА
              </a>

              <a
                href="#form"
                className="text-[10px] font-bold text-black hover:text-blue-500"
              >
                ОТКРЫТЬ КЛУБ
              </a>

              <a
                href="#contacts"
                className="text-[10px] font-bold text-black hover:text-blue-500"
              >
                КОНТАКТЫ
              </a>

            </div>

          </nav>

        </header>


        {/* BLUE SECTION */}
        <section
          id="about"
          className="bg-blue-500 px-5 py-7 text-center"
        >

          <p className="text-[10px] font-bold uppercase tracking-widest text-white">
            КЛУБ TRUE
          </p>

          <h2 className="mt-2 text-xl font-bold text-white">
            ОТКРЫТЬ КЛУБ ВМЕСТЕ С TRUE
          </h2>

        </section>


        {/* IMAGE */}
        <section
          id="concept"
          className="bg-white px-6 py-12 sm:px-12"
        >

          <img
            src={dom}
            alt="TRUE club"
            className="mx-auto w-full max-w-[650px] object-contain"
          />

        </section>


        {/* ADVANTAGES */}
    


        {/* FORM */}
        <section
          id="form"
          className="bg-gray-200 px-6 py-12 sm:px-16"
        >

        <div className="mx-auto max-w-[540px]">

            <h2 className="mb-8 text-center text-lg font-bold text-black">
              ОТПРАВИТЬ ЗАЯВКУ
            </h2>


            {sent ? (

        
              <div className="rounded bg-white p-10 text-center shadow">

                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-2xl font-bold text-white">
                  ✓
                </div>

                <h3 className="text-lg font-bold text-black">
                  ЗАЯВКА ОТПРАВЛЕНА
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Спасибо! Мы свяжемся с вами.
                </p>

                <button
                  onClick={() => setSent(false)}
                  className="mt-6 rounded bg-blue-500 px-6 py-3 text-xs font-bold text-white hover:bg-blue-600"
                >
                  ОТПРАВИТЬ ЕЩЁ
                </button>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

             
                <div>

                  <label className="mb-2 block text-xs font-bold text-black "  >
                    ВАШЕ ИМЯ
                  </label>

                  <input
                    type="text"
                    name="name"
                      placeholder=" Имя"
                    value={form.name}
                    onChange={handleChange}
                className="w-full border-0 border-b-2 border-gray-400 bg-transparent px-0 py-2 text-sm text-black outline-none focus:border-blue-500 placeholder-grey-400 font-bold" 
                  />

                </div>


             
                <div>

                  <label className="mb-2 block text-xs font-bold text-black">
                    E-MAIL
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={handleChange}
                className="w-full border-0 border-b-2 border-gray-400 bg-transparent px-0 py-2 text-sm text-black outline-none focus:border-blue-500 placeholder-grey-400 font-bold" 
               
                  />

                </div>


           
                <div>

                  <label className="mb-2 block text-xs font-bold text-black">
                    НОМЕР ТЕЛЕФОНА
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+998 (__) ___-__-__"
                    value={form.phone}
                    onChange={handleChange}
                className="w-full border-0 border-b-2 border-gray-400 bg-transparent px-0 py-2 text-sm text-black outline-none focus:border-blue-500 placeholder-grey-400 font-bold" 
              
                  />

                </div>


          
                <div>

                  <label className="mb-2 block text-xs font-bold text-black">
                    ГОРОД
                  </label>

                  <input
                    type="text"
                    name="city"
                    placeholder="Город"
                    value={form.city}
                    onChange={handleChange}
                className="w-full border-0 border-b-2 border-gray-400 bg-transparent px-0 py-2 text-sm text-black outline-none focus:border-blue-500 placeholder-grey-400 font-bold" 
                  
                  />

                </div>


            
                <div>

                  <p className="mb-3 text-xs font-bold text-black">
                    ХОТИТЕ ОТКРЫТЬ:
                  </p>

                  <label className="mb-2 flex items-center gap-2 text-sm text-black">
                    <input
                      type="checkbox"
                      className="h-4 w-4 appearance-none rounded-full border border-black bg-white checked:bg-blue-500 "

                    />
                    Фитнес студия
                  </label>

       
                  <label className="mb-2 flex items-center gap-2 text-sm text-black">
                    <input
                      type="checkbox"
                      className="h-4 w-4 appearance-none rounded-full border border-black bg-white checked:bg-blue-500 "
                      
                    />
                       Фитнес-клуб
                  </label>
                  
                  <label className="mb-2 flex items-center gap-2 text-sm text-black">
                    <input
                      type="checkbox"
                      className="h-4 w-4 appearance-none rounded-full border border-black bg-white checked:bg-blue-500 "

                    />
                       Домашний спортзал
                  </label>
                       
                  <label className="mb-2 flex items-center gap-2 text-sm text-black">
                    <input
                      type="checkbox"
                      className="h-4 w-4 appearance-none rounded-full border border-black bg-white checked:bg-blue-500 "

                    />
                  Тренажерный зал в отеле, санатории
                  </label>
                       
                  <label className="mb-2 flex items-center gap-2 text-sm text-black">
                    <input
                      type="checkbox"
                      className="h-4 w-4 appearance-none rounded-full border border-black bg-white checked:bg-blue-500 "

                    />
                   Корпоративный спортзал
                  </label>
                  

                </div>


             
                <div>

                  <p className="mb-3 text-xs font-bold text-black">
                    ПЛАНИРУЕМЫЙ СРОК ЗАПУСКА ПРОЕКТА:
                  </p>

                  <label className="mb-2 flex items-center gap-2 text-sm text-black">
                    <input
                      type="checkbox"
                      className="h-4 w-4 appearance-none rounded-full border border-black bg-white checked:bg-blue-500 "

                    />
                    Фитнес студия
                  </label>

       
                  <label className="mb-2 flex items-center gap-2 text-sm text-black">
                    <input
                      type="checkbox"
                      className="h-4 w-4 appearance-none rounded-full border border-black bg-white checked:bg-blue-500 "
                      
                    />
                       Фитнес-клуб
                  </label>
                  
                  <label className="mb-2 flex items-center gap-2 text-sm text-black">
                    <input
                      type="checkbox"
                      className="h-4 w-4 appearance-none rounded-full border border-black bg-white checked:bg-blue-500 "

                    />
                       Домашний спортзал
                  </label>
                       
                  <label className="mb-2 flex items-center gap-2 text-sm text-black">
                    <input
                      type="checkbox"
                      className="h-4 w-4 appearance-none rounded-full border border-black bg-white checked:bg-blue-500 "

                    />
                  Тренажерный зал в отеле, санатории
                  </label>
                       
                  <label className="mb-2 flex items-center gap-2 text-sm text-black">
                    <input
                      type="checkbox"
                      className="h-4 w-4 appearance-none rounded-full border border-black bg-white checked:bg-blue-500 "

                    />
                   Корпоративный спортзал
                  </label>
                
                </div>


                {/* CHECKBOX 3 */}
                <div>

                  <p className="mb-3 text-xs font-bold text-black">
                    КАКИЕ УСЛУГИ ВАС ИНТЕРЕСУЮТ:
                  </p>


                  <label className="mb-2 flex items-center gap-2 text-sm text-black">
                    <input
                      type="checkbox"
                      className="h-4 w-4 appearance-none rounded-none border border-black bg-white checked:bg-blue-500 "

                    />
                    Консультация
                  </label>

       
                  <label className="mb-2 flex items-center gap-2 text-sm text-black">
                    <input
                      type="checkbox"
                      className="h-4 w-4 appearance-none rounded-none border border-black bg-white checked:bg-blue-500 "
                      
                    />
                       Подбор оборудования
                  </label>
                  
                  <label className="mb-2 flex items-center gap-2 text-sm text-black">
                    <input
                      type="checkbox"
                      className="h-4 w-4 appearance-none rounded-none border border-black bg-white checked:bg-blue-500 "

                    />
                       Расстановка тренажеров на плане
                  </label>
                       
                  <label className="mb-2 flex items-center gap-2 text-sm text-black">
                    <input
                      type="checkbox"
                      className="h-4 w-4 appearance-none rounded-none border border-black bg-white checked:bg-blue-500 "

                    />
                  Лизинг
                  </label>
                       
              

                </div>


                {/* FILE */}
                <div>

                  <label className="mb-3 block text-xs font-bold text-black">
                    ЗАГРУЗИТЬ ПЛАН ПОМЕЩЕНИЯ
                  </label>

                  <input
                    type="file"
                    className="text-sm file:mr-4 file:rounded file:border-0 file:bg-blue-500 file:px-4 file:py-2 file:font-bold file:text-white hover:file:bg-blue-600"
                  />

                </div>


                {/* COMMENT */}
                <div>

                  <label className="mb-2 block text-xs font-bold text-black">
                    КОММЕНТАРИИ
                  </label>

                  <textarea
                    name="comment"
                    value={form.comment}
                    onChange={handleChange}
                    rows="4"
                    className="w-full resize-none border border-gray-500 bg-transparent p-3 outline-none text-black"
                  />

                </div>


                {/* SUBMIT */}
                <div className="pt-3 text-center">

                  <button
                    type="submit"
                    className="rounded bg-blue-500 px-10 py-3 text-sm font-bold text-white transition hover:bg-blue-600 active:scale-95"
                  >
                    ОТПРАВИТЬ
                  </button>

                </div>

              </form>

            )}

          </div>

        </section>


        {/* FOOTER */}
        <footer
          id="contacts"
          className="bg-blue-500 px-8 py-10 text-white"
        >

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">

            <div>

              <h3 className="mb-4 text-sm font-bold">
                КАТАЛОГ ТОВАРОВ
              </h3>

              <p className="mb-2 text-xs">Кардио тренажеры</p>
              <p className="mb-2 text-xs">Composite Strength</p>
              <p className="mb-2 text-xs">True Stretch</p>
              <p className="text-xs">Сайклинг</p>
               <p className="text-xs">Групповые тренировки</p>
                <p className="text-xs">Силовые тренажеры</p>
                 <p className="text-xs">Консоли</p>

            </div>


            <div>

              <h3 className="mb-4 text-sm font-bold">
                ИНФОРМАЦИЯ
              </h3>

              <p className="mb-2 text-xs">О О Бренде</p>
              <p className="mb-2 text-xs">Преимущества</p>
              <p className="mb-2 text-xs">Открыть клуб</p>
              <p className="text-xs">продукции</p>
                <p className="text-xs">контакты</p>


            </div>


            <div>

              <h3 className="mb-4 text-sm font-bold">
                КОНТАКТЫ
              </h3>

              <p className="mb-2 text-xs">
               Политика конфиденциальности
              </p>

              <p className="mb-2 text-xs">
                Контакты
              </p>

       

            </div>


            <div>

              <h3 className="mb-4 text-sm font-bold">
               ПОДПИСАТЬСЯ НА НОВОСТИ И АКЦИИ
              </h3>

              <div className="flex">

                <input
                  placeholder="E-MAIL"
                  className="w-full bg-white px-3 py-2 text-xs text-black outline-none"
                />

                <button
                  onClick={() =>
                    alert("Спасибо за подписку!")
                  }
                  className="bg-yellow-400 px-4 font-bold text-black hover:bg-yellow-300"
                >
                  →
                </button>

              </div>

            </div>

          </div>


          <div className="mt-8 border-t border-white/40 pt-5 text-center text-xs">
            © 2026 TRUE CLUB. 
          </div>

        </footer>

      </div>

    </div>
  );
}

export default App;
