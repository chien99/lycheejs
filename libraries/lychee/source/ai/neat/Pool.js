
lychee.define('lychee.ai.neat.Pool').exports(function(lychee, global, attachments) {

	// XXX: Only a Cache Struct
	const _Species = function() {

		this.topFitness = 0;
		this.staleness = 0;
		this.genomes = [];
		this.averageFitness = 0;

	};

	let Composite = function(data) {

		this.species = [];
		this.generation = 0;
		this.innovation = 1000000;
		this.currentSpecies = 1;
		this.currentGenome = 1;
		this.currentFrame = 0;
		this.maxFitness = 0;

	};


	Composite.prototype = {
	};


	return Composite;

});

