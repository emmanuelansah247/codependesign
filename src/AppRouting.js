import LeftSideMenu from './components/leftsidemenu';
import TopWrittenText from './components/topwrittentext';
import {useEffect} from 'react'

function AppRouting() {

  useEffect(()=>{
    document.title = "Analoy Project";
  },[]);

  return (
    <div className='app-pane'>

      <div className='left-right-container'>
        <TopWrittenText/>
        <LeftSideMenu/>
      </div>


    </div>
  );
}

export default AppRouting;
