<template>
	<div id="app">
		<router-link :to="{name: 'inicio'}">
			<img src="@/assets/logo.png" alt="Logo de la app">
		</router-link>

    	<router-view/>
  	</div>
</template>