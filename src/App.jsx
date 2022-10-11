import Text from './components/Text'
import Footer from './components/Footer'
import Info from './components/Info'
import './App.css'
function App() {
    return (
        <div className='container'>
            <div className="box">
                <Info />
                <Text title="About" content="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn." />
                <Text title="Interests" content="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic." />
                <Footer />
            </div>

        </div>
    )
}
export default App