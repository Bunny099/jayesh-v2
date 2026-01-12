import { MetadataRoute } from "next";

export default function sitemaps():MetadataRoute.Sitemap{
    const baseUrl = "https://jayeshkhuman.in"
    return[
        {
            url:baseUrl,
            lastModified: new Date(),
            changeFrequency:"monthly",
            priority:1
        }
    ]
}