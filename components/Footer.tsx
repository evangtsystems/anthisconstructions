export default function Footer() {
  return (
    <footer
      style={{
        background: "#15191d",
        color: "#fff",
        marginTop: "0",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "55px 22px 30px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.4fr",
            gap: "35px",
          }}
        >
          <div>
            <h3
              style={{
                margin: "0 0 8px",
                fontSize: "22px",
                fontWeight: 900,
              }}
            >
              CORFU BUILDERS
            </h3>

            <p
              style={{
                margin: "0 0 18px",
                color: "#b8b8b8",
                lineHeight: 1.7,
                fontSize: "14px",
                maxWidth: "340px",
              }}
            >
              We are a construction company based in Corfu, specializing in
              villa construction, renovations and property maintenance.
            </p>

            <div style={{ display: "flex", gap: "12px", color: "#d7b27a" }}>
              <span>●</span>
              <span>●</span>
              <span>●</span>
            </div>
          </div>

          <div>
            <h4 style={{ margin: "0 0 16px", fontSize: "14px" }}>
              QUICK LINKS
            </h4>

            {["Home", "Services", "Projects", "About", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    display: "block",
                    color: "#b8b8b8",
                    fontSize: "14px",
                    marginBottom: "10px",
                  }}
                >
                  {item}
                </a>
              )
            )}
          </div>

          <div>
            <h4 style={{ margin: "0 0 16px", fontSize: "14px" }}>
              SERVICES
            </h4>

            {[
              "Villa Construction",
              "Renovation",
              "Electrical & Plumbing",
              "Property Maintenance",
              "Pools & Outdoor",
            ].map((item) => (
              <p
                key={item}
                style={{
                  color: "#b8b8b8",
                  fontSize: "14px",
                  margin: "0 0 10px",
                }}
              >
                {item}
              </p>
            ))}
          </div>

          <div>
            <h4 style={{ margin: "0 0 16px", fontSize: "14px" }}>CONTACT</h4>

            <p style={contactStyle}>📞 2661075589
</p>
            <p style={contactStyle}>✉️ info@anthisconstructions.com</p>
            <p style={contactStyle}>📍 Corfu, Greece</p>
            <p style={contactStyle}>Mon - Sat: 08:00 - 18:00</p>
          </div>
        </div>

        <div
  style={{
    borderTop: "1px solid rgba(255,255,255,0.12)",
    marginTop: "40px",
    paddingTop: "22px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
    color: "#999",
    fontSize: "13px",
  }}
>
  <div>© 2026 Corfu Builders. All rights reserved.</div>

  <div
    style={{
      display: "flex",
      gap: "18px",
      flexWrap: "wrap",
    }}
  >
    <a
      href="/privacy-policy/"
      style={{
        color: "#c9b08a",
      }}
    >
      Privacy Policy
    </a>

    <a
      href="/cookies/"
      style={{
        color: "#c9b08a",
      }}
    >
      Cookies Policy
    </a>
  </div>
</div>
      </div>
    </footer>
  );
}

const contactStyle: React.CSSProperties = {
  color: "#b8b8b8",
  fontSize: "14px",
  margin: "0 0 10px",
};