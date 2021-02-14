const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
            from: 'node_modules/adaptivecards-designer/dist/containers/*',
            to: 'containers/',
            flatten: true
        }]}),
        new MonacoWebpackPlugin({
            languages: ['json']
        })
    ]

};