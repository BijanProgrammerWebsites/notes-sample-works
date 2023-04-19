import {component$, useStylesScoped$} from '@builder.io/qwik';

import HEADER_STYLES from './header.scss?inline';

// noinspection TypeScriptValidateTypes
export default component$(() => {
    useStylesScoped$(HEADER_STYLES);

    return (
        <header>
            <div className="logo">Work Samples</div>
        </header>
    );
});
