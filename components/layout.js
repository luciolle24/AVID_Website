import { Fragment } from 'react';
import Footer from './footer/footer';
import Navigation from './header/navigation/Navigation';

function Layout(props) {
  return (
    <Fragment>
      <header>
        <Navigation />
      </header>
      <main style={{ overflow: 'hidden' }}>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
