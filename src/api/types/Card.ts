/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Pinnacle from "../index";

export interface Card {
    /** The title of the card */
    title: string;
    /** The subtitle of the card */
    subtitle?: string;
    /** The URL of the image to be displayed on the card */
    imageUrl: string;
    /** Array of buttons attached to the card. Maximum of 4 buttons. */
    buttons?: Pinnacle.Action[];
    /** The style of the card */
    cardStyle?: Pinnacle.CardStyle;
}
