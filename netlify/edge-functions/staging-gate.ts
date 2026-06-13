import type { Context, Config } from "@netlify/edge-functions";

export default async (req: Request, context: Context) => {
  const isProduction = context.deploy.context === "production";

  if (isProduction) {
    return;
  }

  const url = new URL(req.url);

  if (url.pathname === "/robots.txt") {
    return new Response("User-agent: *\nDisallow: /\n", {
      headers: { "content-type": "text/plain" },
    });
  }

  const password = Netlify.env.get("STAGING_PASSWORD");

  if (password) {
    const authorization = req.headers.get("authorization");

    if (authorization) {
      const [scheme, encoded] = authorization.split(" ");

      if (scheme === "Basic" && encoded) {
        const decoded = atob(encoded);
        const [, pwd] = decoded.split(":");

        if (pwd === password) {
          const response = await context.next();
          response.headers.set(
            "x-robots-tag",
            "noindex, nofollow, noarchive"
          );
          return response;
        }
      }
    }

    return new Response("Authentication required", {
      status: 401,
      headers: {
        "www-authenticate": 'Basic realm="Staging"',
        "x-robots-tag": "noindex, nofollow, noarchive",
      },
    });
  }

  const response = await context.next();
  response.headers.set("x-robots-tag", "noindex, nofollow, noarchive");
  return response;
};

export const config: Config = {
  path: "/*",
};
