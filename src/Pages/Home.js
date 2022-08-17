
import Banner from "../components/Banner";
import Desc from "../components/Desc";
import Solt from "../components/Solutions";
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
            <Products />
            <Contact />
        </>
    )
}
export default Home;