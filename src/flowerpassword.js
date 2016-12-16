'use strict';

const MD5 = require('blueimp-md5');

function fpCode(password, key, length) {
    let hmd5, rule, source, str, code32, code01;
    length = length || 16;

    if (!password || !key || (length < 2) || (length > 32)) {
        return null;
    }

    hmd5 = MD5(password, key);
    rule = MD5(hmd5, 'kise').split('');
    source = MD5(hmd5, 'snow').split('');
    str = 'sunlovesnow1990090127xykab';

    for (let i = 0; i < 32; i++) {
        if (isNaN(source[i])) {
            if (str.search(rule[i]) > -1) {
                source[i] = source[i].toUpperCase();
            }
        }
    }

    code32 = source.join('');
    code01 = code32.slice(0, 1);
    return (isNaN(code01) ? code01 : 'K') + code32.slice(1, length);
}

exports = module.exports = fpCode;
