from langchain_community.chat_models import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Define your API key
AI71_API_KEY = os.getenv("AI71_API_KEY")

AI71_BASE_URL = "https://api.ai71.ai/v1/"

def analyze_content_langchain(content):
    chat = ChatOpenAI(
        model="tiiuae/falcon-180B-chat",
        api_key=AI71_API_KEY,
        base_url=AI71_BASE_URL,
        streaming=True,
    )

    prompt_summarizer = f"""
    You are an expert content analyzer. Given the following content, analyze it and provide a detailed summary of the key points. 
    
    Content:
    {content}
    
    The summary should be concise and informative, highlighting the main ideas and key takeaways. The content may contain scientific concepts, technical information, or general knowledge. Your analysis should be clear, accurate, and well-structured. Avoid unnecessary details and focus on the most important aspects of the content.

    If the content is incomprehensible say so in the response. 

    Your response should strictly follow the format below:
    [
        Understandable: "Yes/No",
        Summary: "Brief summary of the content",
        Key Points: ["Point 1", "Point 2", ...],
    ]

    The "Understandable" field should indicate whether the content is understandable or not. 
    If the content is not understandable, return "No" for the "Understandable" field and leave the "Summary" and "Key Points" fields empty.
    If the content is random letters or gibberish, return "No" for the "Understandable" field and leave the "Summary" and "Key Points" fields empty.
    If the content is understandable, provide a brief summary and list the key points.
    The "Summary" field should provide a concise overview of the content. The "Key Points" field should list the main ideas and key takeaways from the content.

    Your response should not contain any additional information or text. Only provide the required fields in the specified format.

    """

    prompt = f"""
You are an expert analyzer. Given the content below, analyze it and provide a list of key points. \n
The content may contain scientific concepts, technical information, or general knowledge. \n

Content:
{content}

1. Give me answer based on current content only.\n
2. Forget all the past answers and conversations.\n
3. The explanation should be comprehensive and informative.\n 
4. The key points should be clear and well-structured.\n
5. The key points should cover all the content provided.\n
6. Do not miss any details in the content.\n
7. If the content is incomprehensible, say so in the response.\n

Your response should strictly follow the format below:\n
[
    Understandable: "Yes/No",
    Key Points: ["Point 1", "Point 2", ...],
]

1. The "Understandable" field should indicate whether the content is understandable or not.\n
2. If the content is not understandable, return "No" for the "Understandable" field and leave the "Key Points" fields empty.\n
3. If the content is random letters or gibberish, return "No" for the "Understandable" field and leave the "Key Points" fields empty.\n
4. If the content is understandable, provide the list of key points.\n
5. The "Key Points" field should list all the concepts in the content.\n

Do not include any additional description in your response. Only provide the required fields in the specified format.\n   
"""

    for chunk in chat.stream(prompt):
        print(chunk.content, end="", flush=True)




content = input("Enter the content: ")
analyze_content_langchain(content)