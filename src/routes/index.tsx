import {component$, useStylesScoped$} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';

import type {SampleWork} from '~/models/sample-work.model';

import SampleWorkCards from '~/components/sample-work-cards/sample-work-cards';

import HOME_STYLES from './home.scss?inline';

import SAMPLE_WORKS_JSON from '~/data/sample-works.json';
const SAMPLE_WORKS: SampleWork[] = SAMPLE_WORKS_JSON as SampleWork[];

export default component$(() => {
    useStylesScoped$(HOME_STYLES);

    return <SampleWorkCards sampleWorks={SAMPLE_WORKS}></SampleWorkCards>;
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
