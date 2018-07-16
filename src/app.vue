 <template>
	<div id="title">Hello World! I'm {{fullname}}</div>
</template>

<script type="text/javascript">
	export default{
		data() {
			return {
				firstname: 'Popeye',
				lastname:'Bourne'
			}
		},
		computed:{
			fullname(){
				return this.firstname +' '+ this.lastname + '.';
			}
		}
	}
</script>

<style scoped="scoped">
	#title{
		font-size: 36px;
		color: #FFFFFF;
		line-height: 2em;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);		
	}
</style>
