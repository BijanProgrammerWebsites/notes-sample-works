import {component$, useStylesScoped$} from '@builder.io/qwik';
import type {SampleWork} from '~/models/sample-work.model';

import SAMPLE_WORK_CARD_STYLES from './sample-work-card.scss?inline';

interface Props {
    sampleWork: SampleWork;
}

export default component$<Props>(({sampleWork}) => {
    useStylesScoped$(SAMPLE_WORK_CARD_STYLES);

    return (
        <div class={`card difficulty--${sampleWork.difficulty}`} title={sampleWork.title}>
            <div class={`difficulty`}>{sampleWork.difficulty}</div>
            <div class="title">{sampleWork.title}</div>
        </div>
    );
});
