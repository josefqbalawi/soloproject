import './Info.css'
import profileImg from "../assets/profile.png"
import Email from "../assets/Mail.png"
import linkedIn from "../assets/linkedin.png"
import Btn from './Btn'
export default function Info() {
    return (
        <>
            <img src={profileImg} alt="" className='profileImg' />
            <div className="text">
                <h3>Laura Smith</h3>
                <h4>Frontend Developer</h4>
                <small>laurasmith.website</small>
            </div>

            <div className="flex">
                <Btn className="Email" imgSrc={Email} content="Email" />
                <Btn className="Linkedin" imgSrc={linkedIn} content="linkedin" />

            </div>
        </>
    )
}
