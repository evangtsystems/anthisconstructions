export default function PrivacyPolicyPage() {
  return (
    <main style={pageStyle}>
      <section style={contentStyle}>
        <h1 style={titleStyle}>Privacy Policy</h1>

        <p style={paragraphStyle}>
          This Privacy Policy explains how Corfu Builders collects, uses and
          protects personal information submitted through this website.
        </p>

        <h2 style={headingStyle}>Information we collect</h2>
        <p style={paragraphStyle}>
          We may collect personal information such as your name, email address,
          phone number and project details when you contact us or request a
          quote.
        </p>

        <h2 style={headingStyle}>How we use your information</h2>
        <p style={paragraphStyle}>
          We use your information to respond to enquiries, provide quotes,
          communicate about services, and improve our website and customer
          experience.
        </p>

        <h2 style={headingStyle}>Data sharing</h2>
        <p style={paragraphStyle}>
          We do not sell your personal data. We may share information only when
          required to provide our services, comply with legal obligations, or
          protect our rights.
        </p>

        <h2 style={headingStyle}>Data retention</h2>
        <p style={paragraphStyle}>
          We keep personal information only for as long as necessary for the
          purposes described in this policy, unless a longer retention period is
          required by law.
        </p>

        <h2 style={headingStyle}>Your rights</h2>
        <p style={paragraphStyle}>
          You may request access, correction or deletion of your personal data by
          contacting us.
        </p>

        <h2 style={headingStyle}>Contact</h2>
        <p style={paragraphStyle}>
          For privacy-related questions, contact us at info@corfubuilders.gr.
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