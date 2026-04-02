import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header.jsx'
import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from '../redux/CartSlice.jsx'

function CartItem() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const totalItems = useSelector(selectCartCount)
  const totalCost = useSelector(selectCartTotal)
  const [checkoutMessage, setCheckoutMessage] = useState('')

  return (
    <div className="page-shell">
      <Header />

      <main className="cart-page">
        <section className="cart-page__hero">
          <div>
            <p className="site-header__kicker">Shopping Cart</p>
            <h2>Review your plants before checkout.</h2>
            <p>
              Adjust quantities, remove items, and check your final total before
              placing your order.
            </p>
          </div>
        </section>

        <div className="cart-layout">
          <section className="cart-list">
            {cartItems.length === 0 ? (
              <section className="cart-empty">
                <h3>Your shopping cart is empty.</h3>
                <p>Add a few plants to get started.</p>
              </section>
            ) : (
              cartItems.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img className="cart-item__image" src={item.image} alt={item.name} />

                  <div className="cart-item__details">
                    <div className="cart-item__title-row">
                      <div>
                        <h3 className="cart-item__name">{item.name}</h3>
                        <p className="cart-item__label">{item.category}</p>
                      </div>
                    </div>

                    <div className="cart-item__stats">
                      <div className="cart-item__stat">
                        <span className="cart-item__label">Unit price</span>
                        <strong>${item.price.toFixed(2)}</strong>
                      </div>
                      <div className="cart-item__stat">
                        <span className="cart-item__label">Quantity</span>
                        <strong>{item.quantity}</strong>
                      </div>
                      <div className="cart-item__stat">
                        <span className="cart-item__label">Total cost</span>
                        <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                      </div>
                    </div>

                    <div className="cart-item__controls">
                      <div className="cart-item__quantity">
                        <button
                          aria-label={`Decrease quantity of ${item.name}`}
                          className="cart-item__quantity-button"
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          type="button"
                        >
                          Decrease
                        </button>
                        <span className="cart-item__quantity-value">{item.quantity}</span>
                        <button
                          aria-label={`Increase quantity of ${item.name}`}
                          className="cart-item__quantity-button"
                          onClick={() => dispatch(increaseQuantity(item.id))}
                          type="button"
                        >
                          Increase
                        </button>
                      </div>

                      <button
                        className="cart-item__delete"
                        onClick={() => dispatch(deleteItem(item.id))}
                        type="button"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </article>
              ))
            )}
          </section>

          <aside className="cart-summary">
            <h3>Cart Summary</h3>
            <div className="cart-summary__row">
              <span>Total number of plants</span>
              <strong>{totalItems}</strong>
            </div>
            <div className="cart-summary__row">
              <span>Plant types</span>
              <strong>{cartItems.length}</strong>
            </div>
            <div className="cart-summary__row cart-summary__row--total">
              <span>Total cost</span>
              <strong>${totalCost.toFixed(2)}</strong>
            </div>

            <div className="cart-summary__actions">
              <Link className="button button--secondary" to="/plants">
                Continue Shopping
              </Link>
              <button
                className="button button--checkout"
                onClick={() => setCheckoutMessage('Coming Soon')}
                type="button"
              >
                Checkout
              </button>
              {checkoutMessage ? (
                <p className="checkout-note">{checkoutMessage}</p>
              ) : null}
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

export default CartItem
