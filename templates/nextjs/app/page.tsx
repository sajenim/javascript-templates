export default function Home() {
  return (
    <main>
      <div className="container">
        <h1>Welcome to {{package-name}}</h1>
        <p>
          A minimal Next.js TypeScript template with App Router, powered by
          Bun and Nix.
        </p>

        <div className="links">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js Docs
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Docs
          </a>
          <a
            href="https://www.typescriptlang.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            TypeScript Docs
          </a>
        </div>
      </div>
    </main>
  );
}
