# Social Media and Big Data

## ✨ Contributors ✨

<table align="center">
    <tbody>
        <tr>
            <td width="25%" align="center" valign="top">
                <a href="https://github.com/fedyna-k">
                    <img src="https://avatars.githubusercontent.com/u/40734890" width="100px" style="clip-path: circle(50%)"> <br/>
                    <b>Kevin FEDYNA</b>
                </a> <br/>
                <a title="Code & Documentation" href="https://github.com/fedyna-k/media-sociaux-big-data/commits?author=fedyna-k">💻</a>
            </td>
    </tbody>
</table>

## ⚙️ Building the project ⚙️

### 🏗️ Prerequisites

Make sure to have the following packages on your computer:
- `node`: The JavaScript server runtime.
- `npm`: The Node Packet Manager.
- `python3`: A Python 3.X version.
- `venv`: The Python virtual environement generator.

> Please note that this project is made for UNIX environments, you'll need to change the following line for Windows :
> ```
> [package.json - l.7]
> - "postinstall": "... && source .venv/bin/activate     && ...",
> + "postinstall": "... && source .venv/bin/activate.ps1 && ...",
>                                                   ^^^^
> ```

### 📂 Dependencies

Now that everything is set up, `npm` is able to handle all packages (even the python ones). 

To install all dependencies, simply run the following command at project's root.

```sh
npm install
```

### 🔑 Providing your API key

When all your dependencies are set, you can run the following script:
```sh
npm run prepareKey
```
It will create the ``credentials.json`` file that will contain your Youtube API key.

You will also have the file path in order to provide your key (visible in GCP API console).

### 👷 Building the project

The project is no monolith, so you can build different parts quite easily.

To build **all the project**, run the following command:
```sh
npm run build
```

For specific parts:
- To build only the TypeScript part: ``npx tsc``.
- To build only the Python part: ``npm run copyPython``.
- To update the static files: ``npm run copyPublic``.
- To update the credentials (need TS server restart): ``npm run copyCredentials``.

## 🏃 Running the project 🏃

Change directory to the root directory of this project if not already done.
Then run the following command :
```sh
npm start
```
It will start both the TypeScript and the Python server.

## 📖 License 📖

[GNU General Public License v3.0](LICENSE)
