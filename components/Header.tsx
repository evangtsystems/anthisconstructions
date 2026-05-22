"use client";

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        background: "#fff",
        borderBottom: "1px solid #e6e0d6",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "18px 22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: 800,
              letterSpacing: "-0.5px",
            }}
          >
            CORFU BUILDERS
          </div>
          <div
            style={{
              fontSize: "11px",
              color: "#8a7355",
              fontWeight: 700,
              letterSpacing: "1.2px",
            }}
          >
            CONSTRUCTION COMPANY
          </div>
        </div>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "26px",
            fontSize: "13px",
            fontWeight: 700,
          }}
        >
          <a href="#home">HOME</a>
          <a href="#services">SERVICES</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>

          <a
            href="#contact"
            style={{
              background: "#9b7446",
              color: "#fff",
              padding: "12px 16px",
              borderRadius: "3px",
            }}
          >
            REQUEST A QUOTE
          </a>
        </nav>
      </div>
    </header>
  );
}