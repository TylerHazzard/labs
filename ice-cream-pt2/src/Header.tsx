import './Header.css'

const user = "Iron Man"

const Header = () => {
    return (
      <header className="header">
        <h1>Ice Cream Wars</h1>
        <div className='user-name'>{user}</div>
      </header>
    );
 }
  
export default Header;