import {component$, useStylesScoped$} from '@builder.io/qwik';
import type {SampleWork} from '~/models/sample-work.model';

import IcBaselineLaunch from '~/icons/IcBaselineLaunch';
import IcBaselineCheck from '~/icons/IcBaselineCheck';

import SAMPLE_WORK_CARD_STYLES from './sample-work-card.scss?inline';

interface Props {
    sampleWork: SampleWork;
}

export default component$<Props>(({sampleWork}) => {
    useStylesScoped$(SAMPLE_WORK_CARD_STYLES);

    const CardContent = (
        <>
            <div class={`difficulty`}>{sampleWork.difficulty}</div>

            <div class="title">
                <div class="text">{sampleWork.title}</div>
                {sampleWork.url && <IcBaselineLaunch></IcBaselineLaunch>}
            </div>

            {sampleWork.isDone && (
                <div class="checkmark">
                    <IcBaselineCheck></IcBaselineCheck>
                </div>
            )}
        </>
    );

    const classNames = `card difficulty--${sampleWork.difficulty} ${sampleWork.isPriority ? 'priority' : ''} ${
        sampleWork.isDone ? 'done' : ''
    }`;

    if (sampleWork.url) {
        return (
            <a class={classNames} title={sampleWork.title} href={sampleWork.url} target="_blank">
                {CardContent}
            </a>
        );
    }

    return (
        <div class={classNames} title={sampleWork.title}>
            {CardContent}
        </div>
    );
});
