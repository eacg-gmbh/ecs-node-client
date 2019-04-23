/* eslint-disable */
/**********************************************************
 * Copyright (c) 2019. Enterprise Architecture Group, EACG
 *
 * SPDX-License-Identifier:	MIT
 *********************************************************/
/* eslint-enable */

const debuglog = (require('debuglog'))('ecs-repo-scanner');

debuglog('invoking ecs-repo-scanner: ');

exports.RepoScanner = RepoScanner;

function RepoScanner(options) {
    this.options = options;
    this.name = 'ecs-repo-scanner';
}

RepoScanner.prototype.scan = function scan() {
    debuglog('invoking ecs-repo-scanner: ');
    return 'master2';
};
