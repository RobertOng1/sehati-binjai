import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://sehati-binjai.my.id";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/offline"],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
