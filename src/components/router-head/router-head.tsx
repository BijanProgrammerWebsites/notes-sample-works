import {component$, useStyles$} from '@builder.io/qwik';
import {useDocumentHead, useLocation} from '@builder.io/qwik-city';

import POPPINS_STYLES from './poppins.scss?inline';
import NOTO_STYLES from './noto.scss?inline';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$((): any => {
    useStyles$(POPPINS_STYLES);
    useStyles$(NOTO_STYLES);

    const head = useDocumentHead();
    const loc = useLocation();

    return (
        <>
            <title>{head.title}</title>

            <base href="/sample-works/" />

            <link rel="canonical" href={loc.url.href} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" type="image/svg+xml" href="favicon.ico" />

            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

            {head.meta.map((m) => (
                <meta key={m.key} {...m} />
            ))}

            {head.links.map((l) => (
                <link key={l.key} {...l} />
            ))}

            {head.styles.map((s) => (
                <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
            ))}
        </>
    );
});
