<template>
<div>
    <InspectorField 
        v-for="attribute in actionAttributes"
        :key="attribute.name"
        :label="attribute.name"
        :value="configuration[attribute.name]"
        :isEditable="isEditing && attribute.editable === true"
        :error="errors[attribute.name]"
        @valueChanged="setValue"
    />
</div>
</template>

<script>
import InspectorField from './InspectorField.vue';

export default {
    inject: ['openmct', 'actionAttributes'],
    props: {
        actionObject: {
            type: Object,
            required: true,
            default: () => {
                return {};
            }
        },
        parentDomainObject: {
            type: Object,
            required: true,
            default: () => {
                return {};
            }
        }
    },
    components: {
        InspectorField
    },
    computed: {
        startTime() {
            return this.configuration.startTime;
        },
        duration() {
            return this.configuration.duration;
        },
        configuration() {
            return this.parentDomainObject.configuration.activities[this.id];
        }
    },
    data() {
        let timeSystem = this.openmct.time.timeSystem();
        let formatter = this.getFormatter(timeSystem.timeFormat);
        let id = this.actionObject.id;

        return {
            isEditing: this.openmct.editor.isEditing(),
            errors: {},
            id,
            timeSystem,
            formatter
        }
    },
    methods: {
        getFormatter(key) {
            return this.openmct.telemetry.getValueFormatter({
                format: key
            }).formatter;
        },
        setValue(key, value) {
            if (key === 'startTime') {
                if(this.errors[key]) {
                    this.$set(this.errors, key, undefined);
                }
                if (this.formatter.validate(value)) {
                    const startTimeSeconds = this.formatter.parse(value);
                    const endTime = this.formatter.format(startTimeSeconds + this.duration);

                    this.persistValue('startTime', value);
                    this.persistValue('endTime', endTime);
                } else {
                    this.$set(this.errors, key, 'Enter valid time string');
                }
            } else {
                this.persistValue(key, value);
            }
        },
        persistValue(key, value) {
            this.openmct.objects.mutate(this.parentDomainObject, `configuration.activities[${this.id}][${key}]`, value);
        },
        setIsEditing(isEditing) {
            this.isEditing = isEditing;
        }
    },
    mounted() {
        this.openmct.editor.on('isEditing', this.setIsEditing);
    },
    destroyed() {
        this.openmct.editor.off('isEditing', this.setIsEditing);
    }
}
</script>