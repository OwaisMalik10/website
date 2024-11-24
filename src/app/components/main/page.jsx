"use client"

import Image from "next/image"
import css from "./page.module.css"
import phone from "../images/Iphone Image.png"
import playstation from "../images/PlayStation.png"
import headphone from "../images/hero__gnfk5g59t0qe_xlarge_2x 1.png"
import airbuds from "../images/image 36.png"
import macbook from "../images/MacBook Pro 14.png"
import lessthan from "../images/less-than-symbol.png"
import greatthan from "../images/greater-than-symbol.png"
import heart from"../images/heart.png"
import iphone from "../images/Iphone 14 pro 1.png"
import camera from "../images/Iphone 14 pro 1 (1).png"
import watch from "../images/Iphone 14 pro 1 (2).png"
import headphoneg from "../images/Iphone 14 pro 1 (3).png"
import simplewatch from "../images/Iphone 14 pro 1 (4).png"
import samphone from "../images/Iphone 14 pro 1 (5).png"
import airbudss from "../images/Iphone 14 pro 1 (6).png"
import tablet from "../images/Iphone 14 pro 1 (7).png"
import group1 from "../images/Group 1.png"
import group2 from "../images/image 64.png"
import group3 from "../images/image 41.png"
import group4 from "../images/Macbook 1.png"
import discount_item1 from "../images/Iphone 14 pro 1 (8).png"
import discount_item2 from "../images/Iphone 14 pro 1 (9).png"
import discount_item3 from "../images/Iphone 14 pro 1 (10).png"
import discount_item4 from "../images/Iphone 14 pro 1 (11).png"
import Link from "next/link"
import { useEffect } from "react";

let catagory = [
    { image:"https://cdn-icons-png.flaticon.com/128/4443/4443113.png" , alt:"icon" , catagoryName:"phones"},
    { image:"https://cdn-icons-png.flaticon.com/128/7899/7899795.png" , alt:"icon" , catagoryName:"smart watches"},
    { image:"https://cdn-icons-png.flaticon.com/128/685/685655.png" , alt:"icon" , catagoryName:"cameras"},
    { image:"https://cdn-icons-png.flaticon.com/128/1624/1624088.png" , alt:"icon" , catagoryName:"headphones"},
    { image:"https://cdn-icons-png.flaticon.com/128/3474/3474360.png" , alt:"icon" , catagoryName:"computers"},
    { image:"https://cdn-icons-png.flaticon.com/128/2972/2972351.png" , alt:"icon" , catagoryName:"gaming"},
]

let products = [
    { image:iphone , productName:"Apple iPhone 14 Pro Max 128GB Deep Purple" , price:"900"},
    { image:camera , productName:"Blackmagic Pocket Cinema Camera 6k" , price:"2535"},
    { image:watch , productName:"Apple Watch Series 9 GPS 41mm Starlight Aluminium" , price:"399"},
    { image:headphoneg , productName:"AirPods Max Silver Starlight Aluminium " , price:"549"},
    { image:simplewatch , productName:"Samsung Galaxy Watch6 Classic 47mm Black" , price:"369"},
    { image:samphone, productName:"Galaxy Z Fold5 Unlocked | 256GB | Phantom Black" , price:"1799"},
    { image:airbudss , productName:"Galaxy Air Buds FE Graphite" , price:"99.99"},
    { image:tablet , productName:"Apple iPad 9 10.2' 64GB Wi-Fi Silver (MK2L3) 2021" , price:"398"},

]

let discount_item = [
    { image:discount_item1 , productName:"Apple iPhone 14 Pro 512GB Gold (MQ233)" , price:"1437"},
    { image:discount_item2 , productName:"AirPods Max Silver Starlight Aluminium  " , price:"549"},
    { image:discount_item3 , productName:"Apple Watch Series 9 GPS 41mm" , price:"399"},
    { image:discount_item4 , productName:"Apple iPhone 14 Pro 1TB Gold (MQ2V3)" , price:"1499"}
]

