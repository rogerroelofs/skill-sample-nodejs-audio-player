'use strict';

import { Request, IntentRequest, LaunchRequest } from 'ask-sdk-model';
let en = {
    card: {
        title: 'SightSeer Radio',
        text: 'Sightseer Radio, A reading service with news, books and dramas',
        image: {
            largeImageUrl: 'https://thesightseer.org/wp-content/uploads/2011/10/sightseer_logo.jpg',
            smallImageUrl: 'https://thesightseer.org/wp-content/uploads/2011/10/sightseer_logo.jpg'
        }
    },
    url: 'http://96.30.7.234:8220/;',
    startJingle: 'https://s3-eu-west-1.amazonaws.com/alexa.maxi80.com/assets/jingle.m4a'
};

let globalAudioData = {
        'en-US': en,
        'en-GB': en,
        'en-CA': en,
        'en-IN': en,
        'en-AU': en
};

export function audioData(request : Request) {
    let DEFAULT_LOCALE = 'en-US';
    var locale = (<IntentRequest | LaunchRequest>request).locale;
    if (locale === undefined) { 
        locale = DEFAULT_LOCALE
    };
    return globalAudioData[locale];    
}

