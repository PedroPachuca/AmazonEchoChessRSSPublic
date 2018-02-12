'use strict';

var config = {
    // TODO Add Application ID
    appId : 'appid',
    // TODO Add an appropriate welcome message.
    welcome_message : 'Welcome to Chess News',

    number_feeds_per_prompt : 3,
    speak_only_feed_title : true,
    display_only_title_in_card : true,

    // TODO Add the category name (to feed name) and the corresponding URL
    feeds : {
		'Chessdom' : 'http://www.chessdom.com/feed/',
        'The Week In Chess' : 'http://theweekinchess.com/twic-rss-feed',
        'Chess Banter General' : 'http://www.chessbanter.com/external.php?forumids=6',
		'Chess Daily News': 'https://chessdailynews.com/feed/',
		'Chess Sub-Reddit': 'https://www.reddit.com/r/chess/.rss'
    },

    speech_style_for_numbering_feeds : 'Item',

    // TODO Add the s3 Bucket Name, dynamoDB Table Name and Region
    s3BucketName : 'mychessrssbucket',
    dynamoDBTableName : 'MyChessRSSSkillTable',
    dynamoDBRegion : 'us-east-1'
};

module.exports = config;