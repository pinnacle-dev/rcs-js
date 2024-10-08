/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Pinnacle from "../../api/index";
import * as core from "../../core";

export const CardStyleImageAlignment: core.serialization.Schema<
    serializers.CardStyleImageAlignment.Raw,
    Pinnacle.CardStyleImageAlignment
> = core.serialization.enum_(["right", "left"]);

export declare namespace CardStyleImageAlignment {
    type Raw = "right" | "left";
}
