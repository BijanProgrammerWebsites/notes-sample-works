import {component$, useStylesScoped$} from '@builder.io/qwik';

import FooterStyles from './footer.scss';

export default component$(() => {
    useStylesScoped$(FooterStyles);

    return <footer>First qwik app by BijanProgrammer</footer>;
});
