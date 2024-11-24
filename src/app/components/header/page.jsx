import Link from "next/link"
import css from "./page.module.css"
import heart from "../images/heart.png"
import search from "../images/search-interface-symbol.png"
import account from "../images/user.png"
import buy_cart from "../images/cart.png";
import Image from "next/image"



export default function Header(){
    return(
        <div className={css.head}>
            <div className={css.header}>
                <h2>cyber</h2>
                <div className={css.search_bar}>
                    <Image src={search} alt="image"/>
                    <input type="text"  placeholder="Search"/>
                </div>
                <div className={css.nav_bar}>
                    <Link href=""><h5>home</h5></Link>
                    <Link href=""><h5>about</h5></Link>
                    <Link href=""><h5>contact us</h5></Link>
                    <Link href=""><h5>blog</h5></Link>
                </div>
                <div className={css.option}>
                    <Image src={heart} alt="image"/>
                    <Image src={buy_cart} alt="image"/>
                    <Image src={account} alt="image"/>
                </div>
            </div>
        </div>
    )
}