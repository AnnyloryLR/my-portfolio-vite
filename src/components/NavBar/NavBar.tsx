import './index.css';

const NavBar = () => {
  return (
    <nav id="navbar">
      <div id="profile">
        <img id="cvPicture" src="./assets/cv_image.png" alt="cvPicture" />
        <h1 id="myName">Annylory Rosa</h1>

      </div>
      
      <div className="menu">
        <a href="#about" className="hover:text-blue-500 transition-colors">About me</a>
        <a href="#skills" className="hover:text-blue-500 transition-colors">What I do</a>
        <a href="#resume" className="hover:text-blue-500 transition-colors">Resume</a>
        <a href="#portfolio" className="hover:text-blue-500 transition-colors">Portfolio</a>
        <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;