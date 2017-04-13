import { dirname, resolve } from 'path';
import { existsSync } from 'fs';

export default function resolveId(file, url, opts) {
    if (opts.path) {
        if (Array.isArray(opts.path)) {
            let selected = opts.path[0];

            opts.path.forEach((path) => {
                const current = existsSync(resolve(selected, url));
                if (current) {
                    selected = current;
                }
            });

            return resolve(selected, url);
        }

        return resolve(opts.path, url);
    }
    if (file) {
        return resolve(dirname(file), url);
    }
    return resolve(url);
}
