module.exports = function(grunt) {
	'use-strict';

	require("load-grunt-tasks")(grunt);
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		clean: {
			clean_dist: {
				src: ['dist/css/*'],
				filter: 'isFile',
			},
		},
		sass: {
			dist: {
				options: {
					style: "compressed", /* expended, compact, nested */
					precision: 7
				},
				files: {
					"dist/css/forms.css": "src/scss/forms.scss"
				},
			},
		},
		watch: {
			options: {
				dateFormat: function(time) {
					grunt.log.writeln("This watch finished in " + time + "ms at " + (new Date()).toString());
					grunt.log.writeln("Waiting for more changes...");
				}
			},
			watch_scss: {
				files: ["src/scss/*.scss"],
				tasks: ["sass:dist"],
				options: {
					spawn: false,
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("remove", ["clean:clean_dist"]);
	grunt.registerTask("default", ["watch"]);
}
