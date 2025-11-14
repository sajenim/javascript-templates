{inputs, ...}: let
  root = inputs.self;
in {
  flake = rec {
    templates = {
      default = {
        description = "Minimal JavaScript template with Vite and Bun";
        path = "${root}/vanilla";
      };

      nextjs = {
        description = "Next.js TypeScript template with App Router";
        path = "${root}/nextjs";
      };
    };

    om.templates = {
      default = {
        template = templates.default;
        params = [
          {
            name = "package-name";
            description = "Name of the JavaScript package";
            placeholder = "my-project";
          }
        ];
      };

      nextjs = {
        template = templates.nextjs;
        params = [
          {
            name = "package-name";
            description = "Name of the Next.js project";
            placeholder = "my-nextjs-app";
          }
        ];
      };
    };
  };
}
