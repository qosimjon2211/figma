import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import brandBg from "../assets/291c6b0faca943b20edb5876b72170f14fe7f972.jpg";
import ctaBg from "../assets/f975eaf401adaa542a1f182428cc51b0abf9658f.jpg";
import product1 from "../assets/dc50051ebd696e66ca5c6fcc3fc6e993bb7c01f0.png";
import product2 from "../assets/a4387700b517acb1fdb00f6039392e83b35cc776.png";
import product3 from "../assets/2f190d6a287f2874a7dd688cc98635b81c2255a7.png";
import product4 from "../assets/52177a354575d62ab9e99bfa6ced39f4150c6910.png";
import product5 from "../assets/309e2fa5fb093e6d5ee909c2613761e46fc01e05.png";
import product6 from "../assets/a48b722f608d2820b8c7a7598d57c31a9b2352aa.png";

const innovations = [
  { id: "pulsade", title: "Тренажер лестница TRUE PULSAIDE", image: product1 },
  {
    id: "rampet",
    title: "Функциональный тренинг с композитной рампает",
    image: product2,
  },
  {
    id: "stretch",
    title: "Рамы для стрейтчинга TRUE STRETCH",
    image: product3,
  },
  {
    id: "traverse",
    title: "Латеральный тренажер TRUE TRAVERSE",
    image: product4,
  },
  {
    id: "alpine",
    title: "Беговая дорожка TRUE ALPINE RUNNER",
    image: product5,
  },
  {
    id: "spectrum",
    title: "Эллиптический тренажер TRUE SPECTRUM",
    image: product6,
  },
];

const EASE = "cubic-bezier(0.22, 0.61, 0.36, 1)";

