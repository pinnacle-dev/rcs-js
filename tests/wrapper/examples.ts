// Example webhook requests that your server might receive from Pinnacle

// Example 1: SMS Content - Simple text message
export const smsExample = {
    headers: {
        'PINNACLE_API_KEY': 'test-api-key',
        'content-type': 'application/json'
    },
    body: {
        type: 'MESSAGE.RECEIVED',
        conversation: {
            id: 12345,
            from: '+14155551234',
            to: '+14155555678'
        },
        status: 'DELIVERED',
        direction: 'INBOUND',
        segments: 1,
        sentAt: '2024-01-15T10:30:00Z',
        deliveredAt: '2024-01-15T10:30:01Z',
        message: {
            id: 67890,
            content: {
                text: 'Hello, I need help with my order #12345'
            }
        }
    }
};

// Example 2: MMS Content - Message with media
export const mmsExample = {
    headers: {
        'x-api-key': 'your-webhook-api-key',
        'x-pinnacle-signature': 'sha256=def456...',
        'content-type': 'application/json'
    },
    body: {
        type: 'MESSAGE.RECEIVED',
        conversation: {
            id: 12346,
            from: '+14155551235',
            to: '+14155555678'
        },
        status: 'DELIVERED',
        direction: 'INBOUND',
        segments: 2,
        sentAt: '2024-01-15T11:00:00Z',
        deliveredAt: '2024-01-15T11:00:02Z',
        message: {
            id: 67891,
            content: {
                mediaUrls: [
                    'https://example.com/image1.jpg',
                    'https://example.com/image2.png'
                ],
                text: 'Here are the photos of the damaged product'
            }
        }
    }
};

// Example 3: RCS Content - Rich content with text and quick replies
export const rcsExample = {
    headers: {
        'x-api-key': 'your-webhook-api-key',
        'x-pinnacle-signature': 'sha256=ghi789...',
        'content-type': 'application/json'
    },
    body: {
        type: 'MESSAGE.RECEIVED',
        conversation: {
            id: 12347,
            from: '+14155551236',
            to: '+14155555678'
        },
        status: 'DELIVERED',
        direction: 'INBOUND',
        segments: 1,
        sentAt: '2024-01-15T12:00:00Z',
        deliveredAt: '2024-01-15T12:00:01Z',
        message: {
            id: 67892,
            content: {
                text: 'I would like to schedule an appointment',
                quickReplies: [
                    {
                        text: 'Schedule Now',
                        payload: 'SCHEDULE_APPOINTMENT'
                    },
                    {
                        text: 'View Available Times',
                        payload: 'VIEW_TIMES'
                    }
                ]
            }
        }
    }
};

// Example 4: InboundButton - User clicked a button from a previous message
export const inboundButtonExample = {
    headers: {
        'PINNACLE_API_KEY': 'your-webhook-api-key',
        'PINNACLE_SIGNING_SECRET': 'random_secret',
        'content-type': 'application/json'
    },
    body: {
        type: 'MESSAGE.RECEIVED',
        conversation: {
            id: 12348,
            from: '+14155551237',
            to: '+14155555678'
        },
        status: 'DELIVERED',
        direction: 'INBOUND',
        segments: 1,
        sentAt: '2024-01-15T13:00:00Z',
        deliveredAt: '2024-01-15T13:00:01Z',
        message: {
            id: 67893,
            content: {
                button: 'Buy Now',
                data: {
                    metadata: 'customer_purchase',
                    payload: JSON.stringify({
                        customerId: 'CUST-789012',
                        productId: 'PROD-456789',
                        productName: 'Premium Widget',
                        quantity: 2,
                        price: 49.99,
                        timestamp: new Date('2024-01-15T13:00:00Z'),
                        sessionId: 'SESSION-345678',
                        paymentMethod: 'CARD',
                        currency: 'USD',
                        discountCode: 'SAVE10'
                    })
                }
            }
        }
    }
};

