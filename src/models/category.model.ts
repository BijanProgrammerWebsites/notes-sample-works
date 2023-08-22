import type {SampleWork} from '~/models/sample-work.model';

export interface Category {
    title: string;
    sampleWorks: SampleWork[];
}
