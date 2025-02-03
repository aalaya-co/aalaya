export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="bg-gray-dark text-gray-light">
      <div className="container max-2xl mx-auto">
        <p className="py-5 text-center text-sm">Copyright ©{currentYear} All rights reserved | This website is made with <span className="text-red-600">♥</span> by <span className="text-yellow">Aalaya</span></p>
      </div>
    </section>
  );
}