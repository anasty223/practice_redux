import "./App.css";
import ContactsGallery from "./components/ContactsGallery/ContactsGallery";
import Container from "./components/Container/Container";
import Filter from "./components/Filter/Filter";
import Form from "./components/Form/Form";

function App() {
  return (
    <Container>
      <Form />
      <Filter />
      <ContactsGallery />
    </Container>
  );
}

export default App;
