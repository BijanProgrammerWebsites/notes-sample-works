import {component$, useStylesScoped$} from '@builder.io/qwik';
import type {SampleWork} from '~/models/sample-work.model';

import {TbCheck, TbExternalLink} from '@qwikest/icons/tablericons';

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
                {sampleWork.url && <TbExternalLink></TbExternalLink>}
            </div>

            {sampleWork.isDone && (
                <div class="checkmark">
                    <TbCheck></TbCheck>
                </div>
            )}
        </>
    );

    const classNames = `card difficulty--${sampleWork.difficulty} ${sampleWork.isDone ? 'done' : ''}`;

    if (sampleWork.url) {
        return (
            <a class={classNames} title={sampleWork.title} href={sampleWork.url}>
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
