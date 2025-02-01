import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import images from '@/layout/Gallery/Images.ts';

const PhotoGallery = () => {
  return (
    <Gallery>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', // 최소 80px, 최대 가변
          gap: '5px', // 이미지 간격
          width: '100%', // 전체 너비 사용
        }}>
        {images.slice().reverse().map((image, index) => {
          return (
            <Item
              key={index}
              cropped
              original={image.source}
              thumbnail={image.source}
              width={image.width}
              height={image.height}>
              {({ ref, open }) => (
                <img
                  style={{
                    cursor: 'pointer',
                    objectFit: 'contain',
                    width: '100%', // 셀 크기에 맞게 조정
                    height: 'auto', // 비율 유지
                    aspectRatio: '3 / 4', // 고정된 비율 유지
                  }}
                  alt={image.alt}
                  src={image.source}
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open}
                />
              )}
            </Item>
          );
        })}
      </div>
    </Gallery>
  );
};

export default PhotoGallery;
