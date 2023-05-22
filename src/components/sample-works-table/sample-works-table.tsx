import {component$, useStylesScoped$} from '@builder.io/qwik';
import type {SampleWork} from '~/models/sample-work.model';

import SAMPLE_WORKS_TABLE_STYLES from './sample-works-table.scss?inline';

interface Props {
    sampleWorks: SampleWork[];
}

export default component$<Props>(({sampleWorks}) => {
    useStylesScoped$(SAMPLE_WORKS_TABLE_STYLES);

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
                {sampleWorks.map((sampleWork, index) => (
                    <tr key={index}>
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
