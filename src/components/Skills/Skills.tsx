import "./Skills.css"
import Titulo from '../Titulo/Titulo'
import react from "../../assets/img/ReactLogo.png"
import javascript from "../../assets/img/JavascriptLogo.png"
import typescript from "../../assets/img/TypescriptLogo.png"
import cs from "../../assets/img/CsLogo.png"
import node from "../../assets/img/nodeLogo.png"
import mongo from "../../assets/img/mongoLogo.png"
import mariadb from "../../assets/img/mariadbLogo.png"
import reactrouterdom from "../../assets/img/ReactRouterDomLogo.png"
import { useRef } from "react"
import { useInView } from "framer-motion"
import SlideAnimation from "../Animations/SlideAnimation/SlideAnimation"
import FadeBottomAnimation from "../Animations/FadeBottomAnimation/FadeBottomAnimation"

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <div className='container' id='skills' ref={ref}>
            <div className="container__titulo">
                <SlideAnimation isInView={isInView} duration={1}>
                    <FadeBottomAnimation isInView={isInView} duration={1} >
                        <Titulo>Skills</Titulo>
                    </FadeBottomAnimation>
                </SlideAnimation>
            </div>
            <div className='skills'>
                <div className="wrapper">
                    <div className="item item1">
                        <img src={react} alt="React" />
                        <div className='item-name'>React</div>
                    </div>
                    <div className="item item2">
                        <img src={javascript} alt="Javascript" />
                        <div className='item-name'>Javascript</div>
                    </div>
                    <div className="item item3">
                        <img src={typescript} alt="TypeScript" />
                        <div className='item-name'>TypeScript</div>
                    </div>
                    <div className="item item4">
                        <img src={cs} alt="C#" />
                        <div className='item-name'>C#</div>
                    </div>
                    <div className="item item5">
                        <img src={node} alt="Node.js" />
                        <div className='item-name'>Node.js</div>
                    </div>
                    <div className="item item6">
                        <img src={mongo} alt="MongoDB" />
                        <div className='item-name'>MongoDB</div>
                    </div>
                    <div className="item item7">
                        <img src={mariadb} alt="MariaDB" />
                        <div className='item-name'>MariaDB</div>
                    </div>
                    <div className="item item8">
                        <img src={reactrouterdom} alt="React Router DOM" />
                        <div className='item-name'>React Router</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
