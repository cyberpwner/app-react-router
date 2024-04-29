import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function RootLayout() {
  return (
    <div className="h-screen">
      <Header />

      <main className="grid grid-cols-1 place-items-center my-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default RootLayout;
