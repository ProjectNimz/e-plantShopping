import { useDispatch, useSelector } from 'react-redux'
import Header from './Header.jsx'
import { plantSections } from '../data/plants.js'
import { addToCart } from '../redux/CartSlice.jsx'

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const totalPlants = plantSections.reduce(
    (count, section) => count + section.plants.length,
    0,
  )

  return (
    <div className="page-shell">
      <Header />

      <main className="catalog-page">
        <section className="catalog-page__hero">
          <div>
            <p className="site-header__kicker">Product Listing</p>
            <h2>Browse our houseplant collection.</h2>
            <p>
              Choose from aromatic herbs, medicinal favorites, and air purifying
              plants arranged for small homes, calm corners, and everyday plant care.
            </p>
          </div>

          <div className="catalog-page__badge">
            {totalPlants} plants across {plantSections.length} sections
          </div>
        </section>

        {plantSections.map((section) => (
          <section className="catalog-section" key={section.title}>
            <h3 className="catalog-section__title">{section.title}</h3>
            <p className="catalog-section__description">{section.description}</p>

            <div className="catalog-grid">
              {section.plants.map((plant) => {
                const isAdded = Boolean(cartItems[plant.id])

                return (
                  <article className="product-card" key={plant.id}>
                    <img
                      className="product-card__image"
                      src={plant.image}
                      alt={plant.name}
                    />

                    <div className="product-card__title-row">
                      <div>
                        <h4 className="product-card__title">{plant.name}</h4>
                        <p className="product-card__category">{plant.category}</p>
                      </div>
                      <span className="product-card__price">
                        ${plant.price.toFixed(2)}
                      </span>
                    </div>

                    <p className="product-card__description">{plant.description}</p>
                    <p className="product-card__note">{plant.note}</p>

                    <button
                      className="product-card__button"
                      disabled={isAdded}
                      onClick={() => dispatch(addToCart(plant))}
                      type="button"
                    >
                      {isAdded ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </article>
                )
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}

export default ProductList
