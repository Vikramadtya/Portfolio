import * as logger from "firebase-functions/logger";

export const notifySlack = (message: string) => {
    fetch(
        "https://hooks.slack.com/services/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",
        {
            method: "POST",
            body: JSON.stringify({
                text: message,
            }),
            headers: {
                "Content-type": "application/json",
            },
        }
    )
        .then((res) => res.json())
        .then((data) => {
            logger.info(data);
        });
};
