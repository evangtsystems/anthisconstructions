export default function TrustBar() {
  const items = [
    { number: "15+", label: "Years Experience" },
    { number: "120+", label: "Completed Projects" },
    { number: "40+", label: "Villa Renovations" },
    { number: "100%", label: "Client Focused" },
  ];

  return (
    <section
      style={{
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "0 22px",
      }}
    >
      <div
        style={{
          background: "#fff",
          border: "1px solid #e6dfd3",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        }}
      >
        {items.map((item, index) => (
          <div
            key={item.label}
            style={{
              padding: "28px 20px",
              textAlign: "center",
              borderRight:
                index !== items.length - 1 ? "1px solid #e6dfd3" : "none",
            }}
          >
            <div
              style={{
                fontSize: "34px",
                fontWeight: 900,
                color: "#9b7446",
                lineHeight: 1,
              }}
            >
              {item.number}
            </div>

            <div
              style={{
                marginTop: "8px",
                fontSize: "13px",
                fontWeight: 800,
                color: "#333",
                letterSpacing: "0.5px",
              }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}