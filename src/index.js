import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileCard from './containers/ProfileCard';
import reportWebVitals from './reportWebVitals';
import mockData from './mockData';

ReactDOM.render(
  <div style={{overFlow: 'auto'}}>
    {mockData.map(data => 
      <ProfileCard 
        src={data.src}
        title={data.title} 
        text={data.text} 
        />
    )}
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
