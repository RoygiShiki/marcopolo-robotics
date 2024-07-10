<template>
    <div :class="`rn-accordion-style ${accordionStyleClass} accordion`">
        <div class="accordion" :id="id">
            <div class="accordion-item card" v-for="(content, index) in accordionContent">
                <h2 class="accordion-header card-header" :id="`heading${content.id}`">
                    <button class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            :data-bs-target="`#collapse${content.id}`"
                            :aria-expanded="index === activeCollapse ? 'true' : 'false'"
                            :aria-controls="`collapse${content.id}`"
                            @click="activeCollapse = index">
                        {{ content.title }}
                        <i class="collapse-icon"/>
                    </button>
                </h2>
                <div :id="`collapse${content.id}`"
                     class="accordion-collapse collapse"
                     :class="{'show': index === 0}"
                     :aria-labelledby="`heading${content.id}`"
                     :data-bs-parent="`#${id}`">
                    <div class="accordion-body card-body">
                        {{ content.description }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Accordion',
        props: {
            id: {
                type: String,
                default: 'accordionExample'
            },
            accordionStyleClass: {
                type: String
            },
            accordionContent: {
                type: Array,
                default: function () {
                    return [
                        {
                            id: 'One',
                            title: 'Some Introductions Here.',
                            description: 'Some Introduction Here. Some Introduction Here. Some Introduction Here. Some Introduction Here. Some Introduction Here. Some Introduction Here. Some Introduction Here. Some Introduction Here. Some Introduction Here. Some Introduction Here. '
                        },
                        {
                            id: 'Two',
                            title: 'Another Introduction Here.',
                            description: 'Another Introduction Here. Another Introduction Here. Another Introduction Here. Another Introduction Here. Another Introduction Here. Another Introduction Here. Another Introduction Here. Another Introduction Here. Another Introduction Here. Another Introduction Here. Another Introduction Here. Another Introduction Here. '
                        },
                        {
                            id: 'Three',
                            title: 'Something Else Here.',
                            description: 'Something Else Here. Something Else Here. Something Else Here. Something Else Here. Something Else Here. Something Else Here. Something Else Here. Something Else Here. Something Else Here. Something Else Here. Something Else Here. Something Else Here. Something Else Here. Something Else Here. Something Else Here. Something Else Here. Something Else Here. Something Else Here. Something Else Here. '
                        },
                        {
                            id: 'Four',
                            title: 'At Last. ',
                            description: 'At Last. At Last. At Last. At Last. At Last. At Last. At Last. At Last. At Last. At Last. At Last. '
                        },
                    ]
                }
            }
        },
        data() {
            return {
                activeCollapse: 0
            }
        }
    }
</script>