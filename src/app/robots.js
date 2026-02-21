export default function robots() {
    // Replace this with your actual deployed domain
    const baseUrl = "https://airkingequipment.com/";

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
