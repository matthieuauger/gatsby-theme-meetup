import fetch from "node-fetch";

exports.handler = async (event, context) => {

  return fetch("https://onesignal.com/api/v1/notifications", {
    headers: {
      "Authorization": `Basic ${process.env.ONESIGNAL_REST_API_KEY}`,
      "Content-type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(
        {
            "app_id": process.env.ONESIGNAL_APP_ID,
            "contents": { 
              "en": "Holy Guacamole, new vesion of site has been deployed!",
              "fr": "Holy Guacamole, une nouvelle version vient d'être déployée !"
            },
            "included_segments": ["All"]
        }
    )
  })
    .then(() => ({
      statusCode: 200,
      body: `Notification has been sent`
    }))
    .catch(error => ({
      statusCode: 422,
      body: `Oops! Something went wrong. ${error}`
    }));
};
