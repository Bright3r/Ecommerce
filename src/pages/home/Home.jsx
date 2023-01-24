import styles from './Home.module.css'

// Components
import ProductCard from "../../components/ProductCard"

const products = [
    {
        name: "Binding of Isaac Tub",
        price: 33.49,
        img: "boi.webp",
        id: 1
    },
    {
        name: "Doodleberry Tub",
        price: 33.49,
        img: "doodle.webp",
        id: 2
    },
    {
        name: "Kamehameha Tub",
        price: 33.49,
        img: "goku.webp",
        id: 3
    },
    {
        name: "Hype Sauce Tub",
        price: 33.49,
        img: "hype-sauce.webp",
        id: 4
    },
    {
        name: "Lingonberry Tub",
        price: 33.49,
        img: "pewdiepie.webp",
        id: 5
    },
    {
        name: "Gundam Tub",
        price: 33.49,
        img: "ramune.webp",
        id: 6
    },
    {
        name: "Rick and Morty Tub",
        price: 33.49,
        img: "rick-morty.webp",
        id: 7
    },
    {
        name: "Spyro Tub",
        price: 33.49,
        img: "spyro.webp",
        id: 8
    },
]

const Home = () => {
    return (
        <div className={styles.container}>
            {products && products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
 
export default Home;