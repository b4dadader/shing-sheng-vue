<template>
    <!--小視窗-->
    <div class="modal" tabindex="-1" role="dialog" :style="dialogDisplay">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title">Notice</h2>
                </div>
                <div class="modal-body">
                    <p class="modal-text">{{ dialogMsg }}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeModal">確定</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'ModalDialog',
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState(['dialogDisplay','dialogMsg'])
    },
    methods: {
        ...mapMutations(['dialogDisplaySet','dialogMsgSet']),
        closeModal() {
            this.dialogDisplaySet("none")
        }
    },
}
</script>

<style scoped>
.modal-text{
    /*換行*/
    white-space: pre-wrap;
    text-align: start;
}
</style>