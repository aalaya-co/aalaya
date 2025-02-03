import Footer from "~/components/footer.componen";
import NavBar from "~/components/nav-bar.component";
import TopBar from "~/components/top-bar.component";

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <NavBar />
    
      <section className="p-32 relative">
        <div className="container max-2xl mx-auto">
          <p>Coming Soon...</p>
        </div>
      </section>

      <Footer />
    </>
  )
}