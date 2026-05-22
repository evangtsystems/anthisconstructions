export default function CTA() {
  return (
    <section
      id="contact"
      style={{
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "20px 22px 0",
      }}
    >
      <div
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(20,24,27,0.9), rgba(20,24,27,0.55)), url('/images/hero-construction.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          padding: "55px 45px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h2
            style={{
              margin: "0 0 10px",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 900,
              letterSpacing: "-1px",
            }}
          >
            Ready to start your project?
          </h2>

          <p
            style={{
              margin: 0,
              color: "#eee",
              fontSize: "16px",
              lineHeight: 1.7,
            }}
          >
            Get in touch with us for a free consultation and quote.
          </p>
        </div>

        <a
          href="tel:+306944567890"
          style={{
            background: "#9b7446",
            color: "#fff",
            padding: "15px 24px",
            fontWeight: 800,
            fontSize: "13px",
            whiteSpace: "nowrap",
          }}
        >
          REQUEST A QUOTE
        </a>
      </div>
    </section>
  );
}