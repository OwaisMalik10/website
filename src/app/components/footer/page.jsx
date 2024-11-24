import Image from "next/image"
import css from "./page.module.css"
import tiktok from "../images/tiktok.png"
import instagram from "../images/instagram.png"
import twiter from "../images/twitter.png"
import facebook from "../images/facebook.png"

export default function Footer(){
    return(
        <div className={css.footer}>
            <div className={css.item}>
                <div className={css.side_01}>
                    <h2>cyber</h2>
                    <p>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                </div>
                <div className={css.side_02}>
                    <h3>services</h3>
                    <a href="">Bonus program</a>
                    <a href="">Gift cards</a>
                    <a href="">Credit and payment</a>
                    <a href="">Service contracts</a>
                    <a href="">Non-cash account</a>
                    <a href="">Payment</a>
                </div>
                <div className={css.side_02}>
                    <h3>Assistance to the buyer</h3>
                    <a href="">Find an order</a>
                    <a href="">Terms of delivery</a>
                    <a href="">Exchange and return of goods</a>
                    <a href="">Guarantee</a>
                    <a href="">Frequently asked questions</a>
                    <a href="">Terms of use of the site</a>
                </div>
            </div>
            <div className={css.item2}>
                <Image src={twiter} alt="icon" />
                <Image src={facebook} alt="icon" />
                <Image src={instagram} alt="icon" />
                <Image src={tiktok} alt="icon" />
            </div>
        </div>
    )
}