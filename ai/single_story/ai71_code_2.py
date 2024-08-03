from ai71 import AI71
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Define your API key
AI71_API_KEY = os.getenv("AI71_API_KEY")

# Initialize the AI71 client
client = AI71(AI71_API_KEY)

messages = [{"role": "system", "content": "You are an educational storyteller who creates engaging and informative stories to help users understand scientific concepts."}]


content = input(f"User:")
content_format =f"""
Generate a scientific fictional story that explains the following content. The story should have some characters that have dialogue between them. The story must be family-friendly and use simple, everyday words for better understanding.
Don't use cliches or stereotypes. The story should be original and creative.

{content}

Please create a story where two children, Leo and Mia, visit their Uncle Max's lab and learn about the above given content through a series of explanations and experiments. The story should have dialogue between the characters and explain the scientific concepts in a way that is easy to understand.
""" 
messages.append({
    "role": "user", 
    "content": content_format
    })
print(f"Falcon:", sep="", end="", flush=True)

for chunk in client.chat.completions.create(
    messages=messages,
    model="tiiuae/falcon-180B-chat",
    stream=True,
):
    delta_content = chunk.choices[0].delta.content
    if delta_content:
        print(delta_content, sep="", end="", flush=True)

print("\n")