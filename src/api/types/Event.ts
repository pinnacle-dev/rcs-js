/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface Event {
    /** The title for the event action. Maximum length is 25 characters. */
    title: string;
    /** The type of message being sent */
    actionType: "calendar";
    /** The start time for the event. */
    startTime: Date;
    /** The end time for the event. */
    endTime: Date;
    /** The title of the event. */
    eventTitle: string;
    /** The description of the event */
    eventDescription?: string;
}
