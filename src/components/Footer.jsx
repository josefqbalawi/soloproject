import './Footer.css'
import Facebook from "../assets/Facebook Icon.png"
import GitHub from "../assets/GitHub Icon.png"
import Instagram from "../assets/Instagram Icon.png"
import Twitter from "../assets/Twitter Icon.png"
export default function Footer() {
    return (
        <footer>
            <img src={Facebook} alt="" />
            <img src={GitHub} alt="" />
            <img src={Instagram} alt="" />
            <img src={Twitter} alt="" />
        </footer>
    )
}
