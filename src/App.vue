<template>
	<div>
		<div class="container">
			<WebHeader />
			<router-view></router-view>
			<!--小視窗-->
			<div class="modal" id="modal" tabindex="-1" role="dialog" display="block">
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
		</div>
		<footer>
			<WebFooter />
		</footer>
	</div>
</template>

<script>
import WebHeader from './components/WebHeader'
import WebFooter from './components/WebFooter'
// import ModalDialog from './components/ModalDialog'
export default {
	name: 'App',
	components: {
		WebHeader,
		WebFooter,
		// ModalDialog
	},
}
</script>

<style>
footer {
	margin-top: 5%;
}
</style>
