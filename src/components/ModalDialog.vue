<template>
    <!--小視窗-->
    <div class="modal" id="modal" tabindex="-1" role="dialog" :display="isMsg">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title">Notice</h2>
                </div>
                <div class="modal-body">
                    <p id="modal_text"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" id="btn_close" data-dismiss="modal">確定</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'ModalDialog',
    computed:{
        ...mapState(['isMsg'])
	}
}
</script>

<style scoped>

</style>