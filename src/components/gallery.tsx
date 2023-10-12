import "yet-another-react-lightbox/styles.css";
import { useState, SyntheticEvent } from 'react';
import classNames from "classnames";
import Lightbox from 'yet-another-react-lightbox';

type ImageType = {
    src: string;
    alt: string;
};

export default function Gallery({ title, images }: { title: string; images: ImageType[]; }) {
    const [imageIndex, setImageIndex] = useState(-1);

    const handleClick = (e: SyntheticEvent, index: number) => {
        e.preventDefault();
        setImageIndex(index)
    };

    return (
        <section>
            <h2 className="sr-only">{title}</h2>
            <div className={classNames("gap-0", { 'columns-3': images.length < 4, 'columns-4': images.length >= 4 })}>
                {images.map((image, index) => (
                    <a key={image.src} href={image.src} onClick={e => handleClick(e, index)}>
                        <img  // eslint-disable-line @next/next/no-img-element
                            src={image.src}
                            alt={image.alt}
                            className="grayscale-[50%] hover:grayscale-0 transition duration-150 ease-out hover:ease-in"
                        />
                    </a>
                ))}
            </div>
            <Lightbox
                index={imageIndex}
                slides={images}
                open={imageIndex >= 0}
                close={() => setImageIndex(-1)}
            />
        </section>
    )
}