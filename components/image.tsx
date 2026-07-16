'use client';

import NextImage, { type ImageProps } from 'next/image';

export function Image({ alt, ...props }: ImageProps) {
  return (
    <NextImage
      {...props}
      alt={alt}
      sizes={props.sizes ?? '(max-width: 768px) 100vw, 50vw'}
    />
  );
}
