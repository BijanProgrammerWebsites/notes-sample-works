import {component$, useStylesScoped$} from '@builder.io/qwik';

import type {Category} from '~/models/category.model';

import SAMPLE_WORK_CARDS_STYLES from './sample-work-cards.scss?inline';
import SampleWorkCard from '~/components/sample-work-card/sample-work-card';

interface Props {
    categories: Category[];
}

export default component$<Props>(({categories}) => {
    useStylesScoped$(SAMPLE_WORK_CARDS_STYLES);

    return (
        <ul class="categories">
            {categories.map((category) => (
                <li class="category" key={category.title}>
                    <h2 class="title">{category.title}</h2>

                    <ul class="sample-works">
                        {category.sampleWorks.map((sampleWork, index) => (
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
