export default function CookiesPage() {
  return (
    <main style={pageStyle}>
      <section style={contentStyle}>
        <h1 style={titleStyle}>Cookies Policy</h1>

        <p style={paragraphStyle}>
          This website uses cookies to improve your browsing experience, analyze
          website traffic, and support basic website functionality.
        </p>

        <h2 style={headingStyle}>What are cookies?</h2>
        <p style={paragraphStyle}>
          Cookies are small text files stored on your device when you visit a
          website. They help the website remember basic information about your
          visit.
        </p>

        <h2 style={headingStyle}>Types of cookies we may use</h2>
        <p style={paragraphStyle}>
          We may use essential cookies for website functionality, analytics
          cookies to understand visitor behavior, and preference cookies to
          remember simple user choices.
        </p>

        <h2 style={headingStyle}>Managing cookies</h2>
        <p style={paragraphStyle}>
          You can control or delete cookies through your browser settings. Please
          note that disabling cookies may affect some website features.
        </p>

        <h2 style={headingStyle}>Contact</h2>
        <p style={paragraphStyle}>
          For questions about this Cookies Policy, contact us at
          info@corfubuilders.gr.
        </p>
      </section>
    </main>
  );
}

const pageStyle: React.CSSProperties = {
  background: "#f5f1ea",
  minHeight: "100vh",
  padding: "80px 22px",
};

const contentStyle: React.CSSProperties = {
  maxWidth: "900px",
  margin: "0 auto",
  background: "#fff",
  padding: "55px",
  border: "1px solid #e6dfd3",
};

const titleStyle: React.CSSProperties = {
  marginTop: 0,
  fontSize: "42px",
  fontWeight: 900,
};

const headingStyle: React.CSSProperties = {
  marginTop: "35px",
  fontSize: "24px",
};

const paragraphStyle: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: 1.8,
  color: "#555",
};