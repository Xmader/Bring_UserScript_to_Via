const gulp = require("gulp")
const rollup = require("rollup")
const babel = require("gulp-babel")
const rename = require("gulp-rename")
const { spawn } = require("child_process")
const del = require("del")

const metainfo = require("./src/metainfo.js")

const main_build_options = {
    file: "dist/Bring_UserScript_to_ViaBrowser.js",
    format: "iife",
    // sourcemap: true,
    banner: metainfo
}

gulp.task("build:main", async function () {
    const bundle = await rollup.rollup({
        input: "main.js"
    })

    await bundle.write(main_build_options)
})

gulp.task("build:main:babel", () => {
    return gulp.src(["dist/Bring_UserScript_to_ViaBrowser.js"])
        .pipe(babel())
        .pipe(rename({ extname: ".BabelCompiled.js" }))
        .pipe(gulp.dest("dist"))
})

gulp.task("build:via_script.bundle.js", async function () {
    const bundle = await rollup.rollup({
        input: "src/via_script.js"
    })

    await bundle.write({
        file: "dist/via_script.bundle.js",
        format: "cjs"
    })
})

gulp.task("build:installer", ["build:via_script.bundle.js", "build:main"], async function () {
    await new Promise((resolve, reject) => {
        spawn("node", ["./dev/create_installer.js"], { shell: true })
            .once("close", err => {
                if (err) return reject(err)
                resolve()
            })
    })

    await del("dist/via_script.bundle.js")

})

gulp.task("clean", function (cb) {
    del(["./dist"], cb)
})

gulp.task("build", ["build:main", "build:main:babel", "build:installer"])

gulp.task("default", ["build"])
