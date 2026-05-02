import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form";
import { Toaster } from "react-hot-toast";
import { getPhotos } from "../../services/photos";

export default function App() {
  const handleSearch = (value: string) => {
    console.log(value);
    getPhotos(value);
  };

  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={handleSearch} />
          <Toaster />
        </Container>
        Home page
      </Section>
    </>
  );
}
