import stealTools from "steal-tools";
stealTools.build({
    config: __dirname + './package.json!npm',
}, {
    dest: __dirname + '/dist'
});
