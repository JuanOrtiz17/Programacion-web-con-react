import './App.css'
import heroimage from './assets/seibaa.jpg';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">ANIMANGA</div>
        <nav className="navbar">
          <a href="#">Inicio</a>
          <a href="#">Anime</a>
          <a href="#">Manga</a>
          <a href="#">Noticias</a>
          <a href="#">Comunidad</a>
        </nav>
        <button className="login-btn">Iniciar Sesión</button>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Explora el mundo del <span>anime y manga</span></h1>
          <p>Descubre nuevos títulos, mantente actualizado con las últimas noticias y únete a nuestra comunidad de amantes del anime y manga. Todo en un solo lugar.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Explorar Ahora</button>
            <button className="btn-secondary">Más Información</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroimage} alt="Saber - Fate" />
        </div>
      </section>

      <section className="featured">
        <h2>Series Destacadas</h2>
        <div className="series-grid">
          <div className="series-card">
            <img src="https://placehold.co/300x400/3b0764/FFFFFF?text=One+Piece" alt="One Piece" />
            <h3>One Piece</h3>
            <p>Aventura • Acción • Comedia</p>
            <div className="rating">⭐ 9.0/10</div>
          </div>
          <div className="series-card">
            <img src="https://placehold.co/300x400/3b0764/FFFFFF?text=Attack+Titan" alt="Attack on Titan" />
            <h3>Attack on Titan</h3>
            <p>Acción • Drama • Fantasía</p>
            <div className="rating">⭐ 9.2/10</div>
          </div>
          <div className="series-card">
            <img src="https://placehold.co/300x400/3b0764/FFFFFF?text=My+Hero+Academia" alt="My Hero Academia" />
            <h3>My Hero Academia</h3>
            <p>Acción • Escolar • Superpoderes</p>
            <div className="rating">⭐ 8.5/10</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App