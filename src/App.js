import logo from './logo.svg';
import './App.css';

import { NavMain } from './components/navComponents';
// import { Gallery, AboutMe, Resume } from './pages/gallery';

export function Nav(props){
  return(
    <div className="flex section-body">
      <NavMain homelink={props.homelink}/>
    </div>
  )
}
 
export function App(props) {
  return (
      <section className="flex flex-column section-main">
        {props.content}
        <footer>
          <p>Shucong Yuan @2023 | Portfolio build with React.js</p>
        </footer>
      </section>
  );
};
