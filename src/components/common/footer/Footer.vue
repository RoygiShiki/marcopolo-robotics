<template>
    <div>
        <!-- <Copyright v-if="data.showCopyright"/> -->
        <CopyrightTwo></CopyrightTwo>

        <ScrollTop/>
    </div>
</template>

<script>
    // import Copyright from './Copyright'
    import CopyrightTwo from './CopyrightTwo'
    import Button from '../../elements/button/Button'
    import Icon from '../../icon/Icon'
    import ScrollTop from './ScrollTop'
    import Logo from '../../elements/logo/Logo'

    export default {
        name: 'Footer',
        components: {Logo, ScrollTop, Icon, Button, CopyrightTwo},
        props: {
            data: {
                default: null
            }
        }
    }
</script>