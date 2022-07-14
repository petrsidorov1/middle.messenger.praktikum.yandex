export function basicButton(parameter, cssClass){
    if (!parameter) return arguments.callee
   return `
<button type="submit" 
class="button button-${cssClass || 'primary'}">${parameter}</button>
`;
}