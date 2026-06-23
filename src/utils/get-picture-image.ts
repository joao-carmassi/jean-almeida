import { getImage } from 'astro:assets';

export type Format = 'avif' | 'webp' | 'png' | 'jpg' | 'jpeg';

type GetPictureImageProps = {
  src: ImageMetadata;
  width?: number;
  height?: number;
  formats?: [Format, ...Format[]];
};

export type PictureImage = {
  format: Format;
  src: string;
};

export type OptimizedPicture = {
  images: PictureImage[];
  fallback: {
    src: string;
    width: number;
    height: number;
  };
};

async function getPictureImage({
  src,
  width,
  height,
  formats = ['avif', 'webp'],
}: GetPictureImageProps): Promise<OptimizedPicture> {
  const images = await Promise.all(
    formats.map(async (format) => {
      const image = await getImage({
        src,
        width,
        height,
        format,
      });

      return {
        format,
        src: image.src,
        width: image.attributes.width,
        height: image.attributes.height,
      };
    }),
  );

  const fallback = images.at(-1)!;

  return {
    images: images.map(({ format, src }) => ({
      format,
      src,
    })),
    fallback: {
      src: fallback.src,
      width: fallback.width,
      height: fallback.height,
    },
  };
}

export default getPictureImage;
