export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 max-w-6xl mx-auto">
      <h1 className="text-xl font-bold"></h1>

      <div className="space-x-8 text-gray-400">
        <a href="#about" className="hover:text-white"></a>
        <a href="#projects" className="hover:text-white"></a>
        <a href="#contact" className="hover:text-white"></a>
      </div>
    </nav>
  );
}