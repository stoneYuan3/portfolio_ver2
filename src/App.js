import logo from './logo.svg';
import './App.css';

import { NavMain } from './components/navComponents';
// import { Gallery, AboutMe, Resume } from './pages/gallery';

export function App({content}) {
  return (

    <div className="flex section-body">
      <NavMain />
      <section className="flex flex-column section-main">
        {content}
      </section>
    </div>

  );
}

