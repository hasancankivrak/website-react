
import Banner from "../components/Banner";
import Desc from "../components/Desc";
import Solt from "../components/Solutions";
import SecondSolt from "../components/secondSolution";
import ThirdSolt from "../components/thirdSolution";
import FourthSolt from "../components/fourthSolution";
import FifthSolt from "../components/fifthSolution";
import Products from "../components/Products";
import Contact from "../components/Contact";
import Nav from "../components/Nav";
const Home = () => {

    return (
        <>
        <Nav/>
            <section
            title="Section 1" id="section1">
             <Banner />   
            </section>
            <section title="Section 2" id="section2">
            <Desc />
            </section>
            <Solt />
            <SecondSolt />
            <ThirdSolt />
            <FourthSolt />
            <FifthSolt />
            <Products />
            <Contact />
        </>
    )
}
export default Home;