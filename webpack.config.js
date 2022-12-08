const path = require("path");
const mode = process.env.NODE_ENV || "production";

module.exports = {
     mode: mode,
     entry: "./src/index.ts",

     target: "node",
     output: {
          path: path.resolve(__dirname, "dist"),
          filename: "index.js",
     },
     resolve: {
          extensions: [".ts", ".js"],
     },
     module: {
          rules: [
               {
                    test: /\.ts$/,

                    use: ["ts-loader"],
               },
          ],
     },



     externals: {
          sqlite3: "commonjs sqlite3",
     },
};
