/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Pinnacle from "../../api/index";
import * as core from "../../core";

export const CardStyleOrientation: core.serialization.Schema<
    serializers.CardStyleOrientation.Raw,
    Pinnacle.CardStyleOrientation
> = core.serialization.enum_(["horizontal", "vertical"]);

export declare namespace CardStyleOrientation {
    type Raw = "horizontal" | "vertical";
}