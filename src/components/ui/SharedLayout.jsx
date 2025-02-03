import Header from '@components/Header/Header.jsx';
import Container from '@components/ui/Container/Container';
import Section from '@components/ui/Section/Section.jsx';
import Loader from '@components/ui/Loader/Loader.jsx';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Section>
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default SharedLayout;