const COUNTRY_DATA = [
  ["AF", "+93", "Афганистан"],
  ["AL", "+355", "Албания"],
  ["DZ", "+213", "Алжир"],
  ["AD", "+376", "Андорра"],
  ["AO", "+244", "Ангола"],
  ["AG", "+1268", "Антигуа и Барбуда"],
  ["AR", "+54", "Аргентина"],
  ["AM", "+374", "Армения"],
  ["AW", "+297", "Аруба"],
  ["AU", "+61", "Австралия"],
  ["AT", "+43", "Австрия"],
  ["AZ", "+994", "Азербайджан"],
  ["BS", "+1242", "Багамы"],
  ["BD", "+880", "Бангладеш"],
  ["BB", "+1246", "Барбадос"],
  ["BZ", "+501", "Белиз"],
  ["BE", "+32", "Бельгия"],
  ["BJ", "+229", "Бенин"],
  ["BM", "+1441", "Бермуды"],
  ["BG", "+359", "Болгария"],
  ["BO", "+591", "Боливия"],
  ["BA", "+387", "Босния и Герцеговина"],
  ["BW", "+267", "Ботсвана"],
  ["BR", "+55", "Бразилия"],
  ["BN", "+673", "Бруней"],
  ["BF", "+226", "Буркина-Фасо"],
  ["BI", "+257", " Бурунди"],
  ["BT", "+975", "Бутан"],
  ["VU", "+678", "Ванаuatu"],
  ["VA", "+379", "Ватикан"],
  ["GB", "+44", "Великобритания"],
  ["HU", "+36", "Венгрия"],
  ["VE", "+58", "Венесуэла"],
  ["VN", "+84", "Вьетнам"],
  ["GA", "+241", "Габон"],
  ["HT", "+509", "Гаити"],
  ["GM", "+220", "Гамбия"],
  ["GH", "+233", "Гана"],
  ["GT", "+502", "Гватемала"],
  ["GN", "+224", "Гвинея"],
  ["GW", "+245", "Гвинея-Бисау"],
  ["DE", "+49", "Германия"],
  ["HN", "+504", "Гондурас"],
  ["HK", "+852", "Гонконг"],
  ["GD", "+1473", "Гренада"],
  ["GR", "+30", "Греция"],
  ["GE", "+995", "Грузия"],
  ["GU", "+1671", "Гуам"],
  ["GY", "+592", "Гайана"],
  ["GI", "+350", "Гибралтар"],
  ["CD", "+243", "Демократическая Республика Конго"],
  ["DJ", "+253", "Джибути"],
  ["DK", "+45", "Дания"],
  ["DM", "+1767", "Доминика"],
  ["DO", "+1809", "Доминиканская Республика"],
  ["EG", "+20", "Египет"],
  ["IL", "+972", "Израиль"],
  ["IN", "+91", "Индия"],
  ["ID", "+62", "Индонезия"],
  ["IR", "+98", "Иран"],
  ["IQ", "+964", "Ирак"],
  ["IS", "+354", "Исландия"],
  ["ES", "+34", "Испания"],
  ["IT", "+39", "Италия"],
  ["YE", "+967", "Йемен"],
  ["CV", "+238", "Кабо-Верде"],
  ["KZ", "+7", "Казахстан"],
  ["KH", "+855", "Камбоджа"],
  ["CM", "+237", "Камерун"],
  ["CA", "+1", "Канада"],
  ["QA", "+974", "Катар"],
  ["KE", "+254", "Кения"],
  ["CY", "+357", "Кипр"],
  ["KG", "+996", "Киргизия"],
  ["CN", "+86", "Китай"],
  ["CO", "+57", "Колумбия"],
  ["KM", "+269", "Коморы"],
  ["CG", "+242", "Конго"],
  ["CR", "+506", "Коста-Рика"],
  ["CI", "+225", "Кот-д'Ивуар"],
  ["CU", "+53", "Куба"],
  ["KW", "+965", "Кувейт"],
  ["LA", "+856", "Лаос"],
  ["LV", "+371", "Латвия"],
  ["LS", "+266", "Лесotho"],
  ["LR", "+231", "Либерия"],
  ["LY", "+218", "Ливия"],
  ["LT", "+370", "Литва"],
  ["LU", "+352", "Люксембург"],
  ["MU", "+230", "Маврикий"],
  ["MG", "+261", "Мадагаскар"],
  ["MK", "+389", "Македония"],
  ["MY", "+60", "Малайзия"],
  ["ML", "+223", "Мали"],
  ["MV", "+960", "Мальдивы"],
  ["MT", "+356", "Мальта"],
  ["MA", "+212", "Марокко"],
  ["MH", "+692", "Маршалловы Острова"],
  ["MX", "+52", "Мексика"],
  ["MZ", "+258", "Мозамбик"],
  ["MD", "+373", "Молдавия"],
  ["MC", "+377", "Монако"],
  ["MN", "+976", "Монголия"],
  ["MM", "+95", "Мьянма"],
  ["NA", "+264", "Намибия"],
  ["NR", "+674", "Науру"],
  ["NP", "+977", "Непал"],
  ["NL", "+31", "Нидерланды"],
  ["NI", "+505", "Никарагуа"],
  ["NG", "+234", "Нигерия"],
  ["NZ", "+64", "Новая Зеландия"],
  ["NO", "+47", "Норвегия"],
  ["AE", "+971", "Объединённые Арабские Эмираты"],
  ["OM", "+968", "Оман"],
  ["PK", "+92", "Пакистан"],
  ["PW", "+680", "Палау"],
  ["PS", "+970", "Палестина"],
  ["PA", "+507", "Панама"],
  ["PG", "+675", "Папуа — Новая Гвинея"],
  ["PY", "+595", "Парагвай"],
  ["PE", "+51", "Перу"],
  ["PL", "+48", "Польша"],
  ["PT", "+351", "Португалия"],
  ["PR", "+1787", "Пуэрто-Рико"],
  ["RU", "+7", "Россия"],
  ["RW", "+250", "Руанда"],
  ["RO", "+40", "Румыния"],
  ["SV", "+503", "Сальвадор"],
  ["WS", "+685", "Самоа"],
  ["SM", "+378", "Сан-Марино"],
  ["SN", "+221", "Сенегал"],
  ["VC", "+1784", "Сент-Винсент и Гренадины"],
  ["KN", "+1869", "Сент-Китс и Невис"],
  ["LC", "+1758", "Сент-Люсия"],
  ["RS", "+381", "Сербия"],
  ["SC", "+248", "Сейшелы"],
  ["SY", "+963", "Сирия"],
  ["SG", "+65", "Сингапур"],
  ["SK", "+421", "Словакия"],
  ["SI", "+386", "Словения"],
  ["SB", "+677", "Соломоновы Острова"],
  ["SO", "+252", "Сомали"],
  ["SD", "+249", "Судан"],
  ["SR", "+597", "Суринам"],
  ["TJ", "+992", "Таджикистан"],
  ["TW", "+886", "Тайвань"],
  ["TH", "+66", "Таиланд"],
  ["TZ", "+255", "Танзания"],
  ["TG", "+228", "Того"],
  ["TO", "+676", "Тонга"],
  ["TT", "+1868", "Тринидад и Тобаго"],
  ["TN", "+216", "Тунис"],
  ["TM", "+993", "Туркменистан"],
  ["TR", "+90", "Турция"],
  ["UG", "+256", "Уганда"],
  ["UZ", "+998", "Узбекистан"],
  ["UA", "+380", "Украина"],
  ["UY", "+598", "Уругвай"],
  ["FJ", "+679", "Фиджи"],
  ["PH", "+63", "Филиппины"],
  ["FI", "+358", "Финляндия"],
  ["FR", "+33", "Франция"],
  ["HR", "+385", "Хорватия"],
  ["CF", "+236", "Центральноафриканская Республика"],
  ["TD", "+235", "Чад"],
  ["CZ", "+420", "Чехия"],
  ["CL", "+56", "Чили"],
  ["CH", "+41", "Швейцария"],
  ["SE", "+46", "Швеция"],
  ["LK", "+94", "Шри-Ланка"],
  ["EC", "+593", "Эквадор"],
  ["GQ", "+240", "Экваториальная Гвинея"],
  ["ER", "+291", "Эритрея"],
  ["EE", "+372", "Эстония"],
  ["ET", "+251", "Эфиопия"],
  ["ZA", "+27", "ЮАР"],
  ["KR", "+82", "Южная Корея"],
  ["SS", "+211", "Южный Судан"],
  ["JM", "+1876", "Ямайка"],
  ["JP", "+81", "Япония"],
];

