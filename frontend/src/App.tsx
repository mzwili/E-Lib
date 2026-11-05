import { useEffect, useState } from 'react';
import { ArrowRight, BookOpen, Search, ShoppingBag, Menu, Heart } from 'lucide-react';
import { getApiHealth } from './services/api';

const featuredBooks = [
  { title: 'The Creative Act', author: 'Rick Rubin', price: 'R 520.00', category: 'Creativity', cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600' },
  { title: 'Atomic Habits', author: 'James Clear', price: 'R 390.00', category: 'Personal Growth', cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600' },
  { title: 'The Midnight Library', author: 'Matt Haig', price: 'R 310.00', category: 'Fiction', cover: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=600' },
  { title: 'Deep Work', author: 'Cal Newport', price: 'R 420.00', category: 'Productivity', cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600' },
];

export default function App() {
  const [apiStatus, setApiStatus] = useState('Checking API…');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    getApiHealth()
      .then((health) => setApiStatus(`${health.application}: ${health.status}`))
      .catch(() => setApiStatus('API unavailable — start the backend'));
  }, []);

  return (
    <div className="site-shell">
      <div className="announcement">A good book is always a good idea · Free delivery on qualifying orders</div>
      <header className="header">
        <a className="brand" href="#"><span className="brand-mark"><BookOpen size={21} /></span> chapter<span>&co.</span></a>
        <button className="icon-button mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}><Menu /></button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#home">Home</a><a href="#featured">Books</a><a href="#categories">Categories</a><a href="#about">Our story</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button" aria-label="Search"><Search /></button>
          <button className="icon-button" aria-label="Wishlist"><Heart /></button>
          <button className="icon-button bag-button" aria-label="Shopping bag"><ShoppingBag /><span>0</span></button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
            <h1>Stories worth<br /><em>staying up for.</em></h1>
            <p className="hero-description">Thoughtfully selected books for curious minds, quiet afternoons and big ideas.</p>
            <a className="primary-button" href="#featured">Explore the collection <ArrowRight size={17} /></a>
            <div className="hero-note"><span className="note-line" /> Carefully chosen. Happily read.</div>
          </div>
          <div className="hero-art">
            <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
            <div className="hero-book book-back"><div className="book-spine" /><span>THE ART<br />OF SLOW<br />LIVING</span></div>
            <div className="hero-book book-front"><div className="book-spine" /><span className="book-kicker">A FIELD GUIDE</span><strong>THE<br />QUIET<br />MIND</strong><small>MAKE ROOM FOR WONDER</small></div>
            <div className="floating-sticker">READ<br />MORE<br />WORRY<br />LESS</div>
          </div>
        </section>

        <section className="benefits" id="categories">
          <div><span>01</span><p><strong>Curated with care</strong><small>Books we believe in</small></p></div>
          <div><span>02</span><p><strong>For every kind of reader</strong><small>Find your next favourite</small></p></div>
          <div><span>03</span><p><strong>Delivered to your door</strong><small>A little joy, right on time</small></p></div>
        </section>

        <section className="featured-section" id="featured">
          <div className="section-heading"><div><p className="eyebrow">A FEW GOOD READS</p><h2>Reader favourites<span>.</span></h2></div><a href="#featured" className="text-link">View all books <ArrowRight size={16} /></a></div>
          <div className="book-grid">
            {featuredBooks.map((book) => (
              <article className="book-card" key={book.title}>
                <div className="cover-wrap"><img src={book.cover} alt={`Decorative cover image for ${book.title}`} /><button className="save-button" aria-label={`Save ${book.title}`}><Heart size={17} /></button></div>
                <p className="book-category">{book.category}</p><h3>{book.title}</h3><p className="book-author">{book.author}</p><strong className="book-price">{book.price}</strong>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer id="about"><a className="brand" href="#"><span className="brand-mark"><BookOpen size={19} /></span> chapter<span>&co.</span></a><p>Make a little room for a good story.</p><small>© 2026 Chapter & Co. · Bookstore foundation</small><small className="api-status">{apiStatus}</small></footer>
    </div>
  );
}
