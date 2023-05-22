import {component$, useStylesScoped$} from '@builder.io/qwik';
import type {SampleWork} from '~/models/sample-work.model';

import SAMPLE_WORK_CARDS_STYLES from './sample-work-cards.scss?inline';
import SampleWorkCard from '~/components/sample-work-card/sample-work-card';
import {Category} from '~/enums/category.enum';

interface Props {
    sampleWorks: SampleWork[];
}

export default component$<Props>(({sampleWorks}) => {
    useStylesScoped$(SAMPLE_WORK_CARDS_STYLES);

    return (
        <ul class="categories">
            {Object.values(Category).map((category) => (
                <li class={`category category--${category}`} key={category}>
                    <h2 class="title">{category}</h2>

                    <ul class="sample-works">
                        {sampleWorks
                            .filter((x) => x.category === category)
                            .map((sampleWork, index) => (
                                <li class="sample-work" key={index}>
                                    <SampleWorkCard sampleWork={sampleWork}></SampleWorkCard>
                                </li>
                            ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
});
