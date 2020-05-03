<template>
	<div class='layout'>
		<navbar class='layout-navbar' />

		<div class='layout-content'>
			<transition name='moveUp'>
				<router-view></router-view>
			</transition>
		</div>

		<my-footer />
	</div>
</template>

<script>
import Navbar from './Navbar'
import MyFooter from './Footer'

export default {
	components: {
		Navbar,
		MyFooter
	}
}
</script>
<style>
.layout {
	width: 100%;
	height: 100%;
	display: block
}
.layout-content {
    margin: 0px 0 0 0;
}
.moveUp-enter-active {
	animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	50% {
		opacity: 0.5;
	}
	100% {
		opacity: 1;
	}
}
</style>
