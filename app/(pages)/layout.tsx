import Header from '../components/Header';
import Footer from '../components/Footer';

const pagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default pagesLayout;
