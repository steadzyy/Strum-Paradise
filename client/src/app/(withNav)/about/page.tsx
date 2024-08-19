import Link from "next/link";

export default function About() {
    return (
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1570570665905-346e1b6be193?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg mx-auto p-6 bg-yellow-600 bg-opacity-40 rounded-lg shadow-lg">
            <h1 className="mb-5 text-4xl font-bold">About Us</h1>
            <p className="mb-5 text-lg">
              Selamat datang di Strum Paradise, destinasi utama untuk penggemar
              gitar! Kami menyediakan berbagai macam gitar akustik dan listrik
              dari merek-merek ternama, baik dari dalam negeri maupun
              internasional. Temukan berbagai macam jenis gitar berkualitas tinggi
              dari merek lokal dan internasional yang terkenal, cocok untuk
              berbagai gaya bermain dan tingkat keahlian. Di Strum Paradise, kami
              berkomitmen untuk memberikan pelayanan terbaik dan produk-produk
              unggulan untuk memenuhi kebutuhan musik Anda. Baik Anda seorang
              pemula atau musisi berpengalaman, kami memiliki gitar yang tepat
              untuk Anda. Jelajahi koleksi kami dan temukan gitar impian Anda hari
              ini!
            </p>
            <div className="flex justify-center">
                <Link href='/'>
              <button className="btn btn-accent w-full max-w-xs">Get Yours!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  