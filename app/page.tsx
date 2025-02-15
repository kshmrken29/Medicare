import Navbar from '../components/landing/navbar'
import Landing from '../components/landing/landing'
import Exclusive from '@/components/landing/exclusiveprod'
import Footer from '@/components/landing/footer'
import Topproduct from '../components/landing/topprod';
import Categories from '@/components/landing/categories'


export default function home(){
    return(
        <div>
            <Navbar />
            <Landing />
            <Topproduct />
            <Exclusive />
            <Categories />
            <Footer />
        </div>
    );   
}