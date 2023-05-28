import type {QwikIntrinsicElements} from '@builder.io/qwik';

export function IcBaselineCheck(props: QwikIntrinsicElements['svg'], key: string) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props} key={key}>
            <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"></path>
        </svg>
    );
}

export default IcBaselineCheck;
