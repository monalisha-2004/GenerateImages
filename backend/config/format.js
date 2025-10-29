import fs from "fs";

// Path to your Firebase service account JSON file
const filePath = "./firebaseServiceAccountKey.json";

try {
  const raw = fs.readFileSync(filePath, "utf-8");
  const json = JSON.parse(raw);

  const formatted = JSON.stringify(json)
    .replace(/\\n/g, "\\n") // keep existing escaped newlines
    .replace(/\n/g, "\\n"); // escape actual newlines

  console.log("✅ Copy this line into your .env file:\n");
  console.log(`FIREBASE_CREDENTIALS=${formatted}`);
} catch (err) {
  console.error("❌ Error reading or formatting JSON:", err.message);
}