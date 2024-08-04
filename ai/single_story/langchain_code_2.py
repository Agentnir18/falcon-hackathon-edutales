from langchain.chat_models import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Define your API key
AI71_API_KEY = os.getenv("AI71_API_KEY")

AI71_BASE_URL = "https://api.ai71.ai/v1/"

# Initialize ChatOpenAI with additional parameters
chat = ChatOpenAI(
    model="tiiuae/falcon-180B-chat",
    api_key=AI71_API_KEY,
    base_url=AI71_BASE_URL,
    streaming=True,
    temperature=0.7,  
    max_tokens=512, 
    top_p=0.9,       
    frequency_penalty=0.5,  
    presence_penalty=0.6   
)

# Simple invocation with parameters
response = chat.invoke(
    [
        SystemMessage(content="You are a helpful assistant"),
        HumanMessage(content="Hello!"),
    ]
)
print(response)

# Streaming invocation with parameters
for chunk in chat.stream("Write a song about a ginger-colored fish on the moon."):
    print(chunk.content, end="", flush=True)
