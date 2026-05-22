export default function Services() {
  const services = [
    {
      title: "Villa Construction",
      image: "/images/service-villa.jpg",
      text: "Custom-built villas with high-quality materials and modern standards.",
    },
    {
      title: "Renovations",
      image: "/images/service-renovation.jpg",
      text: "Complete renovation solutions for villas and commercial spaces.",
    },
    {
      title: "Electrical & Plumbing",
      image: "/images/service-electrical.jpg",
      text: "Certified installations and technical services.",
    },
    {
      title: "Property Maintenance",
      image: "/images/service-maintenance.jpg",
      text: "Ongoing maintenance for villas, Airbnb and rental properties.",
    },
  ];

  return (
    <section
      id="services"
      style={{
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "70px 22px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <p
          style={{
            color: "#9b7446",
            fontWeight: 800,
            letterSpacing: "1.5px",
            fontSize: "13px",
            marginBottom: "12px",
          }}
        >
          OUR SERVICES
        </p>

        <h2
          style={{
            margin: 0,
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 900,
            letterSpacing: "-1px",
          }}
        >
          Professional construction services
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              border: "1px solid #e6dfd3",
            }}
          >
            <div
              style={{
                height: "220px",
                overflow: "hidden",
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            <div style={{ padding: "24px" }}>
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: "12px",
                  fontSize: "22px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  lineHeight: 1.7,
                  color: "#555",
                  fontSize: "15px",
                }}
              >
                {service.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}