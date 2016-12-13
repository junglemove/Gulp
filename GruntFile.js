/**
 * Created by Administrateur on 13/12/2016.
 */
module.exports = function(grunt){

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({

        clean: ["dist/js"],

        browserify:{
            dist:{
                src:"src/js/index.js",
                dest:"dist/js/index-browser.js"
            }
        },

        copy:{
            dist:{
                files:[{
                    expand: true,
                    cwd: "src",
                    src: "index.html",
                    dest: "dist"
                },{
                    expand: true,
                    cwd: "src",
                    src: "js/*.js",
                    dest: "dist"
                }]
            }
        },

        babel: {
            options: {
                sourceMap: true,
                presets: ["babel-preset-es2015"]
            },
            dist: {
                files: {
                    "dist/js/index-browser-es5.js": "dist/js/index-browser.js"
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    "dist/js/index-browser-min.js": ["dist/js/index-browser-es5.js"]
                }
            }
        }
    });

    grunt.registerTask('dist',[
        "clean",
        "copy:dist",
        "browserify:dist",
        "babel:dist",
        "uglify:dist"
    ]);


};