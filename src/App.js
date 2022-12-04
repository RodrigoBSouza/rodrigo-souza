import ContainerFooter from "./components/ContainerFooter";
import Header from "./components/Header";
import PhotoProfile from "./components/PhotoProfile";
import SectionAbout from "./components/SectionAbout";
import SectionProjects from "./components/SectionProjects";
import SectionContact from "./components/SectionContact";

function App() {
  return (
    <>
      <Header/>
      <PhotoProfile/>
      <SectionAbout/>
      <SectionProjects/>
      <SectionContact/>
      <ContainerFooter/>
    </>

  );
}

export default App;
