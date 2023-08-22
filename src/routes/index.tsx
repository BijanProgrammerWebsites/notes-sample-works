import {component$, useStylesScoped$} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';

import SampleWorkCards from '~/components/sample-work-cards/sample-work-cards';

import {CATEGORIES} from '~/data/categories.data';
import {Difficulty} from '~/enums/difficulty.enum';

import HOME_STYLES from './home.scss?inline';

export default component$(() => {
    useStylesScoped$(HOME_STYLES);

    const sortedCategories = [...CATEGORIES].map((category) => ({
        ...category,
        sampleWorks: category.sampleWorks.sort((a, b) => {
            if (a.isPriority === b.isPriority) {
                if (a.difficulty === b.difficulty) {
                    return a.title.localeCompare(b.title);
                }

                const aIndex = Object.values(Difficulty).indexOf(a.difficulty);
                const bIndex = Object.values(Difficulty).indexOf(b.difficulty);

                return aIndex - bIndex;
            }

            return a.isPriority ? -1 : 1;
        }),
    }));

    return <SampleWorkCards categories={sortedCategories}></SampleWorkCards>;
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
