export default {
	name: 'Paragraph',
	props: [
		'content',
	],	
	beforeCreate() {
		console.log('paragraph beforeCreate');
	},
	created() {
		console.log('paragraph created');
	},
	beforeMount() {
		console.log('paragraph beforeMount');
	},	
	mounted() {
		console.log('paragraph mounted');
	},	
	beforeUpdate() {
		console.log('paragraph beforeUpdate');
	},	
	updated() {
		console.log('paragraph updated');
	},
	beforeDestroy() {
		console.log('paragraph beforeDestroy');
	},	
	destroyed() {
		console.log('paragraph destroyed');
	},	
};