// Example 5: Invalid message examples for testing validation
export const invalidExamples = {
    // Missing required fields
    missingType: {
        headers: { 'PINNACLE_API_KEY': 'test-key' },
        body: {
            conversation: { id: 123, from: '+1234567890', to: '+0987654321' },
            status: 'DELIVERED',
            direction: 'INBOUND',
            segments: 1,
            sentAt: '2024-01-15T10:00:00Z',
            message: { id: 456, content: { text: 'test' } }
        }
    },

    // Invalid enum values
    invalidStatus: {
        headers: { 'PINNACLE_API_KEY': 'test-key' },
        body: {
            type: 'MESSAGE.RECEIVED',
            conversation: { id: 123, from: '+1234567890', to: '+0987654321' },
            status: 'INVALID_STATUS',
            direction: 'INBOUND',
            segments: 1,
            sentAt: '2024-01-15T10:00:00Z',
            message: { id: 456, content: { text: 'test' } }
        }
    },

    // Invalid type values
    wrongTypeFormat: {
        headers: { 'PINNACLE_API_KEY': 'test-key' },
        body: {
            type: 'MESSAGE_RECEIVED', // Should be MESSAGE.RECEIVED
            conversation: { id: 123, from: '+1234567890', to: '+0987654321' },
            status: 'DELIVERED',
            direction: 'INBOUND',
            segments: 1,
            sentAt: '2024-01-15T10:00:00Z',
            message: { id: 456, content: { text: 'test' } }
        }
    },

    // Invalid direction
    invalidDirection: {
        headers: { 'PINNACLE_API_KEY': 'test-key' },
        body: {
            type: 'MESSAGE.STATUS',
            conversation: { id: 123, from: '+1234567890', to: '+0987654321' },
            status: 'SENT',
            direction: 'BIDIRECTIONAL',
            segments: 1,
            sentAt: '2024-01-15T10:00:00Z',
            message: { id: 456, content: { text: 'test' } }
        }
    },

    // Non-integer IDs
    floatConversationId: {
        headers: { 'PINNACLE_API_KEY': 'test-key' },
        body: {
            type: 'MESSAGE.RECEIVED',
            conversation: { id: 123.45, from: '+1234567890', to: '+0987654321' },
            status: 'DELIVERED',
            direction: 'INBOUND',
            segments: 1,
            sentAt: '2024-01-15T10:00:00Z',
            message: { id: 456, content: { text: 'test' } }
        }
    },

    // Negative segments
    negativeSegments: {
        headers: { 'PINNACLE_API_KEY': 'test-key' },
        body: {
            type: 'MESSAGE.RECEIVED',
            conversation: { id: 123, from: '+1234567890', to: '+0987654321' },
            status: 'DELIVERED',
            direction: 'INBOUND',
            segments: -1,
            sentAt: '2024-01-15T10:00:00Z',
            message: { id: 456, content: { text: 'test' } }
        }
    },

    // Invalid ISO date format
    badDateFormat: {
        headers: { 'PINNACLE_API_KEY': 'test-key' },
        body: {
            type: 'MESSAGE.RECEIVED',
            conversation: { id: 123, from: '+1234567890', to: '+0987654321' },
            status: 'DELIVERED',
            direction: 'INBOUND',
            segments: 1,
            sentAt: '2024-01-15 10:00:00', // Missing T and timezone
            message: { id: 456, content: { text: 'test' } }
        }
    },

    // Empty strings
    emptyFrom: {
        headers: { 'PINNACLE_API_KEY': 'test-key' },
        body: {
            type: 'MESSAGE.RECEIVED',
            conversation: { id: 123, from: '', to: '+0987654321' },
            status: 'DELIVERED',
            direction: 'INBOUND',
            segments: 1,
            sentAt: '2024-01-15T10:00:00Z',
            message: { id: 456, content: { text: 'test' } }
        }
    },

    // Missing nested required fields
    missingMessageContent: {
        headers: { 'PINNACLE_API_KEY': 'test-key' },
        body: {
            type: 'MESSAGE.RECEIVED',
            conversation: { id: 123, from: '+1234567890', to: '+0987654321' },
            status: 'DELIVERED',
            direction: 'INBOUND',
            segments: 1,
            sentAt: '2024-01-15T10:00:00Z',
            message: { id: 456 } // Missing content
        }
    },

    // Null/undefined objects
    nullConversation: {
        headers: { 'PINNACLE_API_KEY': 'test-key' },
        body: {
            type: 'MESSAGE.RECEIVED',
            conversation: null,
            status: 'DELIVERED',
            direction: 'INBOUND',
            segments: 1,
            sentAt: '2024-01-15T10:00:00Z',
            message: { id: 456, content: { text: 'test' } }
        }
    },

    // Array instead of object
    arrayMessage: {
        headers: { 'PINNACLE_API_KEY': 'test-key' },
        body: {
            type: 'MESSAGE.RECEIVED',
            conversation: { id: 123, from: '+1234567890', to: '+0987654321' },
            status: 'DELIVERED',
            direction: 'INBOUND',
            segments: 1,
            sentAt: '2024-01-15T10:00:00Z',
            message: [{ id: 456, content: { text: 'test' } }]
        }
    },

    // Wrong data types
    stringSegments: {
        headers: { 'PINNACLE_API_KEY': 'test-key' },
        body: {
            type: 'MESSAGE.RECEIVED',
            conversation: { id: 123, from: '+1234567890', to: '+0987654321' },
            status: 'DELIVERED',
            direction: 'INBOUND',
            segments: '1', // Should be number
            sentAt: '2024-01-15T10:00:00Z',
            message: { id: 456, content: { text: 'test' } }
        }
    },

    // Zero ID (should be positive)
    zeroMessageId: {
        headers: { 'PINNACLE_API_KEY': 'test-key' },
        body: {
            type: 'MESSAGE.RECEIVED',
            conversation: { id: 123, from: '+1234567890', to: '+0987654321' },
            status: 'DELIVERED',
            direction: 'INBOUND',
            segments: 1,
            sentAt: '2024-01-15T10:00:00Z',
            message: { id: 0, content: { text: 'test' } }
        }
    },

    // Invalid deliveredAt format when present
    badDeliveredAt: {
        headers: { 'PINNACLE_API_KEY': 'test-key' },
        body: {
            type: 'MESSAGE.RECEIVED',
            conversation: { id: 123, from: '+1234567890', to: '+0987654321' },
            status: 'DELIVERED',
            direction: 'INBOUND',
            segments: 1,
            sentAt: '2024-01-15T10:00:00Z',
            deliveredAt: 'not-a-date',
            message: { id: 456, content: { text: 'test' } }
        }
    }
};