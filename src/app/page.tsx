import Navbar from '../app/components/Navbar';
import Main from '../app/components/Main';
import Steps from '../app/components/Steps';
import Projects from '../app/components/Projects';
import Estate from '../app/components/Estate';
import Newsletter from '../app/components/Newsletter';

export default function Home() {
  return (
    <>
      <Navbar/>
      <Main/>
      <Steps/>
      <Projects/>
      <Estate/>
      <Newsletter/>
    </>
  );
}
