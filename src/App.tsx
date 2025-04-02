import './App.css'
import Form from './feature/Form.tsx'

function App() {
  return (
    <>
    <div className='container'>
      <div className='left'>
        <h1 className='text'>Welcome To <p className='mini-spotify'>Mini Spotify</p></h1>
      </div>
      
      <div className='right'>
        <div className='form_box'>
          <div className='logo_box'>
            <img src="src\assets\Spotify_logo.svg.png" alt="spotify_logo" className='logo' />
          </div>
        <Form />
        <p className='text'>Haven’t one? Create new account <a href='' className='textgreen' >here.</a></p>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
