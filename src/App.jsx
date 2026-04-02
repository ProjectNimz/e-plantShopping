import { Link, Navigate, Route, Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs.jsx'
import CartItem from './components/CartItem.jsx'
import ProductList from './components/ProductList.jsx'
import './App.css'

function LandingPage() {
  return (
    <main className="landing-page">
      <div className="landing-page__overlay">
        <section className="landing-page__content">
          <span className="landing-page__eyebrow">Paradise Nursery</span>
          <h1 className="landing-page__title">Small-room plants with big calm energy.</h1>
          <p className="landing-page__lead">
            Build an indoor plant shelf with fragrant herbs, easy air purifiers,
            and comforting greens chosen for apartments, desks, and sunny corners.
          </p>
          <div className="landing-page__highlights" aria-label="Shop highlights">
            <span>Beginner friendly picks</span>
            <span>Three themed collections</span>
            <span>Simple cart and checkout flow</span>
          </div>
          <Link className="button button--primary" to="/plants">
            Get Started
          </Link>
        </section>

        <section className="landing-page__about">
          <AboutUs />
        </section>
      </div>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export default App
