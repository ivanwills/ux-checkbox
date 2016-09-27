import template from './ux-checkbox.hbs.js';

export default Ractive.extend({
    template: template,
    isolated: true,
    data: () => {
        return {
        };
    },
    oninit: function () {
        this.observe('checked', (newValue) => {
            console.log(newValue);
        });
    }
});
