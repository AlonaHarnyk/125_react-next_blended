import Grid from "../Grid/Grid";
import type { Photo } from '../../types/photo'
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";
import GridItem from "../GridItem/GridItem";

interface PhotosGalleryProps {
  photos: Photo[]
}

export default function PhotosGallery({ photos }: PhotosGalleryProps) {
  return <Grid>
    {photos.map((photo) => <GridItem key={photo.id}>
      <PhotosGalleryItem photo={photo} />
    </GridItem>)}
  </Grid>;
}
