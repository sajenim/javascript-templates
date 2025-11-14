{inputs, ...}: let
  root = inputs.self;
in {
  flake = rec {
    templates = {
      default = {
        description = "Minimal JavaScript template with Vite and Bun";
        path = "${root}/templates/vanilla";
      };

      nextjs = {
        description = "Next.js TypeScript template with App Router for Vercel";
        path = "${root}/templates/nextjs";
      };
    };

    om.templates = {
      javascript-vanilla = {
        template = templates.default;
        params = [
          {
            name = "package-name";
            description = "Name of the JavaScript package";
            placeholder = "my-project";
          }
        ];
        exclude = ["bun.lockb"];
      };

      javascript-nextjs = {
        template = templates.nextjs;
        params = [
          {
            name = "package-name";
            description = "Name of the Next.js project";
            placeholder = "my-nextjs-app";
          }
        ];
        exclude = ["bun.lockb"];
      };
    };
  };
}
