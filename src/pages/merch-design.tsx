import Gallery from '@/components/gallery';
import Layout from '@/app/layout';

const images =  [
    {
        src: '/img/portfolio/merch-design/rozi-charm01.png',
        alt: '',
    },
    {
        src: '/img/portfolio/merch-design/rozi-charm02.png',
        alt: '',
    },
]; 

export default function MerchDesign() {
    return (
        <Layout>
            <Gallery title="Merch Design" images={images} />
        </Layout>
    );
}
