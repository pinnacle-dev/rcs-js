/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";
import * as Pinnacle from "../index";

export class NotFoundError extends errors.PinnacleError {
    constructor(body: Pinnacle.NotFoundErrorBody) {
        super({
            message: "NotFoundError",
            statusCode: 404,
            body: body,
        });
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
