import React, { useState } from 'react';
import { Route } from 'react-router-dom';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Contexts
import ProductProvider from './contexts/ProductContext';
import CartProvider from './contexts/CartContext';

function App() {
	const [cart, setCart] = useState([]);

	return (
		<div className="App">
			<CartProvider>
				<ProductProvider>
					<Navigation cart={cart} />

					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart cart={cart} />
					</Route>
				</ProductProvider>
			</CartProvider>
		</div>
	);
}

export default App;
