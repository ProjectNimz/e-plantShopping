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
          <h1 className="landing-page__title">Plants that make home feel alive.</h1>
          <p className="landing-page__lead">
            Explore calming greenery, pet-friendly favorites, and statement
            houseplants curated to brighten every room in your home.
          </p>
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
