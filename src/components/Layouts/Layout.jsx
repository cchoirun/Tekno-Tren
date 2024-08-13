import Navbar from "../Elements/Navbar";
import Footer from "../Elements/Footer";
const Layout = (props) => {
    const {children} = props;
    return (
        <div>
        <Navbar />
        <main className="mb-4 py-18 md:pt-15">
            {children}
        </main>
        <Footer />
        </div>
    );
    };
    
export default Layout;