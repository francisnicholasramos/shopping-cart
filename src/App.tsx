import {useState, useEffect} from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import RouteSwitch from './RouteSwitch'
import type {UnsplashType} from './api';
import type {LocalStorageType} from './localStorage';
import fireStoreService from './firestoreService'
import userCart from './localStorage';

const App = () => {
    const [product, setProduct] = useState<UnsplashType[]>([]);
    const [currentCard, setSelected] = useState<UnsplashType | null>(null);
    const [itemQuantity, setItemQuantity] = useState(1);
    const [modal, setModal] = useState(false);
    const [isAdded, setIsAdded] = useState<string | null>(null);
    const [cartItem, setCartItem] = useState<LocalStorageType[]>(() => userCart())


    console.log('product log', product)
    const {getImage, setImage} = fireStoreService();

    useEffect(() => {
        (async () => {
            const data = await getImage();
            setProduct(data as UnsplashType[]);
            // await setImage('americano')
        })();
    }, []);

    // load added carts initially
    useEffect(() => {
        const storedCarts = JSON.parse(localStorage.getItem("yourCart") || "[]");
        setCartItem(storedCarts)

        if (currentCard?.id) {
            const exists = storedCarts.some((item: LocalStorageType) => item.id === currentCard.id);
            if (exists) setIsAdded(currentCard.id);
        }
    }, [currentCard]);

    // sync added items in cart
    useEffect(() => {
        localStorage.setItem('yourCart', JSON.stringify(cartItem));
    }, [cartItem])

    const onClose = () => {
        setModal(false)
        setItemQuantity(1)
    }
    
    const addToCart = (idx: string) => {
        const checkIndex = cartItem.find(item => item.id === idx)
        if (checkIndex) {
            const updateItemQuantity = cartItem.map(item => 
                item.id === idx ? { ...item, cart: item.cart + itemQuantity } : item);

            setCartItem(updateItemQuantity)
            setIsAdded(idx)
            return;
        }

        const itemToAdd = product.find((coffee) => coffee.id === idx);

        if (itemToAdd) {
            const dynamicProperty = { // modify 'cart' property dynamically sheesh
                ...itemToAdd,
                cart: itemQuantity,
            }
            setCartItem(prev => [...prev, dynamicProperty])
            setIsAdded(idx)
        }
    }

    const handleClick = (idx: string) => {
        setModal(true)
        const findId = product.find((coffee) => coffee.id === idx) 
        if (findId) setSelected(findId)
    }

    const handleSelector = (operation: 'increment' | 'decrement') => {
        setItemQuantity(prev => {
            if (operation === 'increment') {
                return prev + 1
            } else {
                return Math.max(1, prev - 1);
            }
        })

    }

    // TODO: make inc/dec works on localStorage properties (DONE! yey)
    const handleCartItem = (itemId: string, operation: 'increment' | 'decrement') => {
        setCartItem(prev => {
            const checkIndex = prev.findIndex(item => item.id === itemId);
            if (checkIndex === -1) return prev;

            const updated = [...prev];
            const currentQuantity = updated[checkIndex].cart;

            if (operation === 'decrement' && currentQuantity === 1) {
                updated.splice(checkIndex, 1);
            } else if (operation === 'decrement') {
                updated[checkIndex] = {
                    ...updated[checkIndex],
                    cart: currentQuantity - 1
                }
            } else if (operation === 'increment') {
                updated[checkIndex] = {
                    ...updated[checkIndex],
                    cart: currentQuantity + 1
                }
            }

            localStorage.setItem('yourCart', JSON.stringify(updated));
            return updated;
        });
    };

    const handleDeleteItem = (idx: string) => {
        setCartItem(prev => {
            const checkIndex = prev.findIndex(item => item.id === idx);

            // if no idx found it will return -1 (return unchanged)
            if (checkIndex === -1) return prev; 

            const updated = [...prev];
            updated.splice(checkIndex, 1);

            if (updated.length === 0) {
                localStorage.setItem("yourCart", JSON.stringify([]));
            } else {
                localStorage.setItem("yourCart", JSON.stringify(updated));
            }

            return updated;
        });
    };


    return (
        <div className="flex flex-col"> 
            <RouteSwitch 
                Header={<Navbar cartAmount={cartItem.length} />}
                pages={[
                    {
                        element: (
                            <Home />
                        ),
                        path: "/",
                    },
                    {
                        element: (
                            <Shop 
                                cards={product}
                                onClick={handleClick}
                                onOpen={modal}
                                onClose={onClose}
                                info={currentCard}
                                quantity={itemQuantity}
                                handleSelector={handleSelector}
                                addItem={addToCart}
                                isAdded={isAdded}
                            />
                        ),
                        path: "/shop",
                    },
                    {
                        element: (
                            <Cart
                                cartInfo={cartItem}
                                deleteItem={handleDeleteItem}
                                handleSelector={handleCartItem}
                            />
                        ),
                        path: "/cart",
                    },
                ]}
            />
        </div>
    )
}

export default App;
