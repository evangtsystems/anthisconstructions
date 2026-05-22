export default function Projects() {
  const projects = [
    {
      title: "Luxury Villa Construction",
      location: "Corfu, Greece",
      image: "/images/project-1.jpg",
    },
    {
      title: "Traditional Home Renovation",
      location: "Old Town, Corfu",
      image: "/images/project-2.jpg",
    },
    {
      title: "Modern Outdoor Living Area",
      location: "South Corfu",
      image: "/images/project-3.jpg",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        background: "#fff",
        padding: "70px 22px",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "30px",
            marginBottom: "42px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                color: "#9b7446",
                fontWeight: 800,
                letterSpacing: "1.5px",
                fontSize: "13px",
                marginBottom: "12px",
              }}
            >
              SELECTED PROJECTS
            </p>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 900,
                letterSpacing: "-1px",
              }}
            >
              Built with precision and care
            </h2>
          </div>

          <p
            style={{
              maxWidth: "390px",
              margin: 0,
              color: "#666",
              lineHeight: 1.7,
              fontSize: "15px",
            }}
          >
            From luxury villas to complete renovations, our work combines
            technical experience with a clean, modern finish.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((project) => (
            <article
              key={project.title}
              style={{
                background: "#f5f1ea",
                border: "1px solid #e6dfd3",
              }}
            >
              <div
                style={{
                  height: "310px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              <div style={{ padding: "24px" }}>
                <p
                  style={{
                    margin: "0 0 8px",
                    color: "#9b7446",
                    fontSize: "13px",
                    fontWeight: 800,
                  }}
                >
                  {project.location}
                </p>

                <h3
                  style={{
                    margin: 0,
                    fontSize: "23px",
                    lineHeight: 1.25,
                    letterSpacing: "-0.4px",
                  }}
                >
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}