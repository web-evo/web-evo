"use strict";
exports.id = 533;
exports.ids = [533];
exports.modules = {

/***/ 479533:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* binding */ getServerSideSitemap)
});

// UNUSED EXPORTS: getServerSideSitemapLegacy

;// CONCATENATED MODULE: ./node_modules/.pnpm/next-sitemap@4.1.3_@next+env@13.4.6_next@13.4.6/node_modules/next-sitemap/dist/esm/ssr/response.js
/**
 * Send XML response, supports legacy pages directory
 * @param ctx
 * @param content
 * @returns
 */
const response_withXMLResponseLegacy = (ctx, content) => {
    if (ctx?.res) {
        const { res } = ctx;
        // Set header
        res.setHeader('Content-Type', 'text/xml');
        // Write the sitemap context to resonse
        res.write(content);
        // End response
        res.end();
    }
    // Empty props
    return {
        props: {},
    };
};
/**
 * Send XML response, as next13+ route response
 * @param content
 * @param headers Custom request headers
 * @returns
 */
const withXMLResponse = (content, headers = {}) => {
    return new Response(content, {
        status: 200,
        headers: {
            'Content-Type': 'text/xml',
            ...headers,
        },
    });
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/next-sitemap@4.1.3_@next+env@13.4.6_next@13.4.6/node_modules/next-sitemap/dist/esm/builders/sitemap-builder.js
/**
 * Builder class to generate xml and robots.txt
 * Returns only string values
 */
class sitemap_builder_SitemapBuilder {
    /**
     * Create XML Template
     * @param content
     * @returns
     */
    withXMLTemplate(content) {
        return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n${content}</urlset>`;
    }
    /**
     * Generates sitemap-index.xml
     * @param allSitemaps
     * @returns
     */
    buildSitemapIndexXml(allSitemaps) {
        return [
            '<?xml version="1.0" encoding="UTF-8"?>',
            '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
            ...(allSitemaps?.map((x) => `<sitemap><loc>${x}</loc></sitemap>`) ?? []),
            '</sitemapindex>',
        ].join('\n');
    }
    /**
     * Normalize sitemap field keys to stay consistent with <xsd:sequence> order
     * @link https://www.w3schools.com/xml/el_sequence.asp
     * @link https://github.com/iamvishnusankar/next-sitemap/issues/345
     * @param x
     * @returns
     */
    normalizeSitemapField(x) {
        const { loc, lastmod, changefreq, priority, ...restProps } = x;
        // Return keys in following order
        return {
            loc,
            lastmod,
            changefreq,
            priority,
            ...restProps,
        };
    }
    /**
     * Composes YYYY-MM-DDThh:mm:ssTZD date format (with TZ offset)
     * (ref: https://stackoverflow.com/a/49332027)
     * @param date
     * @private
     */
    formatDate(date) {
        const d = typeof date === 'string' ? new Date(date) : date;
        const z = (n) => ('0' + n).slice(-2);
        const zz = (n) => ('00' + n).slice(-3);
        let off = d.getTimezoneOffset();
        const sign = off > 0 ? '-' : '+';
        off = Math.abs(off);
        return (d.getFullYear() +
            '-' +
            z(d.getMonth() + 1) +
            '-' +
            z(d.getDate()) +
            'T' +
            z(d.getHours()) +
            ':' +
            z(d.getMinutes()) +
            ':' +
            z(d.getSeconds()) +
            '.' +
            zz(d.getMilliseconds()) +
            sign +
            z((off / 60) | 0) +
            ':' +
            z(off % 60));
    }
    formatBoolean(value) {
        return value ? 'yes' : 'no';
    }
    escapeHtml(s) {
        return s.replace(/[^\dA-Za-z ]/g, (c) => '&#' + c.charCodeAt(0) + ';');
    }
    /**
     * Generates sitemap.xml
     * @param fields
     * @returns
     */
    buildSitemapXml(fields) {
        const content = fields
            .map((x) => {
            // Normalize sitemap field keys to stay consistent with <xsd:sequence> order
            const field = this.normalizeSitemapField(x);
            // Field array to keep track of properties
            const fieldArr = [];
            // Iterate all object keys and key value pair to field-set
            for (const key of Object.keys(field)) {
                // Skip reserved keys
                if (['trailingSlash'].includes(key)) {
                    continue;
                }
                if (field[key]) {
                    if (key === 'alternateRefs') {
                        const altRefField = this.buildAlternateRefsXml(field.alternateRefs);
                        fieldArr.push(altRefField);
                    }
                    else if (key === 'news') {
                        if (field.news) {
                            const newsField = this.buildNewsXml(field.news);
                            fieldArr.push(newsField);
                        }
                    }
                    else if (key === 'images') {
                        if (field.images) {
                            for (const image of field.images) {
                                const imageField = this.buildImageXml(image);
                                fieldArr.push(imageField);
                            }
                        }
                    }
                    else if (key === 'videos') {
                        if (field.videos) {
                            for (const video of field.videos) {
                                const videoField = this.buildVideoXml(video);
                                fieldArr.push(videoField);
                            }
                        }
                    }
                    else {
                        fieldArr.push(`<${key}>${field[key]}</${key}>`);
                    }
                }
            }
            // Append previous value and return
            return `<url>${fieldArr.join('')}</url>\n`;
        })
            .join('');
        return this.withXMLTemplate(content);
    }
    /**
     * Generate alternate refs.xml
     * @param alternateRefs
     * @returns
     */
    buildAlternateRefsXml(alternateRefs = []) {
        return alternateRefs
            .map((alternateRef) => {
            return `<xhtml:link rel="alternate" hreflang="${alternateRef.hreflang}" href="${alternateRef.href}"/>`;
        })
            .join('');
    }
    /**
     * Generate Google News sitemap entry
     * @param news
     * @returns string
     */
    buildNewsXml(news) {
        // using array just because it looks more structured
        return [
            `<news:news>`,
            ...[
                `<news:publication>`,
                ...[
                    `<news:name>${this.escapeHtml(news.publicationName)}</news:name>`,
                    `<news:language>${news.publicationLanguage}</news:language>`,
                ],
                `</news:publication>`,
                `<news:publication_date>${this.formatDate(news.date)}</news:publication_date>`,
                `<news:title>${this.escapeHtml(news.title)}</news:title>`,
            ],
            `</news:news>`,
        ]
            .filter(Boolean)
            .join('');
    }
    /**
     * Generate Image sitemap entry
     * @param image
     * @returns string
     */
    buildImageXml(image) {
        // using array just because it looks more structured
        return [
            `<image:image>`,
            ...[
                `<image:loc>${image.loc.href}</image:loc>`,
                image.caption &&
                    `<image:caption>${this.escapeHtml(image.caption)}</image:caption>`,
                image.title &&
                    `<image:title>${this.escapeHtml(image.title)}</image:title>`,
                image.geoLocation &&
                    `<image:geo_location>${this.escapeHtml(image.geoLocation)}</image:geo_location>`,
                image.license && `<image:license>${image.license.href}</image:license>`,
            ],
            `</image:image>`,
        ]
            .filter(Boolean)
            .join('');
    }
    /**
     * Generate Video sitemap entry
     * @param video
     * @returns string
     */
    buildVideoXml(video) {
        // using array just because it looks more structured
        return [
            `<video:video>`,
            ...[
                `<video:title>${this.escapeHtml(video.title)}</video:title>`,
                `<video:thumbnail_loc>${video.thumbnailLoc.href}</video:thumbnail_loc>`,
                `<video:description>${this.escapeHtml(video.description)}</video:description>`,
                video.contentLoc &&
                    `<video:content_loc>${video.contentLoc.href}</video:content_loc>`,
                video.playerLoc &&
                    `<video:player_loc>${video.playerLoc.href}</video:player_loc>`,
                video.duration && `<video:duration>${video.duration}</video:duration>`,
                video.viewCount &&
                    `<video:view_count>${video.viewCount}</video:view_count>`,
                video.tag && `<video:tag>${this.escapeHtml(video.tag)}</video:tag>`,
                video.rating &&
                    `<video:rating>${video.rating
                        .toFixed(1)
                        .replace(',', '.')}</video:rating>`,
                video.expirationDate &&
                    `<video:expiration_date>${this.formatDate(video.expirationDate)}</video:expiration_date>`,
                video.publicationDate &&
                    `<video:publication_date>${this.formatDate(video.publicationDate)}</video:publication_date>`,
                typeof video.familyFriendly !== 'undefined' &&
                    `<video:family_friendly>${this.formatBoolean(video.familyFriendly)}</video:family_friendly>`,
                typeof video.requiresSubscription !== 'undefined' &&
                    `<video:requires_subscription>${this.formatBoolean(video.requiresSubscription)}</video:requires_subscription>`,
                typeof video.live !== 'undefined' &&
                    `<video:live>${this.formatBoolean(video.live)}</video:live>`,
                video.restriction &&
                    `<video:restriction relationship="${video.restriction.relationship}">${video.restriction.content}</video:restriction>`,
                video.platform &&
                    `<video:platform relationship="${video.platform.relationship}">${video.platform.content}</video:platform>`,
                video.uploader &&
                    `<video:uploader${video.uploader.info && ` info="${video.uploader.info}"`}>${this.escapeHtml(video.uploader.name)}</video:uploader>`,
            ],
            `</video:video>`,
        ]
            .filter(Boolean)
            .join('');
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/next-sitemap@4.1.3_@next+env@13.4.6_next@13.4.6/node_modules/next-sitemap/dist/esm/ssr/sitemap.js


/**
 * Generate server side sitemaps, supports legacy pages directory
 * @param ctx
 * @param fields
 * @returns
 */
const getServerSideSitemapLegacy = async (ctx, fields) => {
    // Generate sitemap xml
    const contents = new SitemapBuilder().buildSitemapXml(fields);
    // Send response
    return withXMLResponseLegacy(ctx, contents);
};
/**
 * Generate server side sitemaps, support next13+ route.{ts,js} file.
 * To continue using inside pages directory, import `getServerSideSitemapLegacy` instead.
 * @param fields
 * @param headers Custom request headers
 * @returns
 */
const getServerSideSitemap = async (fields, headers = {}) => {
    // Generate sitemap xml
    const contents = new sitemap_builder_SitemapBuilder().buildSitemapXml(fields);
    // Send response
    return withXMLResponse(contents, headers);
};


/***/ })

};
;