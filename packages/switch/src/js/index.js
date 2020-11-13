export default {
    name: 'ySwitch',
    model: {
        prop: 'value',
        event: 'input'
    },
    props: {
        // status
        value: {
            type: Boolean,
            default: true
        },
        // active color when status true
        activeColor: {
            type: String,
            default: '#409eff'
        },
        // inactive color when status false
        inactiveColor: {
            type: String,
            default: '#c0ccda'
        }
    },
    data() {
        return {
            index: 123
        }
    },
    methods: {
        switchValue() {
            this.value = !this.value;
            this.handleChange();
        },
        handleChange() {
            this.$emit('change', this.value);
            this.$emit('input', this.value);
        }
    }
}
