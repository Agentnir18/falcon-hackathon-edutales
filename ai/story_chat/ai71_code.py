from ai71 import AI71
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Define your API key
AI71_API_KEY = os.getenv("AI71_API_KEY")

# Initialize the AI71 client
client = AI71(AI71_API_KEY)

messages = [{"role": "system", "content": "You are a helpful assistant."}]

while True:
    content = input(f"User:")
    messages.append({"role": "user", "content": content})
    print(f"Falcon:", sep="", end="", flush=True)
    content = ""

    for chunk in client.chat.completions.create(
        messages=messages,
        model="tiiuae/falcon-180B-chat",
        stream=True,
    ):
        delta_content = chunk.choices[0].delta.content
        if delta_content:
            print(delta_content, sep="", end="", flush=True)
            content += delta_content
    
    messages.append({"role": "assistant", "content": content})
    print("\n")