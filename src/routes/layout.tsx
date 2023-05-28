import {component$, Slot} from '@builder.io/qwik';

import Header from '~/components/starter/header/header';

export default component$(() => {
    return (
        <div id="app">
            <Header></Header>

            <main>
                <Slot></Slot>
            </main>
        </div>
    );
});
