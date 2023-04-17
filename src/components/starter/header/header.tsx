import {component$, useStylesScoped$} from '@builder.io/qwik';
import HeaderStyles from './header.scss';

export default component$(() => {
    useStylesScoped$(HeaderStyles);

    return (
        <header>
            <div className="logo">Work Samples</div>
        </header>
    );
});
