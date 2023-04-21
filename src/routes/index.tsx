import {component$, useStylesScoped$} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';
import type {SampleWork} from '~/models/sample-work.model';

import HOME_STYLES from './home.scss?inline';

import SAMPLE_WORKS_JSON from '~/data/sample-works.json';

const SAMPLE_WORKS: SampleWork[] = SAMPLE_WORKS_JSON as SampleWork[];

export default component$(() => {
    useStylesScoped$(HOME_STYLES);

    return (
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Difficulty</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {SAMPLE_WORKS.map((sampleWork) => (
                    <tr>
                        <td>
                            <div class={`category category--${sampleWork.category}`}>{sampleWork.category}</div>
                        </td>
                        <td>
                            <div class={`difficulty difficulty--${sampleWork.difficulty}`}>{sampleWork.difficulty}</div>
                        </td>
                        <td>{sampleWork.title}</td>
                    </tr>
                ))}
            </tbody>
        </table>
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
