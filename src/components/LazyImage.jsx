import { memo } from 'react';

function LazyImage({ src, alt }) {
  return (
    <div className="news-image">
      <img 
        src={src} 
        alt={alt} 
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export default memo(LazyImage); 