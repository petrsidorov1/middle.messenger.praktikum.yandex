import { default as $buttonPrimary } from '../../components/buttons/buttonPrimary/buttonPrimary.tmpl';
import { default as $buttonSecondary } from '../../components/buttons/buttonSecondary/buttonSecondary.tmpl';
import {wrapperConstructor} from '../../components/wrapperConstructor'
const template = `

${wrapperConstructor({
    // form:['entry-form', ['mt-1, entry-form'], 'action-buttons'],
    // 'action-buttons': [buttonPrimary]
    'form:[mt-1, entry-form]': {
        'h2:[mt-2, mt-1]': '{{ formHeading }}',
        'div' :{
            'p': 'test',
            'a': 'check',
        },
        'div:action-buttons': {
            $buttonPrimary, $buttonSecondary}
    }
}
)}
<form class="entry-form">
    <h2 class="center-text">{{ formHeading }}</h2>
    <div class="entry-form__inputs">
        <div class="input-container">
            <input required value="{{ login }}" id="username" class="text-input" type="text">
            <label class="input-label" for="username">{{ login_label }}</label>
        </div>
        <div class="input-container">
            <input required value="{{ password }}" id="password" class="text-input" type="text">
            <label class="input-label" for="password">{{ password_label }}</label>
        </div>
    </div>

<div class="action-buttons mt-8">
    ${$buttonPrimary}
    ${$buttonSecondary}
</div>
</form>
`;
export default template;
