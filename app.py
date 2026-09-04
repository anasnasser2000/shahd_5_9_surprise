from flask import Flask, render_template, request, jsonify
import urllib.request
import urllib.parse

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

# ===== TELEGRAM SERVER =====

TELEGRAM_BOT_TOKEN = '7383190633:AAEwlyKHIIfhS-j3gsURcQtACmkGDqAboiQ'
TELEGRAM_CHAT_ID = '6519877029'

def send_telegram(message):
    try:
        url = "https://api.telegram.org/bot" + TELEGRAM_BOT_TOKEN + "/sendMessage"
        data = urllib.parse.urlencode({
            "chat_id": TELEGRAM_CHAT_ID,
            "text": message
        }).encode()

        urllib.request.urlopen(
            urllib.request.Request(url, data=data),
            timeout=10
        )
    except Exception as e:
        print("Telegram error:", e)

@app.route("/telegram", methods=["POST"])
def telegram_event():
    data = request.get_json(silent=True) or {}
    message = str(data.get("message", "")).strip()

    if message:
        send_telegram(message)

    return jsonify({"ok": True})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
