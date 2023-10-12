import Gallery from '@/components/gallery';
import Layout from '@/app/layout';

const images =  [
    {
        src: '/img/portfolio/vtuber/ianthe-animated-silent.gif',
        alt: '',
    },
    {
        src: '/img/portfolio/vtuber/ianthe-animated.gif',
        alt: '',
    },
]; 

export default function VTuber() {
    return (
        <Layout>
            <Gallery title="Vtuber Assets" images={images} />
        </Layout>
    );
}
