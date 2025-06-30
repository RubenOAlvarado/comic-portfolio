import { NextConfig } from 'next';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin({});

const config: NextConfig = {
    images: {
        domains: ['media2.dev.to', 'cdn-images-1.medium.com'],
    },
};

export default withNextIntl(config);
