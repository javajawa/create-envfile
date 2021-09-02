// SPDX-FileCopyrightText: 2020 Benedict Harcourt
//
// SPDX-License-Identifier: BSD-2-Clause

const core = require("@actions/core");
const path = require("path");
const fs   = require("fs");

const PREFIX = "INPUT_ENVKEY_";

async function main() {
    const file_name = core.getInput("file_name");
    const workspace = process.env.GITHUB_WORKSPACE;
    const env_path = path.join(workspace, file_name);

    core.info("Writing to " + env_path);
    const stream = fs.createWriteStream(env_path);

    stream.on("finish", () => core.info(file_name + " written"));

    Object.keys(process.env)
        .filter( k => process.env.hasOwnProperty(k) )
        .filter( k => k.startsWith(PREFIX) )
        .forEach( k => stream.write(`${k.substr(PREFIX.length)}=${process.env[k]}\n`))

    stream.end();
}

main().catch(error => core.setFailed(error.message));

// vim: nospell ts=4 expandtab
