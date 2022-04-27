import webpack from "webpack";
import path from "path";
import { fileURLToPath } from "url";
import RemovePlugin from "remove-files-webpack-plugin";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const buildPath = path.resolve(__dirname, "dist")

const server = {
    entry: "./src/server/startup.ts",
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: [ "ts-loader" ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new RemovePlugin({
            before: {
                include: [
                    path.resolve(buildPath, "server")
                ]
            },
            watch: {
                include: [
                    path.resolve(buildPath, "server")
                ]
            }
        })
    ],
    optimization: {
        minimize: true
    },
    resolve: {
        extensions: [".ts", ".js"],
        preferRelative: true
    },
    output: {
        filename: "server.js",
        path: path.resolve(buildPath, "server")
    }
}

const client = {
    entry: "./src/client/startup.ts",
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: [ "ts-loader" ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new RemovePlugin({
            before: {
                include: [
                    path.resolve(buildPath, "client")
                ]
            },
            watch: {
                include: [
                    path.resolve(buildPath, "client")
                ]
            }
        })
    ],
    optimization: {
        minimize: true
    },
    resolve: {
        extensions: [".ts", ".js"],
        preferRelative: true
    },
    output: {
        filename: "client.js",
        path: path.resolve(buildPath, "client")
    }
}

export default [ server, client ]