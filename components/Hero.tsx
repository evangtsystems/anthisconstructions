export default function Hero() {
  return (
    <section
      id="home"
      style={{
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "28px 22px 0",
      }}
    >
      <div
        style={{
          minHeight: "520px",
          backgroundImage:
            "linear-gradient(90deg, rgba(15,20,24,0.82), rgba(15,20,24,0.35)), url('/images/hero-construction.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "2px",
          display: "flex",
          alignItems: "center",
          padding: "55px",
          color: "#fff",
        }}
      >
        <div style={{ maxWidth: "560px" }}>
          <p
            style={{
              margin: "0 0 14px",
              fontSize: "13px",
              fontWeight: 800,
              color: "#d7b27a",
              letterSpacing: "1.5px",
            }}
          >
            CONSTRUCTION & RENOVATION EXPERTS
          </p>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(38px, 6vw, 68px)",
              lineHeight: "0.95",
              letterSpacing: "-2px",
              fontWeight: 900,
            }}
          >
            We build your vision in Corfu.
          </h1>

          <p
            style={{
              margin: "24px 0 34px",
              fontSize: "17px",
              lineHeight: 1.7,
              color: "#f3eee7",
              maxWidth: "500px",
            }}
          >
            High-quality construction, renovations and property maintenance for
            homes, villas and commercial spaces.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href="#contact"
              style={{
                background: "#9b7446",
                padding: "15px 22px",
                fontWeight: 800,
                fontSize: "13px",
                color: "#fff",
              }}
            >
              REQUEST A QUOTE
            </a>

            <a
              href="#projects"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.5)",
                padding: "15px 22px",
                fontWeight: 800,
                fontSize: "13px",
                color: "#fff",
              }}
            >
              VIEW OUR PROJECTS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}