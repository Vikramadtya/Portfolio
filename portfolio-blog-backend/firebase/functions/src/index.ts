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
    {cors: [/firebase\.com$/, "flutter.com"]},
    (request, response) => {
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
