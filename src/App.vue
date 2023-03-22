<template>
	<div>
		<div class="container">
			<WebHeader />
			<router-view></router-view>
		</div>
		<footer>
			<WebFooter />
		</footer>
	</div>
</template>

<script>
import WebHeader from './components/WebHeader'
import WebFooter from './components/WebFooter'
export default {
	name: 'App',
	components: {
		WebHeader,
		WebFooter,
	},
}
</script>

<style>
footer {
	margin-top: 5%;
}
</style>
