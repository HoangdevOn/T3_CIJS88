import Header from './Header'
import "bootstrap/dist/css/bootstrap.min.css"
import Reel from './Reel'
import Item from './Item'



const Homepage = () => {
  return (
    <>
    <Header/>
    <div className='contain'>
    <Reel/>
    </div>

    <div className='lcontain'>
    <h1 className='title'> Meat</h1>
      <div className='icontain'>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div>
    </div>

    <div className='lcontain'>
    <h1 className='title'> Meat</h1>
      <div className='icontain'>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div>
    </div>

    <div className='lcontain'>
    <h1 className='title'> Meat</h1>
      <div className='icontain'>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div>
    </div>
    </>
  )
}

export default Homepage