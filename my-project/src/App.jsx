
import Header  from './header/navbar'
import './App.css'
import Component from './Main/component/Component'
import Feedback from './Main/component/Feedback'
import Footer from './Footer/footer'

function App(){

  return (
    <>
     <Header/>
     <div className='grid grid-cols-5 gap-10 ml-[20px] mr-[20px] mt-[25px]'>
      
      <Component/>
      <Component/>
      <Component/>
      <Component/>
      <Component/>
      <Component/>
      <Component/>
      <Component/>
      <Component/>
      <Component/>
      <Feedback/>
       </div>
      <Footer/>
    </>
  )
}

export default App