const countries = COUNTRY_DATA.map(([code, dial, name]) => ({
  code,
  dial,
  name,
  flag: String.fromCodePoint(
    ...[...code].map((char) => 0x1f1e6 + char.charCodeAt(0) - 65),
  ),
}));

const countryByCode = Object.fromEntries(
  countries.map((item) => [item.code, item]),
);

const flagUrl = (code) => `https://flagcdn.com/w20/${code.toLowerCase()}.png`;

function useSectionReveal(ref) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("bf-in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("bf-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref]);
}

function useParallax(sectionRef, imageRef) {
  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image) return;
    if (window.matchMedia("(max-width: 767px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vh) return;
      const total = vh + rect.height;
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / total));
      image.style.setProperty("--bf-py", `${(progress * 20).toFixed(2)}px`);
    };

    const request = () => {
      if (frame === 0) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request, { passive: true });

    return () => {
      if (frame !== 0) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
    };
  }, [sectionRef, imageRef]);
}

function Brend() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("UZ");
  const [dialOpen, setDialOpen] = useState(false);
  const [status, setStatus] = useState(null);

  const dialRef = useRef(null);

  const heroRef = useRef(null);
  const brandSectionRef = useRef(null);
  const brandBgRef = useRef(null);
  const innovRef = useRef(null);
  const ctaRef = useRef(null);

  useSectionReveal(heroRef);
  useSectionReveal(brandSectionRef);
  useSectionReveal(innovRef);
  useSectionReveal(ctaRef);
  useParallax(brandSectionRef, brandBgRef);

  useEffect(() => {
    if (!dialOpen) return;

    const handlePointerDown = (event) => {
      if (dialRef.current && !dialRef.current.contains(event.target)) {
        setDialOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setDialOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dialOpen]);

  const activeCountry = countryByCode[countryCode];

  const handleSubmit = (event) => {
    event.preventDefault();
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (name.trim() === "" || phone.trim() === "" || email.trim() === "") {
      setStatus({ tone: "error", text: "Заполните все поля" });
      return;
    }
    if (!isEmailValid) {
      setStatus({ tone: "error", text: "Введите корректный e-mail" });
      return;
    }
    setStatus({ tone: "ok", text: "Заявка отправлена. Мы свяжемся с вами" });
  };

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .bf-head {
          background: #009fe3;
        }
        .bf-label {
          display: inline-block;
          padding: 6px 14px;
          border: 1px solid rgba(255, 210, 0, 0.65);
          border-radius: 2px;
          color: #ffd200;
          font-size: clamp(10px, 0.85vw, 12px);
          font-weight: 700;
          letter-spacing: 0.2em;
          line-height: 1.2;
          text-transform: uppercase;
        }
        .bf-title {
          margin: 16px 0 0;
          color: #ffffff;
          font-size: clamp(23px, 3.1vw, 46px);
          font-weight: 800;
          line-height: 1.06;
          letter-spacing: 0.005em;
          text-transform: uppercase;
        }
        .bf-subtitle {
          max-width: 640px;
          margin: 12px auto 0;
          color: rgba(255, 255, 255, 0.88);
          font-size: clamp(12px, 1vw, 15px);
          font-weight: 500;
          line-height: 1.55;
          letter-spacing: 0.02em;
        }

        .bf-body {
          position: relative;
          padding: 0 0 clamp(56px, 7vw, 108px);
          background-color: #0b2a38;
        }
        .bf-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .bf-bg img {
          position: absolute;
          top: -9%;
          left: 0;
          width: 100%;
          height: 118%;
          object-fit: cover;
          object-position: center center;
          display: block;
          transform: translate3d(0, var(--bf-py, 0px), 0);
        }
        .bf-card-wrap {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          margin-top: calc(-1 * clamp(34px, 4.5vw, 66px));
          padding: 0 clamp(16px, 3vw, 40px);
        }
        .bf-card {
          margin: 0 auto;
          background: #ffffff;
          padding: clamp(28px, 3.4vw, 54px);
          box-shadow: 0 18px 44px rgba(5, 30, 42, 0.26);
          transition: box-shadow 0.45s ${EASE};
        }
        .bf-card:hover {
          box-shadow: 0 24px 54px rgba(5, 30, 42, 0.32);
        }
        .bf-card p {
          margin: 0;
          color: #414c54;
          font-size: clamp(14.5px, 1.02vw, 16.5px);
          line-height: 1.72;
        }
        .bf-card p + p {
          margin-top: 18px;
        }
        .bf-card .bf-lead {
          color: #009fe3;
          font-weight: 600;
        }
        .bf-card .bf-accent {
          color: #009fe3;
          font-weight: 700;
        }

        .bf-innov {
          background: #009fe3;
          padding: clamp(48px, 6vw, 92px) 0 clamp(56px, 7vw, 104px);
        }
        .bf-innov-title {
          margin: 0;
          color: #ffffff;
          font-size: clamp(24px, 3vw, 44px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }
        .bf-innov-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          column-gap: clamp(24px, 3vw, 48px);
          row-gap: clamp(32px, 4vw, 56px);
          margin-top: clamp(32px, 4vw, 60px);
        }
        .bf-innov-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .bf-innov-figure {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #ffffff;
        }
        .bf-innov-figure img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform: scale(1);
          transition: transform 0.7s ${EASE};
        }
        .bf-innov-name {
          margin: 18px 0 0;
          color: #ffffff;
          font-size: clamp(12.5px, 0.92vw, 15px);
          font-weight: 700;
          line-height: 1.45;
          text-transform: uppercase;
        }
        .bf-innov-line {
          width: 44px;
          height: 2px;
          margin-top: 12px;
          background: #ffd200;
        }

        .bf-cta {
          position: relative;
          width: 100%;
          padding: clamp(56px, 8vw, 116px) 0;
          background-color: #06212e;
          border-top: 6px solid #009fe3;
          border-bottom: 6px solid #009fe3;
          overflow: hidden;
        }
        .bf-cta-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .bf-cta-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
        }
        .bf-cta-overlay {
          position: absolute;
          inset: 0;
          background: rgba(4, 18, 26, 0.68);
        }
        .bf-cta-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
          text-align: center;
        }
        .bf-cta-label {
          display: block;
          color: #ffd200;
          font-size: clamp(11px, 1vw, 13px);
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }
        .bf-cta-title {
          margin: 16px 0 0;
          color: #ffffff;
          font-size: clamp(24px, 3.9vw, 54px);
          font-weight: 800;
          line-height: 1.06;
          letter-spacing: 0.01em;
          text-transform: uppercase;
        }
        .bf-cta-title span {
          color: #00b1f0;
        }
        .bf-cta-subtitle {
          margin: 18px auto 0;
          max-width: 720px;
          color: #ffd200;
          font-size: clamp(11px, 1.05vw, 15px);
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .bf-cta-form {
          display: grid;
          grid-template-columns: 1fr 1.5fr 1fr 1fr;
          gap: 12px;
          margin: 32px auto 0;
          max-width: 940px;
        }
        .bf-cta-field {
          position: relative;
          display: flex;
          align-items: center;
          height: 56px;
          background: #ffffff;
          border: 1px solid transparent;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .bf-cta-field:focus-within {
          border-color: #009fe3;
          box-shadow: 0 0 0 3px rgba(0, 159, 227, 0.14);
        }
        .bf-cta-field input {
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
        .bf-cta-field input::placeholder {
          color: #16222a;
          opacity: 0.75;
        }
        .bf-cta-dial-wrap {
          position: relative;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          height: 100%;
        }
        .bf-cta-dial {
          position: relative;
          display: flex;
          align-items: center;
          gap: 7px;
          height: 100%;
          padding: 0 11px 0 14px;
          border: 0;
          border-right: 1px solid rgba(22, 34, 42, 0.16);
          background: #ffffff;
          cursor: pointer;
        }
        .bf-cta-dial-flag {
          flex: 0 0 auto;
          width: 22px;
          height: 15px;
          object-fit: cover;
          border: 1px solid rgba(22, 34, 42, 0.15);
        }
        .bf-cta-dial-code {
          color: #16222a;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }
        .bf-cta-dial-caret {
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 5px solid #16222a;
        }
        .bf-cta-list {
          position: absolute;
          bottom: calc(100% + 6px);
          left: 0;
          z-index: 20;
          width: 280px;
          max-width: 70vw;
          max-height: 250px;
          overflow-y: auto;
          padding: 4px 0;
          background: #ffffff;
          box-shadow: 0 14px 32px rgba(5, 30, 42, 0.28);
          text-align: left;
        }
        .bf-cta-option {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 8px 14px;
          background: transparent;
          border: 0;
          color: #16222a;
          font-size: 12.5px;
          cursor: pointer;
        }
        .bf-cta-option:hover,
        .bf-cta-option.is-active {
          background: #e8f6fd;
        }
        .bf-cta-option-flag {
          flex: 0 0 auto;
          width: 20px;
          height: 14px;
          object-fit: cover;
          border: 1px solid rgba(22, 34, 42, 0.15);
        }
        .bf-cta-option-code {
          flex: 0 0 auto;
          min-width: 54px;
          font-weight: 800;
        }
        .bf-cta-option-name {
          color: #4a5760;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .bf-cta-select:focus-visible {
          outline: 2px solid #009fe3;
          outline-offset: -3px;
        }
        .bf-cta-submit {
          height: 56px;
          background: #009fe3;
          border: 1px solid transparent;
          color: #ffffff;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }
        .bf-cta-submit:hover {
          background: #0088c4;
          border-color: #ffd200;
          transform: translateY(-1px);
        }
        .bf-cta-submit:active {
          transform: translateY(0);
        }
        .bf-cta-status {
          margin: 16px 0 0;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .bf-cta-status--ok {
          color: #ffd200;
        }
        .bf-cta-status--error {
          color: #ff8080;
        }
        .bf-cta-note {
          margin: 22px auto 0;
          max-width: 760px;
          color: rgba(255, 255, 255, 0.75);
          font-size: 10px;
          line-height: 1.6;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .bf-reveal {
          opacity: 0;
          transform: translate3d(0, 42px, 0);
          transition: opacity 0.78s ${EASE}, transform 0.78s ${EASE};
          transition-delay: var(--bf-d, 0ms);
        }
        .bf-in .bf-reveal {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
        .bf-reveal-card {
          opacity: 0;
          transform: translate3d(0, 40px, 0) scale(0.98);
          transition: opacity 0.82s ${EASE}, transform 0.82s ${EASE};
        }
        .bf-in .bf-reveal-card {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
        }
        .bf-reveal-item {
          opacity: 0;
          transform: translate3d(0, 25px, 0);
          transition: opacity 0.7s ${EASE}, transform 0.7s ${EASE};
          transition-delay: var(--bf-d, 0ms);
        }
        .bf-in .bf-reveal-item {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        @media (min-width: 1024px) {
          .bf-card {
            width: 62%;
          }
        }

        @media (hover: hover) and (pointer: fine) {
          .bf-innov-item:hover .bf-innov-figure img {
            transform: scale(1.03);
          }
        }

        @media (max-width: 1023px) {
          .bf-cta-form {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .bf-innov-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .bf-bg img {
            transform: none;
          }
          .bf-card-wrap {
            padding: 0 16px;
          }
        }

        @media (max-width: 639px) {
          .bf-cta-form {
            grid-template-columns: minmax(0, 1fr);
          }
          .bf-innov-grid {
            grid-template-columns: minmax(0, 1fr);
          }
          .bf-innov-figure {
            max-width: 420px;
          }
        }

        @media (max-width: 640px) {
          .bf-title br {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
          .bf-reveal,
          .bf-reveal-card,
          .bf-reveal-item {
            opacity: 1 !important;
            transform: none !important;
            transition-duration: 0.01ms !important;
          }
          .bf-bg img,
          .bf-innov-figure img,
          .bf-cta-submit {
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>


      <section
        ref={brandSectionRef}
        id="brend"
        className="relative w-full overflow-hidden"
      >
        <header ref={heroRef} className="bf-head w-full">
          <div className="mx-auto w-full max-w-[1240px] px-5 py-9 text-center md:py-12">
            <span className="bf-label bf-reveal">Нашем бренде</span>
            <h1 className="bf-title bf-reveal" style={{ "--bf-d": "90ms" }}>
              True — совершенное
              <br className="hidden sm:block" /> фитнес-оборудование
            </h1>
            <p className="bf-subtitle bf-reveal" style={{ "--bf-d": "190ms" }}>
              Инженерное совершенство и надёжность в каждой детали
            </p>
          </div>
        </header>

        <div className="bf-body">
          <div className="bf-bg" aria-hidden="true">
            <img
              ref={brandBgRef}
              src={brandBg}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="bf-card-wrap">
            <article className="bf-card bf-reveal-card">
              <p className="bf-lead bf-reveal" style={{ "--bf-d": "130ms" }}>
                TRUE — это бренд профессионального фитнес-оборудования,
                созданный для тех, кто ценит безупречную инженерию и настоящую
                надёжность.
              </p>
              <p className="bf-reveal" style={{ "--bf-d": "220ms" }}>
                Мы объединяем многолетний опыт, собственные разработки и
                сотрудничество с ведущими производителями спортивного
                оборудования. Каждая единица техники проходит строгий контроль
                качества на всех этапах — от выбора материалов до финального
                тестирования перед отгрузкой. Мы работаем с тренажёрами для
                фитнес-клубов, спортивных залов и домашних тренировок, предлагая
                широкий ассортимент силового и кардио-оборудования в едином
                профессиональном стиле.
              </p>
              <p className="bf-accent bf-reveal" style={{ "--bf-d": "310ms" }}>
                TRUE гарантирует безупречное качество, долговечность и полное
                соответствие мировым стандартам фитнес-индустрии.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section ref={innovRef} id="innovations" className="bf-innov w-full">
        <div className="mx-auto w-full max-w-[1200px] px-5">
          <h2 className="bf-innov-title bf-reveal text-center">
            Наши инновации
          </h2>

          <div className="bf-innov-grid">
            {innovations.map((item, index) => (
              <article
                className="bf-innov-item bf-reveal-item"
                key={item.id}
                style={{ "--bf-d": `${90 + (index % 3) * 90}ms` }}
              >
                <figure className="bf-innov-figure">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <h3 className="bf-innov-name">{item.title}</h3>
                <span className="bf-innov-line" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section ref={ctaRef} id="request" className="bf-cta">
        <div className="bf-cta-bg" aria-hidden="true">
          <img src={ctaBg} alt="" loading="lazy" decoding="async" />
        </div>
        <div className="bf-cta-overlay" aria-hidden="true" />

        <div className="bf-cta-inner">
          <span className="bf-cta-label bf-reveal">TRUE FITNESS</span>

          <h2 className="bf-cta-title bf-reveal" style={{ "--bf-d": "80ms" }}>
            Получите
            <br />
            <span>Эксклюзивное</span>
            <br />
            <span>предложение на</span>
            <br />
            тренажеры TRUE FITNESS
          </h2>

          <p
            className="bf-cta-subtitle bf-reveal"
            style={{ "--bf-d": "180ms" }}
          >
            Мы будем рады проконсультировать вас и помочь с подбором
            оборудования
          </p>

          <form
            className="bf-cta-form bf-reveal"
            style={{ "--bf-d": "270ms" }}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="bf-cta-field">
              <input
                type="text"
                name="name"
                placeholder="ИМЯ"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-label="Имя"
              />
            </div>

            <div className="bf-cta-field">
              <div className="bf-cta-dial-wrap" ref={dialRef}>
                <button
                  type="button"
                  className="bf-cta-dial"
                  onClick={() => setDialOpen((prev) => !prev)}
                  aria-haspopup="listbox"
                  aria-expanded={dialOpen}
                  aria-label={`Страна: ${activeCountry.name}`}
                  title={activeCountry.name}
                >
                  <img
                    className="bf-cta-dial-flag"
                    src={flagUrl(activeCountry.code)}
                    alt=""
                    width={22}
                    height={15}
                    aria-hidden="true"
                    decoding="async"
                  />
                  <span className="bf-cta-dial-code" aria-hidden="true">
                    {activeCountry.dial}
                  </span>
                  <span className="bf-cta-dial-caret" aria-hidden="true" />
                </button>

                {dialOpen && (
                  <ul className="bf-cta-list" role="listbox" aria-label="Выберите страну">
                    {countries.map((item) => (
                      <li key={item.code} role="none">
                        <button
                          type="button"
                          role="option"
                          aria-selected={item.code === countryCode}
                          className={`bf-cta-option ${
                            item.code === countryCode ? 'is-active' : ''
                          }`}
                          onClick={() => {
                            setCountryCode(item.code);
                            setDialOpen(false);
                          }}
                        >
                          <img
                            className="bf-cta-option-flag"
                            src={flagUrl(item.code)}
                            alt=""
                            width={20}
                            height={14}
                            aria-hidden="true"
                            decoding="async"
                          />
                          <span className="bf-cta-option-code">{item.dial}</span>
                          <span className="bf-cta-option-name">{item.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <input
                type="tel"
                name="phone"
                placeholder={`${activeCountry.dial} (99)-999-99-99`}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                aria-label="Телефон"
              />
            </div>

            <div className="bf-cta-field">
              <input
                type="email"
                name="email"
                placeholder="E-MAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="E-mail"
              />
            </div>

            <button type="submit" className="bf-cta-submit">
              Отправить
            </button>
          </form>

          {status !== null && (
            <p
              className={`bf-cta-status bf-cta-status--${status.tone}`}
              role="status"
            >
              {status.text}
            </p>
          )}

          <p className="bf-cta-note bf-reveal" style={{ "--bf-d": "360ms" }}>
            «Нажимая на кнопку, вы даете согласие на обработку персональных
            данных и соглашаетесь с политикой конфиденциальности»
          </p>
        </div>
      </section>

    </>
  );
}

export default Brend;