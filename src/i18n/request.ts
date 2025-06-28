import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async() => {
    const defaultLocale = "en";
    const cookieLocale = (await cookies()).get('NEXT_LOCALE')?.value || null;
    const locale = cookieLocale || defaultLocale;

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default,
    }
});