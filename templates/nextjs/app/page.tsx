export default function Home() {
  return (
    <div className="p-8">
      <main className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-gray-800">Welcome to {{package-name}}</h1>
        <p className="mb-6">
          A minimal Next.js TypeScript template with App Router, powered by Bun
          and Nix.
        </p>
        <p className="mb-6">
          Edit <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm font-mono">app/page.tsx</code> to get started.
        </p>
        <nav className="flex gap-4 flex-wrap">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
          >
            Next.js Docs
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
          >
            React Docs
          </a>
          <a
            href="https://www.typescriptlang.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
          >
            TypeScript Docs
          </a>
        </nav>
      </main>
    </div>
  );
}
