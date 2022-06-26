# Tailwind with vanila js

## Tailwind Docs

Docs: https://tailwindcss.com/docs/installation
Tailwind styling classes: https://tailwindcss.com/docs/utility-first

## Unknown import warninng

You might run into the issue that you get warnings or unknown types when adding:

    //input.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

The questions asked in stackoverflow below suggested installing PostCss. This resolved the issue.

https://stackoverflow.com/a/62801203/7857134

## Last Important Thing : Add script to compile and output

The Docs do not mention this in the initial set up.
Tailwind needs to compile when changes are made because it reads from dist/output.css file.

see Net Ninja's demonstration: https://youtu.be/bxmDnn7lrnk?list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw&t=612
Your package.json should include a script to compile ie...

    //package.json
    {
        "name": "tailwind",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        ...

        "scripts": {
        ...
        "build-css": "tailwindcss build src/style/input.css -o dist/output.css",
        }
    }

## In order to see changes take effect,

    npm run build-css

}
