import React from 'react'
import logo from '../../public/profile.jpg'
import Video from './Video';

function Profile() {
    // Local user data inside the Profile component
    const user = {
        name: 'Chinmay Shukla',
        avatar: logo,
        bio: 'Content Creator | Video Enthusiast',
        videos: [
            {
                author: {
                    avatar: [
                        {
                            height: 68,
                            url:
                                logo,
                            width: 68
                        }
                    ],
                    badges: [{ text: 'Verified', type: 'VERIFIED_CHANNEL' }],
                    title: 'Chinmay Shukla'
                },
                isLiveNow: false,
                lengthSeconds: 286,
                publishedTimeText: '4 hours ago',
                stats: { views: 59495 },
                thumbnails: [
                    {
                        height: 94,
                        url:
                            'https://i.ytimg.com/vi/J6_CKd3gB28/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBwZHY1y611Cb3TVJbWVPOpnYCWpQ',
                        width: 168
                    },
                    {
                        height: 188,
                        url:
                            'https://i.ytimg.com/vi/J6_CKd3gB28/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCGrVtUxWKh1wc4c56LDU1oz3bbw',
                        width: 336
                    }
                ],
                title: 'Israel targets Lebanon bank linked to Hezbollah | BBC News',
                videoId: 'J6_CKd3gB28'
            },
            {

                author: {

                    avatar: [

                        {

                            height: 68,

                            url:
                                logo,

                            width: 68

                        }

                    ],

                    badges: [{ text: 'Verified', type: 'VERIFIED_CHANNEL' }],
                    title: 'Chinmay Shukla'

                },

                isLiveNow: false,

                lengthSeconds: 284,

                publishedTimeText: '1 hour ago',

                stats: { views: 5295 },

                thumbnails: [

                    {

                        height: 94,

                        url:

                            'https://i.ytimg.com/vi/TY6YYe2zmTs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDq97A9QeBdS_PJNzx0P_fZ8yZz4Q',

                        width: 168

                    },

                    {

                        height: 188,

                        url:

                            'https://i.ytimg.com/vi/TY6YYe2zmTs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpudxJjO8TuEHvPvkYOdYmjnucxQ',

                        width: 336

                    }

                ],

                title:

                    'IDF spokesperson Daniel Hagari deliver a statement after Druze Senior officer killed in Gaza',

                videoId: 'TY6YYe2zmTs'

            },
            {

                author: {

                    avatar: [

                        {

                            height: 68,

                            url:
                                logo,

                            width: 68

                        }

                    ],

                    badges: [{ text: 'Verified', type: 'VERIFIED_CHANNEL' }],
                    title: 'Chinmay Shukla'

                },

                isLiveNow: false,

                lengthSeconds: 500,

                publishedTimeText: '2 days ago',

                stats: { views: 399142 },

                thumbnails: [

                    {

                        height: 94,

                        url:

                            'https://i.ytimg.com/vi/S3Uq8_EG8g0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCOwD7l6AY8gIykorUE9seqFnmy-Q',

                        width: 168

                    },

                    {

                        height: 188,

                        url:

                            'https://i.ytimg.com/vi/S3Uq8_EG8g0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmTeCX6rJ3ATVlH7v-Nk78V7DDaA',

                        width: 336

                    }

                ],

                title:

                    'Inexperienced North Korean troops no solution to Putin\'s military \'blunders\' | Michael Clarke',

                videoId: 'S3Uq8_EG8g0'

            }
        ]
    };

    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-20">
            {/* Profile Header */}
            <div className="flex flex-col items-center mb-8">
                <img
                    src={user.avatar}
                    alt="User Avatar"
                    className="w-36 h-36 rounded-full object-cover"
                />
                <h1 className="mt-4 text-3xl font-bold text-gray-800">{user.name}</h1>
                <p className="text-gray-600">{user.bio}</p>
            </div>

            {/* Uploaded Videos */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Uploaded Videos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {user.videos.map((video) => (
                        <Video key={user?.videos.id} video={video} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Profile;
