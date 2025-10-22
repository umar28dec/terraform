const translate = require("translate-google");

exports.handler = async (event) => {
  const { name = "World", lang = "en" } = JSON.parse(event.body || "{}");

  const message = `Hello, ${name}! Welcome to AWS Lambda.`;
  let translated = message;

  try {
    translated = await translate(message, { to: lang });
  } catch (error) {
    console.error("Translation failed:", error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ original: message, translated, language: lang }),
  };
};
