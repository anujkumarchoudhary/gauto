import React from 'react';
import Image from 'next/image';

const imageMap = {
  logo: "/assets/images/logo.png",
  map: "/assets/images/map.png",
  clock: "/assets/images/clock.png",
  service_1: "/assets/images/service_1.png",
  service_2: "/assets/images/service_2.png",
  service_3: "/assets/images/service_3.png",
};

const ImageRenderer = ({ name, alt = "", width = 24, height = 24, className = "" }) => {
  const src = imageMap[name];
  if (!src) return null;

  return <Image src={src} alt={alt || name} width={width} height={height} className={className} />;
};

export default ImageRenderer;
