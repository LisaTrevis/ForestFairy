const firstView = {
	template: `
	    <div class="firstView">
	    	<div class="row">
				<div class="col">
					<img src="img/firequeenthumb.jpg" alt="..." class="img-thumbnail img-fluid">
				</div>
				<div class="col">
					<img src="img/candythumb.jpg" alt="..." class="img-thumbnail img-fluid">
				</div>
				<div class="col">
					<img src="img/rainbowpeacedreadbead.jpg" alt="..." class="img-thumbnail img-fluid">
				</div>
			</div>
	      	<router-view></router-view>
	    </div>
	`
}

const all = {
	template: `
		<div class="text-center">
			<div class="row">
				<div class="col">
					<img src="img/dragonflythumb.jpg" alt="..." class="img-thumbnail">
				</div>
				<div class="col">
					<img src="img/firequeenthumb.jpg" alt="..." class="img-thumbnail">
				</div>
				<div class="col">
					<img src="img/flamequeenthumb.jpg" alt="..." class="img-thumbnail">
				</div>
				<div class="col">
					<img src="img/honeybeethumb.jpg" alt="..." class="img-thumbnail">
				</div>
			</div>
			
			<div class="row">
				<div class="col">
					<img src="img/candythumb.jpg" alt="..." class="img-thumbnail img-fluid">
				</div>
				<div class="col">
					<img src="img/oceanthumb.jpg" alt="..." class="img-thumbnail img-fluid">
				</div>
				<div class="col">
					<img src="img/southwestthumb.jpg" alt="..." class="img-thumbnail img-fluid">
				</div>
			</div>

			<div class="row">
				<div class="col">
					<img src="img/bluecopperdreadbead.jpg" alt="..." class="img-thumbnail">
				</div>
				<div class="col">
					<img src="img/clearsilverdreadbead.jpg" alt="..." class="img-thumbnail">
				</div>
				<div class="col">
					<img src="img/goldpeacedreadbead.jpg" alt="..." class="img-thumbnail">
				</div>
			</div>
			<div class="row">
				<div class="col">
					<img src="img/goldpurpledreadbead.jpg" alt="..." class="img-thumbnail">
				</div>
				<div class="col">
					<img src="img/greensilverswirldreadbead.jpg" alt="..." class="img-thumbnail">
				</div>
				<div class="col">
					<img src="img/icebluepeacedreadbead.jpg" alt="..." class="img-thumbnail">
				</div>
			</div>
			<div class="row">
				<div class="col">
					<img src="img/bluesilverdreadbead.jpg" alt="..." class="img-thumbnail">
				</div>
				<div class="col">
					<img src="img/greenlaughdreadbead.jpg" alt="..." class="img-thumbnail">
				</div>
				<div class="col">
					<img src="img/rainbowpeacedreadbead.jpg" alt="..." class="img-thumbnail">
				</div>
			</div>
		</div>
	`
}
const wings = {
	template: `<div class="text-center">
					<div class="row">
						<div class="col">
							<img src="img/dragonflythumb.jpg" alt="..." class="img-thumbnail">
						</div>
						<div class="col">
							<img src="img/firequeenthumb.jpg" alt="..." class="img-thumbnail">
						</div>
						<div class="col">
							<img src="img/flamequeenthumb.jpg" alt="..." class="img-thumbnail">
						</div>
						<div class="col">
							<img src="img/honeybeethumb.jpg" alt="..." class="img-thumbnail">
						</div>
					</div>
				</div>`
}
const coats = {
	template: `<div class="text-center">
					<div class="row">
						<div class="col">
							<img src="img/candythumb.jpg" alt="..." class="img-thumbnail img-fluid">
						</div>
						<div class="col">
							<img src="img/oceanthumb.jpg" alt="..." class="img-thumbnail img-fluid">
						</div>
						<div class="col">
							<img src="img/southwestthumb.jpg" alt="..." class="img-thumbnail img-fluid">
						</div>
					</div>
				</div>`
}
const jewelry = {
	template: `<div class="text-center">
					<div class="row">
						<div class="col">
							<img src="img/bluecopperdreadbead.jpg" alt="..." class="img-thumbnail">
						</div>
						<div class="col">
							<img src="img/clearsilverdreadbead.jpg" alt="..." class="img-thumbnail">
						</div>
						<div class="col">
							<img src="img/goldpeacedreadbead.jpg" alt="..." class="img-thumbnail">
						</div>
					</div>
					<div class="row">
						<div class="col">
							<img src="img/goldpurpledreadbead.jpg" alt="..." class="img-thumbnail">
						</div>
						<div class="col">
							<img src="img/greensilverswirldreadbead.jpg" alt="..." class="img-thumbnail">
						</div>
						<div class="col">
							<img src="img/icebluepeacedreadbead.jpg" alt="..." class="img-thumbnail">
						</div>
					</div>
					<div class="row">
						<div class="col">
							<img src="img/bluesilverdreadbead.jpg" alt="..." class="img-thumbnail">
						</div>
						<div class="col">
							<img src="img/greenlaughdreadbead.jpg" alt="..." class="img-thumbnail">
						</div>
						<div class="col">
							<img src="img/rainbowpeacedreadbead.jpg" alt="..." class="img-thumbnail">
						</div>
					</div>
				</div>`
}

const router = new VueRouter({
	routes: [
		{
			path: '/firstView/:id', component: firstView,
	      		children: [
					{
						path: '/all',
						component: all
					},
					{
						path: '/wings',
						component: wings
					},
					{
						path: '/coats',
						component: coats
					},
					{
						path: '/jewelry',
						component: jewelry
					}
			]
		}
	]
})

var routeTest = new Vue({
	router,
	el: '#app',
	data: {
	},
	methods: {
	}
}).$mount('#app')