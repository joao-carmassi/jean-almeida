import type getPictureImage from '@/utils/get-picture-image';

type Props = {
  src: Awaited<ReturnType<typeof getPictureImage>>;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
};

export function Picture({
  src: image,
  alt,
  className,
  loading = 'lazy',
}: Props) {
  return (
    <picture className={className}>
      {image.images.map(({ format, src }) => (
        <source key={format} srcSet={src} type={`image/${format}`} />
      ))}

      <img
        src={image.fallback.src}
        alt={alt}
        className={className}
        width={image.fallback.width}
        height={image.fallback.height}
        loading={loading}
        decoding='async'
      />
    </picture>
  );
}
