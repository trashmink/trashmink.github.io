import Gallery from '@/components/gallery';
import Layout from '@/app/layout';

const images =  [
    {
        src: '/img/portfolio/illustration/rozi001.jpg',
        alt: '',
    },
    {
        src: '/img/portfolio/illustration/rozi012.png',
        alt: '',
    },
    {
        src: '/img/portfolio/illustration/rozi-kiri.jpeg',
        alt: '',
    },
    {
        src: '/img/portfolio/illustration/bubbline.png',
        alt: '',
    },
    {
        src: '/img/portfolio/illustration/popriaje08.png',
        alt: '',
    },
    {
        src: '/img/portfolio/illustration/celeste.jpg',
        alt: '',
    },
    {
        src: '/img/portfolio/illustration/krino.png',
        alt: '',
    },
    {
        src: '/img/portfolio/illustration/fuyumirko.jpg',
        alt: '',
    },
]; 

export default function Illustration() {
    return (
        <Layout>
            <Gallery title="Illustration" images={images} />
        </Layout>
    );
}
