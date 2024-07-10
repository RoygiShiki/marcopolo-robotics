<template>
    <div class="copyright-area copyright-style-one variation-two">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-7 col-sm-12 col-12">
                    <div class="copyright-left">
                        <ul class="ft-menu link-hover">
                            <li><router-link to="/contactUs">Contact Us</router-link></li>
                            <li><a href="mailto:marcopolo-robotics@outlook.com" target="_blank">marcopolo-robotics@outlook.com</a></li>
                        </ul>

                        <!-- <ul class="social-icon social-default color-lessdark justify-content-center">
                            <li><a href="https://www.linkedin.com/company/marcopolo-industry" target="_blank"><Icon name="linkedin"/></a></li>
                        </ul> -->
                    </div>
                </div>
                <!-- <div class="col-lg-4 col-md-5 mt_sm--20">
                    <div class="copyright-center text-center">
                        <ul class="social-icon social-default color-lessdark justify-content-center">
                            <li><a href="https://www.linkedin.com/company/marcopolo-industry" target="_blank"><Icon name="linkedin"/></a></li>
                        </ul>
                    </div>
                </div> -->
                <div class="col-lg-6 col-md-12 col-sm-12 col-12 mt_md--20 mt_sm--20">
                    <div class="copyright-right text-center text-lg-end">
                        <p class="copyright-text">
                            Copyright All rights reserved © Marcopolo Robotics {{ new Date().getFullYear() }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from '../../icon/Icon'

    export default {
        name: 'CopyrightTwo',
        components: {Icon}
    }
</script>

<style scoped>
.copyright-left {
    display: flex;
}

.ft-menu {
    margin-right: 20px!important;
}
</style>