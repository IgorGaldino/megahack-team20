<template>
	<div class='layout'>
		<navbar class='layout-navbar' />

		<div class='layout-content'>
			<transition name='moveUp'>
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
import Navbar from './navbar'

export default {
	components: {
		Navbar
	}
}
</script>
<style>
.layout {
	width: 100%;
	height: 100%;
	display: flex;
}
.layout-content {
    z-index: 1000;
    overflow-y: auto;
    overflow-x: hidden;
    flex-direction: row;
    flex: 1;
    margin: 96px 10px 0 10px;
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
