import { Link } from 'react-router-dom'

const css = `
.nf { font-family: Montserrat, Arial, sans-serif; color: #1d1d1b; }
.nf-band { background: #00aeef; text-align: center; padding: 28px 16px 36px; }
.nf-label { display: block; color: #f2eb00; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 14px; }
.nf-title { margin: 0; color: #fff; font-size: 30px; font-weight: 800; text-transform: uppercase; }
.nf-body { background: #d9d9d9; min-height: 60vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 56px 16px; }
.nf-code { margin: 0; font-size: 200px; font-weight: 900; line-height: 1; color: #00aeef; }
.nf-text { max-width: 460px; margin: 12px 0 28px; font-size: 15px; line-height: 1.6; }
.nf-btn { padding: 12px 28px; font-size: 12px; font-weight: 700; text-transform: uppercase; text-decoration: none; background: #00aeef; color: #fff; border: 2px solid #00aeef; }
.nf-btn:hover { background: #0092cc; border-color: #0092cc; }
@media (max-width: 600px) { .nf-code { font-size: 120px; } .nf-title { font-size: 22px; } }
`

function NotFound() {
  return (
    <main className="nf">
      <style>{css}</style>

      <section className="nf-band">
        <span className="nf-label">Ошибка 404</span>
        <h1 className="nf-title">Страница не найдена</h1>
      </section>

      <section className="nf-body">
        <p className="nf-code">404</p>
        <p className="nf-text">
          Такой страницы нет или она была перемещена. Вернитесь на главную.
        </p>
        <Link to="/" className="nf-btn">На главную</Link>
      </section>
    </main>
  )
}

export default NotFound