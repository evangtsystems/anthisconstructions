export default function TrustFeatures() {
  const items = [
    {
      title: "QUALITY & RELIABILITY",
      text: "We deliver superior quality with attention to every detail.",
      icon: "🛡️",
    },
    {
      title: "EXPERIENCED TEAM",
      text: "Skilled professionals with years of experience.",
      icon: "👤",
    },
    {
      title: "ON TIME DELIVERY",
      text: "We respect deadlines and deliver on our promises.",
      icon: "📅",
    },
    {
      title: "LOCAL SUPPORT",
      text: "Based in Corfu. We are always close to our clients.",
      icon: "🎧",
    },
  ];

  return (
    <section
      style={{
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "36px 22px 20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "22px",
        }}
      >
        {items.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#f8f5f1",
              borderRadius: "4px",
              padding: "42px 28px",
              textAlign: "center",
              border: "1px solid #ece4d9",
            }}
          >
            <div
              style={{
                fontSize: "38px",
                marginBottom: "20px",
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                margin: "0 0 16px",
                fontSize: "15px",
                fontWeight: 900,
                letterSpacing: "0.8px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                margin: 0,
                color: "#555",
                lineHeight: 1.8,
                fontSize: "15px",
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}