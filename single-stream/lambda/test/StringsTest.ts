'use strict';

import 'mocha';
import { expect } from 'chai';

import { LaunchRequestBuilder } from './utils/LaunchRequestBuilder';
import { i18n } from '../src/utils/I18N';

describe('Strings', () => {

    const request_en_GB = new LaunchRequestBuilder()
        .withLocale('en-GB')
        .withRequestId('amzn1.echo-api.request.123')
        .withTimestamp('2017-03-04T19:02:37Z')
        .build();

    // before( () => {

    // });

    it('gives an english string back', () => {
        const s = i18n.S(request_en_GB, "TEST");
        expect(s).to.equal("test english");
    });

    it('gives an english string back, with string parameters', () => {
        const s = i18n.S(request_en_GB, "TEST_PARAMS", "param1", "param2");
        expect(s).to.equal("test with parameters param1 and param2");
    });

    it('gives an english string back, with mixed parameters', () => {
        const s = i18n.S(request_en_GB, "TEST_PARAMS", "param1", 2);
        expect(s).to.equal("test with parameters param1 and 2");
    });

});
