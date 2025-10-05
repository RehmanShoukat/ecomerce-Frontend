import CartContext from './CartContext'

const AppProvider = ({ children }) => {
    return (
        
            <CartContext>
                {children}
            </CartContext>
        
    )
}

export default AppProvider