import { useEffect, useState } from "preact/hooks";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      class={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-colors duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div class="max-w-4xl xl:max-w-5xl mx-auto flex items-center justify-between">
        <a href="/" class="flex items-center">
          <img
            class={`w-32 h-auto transition-transform duration-300 ${
              isScrolled ? "scale-90" : "scale-100"
            }`}
            src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Horizontal_Logo.png"
            alt="Logo"
          />
        </a>

        <nav class="hidden md:flex space-x-8">
          <a href="/" class="nav-link">Hogar</a>
          <a href="/about" class="nav-link">Acerca</a>
          <a href="/services" class="nav-link">Servicios</a>
          <a href="/contact" class="nav-link">Contactar</a>
          <a href="/question" class="nav-link">FAQ</a>
          <a href="/projects" class="nav-link">Proyectos</a>
        </nav>

        <button
          id="menu-toggle"
          class="md:hidden flex items-center focus:outline-none"
          onClick={toggleMenu}
        >
          <i class="fa-solid fa-bars text-3xl text-gray-700"></i>
        </button>

        {isMenuOpen && (
          <div
            id="mobile-menu"
            class={`fixed inset-0 bg-white shadow-lg py-4 px-6 flex flex-col items-center space-y-4 transition-transform duration-300 transform ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <a href="/" class="nav-link" onClick={() => setIsMenuOpen(false)}>Hogar</a>
            <a href="/about" class="nav-link" onClick={() => setIsMenuOpen(false)}>Acerca</a>
            <a href="/services" class="nav-link" onClick={() => setIsMenuOpen(false)}>Servicios</a>
            <a href="/contact" class="nav-link" onClick={() => setIsMenuOpen(false)}>Contactar</a>
            <a href="/question" class="nav-link" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            <a href="/projects" class="nav-link" onClick={() => setIsMenuOpen(false)}>Proyectos</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
