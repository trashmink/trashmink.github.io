import Gallery from '@/components/gallery';
import Layout from '@/app/layout';

const images =  [
    {
        src: '/img/portfolio/char-design/rozi-ref.png',
        alt: '',
    },
    {
        src: '/img/portfolio/char-design/ianthe-ref.png',
        alt: '',
    },
]; 

export default function CharDesign() {
    return (
        <Layout>
            <Gallery title="Character Design" images={images} />
        </Layout>
    );
}
