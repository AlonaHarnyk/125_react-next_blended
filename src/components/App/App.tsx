import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form";
import { Toaster } from "react-hot-toast";

export default function App() {

  const handleSearch = (value: string) => {
    console.log(value);
  }

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
