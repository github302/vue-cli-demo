import componentA from './componentA';
export default {
    data(){
        return {
            msg: 'componentC',
        }
    },
    components: {
        componentA,
    },
    template: '<p><component-a>{{msg}}<component-a></p>'
}