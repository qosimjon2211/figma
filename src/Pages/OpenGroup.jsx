import { useState } from "react";
import dom from "../assets/house.png";

function OpenGroup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    comment: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.city) {
      alert("Iltimos, barcha kerakli joylarni to'ldiring!");
      return;
    }
    setSent(true);
  };

  const advantages = [
    "Фитнес-зона",
    "Кардио-зона",
    "Групповые тренировки",
    "Раздевалки",
    "Зона отдыха",
  ];

  return (
    <div className="min-h-screen bg-gray-300">
      <div className="mx-auto w-full max-w-[920px] bg-white">

        {/* BLUE SECTION */}
        <section className="bg-[#00A0E9] px-5 py-8 md:py-10 text-center">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#FCEE21]">
            КЛУБ TRUE
          </p>
          <h2 className="mt-2 text-xl sm:text-2xl font-bold text-white">
            ОТКРЫТЬ КЛУБ ВМЕСТЕ С TRUE
          </h2>
        </section>

        {/* IMAGE */}
        <section className="bg-white px-4 sm:px-8 md:px-12 py-8 md:py-12">
          <img
            src={dom}
            alt="TRUE club"
            className="mx-auto w-full max-w-[650px] object-contain"
          />
        </section>

        {/* ADVANTAGES */}
        <section className="bg-gray-100 px-4 sm:px-8 py-8 md:py-10">
          <h2 className="mb-6 text-center text-lg font-bold text-black">
            ПРЕИМУЩЕСТВА
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {advantages.map((item, i) => (
              <div
                key={i}
                className="border border-gray-300 bg-white px-4 py-2.5 text-xs sm:text-sm text-black shadow-sm whitespace-nowrap"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* FORM */}
        <section id="form" className="bg-gray-200 px-4 sm:px-8 md:px-16 py-10 md:py-12">
          <div className="mx-auto max-w-[540px]">
            <h2 className="mb-6 md:mb-8 text-center text-lg font-bold text-black">
              ОТПРАВИТЬ ЗАЯВКУ
            </h2>

            {sent ? (
              /* SUCCESS */
              <div className="rounded bg-white p-8 md:p-10 text-center shadow">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#00A0E9] text-2xl font-bold text-white">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-black">ЗАЯВКА ОТПРАВЛЕНА</h3>
                <p className="mt-2 text-sm text-gray-600">Спасибо! Мы свяжемся с вами.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 rounded bg-[#00A0E9] px-6 py-3 text-xs font-bold text-white hover:bg-[#008CCB] transition"
                >
                  ОТПРАВИТЬ ЕЩЁ
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                {/* NAME */}
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-black">ВАШЕ ИМЯ</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border-0 border-b-2 border-gray-400 bg-transparent px-0 py-2 text-sm text-black outline-none focus:border-[#00A0E9] transition"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-black">E-MAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border-0 border-b-2 border-gray-400 bg-transparent px-0 py-2 text-sm text-black outline-none focus:border-[#00A0E9] transition"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-black">НОМЕР ТЕЛЕФОНА</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+998 (__) ___-__-__"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border-0 border-b-2 border-gray-400 bg-transparent px-0 py-2 text-sm text-black outline-none placeholder:text-gray-500 focus:border-[#00A0E9] transition"
                  />
                </div>

                {/* CITY */}
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-black">ГОРОД</label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="w-full border-0 border-b-2 border-gray-400 bg-transparent px-0 py-2 text-sm text-black outline-none focus:border-[#00A0E9] transition"
                  />
                </div>

                {/* CHECKBOX 1 - ХОТИТЕ ОТКРЫТЬ */}
                <div>
                  <p className="mb-3 text-xs font-bold text-black">ХОТИТЕ ОТКРЫТЬ:</p>
                  {["Фитнес-клуб", "Студию", "Другой формат"].map((label, i) => (
                    <label key={i} className="mb-2 flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" className="h-4 w-4 accent-[#00A0E9]" />
                      {label}
                    </label>
                  ))}
                </div>

                {/* CHECKBOX 2 - ПЛАНИРУЕМЫЙ СРОК */}
                <div>
                  <p className="mb-3 text-xs font-bold text-black">ПЛАНИРУЕМЫЙ СРОК ЗАПУСКА ПРОЕКТА:</p>
                  {["В ближайшие 3 месяца", "3–6 месяцев", "6–12 месяцев", "Более года"].map((label, i) => (
                    <label key={i} className="mb-2 flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" className="h-4 w-4 accent-[#00A0E9]" />
                      {label}
                    </label>
                  ))}
                </div>

                {/* CHECKBOX 3 - УСЛУГИ */}
                <div>
                  <p className="mb-3 text-xs font-bold text-black">КАКИЕ УСЛУГИ ВАС ИНТЕРЕСУЮТ:</p>
                  {["Фитнес", "Персональные тренировки", "Групповые программы", "Другие услуги"].map((label, i) => (
                    <label key={i} className="mb-2 flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" className="h-4 w-4 accent-[#00A0E9]" />
                      {label}
                    </label>
                  ))}
                </div>

                {/* FILE */}
                <div>
                  <label className="mb-2 block text-xs font-bold text-black">ЗАГРУЗИТЬ ПЛАН ПОМЕЩЕНИЯ</label>
                  <input
                    type="file"
                    className="block w-full text-xs sm:text-sm file:mr-3 file:rounded file:border-0 file:bg-[#00A0E9] file:px-4 file:py-2 file:text-xs file:font-bold file:text-white hover:file:bg-[#008CCB] file:transition file:cursor-pointer"
                  />
                </div>

                {/* COMMENT */}
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-black">КОММЕНТАРИИ</label>
                  <textarea
                    name="comment"
                    value={form.comment}
                    onChange={handleChange}
                    rows="4"
                    className="w-full resize-none border-2 border-gray-400 bg-white p-3 text-sm text-black outline-none focus:border-[#00A0E9] transition"
                  />
                </div>

                {/* SUBMIT */}
                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="rounded bg-[#00A0E9] px-10 py-3 text-sm font-bold text-white transition hover:bg-[#008CCB] active:scale-95 w-full sm:w-auto"
                  >
                    ОТПРАВИТЬ
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}

export default OpenGroup;