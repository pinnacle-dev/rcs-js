/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface RcsFunctionalities {
    /** Indicates if RCS is enabled. */
    isEnabled: boolean;
    /** Indicates if standalone rich cards are supported. */
    standaloneRichCard: boolean;
    /** Indicates if carousel rich cards are supported. */
    carouselRichCard: boolean;
    /** Indicates if buttons to create a calendar event are supported. */
    createCalendarEventAction: boolean;
    /** Indicates if dial buttons are supported. */
    dialAction: boolean;
    /** Indicates if open URL buttons are supported. */
    openUrlAction: boolean;
    /** Indicates if share location buttons are supported. */
    shareLocationAction: boolean;
    /** Indicates if view location buttons are supported. */
    viewLocationAction: boolean;
}
