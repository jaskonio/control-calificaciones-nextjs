export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="container mx-auto px-4 py-8 text-center">
        © {new Date().getFullYear()} GestiónEscolar. Todos los derechos reservados.
      </div>
    </footer>
    )
}