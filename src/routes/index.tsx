import {component$} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';

export default component$(() => {
    return (
        <div>
            <h2>Hello, friend!</h2>
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Sample Works',
    meta: [
        {
            name: 'description',
            content: 'List of All Sample Works That I Can Do',
        },
    ],
};
