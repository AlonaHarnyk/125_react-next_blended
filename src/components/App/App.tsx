import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form";
import Text from "../Text/Text";
import { Toaster } from "react-hot-toast";
import { getPhotos } from "../../services/photos";
import { useState } from "react";
import type { Photo } from "../../types/photo";
import Loader from "../Loader/Loader";

export default function App() {
  
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSearch = async (value: string) => {
    try { 
      setIsError(false);
      setIsLoading(true);
      const res = await getPhotos(value);
      setPhotos(res);
    }
    catch {
      setIsError(true);
    }
    finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={handleSearch} />
          <Toaster />
          {isError && <Text>Something went wrong</Text>}
          {isLoading && <Loader/>}
        </Container>
        Home page
      </Section>
      
    </>
  );
}
