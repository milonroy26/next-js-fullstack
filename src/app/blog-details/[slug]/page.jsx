import BlogDetailsPage from '@/components/BlogPageCmp/BlogDetailsPage';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { PrismaClient } from '@prisma/client';

const getData = async (id) => {
    const prisma = new PrismaClient();
    const blogDetails = await prisma.blog.findUnique({
        where: {
           id: id
        }
    })
    return blogDetails
}
const page = async ({ params }) => {
    let { slug } = params;
    const id = parseInt(slug);
    const blogDetails = await getData(id);
    return (
        <>
        <Header/>
        <BlogDetailsPage blogDetails={blogDetails} />
        <Footer/>    
        </>
    );
};

export default page;