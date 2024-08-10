/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import {notifySlack} from "./services";
import {Message} from "./message";

export const sendMessage = onRequest(
    {cors: [/vikramaditya-singh\.in$/, "vikramaditya-singh.in"]},
    (request, response) => {
        // send response back if not request is POST
        if (request.method != "POST") {
            response.status(400).send({
                message: "only post request is supported",
                timestamp: Date.now(),
            });
            return;
        }

        const body: Message = request.body;
        logger.info("received message", body);

        // notify the slack
        notifySlack(JSON.stringify(body));

        // send response back
        response.status(200).send({
            ...body,
            timestamp: Date.now(),
        });
    }
);
