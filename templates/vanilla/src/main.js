const app = document.getElementById("app");

app.innerHTML = `
  <h1>Welcome to {{package-name}}</h1>
  <p>A minimal JavaScript template with Vite, powered by Bun and Nix.</p>
  <p>Edit <code>src/main.js</code> to get started.</p>
`;

console.log("Development server running");