export default function Main(){
    useEffect(()=>{
        let btn1 = document.getElementById("btn1")
        let btn2 = document.getElementById("btn2")
        let btn3 = document.getElementById("btn3")
        let btn4 = document.getElementById("btn4")
        let box1 = document.getElementById("box1")
        let box2 = document.getElementById("box2")
        let box3 = document.getElementById("box3")
        let box4 = document.getElementById("box4")

        btn1.addEventListener("click",()=>{
            box1.style.opacity= 1
            btn1.style.opacity= 1
            btn2.style.opacity= 0.5
            btn3.style.opacity= 0.5
            btn4.style.opacity= 0.5
            box2.style.opacity= 0
            box3.style.opacity= 0
            box4.style.opacity= 0
        })
        btn2.addEventListener("click",()=>{
            box2.style.opacity= 1
            btn2.style.opacity= 1
            btn1.style.opacity= 0.5
            btn3.style.opacity= 0.5
            btn4.style.opacity= 0.5
            box1.style.opacity= 0
            box3.style.opacity= 0
            box4.style.opacity= 0
        })
        btn3.addEventListener("click",()=>{
            box3.style.opacity= 1
            btn3.style.opacity= 1
            btn1.style.opacity= 0.5
            btn2.style.opacity= 0.5
            btn4.style.opacity= 0.5
            box1.style.opacity= 0
            box2.style.opacity= 0
            box4.style.opacity= 0
        })
        btn4.addEventListener("click",()=>{
            box4.style.opacity= 1
            btn4.style.opacity= 1
            btn1.style.opacity= 0.5
            btn2.style.opacity= 0.5
            btn3.style.opacity= 0.5
            box1.style.opacity= 0
            box2.style.opacity= 0
            box3.style.opacity= 0
        })
    })
    return(
        <div>
            <div className={css.hero_section}>
                <div className={css.left_side_01}>
                    <h3>Pro.Beyond.</h3>
                    <h1> <span>iphone 14</span> pro</h1>
                    <p>Created to change everything for the better. For everyone</p>
                    <button>shop now</button>
                </div>
                <div className={css.right_side_01}>
                    <Image src={phone} alt="image"/>
                </div>
            </div>
            <div className={css.section_02}>
                <div className={css.left_side_02}>
                    <div className={css.item1}>
                        <Image src={playstation} alt="image"/>
                        <div>
                            <h3>Playstation 5</h3>
                            <p>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                        </div>
                    </div>
                    <div className={css.item2}>
                        <div className={css.box1}>
                            <Image src={headphone} alt="image"/>
                            <div>
                                <h3>Apple <br />AirPods <br /> <span>Max</span></h3>
                                <p>Computational audio. Listen, its powerful</p>
                            </div>
                        </div>
                        <div className={css.box2}>
                            <Image src={airbuds} alt="image"/>
                            <div>
                                <h3>Apple <br />Vision <span>Pro</span></h3>
                                <p>An immersive way to experience entertainment</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.right_side_02}>
                    <div className={css.sec_01}>
                        <h3>Macbook<br/><span>Air</span></h3>
                        <p>The new 15inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                        <button>shop now</button>
                    </div>
                    <div className={css.sec_02}>
                        <Image src={macbook} alt="image"/>
                    </div>
                </div>
            </div>
            <div className={css.section_03}>
                <div className={css.upside}>
                    <h3>browse by category</h3>
                    <div>
                        <Image src={lessthan} alt="icon"/>
                        <Image src={greatthan} alt="icon"/>
                    </div>
                </div>
                <div className={css.downside}>
                    {catagory.map((elem,index)=>{
                        return(
                            <div key={index}>
                                <img src={elem.image} width={0} height={0} alt={elem.alt}/>
                                <h4>{elem.catagoryName}</h4>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={css.section_04}>
                <div className={css.option_bar}>
                    <Link href=""><h5>new arrival</h5></Link>
                    <Link href=""><h5>best selling</h5></Link>
                    <Link href=""><h5>featured product</h5></Link>
                </div>
                <div className={css.container}>
                    {products.map((elem,index)=>{
                        return(
                        <div className={css.item} key={index}>
                            <div>
                                <Image src={heart} alt="icon"/>
                            </div>
                            <Image src={elem.image} alt="image"/>
                            <h3>{elem.productName}</h3>
                            <h4>${elem.price}</h4>
                            <button>buy now</button>
                        </div>
                        )
                    })}
                </div>
            </div>
            <div className={css.section_05}>
                <div className={css.container_1} id="container">
                    <div className={css.box_01} id="box1">
                        <Image src={group1} alt="image"/>
                        <h3>Popular Products</h3>
                        <p>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                        <button>shop now</button>
                    </div>
                    <div className={css.box_02} id="box2">
                        <Image src={group2} alt="image"/>
                        <h3>Ipad Pro</h3>
                        <p>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                        <button>shop now</button>
                    </div>
                    <div className={css.box_03} id="box3">
                        <Image src={group3} alt="image"/>
                        <h3>Samsung Galaxy </h3>
                        <p>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                        <button>shop now</button>
                    </div>
                    <div className={css.box_04} id="box4">
                        <Image src={group4} alt="image"/>
                        <h3>Macbook Pro</h3>
                        <p>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                        <button>shop now</button>
                    </div>
                </div>
                <div className={css.button}>
                    <button id="btn1"></button>
                    <button id="btn2"></button>
                    <button id="btn3"></button>
                    <button id="btn4"></button>
                </div>
            </div>
            <div className={css.section_06}>
                <div>
                    <h2>Discounts up to -50%</h2>    
                </div>    
                <div className={css.discount_item}>               
                    {discount_item.map((elem,index)=>{
                        return(
                                <div className={css.item} key={index}>
                                    <div>
                                    <Image src={heart} alt="icon"/>
                                    </div>
                                    <Image src={elem.image} alt="image"/>
                                    <h3>{elem.productName}</h3>
                                    <h4>${elem.price}</h4>
                                    <button>buy now</button>
                                </div>
                            )
                    })}
                </div>

            </div>
            <div className={css.section_07}>
                    <h2>Big Summer <span>Sale</span></h2>
                    <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                    <button>Shop Now</button>
            </div>
        </div>
    )
} 
