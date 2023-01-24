import styles from './styles/ProductCard.module.css'

const ProductCard = ({ product }) => {
    return (
        <div className={styles.container}>
            
            <div className={styles['header-container']}>
                <h2 className={styles.header}>{product.name}</h2>
            </div>
            
            <img className={styles.img} src={require=(`assets/${product.img}`)} alt={product.name} />
            
            <div className={styles['price-container']}>
                <h2 className={styles.price}>${product.price}</h2>
            </div> 

            <button className='btn'>Add to Cart</button>

            <div className={styles.quantity}>
                <label>Qty:</label>
                <input type="text" placeholder='1' />
            </div>

        </div>
    );
}
 
export default ProductCard;